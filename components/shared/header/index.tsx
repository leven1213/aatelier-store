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
            <Image
              src="/images/aatelier_logo-v1.svg"
              alt={`${APP_NAME} logo`}
              height={40}
              width={40}
              priority={true}
              className="hidden lg:block"
            />
            <Image
              src="/images/aatelier_logotype-v1.svg"
              alt={`${APP_NAME} logo`}
              height={110}
              width={110}
              priority={true}
              className="font-bold text-2xl md:ml-3"
            />
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
