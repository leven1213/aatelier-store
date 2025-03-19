import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm pb-4 pr-3">
      <CardHeader className="">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="pt-2 grid gap-1">
        <Link href={`/product/${product.slug}`}>
          <div className="text-xs uppercase"> {product.brand}</div>
          <h2 className="font-light text-[0.9rem] lg:text-[1rem]">{product.name}</h2>
        </Link>
        {product.stock > 0 ? (
          <ProductPrice value={Number(product.price)} className="font-bold text-[1rem] lg:text-lg" />
        ) : (
          <p className="text-destructive">Out of Stock</p>
        )}
        <p className="text-xs">&#9733; {product.rating}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
