import Header from '@/components/shared/header';
import Footer from '@/components/footer';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1 wrapper mt-[3rem]">{children}</main>
        <Footer />
     </div> 
    );
  }