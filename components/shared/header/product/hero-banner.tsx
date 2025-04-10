"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
// import { Button } from "@/components/ui/button";

const HeroBanner = ({ data }: { data: Product[] }) => {
  return (
    <div className="w-full h-screen absolute inset-0">
      {data.map((product: Product) => (
        <div key={product.id} className="w-full h-full">
          <Link href={`/product/${product.slug}`}>
            <div className="relative w-full h-full inset-0 pb-20">
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent z-10" />

              {/* Banner image */}
              <Image
                src={product.banner!}
                alt={product.name}
                fill 
                className="z-0 object-cover object-[70%_40%]"
              />

              {/* Blurb content */}
              <div className="wrapper relative z-15 flex flex-col h-full w-full self-center text-center text-white justify-end">
                <h2 className="text-5xl lg:text-6xl font-extrabold pb-3 uppercase">
                  {product.brand && (
                    <div className="">New: {product.brand}</div>
                  )}
                </h2>
                {product.blurb && <div className="pb-5">{product.blurb}</div>}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeroBanner;
