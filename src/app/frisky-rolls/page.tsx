'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import friskyChocolateRollsText from '../../assets/frisky-chocolate-rolls-copy.webp';
import friskyChocolateRolls from '../../assets/frisky-chocolate-rolls.webp'
import friskyHazelnutRollsText from '../../assets/frisky-hazelnut-rolls-copy.webp';
import friskyHazelnuteRolls from '../../assets/frisky-hazelnut-rolls.webp'
import friskyMilkyRollsText from '../../assets/frisky-milky-rolls-copy.webp';
import friskyMilkyRolls from '../../assets/frisky-milky-rolls.webp'
import Faq from "@/components/Faq";

export default function FriskyRollsPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#ffbe76] pb-10">
              <Navbar />
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={friskyChocolateRollsText} alt='digestive-copy' className="w-[100%] mx-auto"/>
                  <div className="flex">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">Rolled for the Crunch, Filled for the Crave<span className="text-base md:text-2xl font-medium"> - Chocolate That Twists Into Pure Bliss.</span></div>
                        <div className="mt-15 mb-15">
                          <table className="w-full md:w-[70%] text-center border-spacing-y-2">
                            <thead>
                              <tr className="text-base md:text-xl border-b-1">
                                <td className="py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                              </tr>
                            </thead>
                            <tbody className="text-base md:text-xl">
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Standard Pack</td>
                                <td className="px-4 py-3 border-r-1">86.4</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">48</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">32.4</td>
                                <td className="px-4 py-3 border-r-1">10</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <Image src={friskyChocolateRolls} alt='boxes-image' className="hidden md:block w-[100%]"/>
              </div>
        </div>
        <div
          className="relative w-full bg-[#ffaa93] pb-10">
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={friskyHazelnutRollsText} alt='digestive-copy' className="w-[100%] mx-auto"/>
                  <div className="flex float-left">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">A Swirl of Crisp Delight, a Heart of Hazelnut Gold</div>
                        <div className="mt-15 mb-15">
                          <table className="w-full md:w-[70%] text-center border-spacing-y-2">
                            <thead>
                              <tr className="text-base md:text-xl border-b-1">
                                <td className="py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                              </tr>
                            </thead>
                            <tbody className="text-base md:text-xl">
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Standard Pack</td>
                                <td className="px-4 py-3 border-r-1">86.4</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">48</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <Image src={friskyHazelnuteRolls} alt='boxes-image' className="hidden md:block w-[100%]"/>
              </div>
        </div>
        <div
          className="relative w-full bg-[#96ddf2] pb-10">
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={friskyMilkyRollsText} alt='digestive-copy' className="w-[100%] mx-auto"/>
                  <div className="flex">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">Soft Creaminess in a Crisp Embrace <span className="text-base md:text-2xl font-medium"> - Milk Wafer Rolls Made to Soothe and Satisfy.</span></div>
                        <div className="mt-15 mb-15">
                          <table className="w-full md:w-[70%] text-center border-spacing-y-2">
                            <thead>
                              <tr className="text-base md:text-xl border-b-1">
                                <td className="py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                              </tr>
                            </thead>
                            <tbody className="text-base md:text-xl">
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Standard Pack</td>
                                <td className="px-4 py-3 border-r-1">84.4</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">48</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">32.4</td>
                                <td className="px-4 py-3 border-r-1">10</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <Image src={friskyMilkyRolls} alt='boxes-image' className="hidden md:block w-[100%]"/>
              </div>
              <Faq />
        </div>
      </div>
    );
  }
  