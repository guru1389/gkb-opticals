"use client";

import "../../../../src/app/globals.css";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "/images/Banner_1_1.png",
    title: "Premium Eyewear Collection",
  },
  {
    id: 2,
    image:
       "/images/1920-X-850-New-Arrivals_Home_Page_Banner.webp",
    title: "Luxury Sunglasses",
  },
];

export default function Hero() {
  return (
    <section className="relative">

      <Swiper
        modules={[Pagination, Autoplay]}
         pagination={{
            clickable: true,
            renderBullet: function (index, className) {
            return `<span class="${className} custom-bullet"></span>`;
            },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[80vh]"
      >

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <div className="relative w-full h-full">

              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}