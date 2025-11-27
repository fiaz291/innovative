"use-client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import goodiesLogo from "../../assets/Innovative-Goodies.webp";
import goodiesLemonBoxWrapper from "../../assets/Goodies-Lemon-Product.png";
import goodiesTestimonial from "../../assets/Innovative-Goodies-Image.webp";
import goodiesBiscuit from "../../assets/goodies-biscuit.webp";
import Faq from "@/components/Faq";

export default function GoodiesPage() {
  return (
    <div className="overflow-hidden">
      <div className="w-full bg-[#84a117] text-white">
        <Navbar isPremium={false} />
        <div className="relative flex flex-col px-10 md:px-58 pt-12 md:pt-25 mb-12 md:mb-25">
          <Image
            src={goodiesLogo}
            alt="digestive-copy"
            className="w-[50%] md:w-[30%]"
          />
          <Image
            src={goodiesBiscuit}
            alt="digestive-copy"
            className="absolute w-[25%] my-auto left-[-2rem] md:left-[-12rem] bottom-0 top-[10rem] rotate-[60deg]"
          />
          <div className="text-[2.5rem] md:text-[8rem] leading-[2.5rem] md:leading-[8rem] font-black whitespace-pre-line">
            {`Classic Taste,\nFresh Goodness.`}
          </div>
          <div className="text-lg md:text-5xl text-left font-semibold">{`Egg & Milk Biscuits`}</div>
          <div className="text-base md:text-2xl text-left">{`Crisp elegance with a citrus twist - the luxury of lemon, egg, and milk in every golden bite.`}</div>
          <div className="flex mt-5 md:mt-10">
            <Image
              src={goodiesLemonBoxWrapper}
              alt="digestive-box"
              className="relative left-[-25px] md:left-[-65px]"
            />
          </div>
          <div className="flex justify-center z-10">
            <div className="md:w-[80%] mt-5 md:mt-20 md:px-20">
              <table className="w-full text-center border-spacing-y-2 text-white">
                <thead>
                  <tr className="text-[10px] md:text-xl border-b-1">
                    <td className="py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                    <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                    <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                    <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                  </tr>
                </thead>
                <tbody className="text-[10px] md:text-xl">
                  <tr className="border-b-1">
                    <td className="py-3 text-left font-semibold border-r-1">
                      Snack Pack
                    </td>
                    <td className="px-4 py-3 border-r-1">17.6</td>
                    <td className="px-4 py-3 border-r-1">12</td>
                    <td className="px-4 py-3">30</td>
                  </tr>
                  <tr className="border-b-1">
                    <td className="py-3 text-left font-semibold border-r-1">
                      Mini Half Roll
                    </td>
                    <td className="px-4 py-3 border-r-1">35.2</td>
                    <td className="px-4 py-3 border-r-1">12</td>
                    <td className="px-4 py-3">18</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-left font-semibold border-r-1">
                      Half Roll
                    </td>
                    <td className="px-4 py-3 border-r-1">52.8</td>
                    <td className="px-4 py-3 border-r-1">8</td>
                    <td className="px-4 py-3">18</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Faq isWhite productKey="goodies" />
        <div className="w-full flex justify-center">
          <Image
            src={goodiesTestimonial}
            alt="bg-lp"
            className="mt-12 md:mt-25 w-[80%] md:w-[50%]"
          />
        </div>
      </div>
    </div>
  );
}
