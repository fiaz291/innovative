"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import biscuit1 from '../assets/packages/Digestive.png'
import biscuit2 from '../assets/packages/Zeera.png'
import biscuit3 from '../assets/packages/TooGud.png'
import biscuit4 from '../assets/packages/Peanut.png'
import biscuit5 from '../assets/packages/Snapp.png'
import biscuit6 from '../assets/packages/Goodies.png'
import biscuit7 from '../assets/packages/Jumbo-Junior.png'
import biscuit8 from '../assets/packages/Butter-Crunch.png'
import biscuit9 from '../assets/packages/Charm.png'
import biscuit10 from '../assets/packages/Crust-Rolls.png'
import biscuit11 from '../assets/packages/Choc-n-Chip-1.png'
import biscuit12 from '../assets/packages/Crust-Wafer.png'
import biscuit13 from '../assets/packages/Bitten.png'
import biscuit14 from '../assets/packages/Choco-Rings.png'

// Replace with your actual image paths
const cookieImages = [
    biscuit1,
    biscuit8,
    biscuit13,
    biscuit14,
    biscuit6,
    biscuit3,
    biscuit2,
    biscuit4,
    biscuit5,
    biscuit7,
    biscuit9,
    biscuit10,
    biscuit11,
    biscuit12,
];

export default function CookieCarousel() {
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
        spaceBetween={0}
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
              className="w-[100%] md:w-[100%] h-[100px] md:h-[160px] rounded-lg"
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