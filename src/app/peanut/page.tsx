'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import peanutLogo from '../../assets/Innovative-Peanut.webp';
import peanutBoxWrapper from '../../assets/Peanut-Product.png';
import peanutTestimonial from '../../assets/Innovative-Peanut-iamge.webp';
import peanutBiscuit from '../../assets/Innovative-Peanut-Biscuit.webp';
import Faq from "@/components/Faq";

export default function PeanutPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#66c9c7] text-[#064c5e]">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={peanutLogo} alt='digestive-copy' className="w-[50%] md:w-[30%]"/>
                  <Image src={peanutBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[-2rem] md:right-[-14rem] top-0 md:top-[8rem]"/>
                  <Image src={peanutBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-4rem] md:left-[-16rem] bottom-[12rem] md:bottom-[-24rem]"/>
                  <div className="text-5xl md:text-[8rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`Taste The\nGoodness.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Delicious Wheat Biscuits`}</div>
                  <div className="text-base md:text-2xl text-left">{`Experience the art of mindful snacking with Innovative Digestive Biscuits — thoughtfully crafted with whole wheat and brown sugar, delivering natural goodness in every bite for a satisfying, guilt-free treat.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={peanutBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
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
              <div className="w-full flex justify-center"><Image src={peanutTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[80%] md:w-[50%]"/></div>
        </div>        
      </div>
    );
  }