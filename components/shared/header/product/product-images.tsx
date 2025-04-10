"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="Product image"
          width={1000}
          height={1000}
          className="min-h-[300px] object-cover object-center hidden lg:flex w-auto"
          priority
        />
      ))}
      <Image
        src={images[current]}
        alt="Product image"
        width={1000}
        height={1000}
        className="h-[40rem] w-full object-cover object-center lg:hidden"
        priority
      />
      <div className="flex lg:hidden">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600",
              current === index && "border-orange-500"
            )}
          >
            <Image src={image} alt="image" width={60} height={60} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
