'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import bittensLogo from '../../assets/Innovative-Bitten.png';
import bittensBox from '../../assets/Innovative-Bitten-box.webp';
import bittensWrapper from '../../assets/Innovative-Bitten-wrapper.webp';
import bittensTestimonial from '../../assets/Innovative-Bitten-image.webp';
import bittensChocolate1 from '../../assets/Innovative-Bitten-Chocolate1.webp';
import bittensChocolate2 from '../../assets/Innovative-Bitten-Chocolate2.webp';
import Faq from "@/components/Faq";

export default function BittensPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#87d9eb] text-[#282353]">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={bittensLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={bittensChocolate2} alt='digestive-copy' className="absolute w-[25%] right-0"/>
                  <Image src={bittensChocolate1} alt='digestive-copy' className="absolute w-[20%] left-[-2rem] bottom-[-7rem]"/>
                  <div className="text-3xl md:text-[8rem] leading-[8rem] font-black whitespace-pre-line">
                    {`Smooth Milk\nChocolate`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Smooth, rich and perfectly sweet`}</div>
                  <div className="text-base md:text-2xl text-left">{`The chocolate bar that brings joy in every bite.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="flex items-center w-[50%] bg-[#c0f4ff]"><Image src={bittensBox} alt='digestive-box'/></div>
                    <div className="flex items-center justify-center w-[50%] bg-[#c0f4ff]"><Image src={bittensWrapper} alt='digestive-wrapper' className="w-[70%]"/></div>
                  </div>
                    <div className="z-10">
                        <div className="mt-20 px-20">
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
                                <td className="py-3 text-left font-semibold border-r-1">Standard Pack</td>
                                <td className="px-4 py-3 border-r-1">35</td>
                                <td className="px-4 py-3 border-r-1">12</td>
                                <td className="px-4 py-3">12</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite/>
              <Image src={bittensTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }