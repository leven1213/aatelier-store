import { AlignJustify, ShoppingBag } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import UserButton from "./user-button";

const SHEET_SIDES = ["left"] as const;

const Menu = () => {
  return (
    <div className="flex items-center justify-between">
      <nav className="w-full flex items-center space-x-3 uppercase pr-6 md:pr-0">
        <UserButton />

        {/* Shopping bag button */}
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingBag />
          </Link>
        </Button>
      </nav>

      {/* Mobile menu */}
      <nav className="flex items-center md:hidden">
        {SHEET_SIDES.map((left) => (
          <Sheet key={left}>
            <SheetTrigger className="align-middle">
              <AlignJustify />
            </SheetTrigger>
            <SheetContent className="w-full bg-white flex flex-col items-start">
              <SheetHeader className="uppercase">
                <SheetTitle></SheetTitle>
                <Button asChild variant="ghost">
                  <Link href="/cart">
                    <ShoppingBag /> Bag
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
