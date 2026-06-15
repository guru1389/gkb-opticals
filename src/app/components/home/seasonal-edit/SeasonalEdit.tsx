"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import SeasonalCard from "./SeasonalCard";
import { seasonalCampaigns } from "./seasonalData";

export default function SeasonalEdit() {
  return (
    <section className="bg-[#f4f4f4] py-20">

      <div className="lg:pl-20 lg:pt-20 lg:pb-20 px-6 pt-12 pb-12">

        {/* Heading */}
        <div className="flex justify-between items-start mb-12">

          <div>
            <h2 className="text-[42px] font-bold">
              The seasonal edit
            </h2>

            <p className="text-[36px] font-light leading-none mt-2">
              shop what everyone's
              <br />
              talking about
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-4 mt-8">

            <button className="seasonal-prev w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
              <ChevronLeft size={20} />
            </button>

            <button className="seasonal-next w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

        {/* Slider */}
        <Swiper
        modules={[Navigation]}
        navigation={{
            prevEl: ".seasonal-prev",
            nextEl: ".seasonal-next",
        }}
        slidesPerView={1.15}
        spaceBetween={24}
        breakpoints={{
            768: {
            slidesPerView: 1.3,
            },
            1024: {
            slidesPerView: 1.4,
            },
        }}
        >

          {seasonalCampaigns.map((campaign) => (
            <SwiperSlide key={campaign.id}>
              <SeasonalCard
                title={campaign.title}
                image={campaign.image}
              />
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}