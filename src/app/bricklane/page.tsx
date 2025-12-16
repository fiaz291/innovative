"use-client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import bricklaneText from "../../assets/bricklane-copy.webp";
import bricklane from "../../assets/Innovative Bricklane Product.png";
import Faq from "@/components/Faq";

export default function ShortBreadPage() {
  return (
    <div className="overflow-hidden">
      <div className="relative w-full bg-[#e7ad72] pb-10 md:pb-30 pt-10 md:pt-30">
        <Navbar />
        <div className="flex flex-col px-10 px-10 md:px-30 mt-12 md:mt-25">
          <Image
            src={bricklaneText}
            alt="digestive-copy"
            className="md:w-[80%] mx-auto"
          />
          <div className="flex flex-col items-center mt-[0rem] md:mt-[-1rem]">
            <div className="mb-5 md:mb-0">
              <div className="text-lg md:text-4xl leading-4 md:leading-[2rem] text-center">
                <span className="text-base md:text-2xl leading-4 md:leading-[2rem]">
                  {" "}
                  Premium Taste with a Purpose - Beautifully Crafted, Truly
                  Unforgettable
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={bricklane}
                  alt="boxes-image"
                  className="md:w-[90%] mt-5"
                />
              </div>
              <div className="mt-5 mb-6 flex justify-center w-full">
                <table className="w-full max-w-[900px] text-center border-spacing-y-2 mb-6">
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
                        Munch Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">50</td>
                      <td className="px-4 py-3 border-r-1">12</td>
                      <td className="px-4 py-3">12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Faq productKey="bricklane" />
      </div>
    </div>
  );
}
