"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Heart,
  Expand,
  ShoppingBag,
} from "lucide-react";

type ProductCardProps = {
  slug: string;
  name: string;
  price: string;
  image: string;
  colors?: string[];
};

export default function ProductCard({
  slug,
  name,
  price,
  image,
  colors = [],
}: ProductCardProps) {

  const [selectedColor, setSelectedColor] =
    useState(colors?.[0] || "");

  return (
    <Link href={`/product/${slug}`} className="block bg-white rounded-2xl border border-gray-100/60 hover:shadow-xl transition-all duration-400 overflow-hidden group hover:-translate-y-0.5 cursor-pointer">

      {/* Product Image */}
      <div className="relative h-[320px]">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

      </div>

      {/* Product Actions */}
      

      <div className="flex items-center justify-between mt-1 px-6 pl-6 py-3">
          <button
            className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center"
          >
            <Expand size={18} />
        </button>

        <button
          className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
        >
              <Heart size={20} />
        </button>
      </div>

    
      {/* Product Content */}
      <div className="mt-3">

        {/* Color Swatches */}
        <div className="flex gap-3 mt-3 px-6 pl-6 py-3 items-center justify-between">

          <h3 className="text-sm lg:text-base text-black font-extrabold font-avenir mb-0 mt-3 lg:mt-5 min-h-[24px] lg:min-h-[52px] line-clamp-1 lg:line-clamp-2">
            {name}
          </h3>


          {colors.map((color, index) => (

            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`
                w-6
                h-6
                rounded-full
                border
                transition
                cursor-pointer
                ${
                  selectedColor === color
                    ? "ring-2 ring-black ring-offset-2"
                    : "border-black/20"
                }
              `}
              style={{
                backgroundColor: color,
              }}
            />

          ))}

        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between mt-2 px-6 pl-6 py-3">

          <p className="text-2xl font-bold">
            {price}
          </p>

          <button
            className="
              bg-black
              text-white
              px-5
              py-3
              rounded-full
              text-sm
              hover:bg-gray-800
              transition
              flex
              items-center
              gap-2
            "
            >
            <ShoppingBag size={16} />
            Shop Now
          </button>

        </div>

      </div>

    </Link>
  );
}