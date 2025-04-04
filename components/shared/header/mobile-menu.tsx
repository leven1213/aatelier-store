import Link from "next/link";
import { AlignJustify, ShoppingCart } from "lucide-react";
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

const MobileMenu = () => {
  return (
    <nav className="flex items-center md:hidden">
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
  );
};
export default MobileMenu;
