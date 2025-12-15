"use-client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import goldenLotusText from "../../../public/PremiumLogos/Golden Lotus.png";
import goldenLotus from "../../assets/golden-lotus.webp";
import goldenLotusBiscuit from "../../assets/golden-lotus-biscuit.webp";
import Faq from "@/components/Faq";

export default function GoldenLotusPage() {
  return (
    <div className="overflow-hidden">
      <div className="relative w-full bg-[#f4978f] pb-30">
        <Navbar />
        <Image
          src={goldenLotusBiscuit}
          alt="digestive-copy"
          className="absolute rotate-[55deg] w-[15%] md:w-[18%] left-[0rem] md:left-[0rem] top-10 md:top-0 bottom-[40rem] md:bottom-[60rem] my-auto"
        />
        <Image
          src={goldenLotusBiscuit}
          alt="digestive-copy"
          className="hidden md:block absolute md:w-[15%] right-[0rem] md:right-[0rem] top-0 bottom-0 my-auto"
        />
        <div className="flex flex-col items-center px-10 md:px-30 mb-6">
          <Image
            src={goldenLotusText}
            alt="digestive-copy"
            className="w-full md:w-[60%] mt-10"
          />
          <div className="flex">
            <div className="md:px-28">
              <div className="text-lg md:text-4xl leading-4 md:leading-[2rem] text-center mt-6">
                <span className="text-base md:text-2xl leading-4 md:leading-[2rem]">
                  Steeped in Tradition, Perfected for today - Premium Caramel
                  Biscuits that honor Classic Caramelized taste
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={goldenLotus}
                  alt="boxes-image"
                  className="md:w-[100%]"
                />
              </div>
              <div className="mb-6 flex justify-center">
                <table className="w-full text-center border-spacing-y-2  max-w-[900px]">
                  <thead>
                    <tr className="text-[10px] md:text-xl border-b-1">
                      <td className="pr-2 md:pr-4 py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                      <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                      <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                      <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                    </tr>
                  </thead>
                  <tbody className="text-[10px] md:text-xl">
                    <tr>
                      <td className="py-3 text-left font-semibold border-r-1">
                        Standard Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">96</td>
                      <td className="px-4 py-3 border-r-1">-</td>
                      <td className="px-4 py-3">30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Faq productKey="golden-lotus" />
      </div>
    </div>
  );
}
