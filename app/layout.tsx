import type { Metadata } from "next";
import { Inter } from "next/font/google";
/*import { Inter, Cormorant } from "next/font/google";*/
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';

const interSans = Inter({
  variable: "--font-inter",
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
      <body
        className={`${interSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
