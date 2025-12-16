"use-client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import havenCoffeeText from "../../../public/PremiumLogos/Haven Coffee.webp";
import havenCoffee from "../../assets/haven-coffee.webp";
import havenChocolateText from "../../../public/PremiumLogos/Haven.webp";
import havenChocolate from "../../assets/haven-chocolate.webp";
import havenCoffeeBiscuit from "../../assets/haven-coffee-bisuit.webp";
import havenCoffeeBean from "../../assets/haven-coffee-bean.webp";
import havenChocolateBiscuit from "../../assets/haven-chocolate-biscuit.webp";
import Faq from "@/components/Faq";

export default function HavenPage() {
  return (
    <div className="overflow-hidden">
      <div className="relative w-full bg-[#ffce54] pb-10 md:pb-30">
        <Navbar />
        <div className="flex flex-col items-center px-10 px-10 md:px-30 mt-12 md:mt-25">
          <Image
            src={havenChocolateBiscuit}
            alt="biscuit"
            className="absolute w-[15%] top-0 bottom-0 my-auto right-[0px] md:right-[0px]"
          />
          <Image
            src={havenChocolateBiscuit}
            alt="biscuit"
            className="hidden md:block absolute rotate-[-70deg] w-[15%] top-25 md:top-30 my-auto left-[0px] md:left-[0px]"
          />
          <Image
            src={havenChocolateText}
            alt="digestive-copy"
            className="md:w-[60%] mx-auto"
          />
          <div className="flex mt-6">
            <div className="md:px-40">
              <div className="text-base md:text-2xl leading-5 md:leading-[2rem] text-center mb-6">
                <span className="">
                  Gourmet on the Outside, Decadence on the Inside —
                  Chocolate-Filled Cookies that Redefine Luxury Snacking.
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={havenChocolate}
                  alt="boxes-image"
                  className="md:w-[100%] mx-auto"
                />
              </div>

              <div className="mt-5 mb-5 md:mt-5 md:mb-15 flex justify-center">
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
                    <tr className="border-b-1">
                      <td className="py-3 text-left font-semibold border-r-1">
                        Standard Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">132</td>
                      <td className="px-4 py-3 border-r-1">-</td>
                      <td className="px-4 py-3">30</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left font-semibold border-r-1">
                        Pouch Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">44</td>
                      <td className="px-4 py-3 border-r-1">10</td>
                      <td className="px-4 py-3">12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#f1c88e] pb-10 md:pb-30 pt-10 md:pt-30">
        <div className="flex flex-col items-center px-10 md:px-30">
          <Image
            src={havenCoffeeBiscuit}
            alt="biscuit"
            className="absolute w-[15%] top-0 my-auto right-[0px] md:right-[0px]"
          />
          <Image
            src={havenCoffeeBean}
            alt="bean"
            className="absolute w-[8%] top-[150px] md:top-[-250px] md:bottom-0 md:my-auto left-0"
          />
          <Image
            src={havenCoffeeText}
            alt="digestive-copy"
            className="md:w-[45%] mx-auto"
          />
          <div className="flex mt-6">
            <div className="md:px-40">
              <div className="text-base md:text-2xl leading-5 md:leading-[2rem] text-center mb-6">
                <span className="">
                  Where the Bold Aroma of Coffee meets a Melting Chocolate
                  Center — every bite a journey of Rich, Layered Flavor.
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={havenCoffee}
                  alt="boxes-image"
                  className="md:w-[100%] mx-auto"
                />
              </div>
              <div className="mt-5 mb-5 md:mt-5 md:mb-15 flex justify-center">
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
                    <tr className="border-b-1">
                      <td className="py-3 text-left font-semibold border-r-1">
                        Standard Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">132</td>
                      <td className="px-4 py-3 border-r-1">-</td>
                      <td className="px-4 py-3">30</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left font-semibold border-r-1">
                        Pouch Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">44</td>
                      <td className="px-4 py-3 border-r-1">10</td>
                      <td className="px-4 py-3">12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Faq productKey="haven" />
      </div>
    </div>
  );
}
