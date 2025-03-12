import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( 
        <footer className="border-t-[0.5px]">
            <div className="p-5 flex-center text-xs">
                &copy; {currentYear} {APP_NAME}. All Rights Reserved.
            </div>
        </footer> 
    );
}

export default Footer;