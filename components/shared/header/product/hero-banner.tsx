"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";

const HeroBanner = ({ data }: { data: Product[] }) => {
  return (
    <div className="relative w-full mb-12 overflow-hidden">
      {data.map((product: Product) => (
        <div key={product.id} className="relative w-full h-[70vh] lg:h-[80vh]">
          <Link href={`/product/${product.slug}`}>
            <div className="relative w-full h-full overlay">
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent z-2" />

              {/* Banner image */}
              <Image
                src={product.banner!}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="z-0"
              />

              {/* Blurb content */}
              <div className="w-full absolute bottom-0 px-10 py-10 text-left text-white z-3">
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
