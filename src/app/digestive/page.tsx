'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import digestiveLogo from '../../assets/innovative-digestive-logo.png';
import digestiveBoxWrapper from '../../assets/boxWrapper.png';
import digestiveTestimonial from '../../assets/Innovative-Digestiveimage.png';
import innovativeBiscuit from '../../assets/innovative-biscuit.webp';
import digestiveWheat from '../../assets/digestive-wheat.webp';
import Faq from "@/components/Faq";

export default function DigestivePage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#7d1124] text-white">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={digestiveLogo} alt='digestive-copy' className="w-[50%] md:w-[30%]"/>
                  <Image src={innovativeBiscuit} alt='digestive-copy' className="absolute w-[30%] md:w-[20%] right-[-3rem] md:right-[-6rem]"/>
                  <Image src={digestiveWheat} alt='digestive-copy' className="absolute w-[15%] left-[-1rem] md:left-[-3rem] top-[-5rem] md:top-[-1rem]"/>
                  <Image src={innovativeBiscuit} alt='digestive-copy' className="absolute w-[20%] left-[-3rem] md:left-[-10rem] bottom-[12rem] md:bottom-[-24rem]"/>
                  <Image src={digestiveWheat} alt='digestive-copy' className="absolute w-[15%] right-[-1rem] md:right-[-2rem] bottom-[-5rem] rotate-[150deg]"/>
                  <div className="text-5xl md:text-[8rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`Taste the\nGoodness.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Delicious Wheat Biscuits`}</div>
                  <div className="text-base md:text-2xl text-left">{`Experience the art of mindful snacking with Innovative Digestive Biscuits — thoughtfully crafted with whole wheat and brown sugar, delivering natural goodness in every bite for a satisfying, guilt-free treat.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={digestiveBoxWrapper} alt='digestive-box' className="w-full relative left-[-25px] md:left-[-65px]"/>
                  </div>
                    <div className="flex justify-center z-10">
                        <div className="md:w-[80%] md:mt-20 md:px-20">
                          <table className="w-full text-center border-spacing-y-2">
                            <thead>
                              <tr className="text-xs md:text-xl border-b-1">
                                <td className="pr-2 md:pr-0 py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                              </tr>
                            </thead>
                            <tbody className="text-xs md:text-xl">
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
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite/>
              <div className="w-full flex justify-center">
                <Image src={digestiveTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[80%] md:w-[50%]"/>
              </div>
        </div>        
      </div>
    );
  }