import ProductList from "@/components/shared/header/product/product-list";
// import sampleData from "@/db/sample-data"; ---> Gets data from local file
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="New Arrivals" />
    </>
  );
};

export default Homepage;
