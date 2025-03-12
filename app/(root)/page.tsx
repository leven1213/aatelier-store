import ProductList from "@/components/shared/header/product/product-list";
import sampleData from "@/db/sample-data";

const Homepage = () => {
  console.log(sampleData);
  return (
    <>
      <ProductList 
        data={sampleData.products} 
        title="New Arrivals" 
        limit={4} />
    </>
  );
};

export default Homepage;
