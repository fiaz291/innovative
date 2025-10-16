"use client";

import CookieCarousel from "@/components/CookieCrousal";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import prod1 from "../../assets/prod1.png";
import prod2 from "../../assets/prod2.png";
import prod3 from "../../assets/prod3.png";
import innovationLab from "../../assets/innovation-lab.png";
import recipes from "../../assets/recipes.png";
import media from "../../assets/media.png";
import hr from "../../assets/sustainbility.png";
import careers from "../../assets/careers.png";
import { CircleArrowRight, MoveRight } from "lucide-react";
import InfoContainer from "@/components/InfoContainer";
import UpcomingCarousel from "@/components/UpcomingCrousal";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperInstance, setSwiperInstance] = useState<any | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiperImageInstance, setSwiperImageInstance] = useState<any | null>(
    null
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (swiperInstance) {
      if (activeIndex < swiperInstance.slides.length - 1) {
        swiperInstance.slideTo(activeIndex + 1);
      } else {
        swiperInstance.slideTo(0);
      }
    }
    if (swiperImageInstance) {
      if (activeImageIndex < swiperImageInstance.slides.length - 1) {
        swiperImageInstance.slideTo(activeImageIndex + 1);
      } else {
        swiperImageInstance.slideTo(0);
      }
    }
  };

  return (
    <div>
      <div className="relative text-white w-full h-[85vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/banner.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        <div className="relative z-10">
          <Navbar isPremium={false} />
        </div>
      </div>

      <div className="my-15">
        <div className="pl-15 text-xl md:text-4xl mb-15 font-black">
          Our Brands
        </div>
        <CookieCarousel />
      </div>

    <div className="flex flex-col md:flex-row text-white w-full min-h-[400px]">
      <div className="w-full md:w-1/2 flex">
        <Swiper
          onSwiper={setSwiperInstance}
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center w-full bg-[#9e2a2b] p-6 md:p-12 h-full">
              <div className="flex items-center gap-2 text-base md:text-xl">
                Our Products
                <CircleArrowRight
                  className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
                  onClick={handleNext}
                />
              </div>
              <div className="font-black text-2xl md:text-4xl mt-4">
                Satisfy your cravings the
              </div>
              <div className="font-black text-2xl md:text-4xl">smart way.</div>
              <div className="text-sm md:text-xl mt-4">
                Innovative Digestive Biscuits are crafted with whole wheat and
                natural brown sugar, offering a wholesome, guilt-free snack
                that’s as delicious as it is nourishing.
              </div>
              <div
                className="cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-5"
                onClick={() => router.push('/digestive')}
              >
                Read More
                <MoveRight className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center w-full bg-[#000000] p-6 md:p-12 h-full">
              <div className="flex items-center gap-2 text-base md:text-xl">
                Innovative Premium
                <CircleArrowRight
                  className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
                  onClick={handleNext}
                />
              </div>
              <div className="font-black text-2xl md:text-4xl mt-4">
                The Art of Premium Snacking.
              </div>
              <div className="text-sm md:text-xl mt-4">
                Innovative Premium offers a refined biscuit experience, crafted
                with the finest ingredients and exceptional care. Each bite
                delivers superior taste, texture, and indulgence — made for
                those who appreciate the art of premium snacking.
              </div>
              <div
                className="cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-5"
                onClick={() => router.push('premium-products')}
              >
                Read More
                <MoveRight className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center w-full bg-[#c78e57] p-6 md:p-12 h-full">
              <div className="flex items-center gap-2 text-base md:text-xl">
                Innovative Lab
                <CircleArrowRight
                  className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
                  onClick={handleNext}
                />
              </div>
              <div className="font-black text-2xl md:text-4xl mt-4">
                From Concept to Creation.
              </div>
              <div className="text-sm md:text-xl mt-4">
                The Innovation Lab is the creative heart of Innovative Biscuits —
                where bold ideas and expert craft come together to create
                groundbreaking flavors that redefine snacking.
              </div>
              <div
                className="cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-5"
                onClick={() => router.push('innovation-lab')}
              >
                Read More
                <MoveRight className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
      {/* IMAGE SWIPER */}
      <div className="w-full md:w-1/2 flex mt-4 md:mt-0">
        <Swiper
          onSwiper={setSwiperImageInstance}
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveImageIndex(swiper.activeIndex)}
          className="w-full h-full"
        >
          <SwiperSlide>
            <Image
              src={prod3}
              alt="our-products-image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={prod1}
              alt="our-products-image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={prod2}
              alt="our-products-image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

      <div className="flex flex-col md:flex-row gap-10 p-15 my-15">
        <InfoContainer
          image={recipes}
          title="Recipes & Pairings"
          description="It All Starts Inside"
          route="/coming-soon"
        />
        <InfoContainer
          image={innovationLab}
          title="Innovation Lab"
          description="Crafted from the Inside Out"
          route="/innovation-lab"
        />
      </div>

      <div className="my-15">
        <div className="pl-15 text-xl md:text-4xl mb-15 font-black">
          Stay Connected
        </div>
        <div className="flex flex-col md:flex-row py-15 bg-[#123a5e] md:items-center text-white">
          <div className="px-15 md:w-[35%] font-black text-2xl md:text-5xl">{`Discover\n what's new`}</div>
          <UpcomingCarousel />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-15 my-15">
        <InfoContainer
          image={media}
          title="Media Resources"
          description="For Media & Press Inquiries"
          route="/coming-soon"
        />
        <InfoContainer
          image={hr}
          title="Sustainability"
          description="Growth with Responsibility"
          route="/sustainability"
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-4 md:w-[50%] bg-[#fef4af] p-15 py-30">
          <div className="flex items-center gap-10 text-base md:text-xl">
            Team up for success
          </div>
          <div className="font-black text-xl md:text-5xl">Careers</div>
          <div className="text-xl md:text-2xl">
            Stay in Touch for Future Opportunities
          </div>
          <div className="cursor-pointer flex items-center gap-2 text-xl md:text-3xl font-black mt-6" onClick={() => {router.push('/careers')}}>
            Discover
            <MoveRight className="w-[35px] h-[35px]" />
          </div>
        </div>
        <Image
          src={careers}
          alt="out-products-image"
          className="w-full md:w-[50%]"
        />
      </div>
    </div>
  );
}
