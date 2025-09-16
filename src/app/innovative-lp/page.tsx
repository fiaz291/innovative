"use client";

import CookieCarousel from "@/components/CookieCrousal";
import heroImg from "../../assets/lp-hero.webp";
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
      <div
        style={{
          backgroundImage: `url(${heroImg.src})`,
        }}
        className="text-white w-full bg-no-repeat bg-center md:bg-cover"
      >
        <Navbar isPremium={false} />
        <div className="flex flex-col gap-4 items-center justify-center font-black h-[85vh]">
          <div className="text-2xl md:text-6xl mt-[-80px] text-center">
            One Bite is never enough.
          </div>
        </div>
      </div>

      <div className="my-15">
        <div className="pl-15 text-xl md:text-4xl mb-15 font-black">
          Our Brands
        </div>
        <CookieCarousel />
      </div>

      <div className="flex text-white">
        <Swiper
          onSwiper={setSwiperInstance}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          <SwiperSlide>
            <div className="flex flex-col w-[100%] bg-[#9e2a2b] p-15 h-[100%]">
              <div className="flex items-center gap-10 text-base md:text-xl">
                Our Products
                <CircleArrowRight
                  className="w-[25px] h-[25px] cursor-pointer"
                  onClick={handleNext}
                />
              </div>
              <div className="font-black text-xl md:text-4xl mt-6">
                Satisfy your cravings the
              </div>
              <div className="font-black text-xl md:text-4xl">smart way.</div>
              <div className="text-base md:text-2xl mt-5">
                Innovative Digestive Biscuits are crafted with whole wheat and
                natural brown sugar, offering a wholesome, guilt-free snack
                that’s as delicious as it is nourishing.
              </div>
              <div className="flex items-center gap-2 text-xl md:text-3xl font-black mt-6">
                Read More
                <MoveRight className="w-[35px] h-[35px]" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col w-[100%] bg-[#000000] p-15 h-[100%]">
              <div className="flex items-center gap-10 text-base md:text-xl">
                Innovative Premium
                <CircleArrowRight
                  className="w-[25px] h-[25px] cursor-pointer"
                  onClick={handleNext}
                />
              </div>
              <div className="font-black text-xl md:text-4xl mt-6">
                The Art of Premium Snacking.
              </div>
              <div className="text-base md:text-2xl mt-5">
                Innovative Premium offers a refined biscuit experience, crafted
                with the finest ingredients and exceptional care. Each bite
                delivers superior taste, texture, and indulgence — made for
                those who appreciate the art of premium snacking.
              </div>
              <div className="flex items-center gap-2 text-xl md:text-3xl font-black mt-6">
                Read More
                <MoveRight className="w-[35px] h-[35px]" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col w-[100%] bg-[#c78e57] p-15 h-[100%]">
              <div className="flex items-center gap-10 text-base md:text-xl">
                Innovative Lab
                <CircleArrowRight
                  className="w-[25px] h-[25px] cursor-pointer"
                  onClick={handleNext}
                />
              </div>
              <div className="font-black text-xl md:text-4xl mt-6">
                From Concept to Creation.
              </div>
              <div className="text-base md:text-2xl mt-5">
                The Innovation Lab is the creative heart of Innovative Biscuits
                — where bold ideas and expert craft come together to create
                groundbreaking flavors that redefine snacking.
              </div>
              <div className="flex items-center gap-2 text-xl md:text-3xl font-black mt-6">
                Read More
                <MoveRight className="w-[35px] h-[35px]" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setSwiperImageInstance}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveImageIndex(swiper.activeIndex)}
        >
          <SwiperSlide>
            <Image
              src={prod3}
              alt="out-products-image"
              className="hidden md:block w-[100%]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={prod1}
              alt="out-products-image"
              className="hidden md:block w-[100%]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={prod2}
              alt="out-products-image"
              className="hidden md:block w-[100%]"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-15 my-15">
        <InfoContainer
          image={recipes}
          title="Recipes & Pairings"
          description="It All Starts Inside"
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
        <div className="flex py-15 bg-[#123a5e] items-center text-white">
          <div className="hidden md:block px-15 w-[35%] font-black text-2xl md:text-5xl">{`Discover\n what's new`}</div>
          <UpcomingCarousel />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-15 my-15">
        <InfoContainer
          image={media}
          title="Media Resources"
          description="For Media & Press Inquiries"
        />
        <InfoContainer
          image={hr}
          title="Sustainability"
          description="Growth with Responsibility"
          route="/sustainability"
        />
      </div>

      <div className="flex">
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
          className="hidden md:block w-[50%]"
        />
      </div>
    </div>
  );
}
