"use-client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import friskyWaferChocolateText from "../../../public/PremiumLogos/Frisky Wafer Chocolate.webp";
import friskyWaferChocolate from "../../assets/frisky-wafer-chocolate.webp";
import friskyWaferOrangeText from "../../../public/PremiumLogos/Frisky Wafer Orange.webp";
import friskyWaferOrange from "../../assets/frisky-wafer-orange.webp";
import friskyWaferVanillaText from "../../../public/PremiumLogos/Frisky Wafer Vanilla.webp";
import friskyWaferVanilla from "../../assets/frisky-wafer-vanilla.webp";
import friskyWaferStrawberryText from "../../../public/PremiumLogos/Frisky Wafer Strawberry.webp";
import friskyWaferStrawberry from "../../assets/frisky-wafer-strawberry.webp";
import Faq from "@/components/Faq";

export default function FriskyWaferPage() {
  return (
    <div className="overflow-hidden">
      <div className="relative w-full bg-[#f7c791] pb-30">
        <Navbar />
        <div className="flex flex-col items-center px-10 md:px-30">
          <Image
            src={friskyWaferChocolateText}
            alt="digestive-copy"
            className="md:w-[55%] mx-auto mb-5 md:mb-0"
          />
          <div className="flex">
            <div className="md:px-28">
              <div className="text-lg md:text-4xl leading-4 md:leading-[2rem] text-center mb-6 mt-6">
                <span className="text-base md:text-2xl leading-4 md:leading-[2rem]">
                  Crisped to the Core, Drenched in Decadence - Every Layer Melts
                  into Pure Chocolate Bliss.
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={friskyWaferChocolate}
                  alt="boxes-image"
                  className="md:w-[100%]"
                />
              </div>
              <div className="mt-5 md:mt-5 flex justify-center">
                <table className="w-full text-center border-spacing-y-2 max-w-[900px]">
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
                      <td className="px-4 py-3 border-r-1">75</td>
                      <td className="px-4 py-3 border-r-1">-</td>
                      <td className="px-4 py-3">36</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left font-semibold border-r-1">
                        Snack Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">23.6</td>
                      <td className="px-4 py-3 border-r-1">10</td>
                      <td className="px-4 py-3">18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#ffce54] pb-30 pt-30">
        <div className="flex flex-col items-center px-10 md:px-30">
          <Image
            src={friskyWaferOrangeText}
            alt="digestive-copy"
            className="md:w-[55%] mx-auto mb-5 md:mb-0"
          />
          <div className="flex float-left">
            <div className="md:px-28">
              <div className="text-lg md:text-4xl leading-4 md:leading-[2rem] text-center mb-10 mt-10">
                <span className="text-base md:text-2xl leading-4 md:leading-[2rem]">
                  Crisp Layers, Bursting with Zesty Orange - A Tangy Twist on
                  Classic Crunch.
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={friskyWaferOrange}
                  alt="boxes-image"
                  className="md:w-[100%]"
                />
              </div>
              <div className="mt-5 md:mt-5 flex justify-center">
                <table className="max-w-[900px] w-full text-center border-spacing-y-2">
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
                      <td className="px-4 py-3 border-r-1">75</td>
                      <td className="px-4 py-3 border-r-1">-</td>
                      <td className="px-4 py-3">36</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left font-semibold border-r-1">
                        Snack Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">23.6</td>
                      <td className="px-4 py-3 border-r-1">10</td>
                      <td className="px-4 py-3">18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#87d9eb] pb-30 pt-30">
        <div className="flex flex-col items-center px-10 md:px-30">
          <Image
            src={friskyWaferVanillaText}
            alt="digestive-copy"
            className="md:w-[55%] mx-auto mb-5 md:mb-0"
          />
          <div className="flex float-left">
            <div className="md:px-28">
              <div className="text-lg md:text-4xl leading-4 md:leading-[2rem] text-center mb-6 mt-6">
                <span className="text-base md:text-2xl leading-4 md:leading-[2rem]">
                  Golden Crunch, Velvety Vanilla - A Timeless Taste of Sweet
                  Simplicity.
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={friskyWaferVanilla}
                  alt="boxes-image"
                  className="md:w-[100%]"
                />
              </div>
              <div className="mt-5 md:mt-5 flex justify-center">
                <table className="w-full max-w-[900px] text-center border-spacing-y-2">
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
                      <td className="px-4 py-3 border-r-1">75</td>
                      <td className="px-4 py-3 border-r-1">-</td>
                      <td className="px-4 py-3">36</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#ffb09b] pb-30 pt-30">
        <div className="flex flex-col items-center px-10 md:px-30">
          <Image
            src={friskyWaferStrawberryText}
            alt="digestive-copy"
            className="md:w-[55%] mx-auto mb-5 md:mb-0"
          />
          <div className="flex">
            <div className="md:px-28">
              <div className="text-lg md:text-4xl leading-4 md:leading-[2rem] text-center mb-6 mt-6">
                <span className="text-base md:text-2xl leading-4 md:leading-[2rem]">
                  Lush Strawberry Cream in Every Crisp Layer - A Wafer Worth
                  Savoring.
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={friskyWaferStrawberry}
                  alt="boxes-image"
                  className="md:w-[100%]"
                />
              </div>
              <div className="mt-5 md:mt-5 flex justify-center">
                <table className="w-full text-center border-spacing-y-2 max-w-[900px] mb-6">
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
                      <td className="px-4 py-3 border-r-1">84.4</td>
                      <td className="px-4 py-3 border-r-1">-</td>
                      <td className="px-4 py-3">48</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left font-semibold border-r-1">
                        Snack Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">32.4</td>
                      <td className="px-4 py-3 border-r-1">10</td>
                      <td className="px-4 py-3">18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Faq productKey="frisky-wafer" />
      </div>
    </div>
  );
}
