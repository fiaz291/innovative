'use client';
import Navbar from "@/components/Navbar";
import { YouTubeThumbnail } from "@/components/YouTubeThumbnail";
import { youtubeVideos } from "@/utils";
import { useState } from "react";


export default function ProductsPage() {
    const [videoId, setVideoId] = useState("");
    return (
    <div>
        <div className="text-white w-full bg-no-repeat bg-center md:bg-cover">
              <Navbar isPremium={false} isTransparentBg />
        </div>

        <div className='flex flex-col m-15 md:m-30'>
            <div className='text-2xl md:text-6xl text-center font-black'>{`Ads and Campaign`}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-15 md:mb-30">
            {youtubeVideos.map((id, i) => (
              <div
                key={i}
                className="!w-auto flex justify-center items-center"
              >
                <YouTubeThumbnail videoId={id} setVideoId={setVideoId} />
              </div>
            ))}
        </div>
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
  