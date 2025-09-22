'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import jumboJuniorLogo from '../../assets/Innovative-Jumbo-Junior.webp';
import jumboJuniorBox from '../../assets/Innovative-Jumbo-Junior-Box.webp';
import jumboJuniorWrapper from '../../assets/Innovative-Jumbo-Junior-Wrapper.webp';
import jumboJuniorTestimonial from '../../assets/Innovative-Jumbo-Junior-imagr.webp';
import jumboJuniorBiscuit from '../../assets/Innovative-Jumbo-Junior-Biscuits.webp';
import Faq from "@/components/Faq";

export default function JumboJuniorPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#2090b8] text-white">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={jumboJuniorLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={jumboJuniorBiscuit} alt='digestive-copy' className="absolute w-[20%] right-[-5rem] top-[-6rem]"/>
                  <Image src={jumboJuniorBiscuit} alt='digestive-copy' className="absolute w-[20%] left-[-6rem] bottom-[20rem] rotate-[-55deg]"/>
                  <div className="text-3xl md:text-[8rem] leading-[8rem] font-black whitespace-pre-line">
                    {`Strong, smart,\nand super fun!`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Engergy Biscuits`}</div>
                  <div className="text-base md:text-2xl text-left">{`Wholesome, crunchy biscuits packed with energy to keep kids active, strong, and smiling all day.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#8dc1ff]"><Image src={jumboJuniorBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#8dc1ff]"><Image src={jumboJuniorWrapper} alt='digestive-wrapper'/></div>
                  </div>
                    <div className="z-10">
                        <div className="mt-20 px-20">
                          <table className="w-full text-center border-spacing-y-2">
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
                                <td className="py-3 text-left font-semibold border-r-1">Ticky Pack</td>
                                <td className="px-4 py-3 border-r-1">9.6</td>
                                <td className="px-4 py-3 border-r-1">48</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">21.4</td>
                                <td className="px-4 py-3 border-r-1">24</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite/>
              <Image src={jumboJuniorTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }