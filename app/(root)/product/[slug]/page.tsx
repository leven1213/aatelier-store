import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/header/product/product-price";
import ProductImages from "@/components/shared/header/product/product-images";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-6">
          {/* Images Column: Mobile View */}
          <div className="col-span-4 md:hidden">
            {/* Images Component */}
            <ProductImages images={product.images} />
          </div>

          {/* Details Column */}
          <div className="col-span-2 lg:sticky lg:top-25 h-fit self-start">
            <div className="flex flex-col gap-3">
              <p className="uppercase text-xs">
                {product.brand} / {product.category}
              </p>
              <h1 className="font-semibold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          
          {/* Images Column */}
          <div className="col-span-4 hidden md:flex">
            {/* Images Component */}
            <ProductImages images={product.images} />
          </div>

          {/* Action Column */}
          <div className="col-span-2 sticky top-25 h-fit self-start">
            <Card>
              <CardContent className="pl-4">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {product.stock > 0 ? (
                    <Badge variant="outline">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out of Stock</Badge>
                  )}
                </div>
                {product.stock > 0 && (
                  <div className="flex-center">
                    <Button className="w-full">Add to Bag</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
