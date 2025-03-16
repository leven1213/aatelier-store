import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { Product } from '@/types';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
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
      <CardContent className="p-4 grid gap-1">
        <div className="text-xs uppercase"> {product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="font-regular">{product.name}</h2>
        </Link>
        {product.stock > 0 ? (
          <ProductPrice value={Number(product.price)} className='font-bold' />
        ) : (
          <p className="text-destructive">Out of Stock</p>
        )}
        <p>{product.rating} Stars</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
