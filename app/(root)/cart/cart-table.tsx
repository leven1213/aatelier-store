"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTransition } from "react";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { Loader, Minus, Plus } from "lucide-react";
import { Cart } from "@/types";
import { Link } from "@/components/ui/link";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const CartTable = ({ cart }: { cart?: Cart }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="lg:mx-[8rem]">
      <h1 className="py-4 h3-bold uppercase">Shopping Bag</h1>
      {!cart || cart.items.length === 0 ? (
        <div>
          Cart is empty. <Link variant="strong" href="/">Go Shopping</Link>
        </div>
      ) : (
        <div className="grid w-full md:grid-cols-11 md:gap-5 overflow-visible">
          <div className="overflow-x-auto col-span-5 md:col-span-7 flex-start">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.items.map((item) => (
                  <TableRow key={item.slug}>
                    <TableCell>
                      <div className="relative w-[60px] h-[120px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </TableCell>
                    <TableCell className="flex-center gap-2">
                      <Button
                        disabled={isPending}
                        variant="outline"
                        type="button"
                        onClick={() =>
                          startTransition(async () => {
                            const res = await removeItemFromCart(
                              item.productId
                            );

                            if (!res.success) {
                              toast.error(res.message);
                              return;
                            }
                          })
                        }
                      >
                        {isPending ? (
                          <Loader className="w-4 animate-spin" />
                        ) : (
                          <Minus className="w-4 h-4" />
                        )}
                      </Button>
                      <span>{item.qty}</span>
                      <Button
                        disabled={isPending}
                        variant="outline"
                        type="button"
                        onClick={() =>
                          startTransition(async () => {
                            const res = await addItemToCart(item);

                            if (!res.success) {
                              toast.error(res.message);
                              return;
                            }
                          })
                        }
                      >
                        {isPending ? (
                          <Loader className="w-4 animate-spin" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </Button>
                    </TableCell>
                    <TableCell className="text-right">${item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={1}></TableCell>
                  <TableCell>
                    <div>Total</div>
                  </TableCell>
                  <TableCell>
                    <p className="text-center">
                      {cart.items.reduce((a, c) => a + c.qty, 0)} items
                    </p>
                  </TableCell>
                  <TableCell>
                    <p className="font-bold text-right">
                      {formatCurrency(cart.itemsPrice)}
                    </p>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>

          <Card className="col-span-5 md:col-span-4">
            <CardContent className="md:px-4 gap-4">
              <div className="">
                <p></p>
              <Button
                className="w-full "
                disabled={isPending}
                onClick={() =>
                  startTransition(() => router.push("/shipping-address"))
                }
              >
                {isPending ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  " Proceed to Checkout "
                )}
              </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CartTable;
