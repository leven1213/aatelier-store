import { Badge } from "@/components/ui/badge"; 
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/header/product/product-price";
import ProductImages from "@/components/shared/header/product/product-images";
import AddToCart from "@/components/shared/header/product/add-to-cart";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
          {/* Images Column */}
          <div className="col-span-4 md:hidden">
            {/* Images Component */}
            <ProductImages images={product.images} />
          </div>

          {/* Details Column: Desktop View */}
          <div className="col-span-4 lg:col-span-2 lg:sticky lg:top-25 lg:h-fit lg:self-start order-3 md:order-2 lg:order-1 hidden lg:block">
            <div className="flex flex-col gap-3">
              <div className="hidden lg:block">
                <p className="uppercase text-xs">
                  {product.brand} / {product.category}
                </p>
                <h1 className="font-semibold">{product.name}</h1>
              </div>
              <p>
                &#9733; {product.rating} ({product.numReviews} Reviews)
              </p> 
            </div>
            <div className="mt-10">
              <p className="font-semibold">Item Info</p>
              <p>{product.description}</p>
            </div>
          </div>

          {/* Images Column: Mobile View */}
          <div className="col-span-4 hidden md:flex order-2 md:order-1">
            {/* Images Component */}
            <ProductImages images={product.images} />
          </div>

          {/* Action Column */}
          <div className="col-span-4 md:col-span-4 lg:col-span-2 lg:sticky lg:top-25 lg:h-fit lg:self-start md:order-1 sm:order-1">
            <Card>
              <CardContent className="lg:pl-4">
                <div className="mb-2">
                  <div className="flex justify-between">
                    <div className="block lg:hidden">
                      <p className="uppercase text-sm md:text-xs">{product.brand}</p>
                      <h1 className="font-semibold">{product.name}</h1>
                    </div>
                    <div className="text-right">
                      <ProductPrice
                        value={Number(product.price)}
                        className="font-extrabold"
                      /> 
                    </div>
                  </div> 
                  {product.stock > 0 ? (
                    <Badge variant="outline">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out of Stock</Badge>
                  )}
                </div> 
                {product.stock > 0 && (
                  <div className="flex-center">
                    <AddToCart item={{
                      productId: product.id,
                      name: product.name,
                      slug: product.slug,
                      price: product.price,
                      qty: 1,
                      image: product.images![0]
                    }}/>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Details Column: Tablet View */}
            <div className="block lg:hidden">
            <div className="flex flex-col gap-3">
              <div className="hidden lg:block">
                <p className="uppercase text-xs">
                  {product.brand} / {product.category}
                </p>
                <h1 className="font-semibold">{product.name}</h1>
              </div>
              <p>
                &#9733; {product.rating} ({product.numReviews} Reviews)
              </p> 
            </div>
            <div className="mt-10">
              <p className="font-semibold">Item Info</p>
              <p>{product.description}</p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
