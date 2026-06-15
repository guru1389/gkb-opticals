"use client";

import { useState } from "react";

import ProductCard from "./ProductCard";

import {
  bestSellers,
  newArrivals,
} from "./productsData";

export default function FeaturedProducts() {

  const [activeTab, setActiveTab] =
    useState("best-sellers");

  const products =
    activeTab === "best-sellers"
      ? bestSellers
      : newArrivals;

  return (
    <section className="py-24 bg-[#f8f8f6]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">

          <div>

            <h2 className="text-[28px] lg:text-[48px] text-black font-light font-avenir hidden md:block mt-4 mb-10 leading-[50px] w-[471px]">
              featured picks from <br />
              around the world
            </h2>

            {/* Tabs */}
            <div className="flex gap-10 mt-10">

              <button
                onClick={() =>
                  setActiveTab("best-sellers")
                }
                className={`pb-2 transition ${
                  activeTab === "best-sellers"
                    ? "border-b-2 border-black font-semibold cursor-pointer"
                    : "text-gray-400"
                }`}
              >
                Best sellers
              </button>

              <button
                onClick={() =>
                  setActiveTab("new-arrivals")
                }
                className={`pb-2 transition ${
                  activeTab === "new-arrivals"
                    ? "border-b-2 border-black font-semibold cursor-pointer"
                    : "text-gray-400"
                }`}
              >
                New arrivals
              </button>

            </div>

          </div>

          {/* Explore */}
          <button className="mt-8 md:mt-0 text-sm font-semibold cursor-pointer">
            Explore more →
          </button>

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}

        </div>

      </div>

    </section>
  );
}