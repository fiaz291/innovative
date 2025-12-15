"use-client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import shortBreadText from "../../assets/short-bread-copy.webp";
import shortBread from "../../assets/short-bread.webp";
import shortBreadBiscuit from "../../assets/short-bread-biscuit.webp";
import Faq from "@/components/Faq";

export default function ShortBreadPage() {
  return (
    <div className="overflow-hidden">
      <div className="relative w-full bg-[#ffa372] pb-10">
        <Navbar />
        <Image
          src={shortBreadBiscuit}
          alt="digestive-copy"
          className="hidden md:block absolute w-[20%] left-[-4rem] md:left-[0rem] top-[40rem] bottom-0 my-auto"
        />
        <div className="flex flex-col px-10 md:px-30 mt-0 md:mt-12">
          <Image
            src={shortBreadText}
            alt="digestive-copy"
            className="md:w-[80%] mx-auto"
          />
          <div className="flex flex-col items-center mt-5 md:mt-0 md:px-34 gap-10">
            <div className="flex flex-col items-center w-full">
              <div className="text-lg md:text-4xl leading-4 md:leading-[2.5rem] text-center md:text-left font-semibold mb-6">
                <span className="text-base md:text-2xl leading-4 md:leading-[2.5rem] font-medium">
                  Handcrafted with the Finest Butter and baked to perfection - A
                  Cookie that speaks the Language of Luxury.
                </span>
              </div>
              <Image
                src={shortBread}
                alt="boxes-image"
                className="w-[60%] md:w-[35%] mb-5 md:mb-6"
              />
              <div className="mt-5 mb-6">
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
                    <tr>
                      <td className="py-3 text-left font-semibold border-r-1">
                        Standard Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">68</td>
                      <td className="px-4 py-3 border-r-1">5</td>
                      <td className="px-4 py-3">12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Faq productKey="short-bread" />
      </div>
    </div>
  );
}
