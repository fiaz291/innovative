'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import tooGudLogo from '../../assets/Innovative-TooGud.webp';
import tooGudBox from '../../assets/innovative-toogud-box.webp';
import tooGudWrapper from '../../assets/innovative-toogud-wrapper.webp';
import tooGudTestimonial from '../../assets/innovative-toogud-image.webp';
import tooGudBiscuit from '../../assets/toogud-cookie.webp';
import Faq from "@/components/Faq";

export default function ToooGudPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#e7ad72] text-[#7f1438]">
              <Navbar isPremium={false} isTextWhite/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={tooGudLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={tooGudBiscuit} alt='digestive-copy' className="absolute w-[30%] right-[-10rem] top-[-5rem]"/>
                  <Image src={tooGudBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-12rem] bottom-0 rotate-[113deg]"/>
                  <div className="text-3xl md:text-8xl font-black whitespace-pre-line">
                    {`Too Good\nto Share!s`}
                  </div>
                  <div className="text-lg md:text-4xl text-left font-semibold">{`Rick Egg & Milk Cookies`}</div>
                  <div className="text-base md:text-2xl text-left">{`Toogud combines the goodness of egg and milk for a melt-in-your-mouth cookie experience.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#ffd8b0]"><Image src={tooGudBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#ffd8b0]"><Image src={tooGudWrapper} alt='digestive-wrapper'/></div>
                  </div>
                    <div className="z-10">
                        <div className="mt-5">
                          <table className="w-full text-center border-spacing-y-2 text-black">
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
                                <td className="py-3 text-left font-semibold border-r-1">Munch Pack</td>
                                <td className="px-4 py-3 border-r-1">36</td>
                                <td className="px-4 py-3 border-r-1">12</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Mini Half Roll</td>
                                <td className="px-4 py-3 border-r-1">54</td>
                                <td className="px-4 py-3 border-r-1">8</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                              <tr>
                                <td className="py-3 text-left font-semibold border-r-1">Half Roll</td>
                                <td className="px-4 py-3 border-r-1">72</td>
                                <td className="px-4 py-3 border-r-1">6</td>
                                <td className="px-4 py-3">12</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite/>
              <Image src={tooGudTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }