'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import charmLogo from '../../assets/Innovative-Charm.webp';
import charmBoxWrapper from '../../assets/Charm-Product.png';
import charmTestimonial from '../../assets/Innovative-Charm-Image.webp';
import charmBiscuit from '../../assets/Innovative-Charm-Biscuit.webp';
import Faq from "@/components/Faq";

export default function CharmPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#992c2c] text-[#ffd879]">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={charmLogo} alt='digestive-copy' className="w-[50%] md:w-[30%]"/>
                  <Image src={charmBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[-1rem] md:right-[-3rem] top-[-1rem] md:top-[-3rem]"/>
                  <Image src={charmBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-4rem] md:left-[-11rem] bottom-[8rem] md:bottom-[-20rem] rorate-[-35deg]"/>
                  <div className="text-[2.5rem] md:text-[8rem] leading-[2.5rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`Filled With\nPure Joy.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Chocolate Filled Delicious Cookies`}</div>
                  <div className="text-base md:text-2xl text-left">{`Baked with love, filled with joy - chocolate at the heart of every cookie.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={charmBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
                  </div>
                    <div className="flex justify-center z-10">
                        <div className="md:w-[80%] mt-5 md:mt-20 md:px-20">
                          <table className="w-full text-center border-spacing-y-2 text-white">
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
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">11.5</td>
                                <td className="px-4 py-3 border-r-1">24</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite/>
              <div className="w-full flex justify-center"><Image src={charmTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[80%] md:w-[50%]"/></div>
        </div>        
      </div>
    );
  }