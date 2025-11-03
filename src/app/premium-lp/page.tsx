"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import wafer from "../../../src/assets/wafer-lp.png";
import digestive from "../../../src/assets/Digestive-lp.png";
import chocNChip from "../../../src/assets/Choc-n-chip-lp.png";
import biscoffi from "../../../src/assets/Biscoffi-lp.png";
import premiumBg from "../../../src/assets/Premium-Background.webp";
import { MoveRight } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();
  return (
    <div
      className={`
          text-white w-full bg-no-repeat bg-cover bg-[#f5c899]
        `}
      style={{
        backgroundImage: `url(${premiumBg.src})`,
      }}
    >
      <Navbar />
      <div className="flex flex-col gap-4 items-center font-black py-15 mx-5 md:mx-30">
        <div className="text-xl md:text-4xl font-bold">Innovative Premium</div>
        <div className="flex flex-col gap-2 md:gap-4 items-center">
          <div className="text-4xl md:text-8xl leading-[40px] md:leading-[80px]">
            Crafted for the
          </div>
          <div className="text-4xl md:text-8xl mb-8 leading-[40px] md:leading-[80px]">
            Exceptional.
          </div>
        </div>
        <div className="md:px-50 text-center font-medium text-base md:text-2xl">
          The premium range is a celebration of craftsmanship and excellence —
          thoughtfully created with superior ingredients and precision, offering
          an elevated experience in every product.
        </div>
        <div>
          <div className="text-xl md:text-2xl font-black">Our Products</div>
          <div onClick={()=>router.push("/premium-products")} className="cursor-pointer flex items-center gap-1 text-md md:text-lg font-normal">It All Starts Inside <MoveRight /></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image src={wafer} alt="bg-lp" />
          <Image src={digestive} alt="bg-lp" />
          <Image src={chocNChip} alt="bg-lp" />
          <Image src={biscoffi} alt="bg-lp" />
        </div>

      </div>  
    </div>
  );
}
