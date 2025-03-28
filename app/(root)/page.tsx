import HeroBanner from "@/components/shared/header/product/hero-banner";
import ProductList from "@/components/shared/header/product/product-list";
// import sampleData from "@/db/sample-data"; ---> Gets data from local file
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {featuredProducts.length > 0 && (
        <div className="h-screen">
          <HeroBanner data={featuredProducts} />
        </div>
      )}
      <div className="!mt-[-3.5rem]">
      <ProductList data={latestProducts} title="New Arrivals" />
      </div>
    </>
  );
};

export default Homepage;
