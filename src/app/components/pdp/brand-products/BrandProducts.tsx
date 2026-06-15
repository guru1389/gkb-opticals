"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import BrandProductCard from "./BrandProductCard";
import { brandProducts } from "./brandProductsData";

export default function BrandProducts() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="mt-24">

      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          mb-10
        "
      >
        <div>

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-neutral-400
              mb-2
            "
          >
            More From
          </p>

          <h2
            className="
              text-[42px]
              font-light
            "
          >
            More from this brand
          </h2>

        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            w-[44px]
            h-[44px]
            rounded-full
            border
            border-neutral-300
            flex
            items-center
            justify-center
            hover:border-black
            transition
          "
        >
          {isOpen ? (
            <Minus size={18} />
          ) : (
            <Plus size={18} />
          )}
        </button>

      </div>

      {/* Products */}

      {isOpen && (
        <div
          className="
            flex
            items-start
            gap-6
            overflow-x-auto
            py-4
          "
        >
          {brandProducts.map((product) => (
            <BrandProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </section>
  );
}