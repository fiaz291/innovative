"use client";

import CookieCarousel from "@/components/CookieCrousal";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import innovationLab from "../../assets/innovation-lab.png";
import media from "../../assets/media.png";
import hr from "../../assets/sustainbility.png";
import careers from "../../assets/careers.png";
import {  MoveRight } from "lucide-react";
import InfoContainer from "@/components/InfoContainer";
import UpcomingCarousel from "@/components/UpcomingCrousal";
import { useRouter } from "next/navigation";
import innovativeLogo from '../../assets/innovative-logo.svg';
import premiumLogo from '../../assets/innovative-premium-logo.svg';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div>
      <div className="relative text-white w-full h-[85vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
        >
          <source src="/assets/banner.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover block md:hidden"
        >
          <source src="/assets/banner-mobile.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10">
          <Navbar isPremium={false} />
        </div>
      </div>

      <div className="my-5 md:my-15">
        <div className="pl-6 md:pl-15 text-3xl md:text-4xl mb-5 md:mb-15 font-black">
          Our Brands
        </div>
        <CookieCarousel />
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Signature Products Section */}
      <div className="bg-[#0050a3] flex flex-col justify-center items-center text-white py-40 px-8">
        <Image
          src={innovativeLogo}
          alt="Innovative Logo"
          className="relative left-[-50px] w-80 mb-6"
        />
        <p className="text-lg md:text-xl font-medium tracking-wide">
          Discover our Signature Products →
        </p>
      </div>

      {/* Premium Products Section */}
      <div className="bg-[#f5f5f5] flex flex-col justify-center items-center text-black py-40 px-8">
        <Image
          src={premiumLogo}
          alt="Premium Logo"
          className="w-50 mb-6"
        />
        <p className="text-lg md:text-xl font-medium tracking-wide">
          Discover our Premium Products →
        </p>
      </div>
    </div>

      <div className="my-15">
        <div className="pl-6 md:pl-15 text-3xl md:text-4xl mb-6 md:mb-15 font-black">
          Stay Connected
        </div>
        <div className="flex flex-col md:flex-row py-6 md:py-15 bg-[#123a5e] md:items-center text-white">
          <div className="px-6 md:px-15 md:w-[35%] font-black text-2xl md:text-5xl mb-6 md:mb-0
          ">{`Discover\n what's new`}</div>
          <UpcomingCarousel />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-0 md:p-15 my-15">
        <InfoContainer
          image={innovationLab}
          title="Innovation Lab"
          description="Crafted from the Inside Out"
          route="/innovation-lab"
          fullWidth
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-0 md:p-15 my-15">
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

      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-4 md:w-[50%] bg-[#fef4af] p-6 md:p-15 py-6 md:py-30">
          <div className="flex items-center gap-10 text-base md:text-xl">
            Team up for success
          </div>
          <div className="font-black text-3xl md:text-5xl">Careers</div>
          <div className="text-xl md:text-2xl">
            Stay in Touch for Future Opportunities
          </div>
          <div
            className="cursor-pointer flex items-center gap-2 text-xl md:text-3xl font-black mt-3 md:mt-6"
            onClick={() => {
              router.push("/careers");
            }}
          >
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
