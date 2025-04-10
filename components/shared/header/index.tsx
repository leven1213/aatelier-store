import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full fixed z-20 bg-white">
      <div className="wrapper flex justify-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <div className="relative w-[30px] h-[19px] hidden lg:block">
              <Image
                src="/images/aatelier_logo-v1.svg"
                alt={`${APP_NAME} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-[100px] h-[24px]">
              <Image
                src="/images/aatelier_logotype-v1.svg"
                alt={`${APP_NAME} logo`}
                fill
                className="object-contain lg:pl-3"
              />
            </div>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
