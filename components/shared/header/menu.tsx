"use client";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
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

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1 uppercase">
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart />
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/sign-in">
            <UserIcon />
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="bg-white flex flex-col items-start">
            <SheetHeader className="uppercase">
              <SheetTitle></SheetTitle>
              <Button asChild variant="ghost">
                <Link href="/cart">
                  <ShoppingCart /> Bag
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/sign-in">
                  <UserIcon /> Login
                </Link>
              </Button>
              <SheetDescription></SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
