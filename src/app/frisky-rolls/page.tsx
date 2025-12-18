"use-client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import friskyChocolateRollsText from "../../../public/PremiumLogos/Frisky Roll Chocolate.webp";
import friskyChocolateRolls from "../../assets/frisky-chocolate-rolls.webp";
import friskyHazelnutRollsText from "../../../public/PremiumLogos/Frisky Roll Hazelnut.webp";
import friskyHazelnuteRolls from "../../assets/frisky-hazelnut-rolls.webp";
import friskyMilkyRollsText from "../../../public/PremiumLogos/Frisky Roll Milk.webp";
import friskyChocolateCoatedRollsText from "../../assets/Frisky Chocolate Coated Wafer Roll.webp";
import friskyChocolateCoatedRollsPack from "../../assets/Frisky Chocolate Coated Wafer Rolls Packaging.webp";
import friskyMilkyRolls from "../../assets/frisky-milky-rolls.webp";
import Faq from "@/components/Faq";

export default function FriskyRollsPage() {
  return (
    <div className="overflow-hidden">
      <div className="relative w-full bg-[#ffbe76] pb-10 md:pb-30">
        <Navbar />
        <div className="flex flex-col items-center px-10 md:px-30 mt-12 md:mt-25">
          <Image
            src={friskyChocolateRollsText}
            alt="digestive-copy"
            className="w-[70%] md:w-[40%] mx-auto mb-5 md:mb-0"
          />
          <div className="flex">
            <div className="md:px-28">
              <div className="text-lg md:text-4xl leading-4 md:leading-[2rem] text-center mt-6 mb-6">
                <span className="text-base md:text-2xl leading-4 md:leading-[2rem]">
                  Rolled for the Crunch, Filled for the Crave – Chocolate That
                  Flows out like a Pure Bliss.
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={friskyChocolateRolls}
                  alt="boxes-image"
                  className="md:w-[100%]"
                />
              </div>
              <div className="mt-5 mb-5 md:mt-15 md:mb-15 flex justify-center">
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
                      <td className="px-4 py-3 border-r-1">86.4</td>
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
      </div>

      <div className="relative w-full bg-[#96ddf2] pb-10 md:pb-30 pt-10 md:pt-30">
        <div className="flex flex-col items-center px-10 md:px-30">
          <Image
            src={friskyMilkyRollsText}
            alt="digestive-copy"
            className="w-[70%] md:w-[40%] mx-auto mb-5 md:mb-0"
          />
          <div className="flex">
            <div className="md:px-28">
              <div className="text-lg md:text-4xl leading-4 md:leading-[2rem] text-center mt-6 mb-6">
                <span className="text-base md:text-2xl leading-4 md:leading-[2rem]">
                  Soft Creaminess in a Crisp Embrace - Milk Wafer Rolls made to
                  Soothe and Satisfy.
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={friskyMilkyRolls}
                  alt="boxes-image"
                  className="md:w-[100%]"
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
      </div>
      <div className="relative w-full bg-[#ffaa93] pb-10 md:pb-30 pt-10 md:pt-30">
        <div className="flex flex-col items-center px-10 md:px-30">
          <Image
            src={friskyHazelnutRollsText}
            alt="digestive-copy"
            className="w-[70%] md:w-[40%] mx-auto mb-5 md:mb-0"
          />
          <div className="flex float-left">
            <div className="md:px-28">
              <div className="text-lg md:text-4xl leading-4 md:leading-[2rem] text-center mb-6 mt-6">
                <span className="text-base md:text-2xl leading-4 md:leading-[2rem]">
                  A Swirl of Crisp Delight, A Heart of Chocolate Hazelnut Cream
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={friskyHazelnuteRolls}
                  alt="boxes-image"
                  className="md:w-[100%]"
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
                    <tr>
                      <td className="py-3 text-left font-semibold border-r-1">
                        Standard Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">86.4</td>
                      <td className="px-4 py-3 border-r-1">-</td>
                      <td className="px-4 py-3">48</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#d6ac7d] pb-10 md:pb-30 pt-10 md:pt-30">
        <div className="flex flex-col items-center px-10 md:px-30">
          <Image
            src={friskyChocolateCoatedRollsText}
            alt="digestive-copy"
            className="w-[70%] md:w-[40%] mx-auto mb-5 md:mb-0"
          />
          <div className="flex float-left">
            <div className="md:px-28">
              <div className="text-lg md:text-4xl leading-4 md:leading-[2rem] text-center mb-6 mt-6">
                <span className="text-base md:text-2xl leading-4 md:leading-[2rem]">
                  Crisp, Delicately Rolled Wafers Filled to the Brim with
                  Smooth, Creamy Goodness and Generously Coated in Rich
                  Chocolate—Crafted for a Luxurious Crunch and a
                  Melt-in-the-Mouth Finish.
                </span>
              </div>
              <div className="w-full flex justify-center">
                <Image
                  src={friskyChocolateCoatedRollsPack}
                  alt="boxes-image"
                  className="md:w-[100%]"
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
                    <tr>
                      <td className="py-3 text-left font-semibold border-r-1">
                        Standard Pack
                      </td>
                      <td className="px-4 py-3 border-r-1">28</td>
                      <td className="px-4 py-3 border-r-1">9</td>
                      <td className="px-4 py-3">12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Faq productKey="frisky-rolls" />
      </div>
    </div>
  );
}
