'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import bittensLogo from '../../assets/Innovative-Bitten.png';
import bittensBoxWrapper from '../../assets/Bitten-Product.png';
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
                  <Image src={bittensLogo} alt='digestive-copy' className="w-[50%] md:w-[30%]"/>
                  <Image src={bittensChocolate2} alt='digestive-copy' className="absolute w-[25%] right-[-2rem]"/>
                  <Image src={bittensChocolate1} alt='digestive-copy' className="absolute w-[20%] left-[-2rem] bottom-[8rem] md:bottom-[-7rem]"/>
                  <div className="text-[2.5rem] md:text-[8rem] leading-[2.5rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`Smooth Milk\nChocolate`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Smooth, rich and perfectly sweet`}</div>
                  <div className="text-base md:text-2xl text-left">{`The chocolate bar that brings joy in every bite.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={bittensBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
                  </div>
                    <div className="flex justify-center z-10">
                        <div className="md:w-[80%] mt-5 md:mt-20 md:px-20">
                          <table className="w-full text-center border-spacing-y-2 text-black">
                            <thead>
                              <tr className="text-[10px] md:text-xl border-b-1">
                                <td className="py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                              </tr>
                            </thead>
                            <tbody className="text-[10px] md:text-xl">
                              <tr>
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
              <div className="w-full flex justify-center"><Image src={bittensTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[80%] md:w-[50%]"/></div>
        </div>        
      </div>
    );
  }