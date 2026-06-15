"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import SimilarProductCard from "./SimilarProductCard";
import { similarProducts } from "./similarProductsData";

export default function SimilarProducts() {
  return (
    <section className="mt-24">

      <div className="flex items-end justify-between mb-12">

        <div>
          <p className="uppercase tracking-[0.25em] text-xs text-neutral-400">
            You may also like
          </p>

          <h2 className="text-[42px] font-light mt-3">
            Similar frames you may also like
          </h2>
        </div>

        {/* Custom Arrows */}

        <div className="flex gap-3">

          <button
            className="
              similar-prev
              w-11
              h-11
              rounded-full
              border
              border-black
              flex
              items-center
              justify-center
              bg-white
              hover:bg-black
              hover:text-white
              transition
            "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className="
              similar-next
              w-11
              h-11
              rounded-full
              border
              border-black
              flex
              items-center
              justify-center
              bg-white
              hover:bg-black
              hover:text-white
              transition
            "
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".similar-prev",
          nextEl: ".similar-next",
        }}
        spaceBetween={24}
        slidesPerView={4}
      >
        {similarProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <SimilarProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}