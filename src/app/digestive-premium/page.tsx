"use-client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import biscuit from "../../assets/biscuit.webp";
import digestiveText from "../../assets/digestive-original.png";
import sugarFreeText from "../../assets/sugar-free-text.png";
import wheat from "../../assets/wheat.webp";
import singleWheat from "../../assets/single-wheat.webp";
import digestiveBigBox from "../../assets/Digestive-Premuim-Combined.png";
import digestiveSugerFreeBigBox from "../../assets/Digestive-Premium-Sugar-Free-Combined.png";
import Faq from "@/components/Faq";

export default function DigestivePremiumPage() {
  return (
    <div className="overflow-hidden">
      <div className="w-full bg-[#e7ad72] pb-10">
        <Navbar />
        <div className="relative flex flex-col px-10 md:px-30 mt-12 md:mt-25">
          <Image
            src={digestiveText}
            alt="digestive-copy"
            className="w-[80%] md:w-[60%] mx-auto"
          />
          <Image
            src={biscuit}
            alt="biscuit"
            className="absolute w-[20%] top-0 right-[0px] md:right-[0px]"
          />
          <Image
            src={wheat}
            alt="wheat-image"
            className="absolute w-[45%] top-[150px] md:top-[-50px] md:bottom-0 md:my-auto left-[-120px] md:left-[-400px]"
          />
          <Image
            src={singleWheat}
            alt="wheat-image"
            className="absolute w-[40%] top-[205px] md:top-0 md:bottom-0 md:my-auto right-[-100px] md:right-[-300px]"
          />
          <div className="relative flex flex-col items-center mt-5 md:mt-4">
            <div className="md:pl-28 z-10 mb-5 md:mb-0 w-[80%]">
              <div className="text-lg md:text-4xl leading-5 md:leading-[2.5rem] text-center md:text-left font-semibold">{`Simple Goodness, Perfectly Baked`}</div>
              <div className="text-base md:text-2xl leading-5 md:leading-[2.5rem] text-center md:text-left">{`A Wholesome Digestive Biscuit Crafted with Whole Wheat, Natural Sweetness, and Satisfying Subtle Crunch.`}</div>
              <div className="relative flex justify-center mt-2 md:mt-5  md:ml-[-0%]">
              <Image
                src={digestiveBigBox}
                alt="boxes-image"
                className="ml-10 md:ml-0 w-[80%] md:w-[80%]"
              />
            </div>
              <div className="mt-5">
                <table className="w-full text-center border-spacing-y-2">
                  <thead>
                    <tr className="text-[10px] md:text-xl border-b-1">
                      <td className="pr-2 md:pr-4 py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                      <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                      <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                      <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                    </tr>
                  </thead>
                  <tbody className="text-[10px] md:text-xl">
                    <tr className="border-b-1">
                      <td className="py-3 text-left font-semibold border-r-1">
                        Standard Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">270</td>
                      <td className="px-4 py-3 border-r-1">-</td>
                      <td className="px-4 py-3">24</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left font-semibold border-r-1">
                        Snack Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">30</td>
                      <td className="px-4 py-3 border-r-1">10+1</td>
                      <td className="px-4 py-3">18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="w-full bg-[#88d9eb] pb-10">
        <div className="relative flex flex-col px-10 md:px-30 pt-12 md:pt-25">
          <Image
            src={sugarFreeText}
            alt="digestive-copy"
            className="w-[80%] md:w-[60%] mx-auto"
          />
          <Image
            src={biscuit}
            alt="original-image"
            className="absolute w-[20%] top-[1rem] md:top-[2rem] right-[0rem] md:right-[0rem]"
          />
          <Image
            src={biscuit}
            alt="original-image"
            className="absolute w-[20%] top-[7rem] md:top-[40rem] left-[-2.5rem] md:left-[-13rem]"
          />
          <Image
            src={wheat}
            alt="wheat-image"
            className="absolute w-[30%] top-[1rem] md:top-[2rem] left-[-3.5rem] md:left-[-12rem]"
          />
          <Image
            src={singleWheat}
            alt="wheat-image"
            className="absolute w-[40%] top-[270px] md:top-0 md:bottom-0 md:my-auto right-[-65px] md:right-[-300px]"
          />
          <div className="relative flex flex-col items-center mt-5 mb-10 md:mt-4">
            <div className="md:pl-28 mb-5 md:mb-0 w-[80%]">
              <div className="text-lg md:text-4xl leading-5 md:leading-[2.5rem] text-center md:text-left font-semibold">{`Healthy Snacking, Elevated`}</div>
              <div className="text-base md:text-2xl leading-5 md:leading-[2.5rem] text-center md:text-left">{`Whole Wheat Digestives without Sugar, Designed for Taste and Wellness in every bite.`}</div>
             <div className="relative flex justify-center mt-2 md:mt-5  md:ml-[-0%]">
              <Image
                src={digestiveSugerFreeBigBox}
                alt="boxes-image"
                className="ml-10 md:ml-0 w-[80%] md:w-[80%]"
              />
            </div>

              <div className="mt-5">
                <table className="w-full text-center border-spacing-y-2">
                  <thead>
                    <tr className="text-[10px] md:text-xl border-b-1">
                      <td className="pr-2 md:pr-4 py-2 text-left font-semibold border-r-1 pr-2">{`Packaging SKU`}</td>
                      <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                      <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                      <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                    </tr>
                  </thead>
                  <tbody className="text-[10px] md:text-xl">
                    <tr className="border-b-1">
                      <td className="py-3 text-left font-semibold border-r-1">
                        Standard Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">270</td>
                      <td className="px-4 py-3 border-r-1">-</td>
                      <td className="px-4 py-3">24</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left font-semibold border-r-1">
                        Snack Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">30</td>
                      <td className="px-4 py-3 border-r-1">10+1</td>
                      <td className="px-4 py-3">18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </div>
        <Faq productKey="digestive-premium" />
      </div>
    </div>
  );
}
