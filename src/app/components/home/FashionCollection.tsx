"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


import FashionCard from "./FashionCard";

import { fashionCollections } from "./fashionCollectionData";

export default function FashionCollection() {
  return (
    <section className="bg-[#f4f4f2] py-20 overflow-hidden">

      <div className="pl-6 lg:pl-20">

        {/* Heading */}
        <div>

          <p className="text-2xl lg:text-4xl font-extrabold">
            The fashion collective
          </p>

          <h2 className="text-[28px] lg:text-5xl text-font-main font-light font-avenir lg:leading-[48px] leading-[36px] w-[298px] lg:w-[549px] mt-2">
            where trends begin and statements are made
          </h2>

        </div>

        {/* Slider */}
        <div className="mt-16">

          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 4.2,
              },
            }}
            className="fashion-swiper"
          >

            {fashionCollections.map((item) => (
              <SwiperSlide key={item.id}>

                <FashionCard image={item.image} />

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
}