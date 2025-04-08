import type { Metadata } from "next";
import { Manrope } from "next/font/google";
/*import { Inter, Cormorant } from "next/font/google";*/
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { Toaster } from "sonner";

const manropeSans = Manrope({
  variable: "--font-Manrope",
  subsets: ["latin"],
});

/*const cormorantSerif = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: {
    template: `%s | Aatelier`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manropeSans.className} antialiased`}>
        {children}
        <Toaster
          toastOptions={{
            classNames: { 
              success: "!bg-white !text-black !hover:bg-gray-800",
              error: "!bg-destructive !text-white"
            },
          }}
        />
      </body>
    </html>
  );
}
