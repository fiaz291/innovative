'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import peanutLogo from '../../assets/Innovative-Peanut.webp';
import peanutBox from '../../assets/Innovative-Peanut-Box.webp';
import peanutWrapper from '../../assets/Innovative-Peanut-Wrapper.webp';
import peanutTestimonial from '../../assets/Innovative-Peanut-iamge.webp';
import peanutBiscuit from '../../assets/Innovative-Peanut-Biscuit.webp';
import Faq from "@/components/Faq";

export default function PeanutPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#59c0be] text-[#064c5e]">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={peanutLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={peanutBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[-14rem] top-[8rem]"/>
                  <Image src={peanutBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-16rem] bottom-[-24rem]"/>
                  <div className="text-3xl md:text-[8rem] leading-[8rem] font-black whitespace-pre-line">
                    {`Taste the\nGoodness.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Delicious Wheat Biscuits`}</div>
                  <div className="text-base md:text-2xl text-left">{`Experience the art of mindful snacking with Innovative Digestive Biscuits — thoughtfully crafted with whole wheat and brown sugar, delivering natural goodness in every bite for a satisfying, guilt-free treat.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#064c5e]"><Image src={peanutBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#064c5e]"><Image src={peanutWrapper} alt='digestive-wrapper'/></div>
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
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">18</td>
                                <td className="px-4 py-3 border-r-1">24</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Mini Half Roll</td>
                                <td className="px-4 py-3 border-r-1">36</td>
                                <td className="px-4 py-3 border-r-1">12</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                              <tr>
                                <td className="py-3 text-left font-semibold border-r-1">Half Roll</td>
                                <td className="px-4 py-3 border-r-1">53</td>
                                <td className="px-4 py-3 border-r-1">8</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite/>
              <Image src={peanutTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }