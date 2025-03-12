"use client";  
import Header from "@/components/shared/header";
import Footer from "@/components/footer";
import { Link } from "@/components/ui/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-col items-center min-h-screen">
        <div className="p-6 w-full text-left mt-20 wrapper">
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-destructive mb-1">
            Sorry, we couldn&#39;t find the page you were looking for.
          </p>
          <p className="mb-1">
            You might have typed the wrong address or the page has been removed.
          </p>
          <p className="mb-4">
            In the meantime, please use the navigation or search to help you
            find your way.
          </p>
          <p className="mb-1">
            You may want to visit the AATELIER home page or contact us.
          </p>
          <div className="mb-1">
            <Link variant="strong" href="/">
              Aatelier home page
            </Link>
          </div>
          <div className="mb-1">
            <Link variant="strong" href="/">
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
