"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";

const HeroBanner = ({ data }: { data: Product[] }) => {
  return (
    <div className="w-full">
      {data.map((product: Product) => (
        <div key={product.id} className="absolute inset-0">
          <Link href={`/product/${product.slug}`}>
            <div className="relative mt-11 w-full h-[93%]">
              
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent z-10" />

              {/* Banner image */}
              <Image
                src={product.banner!}
                alt={product.name}
                layout="fill" 
                className="z-0 object-cover object-[70%_100%]"
              />

              {/* Blurb content */}
              <div className="w-full absolute bottom-0 px-5 py-20 lg:px-24 lg:py-20 text-left text-white z-10 max-w-[1200px] mx-auto">
                {product.brand && <div className="text-2xl pb-3">New: {product.brand}</div>}
                {product.blurb && <div className="pb-5">{product.blurb}</div>}
                <Button variant="secondary">Shop now</Button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
