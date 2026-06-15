"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


import BrandCampaignSlide from "./BrandCampaignSlide";
import { campaigns } from "./brandCampaignData";

export default function BrandCampaignSlider() {
  return (
    <section className="w-full">

      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className} campaign-line"></span>`;
          },
        }}
        className="brand-campaign-swiper"
      >

        {campaigns.map((campaign) => (
          <SwiperSlide key={campaign.id}>

            <BrandCampaignSlide
              title={campaign.title}
              subtitle={campaign.subtitle}
              image={campaign.image}
              buttonText={campaign.buttonText}
            />

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}