"use client";

import { useState } from "react";

import ProductCard from "./ProductCard";

import {
  sunglassesProducts,
  eyeglassesProducts,
} from "./productsData";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("sunglasses");

  const products =
    activeTab === "sunglasses"
      ? sunglassesProducts
      : eyeglassesProducts;

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex items-end justify-between border-b pb-6">

          <div>

            <h2 className="font-avenir text-6xl leading-tight max-w-3xl">
              everyday basics you
              <br />
              can wear-on-repeat
            </h2>

            {/* Tabs */}
            <div className="flex gap-10 mt-10">

              <button
                onClick={() => setActiveTab("sunglasses")}
                className={`pb-3 text-lg font-semibold border-b-4 transition cursor-pointer ${
                  activeTab === "sunglasses"
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                Sunglasses
              </button>

              <button
                onClick={() => setActiveTab("eyeglasses")}
                className={`pb-3 text-lg font-semibold border-b-4 transition cursor-pointer ${
                  activeTab === "eyeglasses"
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                Eyeglasses
              </button>

            </div>

          </div>

          {/* Explore */}
          <button className="text-sm font-semibold cursor-pointer">
            Explore more →
          </button>

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              image={product.image}
              colors={product.colors}
            />
          ))}

        </div>

      </div>

    </section>
  );
}