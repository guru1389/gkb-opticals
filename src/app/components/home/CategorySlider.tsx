"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


import CategorySlide from "./CategorySlide";

import { categorySlides } from "./categorySliderData";

export default function CategorySlider() {
  return (
    <section className="py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-sm md:text-[32px] text-font-main font-extrabold font-avenir leading-[28px] lg:leading-[48px] mb-4 lg:mb-8">
          Shop from our top categories
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={5}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="category-swiper"
        >

          {categorySlides.map((category) => (
            <SwiperSlide key={category.id}>

              <CategorySlide
                title={category.title}
                image={category.image}
              />

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}