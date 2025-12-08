"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { YouTubeThumbnail } from "./YouTubeThumbnail";
import { youtubeVideos } from "@/utils";
import { useState } from "react";

export default function UpcomingCarousel() {
  const [videoId, setVideoId] = useState("");
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
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="!py-4"
      >
        {youtubeVideos.map((videoId, i) => (
          <SwiperSlide
            key={i}
            className="!w-auto flex justify-center items-center"
          >
            <YouTubeThumbnail videoId={videoId} setVideoId={setVideoId} isStyles/>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
      {!!videoId && (
        <div
          style={{ position: "fixed", top: 0, left: 0 }}
          className="z-[999999] w-screen h-screen flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setVideoId("")}
          />

          <div className="relative z-10 bg-white rounded-xl shadow-2xl">
            <button
              onClick={() => setVideoId("")}
              className="absolute top-3 right-4 w-10 h-10 flex items-center justify-center bg-white text-gray-700 hover:text-black hover:bg-gray-200 rounded-full shadow-md text-2xl font-bold"
            >
              ✕
            </button>

            <div className="w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[55vw] 2xl:w-[50vw] aspect-video rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
