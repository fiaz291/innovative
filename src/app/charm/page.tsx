'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import charmLogo from '../../assets/Innovative-Charm.webp';
import charmBox from '../../assets/Innovative-Charm-Box.webp';
import charmWrapper from '../../assets/Innovative-Charm-Wrapper.webp';
import charmTestimonial from '../../assets/Innovative-Charm-Image.webp';
import charmBiscuit from '../../assets/Innovative-Charm-Biscuit.webp';
import Faq from "@/components/Faq";

export default function CharmPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#992c2c] text-[#ffd879]">
              <Navbar isPremium={false} isTextWhite/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={charmLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={charmBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[-3rem] top-[-3rem]"/>
                  <Image src={charmBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-11rem] bottom-[-20rem] rorate-[-35deg]"/>
                  <div className="text-3xl md:text-8xl font-black whitespace-pre-line">
                    {`Filled with\npure joy.`}
                  </div>
                  <div className="text-lg md:text-4xl text-left font-semibold">{`Chocolate Filled Delicious Cookies`}</div>
                  <div className="text-base md:text-2xl text-left">{`Baked with love, filled with joy - chocolate at the heart of every cookie.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#d28382]"><Image src={charmBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#d28382]"><Image src={charmWrapper} alt='digestive-wrapper'/></div>
                  </div>
                    <div className="z-10">
                        <div className="mt-5">
                          <table className="w-full text-center border-spacing-y-2 text-white">
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
              <Image src={charmTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }