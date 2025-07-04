"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import upcoming1 from '../assets/upcoming1.png'
import upcoming2 from '../assets/upcoming2.png'
import upcoming3 from '../assets/upcoming3.png'

// Replace with your actual image paths
const cookieImages = [
    upcoming1,
    upcoming2,
    upcoming3,
];

export default function UpcomingCarousel() {
  return (
    <div className="w-full px-4 relative">
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px !important;
          height: 40px !important;
          background: white !important;
          border-radius: 50% !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
          border: 1px solid #e5e7eb !important;
        }
        
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 14px !important;
          font-weight: bold !important;
          color: #374151 !important;
        }
        
        .swiper-button-next {
          right: 10px !important;
        }
        
        .swiper-button-prev {
          left: 10px !important;
        }
        
        .swiper-button-disabled {
          opacity: 0.5 !important;
        }
      `}</style>
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="!py-4"
      >
        {cookieImages.map((img, i) => (
          <SwiperSlide
            key={i}
            className="!w-auto flex justify-center items-center"
          >
            <img
              src={img.src}
              alt={`cookie-${i}`}
              className="w-[180px] md:w-[605px] h-[132px] md:h-[264px] rounded-lg shadow"
            />
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}