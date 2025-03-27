import { AlignJustify, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./user-button";

const SHEET_SIDES = ["left"] as const;

type Menu = (typeof SHEET_SIDES)[number];

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="w-full flex gap-1 uppercase">
        <UserButton />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart />
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        {SHEET_SIDES.map((left) => (
          <Sheet key={left}>
            <SheetTrigger className="align-middle">
              <AlignJustify />
            </SheetTrigger>
            <SheetContent
              side={left}
              className="w-full bg-white flex flex-col items-start"
            >
              <SheetHeader className="uppercase">
                <SheetTitle></SheetTitle>
                <Button asChild variant="ghost">
                  <Link href="/cart">
                    <ShoppingCart /> Bag
                  </Link>
                </Button>
                <UserButton />
                <SheetDescription></SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
