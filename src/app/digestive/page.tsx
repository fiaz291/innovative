'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import digestiveLogo from '../../assets/innovative-digestive-logo.png';
import digestiveBox from '../../assets/innovative-digestive-box.webp';
import digestiveWrapper from '../../assets/innovative-digestive-wrapper.webp';
import digestiveTestimonial from '../../assets/innovative-digestive-image.webp';
import innovativeBiscuit from '../../assets/innovative-biscuit.webp';
import digestiveWheat from '../../assets/digestive-wheat.webp';
import Faq from "@/components/Faq";

export default function DigestivePremiumPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#9f2a2a] text-white">
              <Navbar isPremium={false} isTextWhite/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={digestiveLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={innovativeBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[-7rem]"/>
                  <Image src={digestiveWheat} alt='digestive-copy' className="absolute w-[15%] left-[-3rem] top-[-1rem]"/>
                  <Image src={innovativeBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-12rem] bottom-[-24rem]"/>
                  <Image src={digestiveWheat} alt='digestive-copy' className="absolute w-[15%] right-[-2rem] bottom-[-5rem] rotate-[150deg]"/>
                  <div className="text-3xl md:text-8xl font-black whitespace-pre-line">
                    {`Taste the\nGoodness.`}
                  </div>
                  <div className="text-lg md:text-4xl text-left font-semibold">{`Delicious Wheat Biscuits`}</div>
                  <div className="text-base md:text-2xl text-left">{`Experience the art of mindful snacking with Innovative Digestive Biscuits — thoughtfully crafted with whole wheat and brown sugar, delivering natural goodness in every bite for a satisfying, guilt-free treat.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#e8ac5b]"><Image src={digestiveBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#e8ac5b]"><Image src={digestiveWrapper} alt='digestive-wrapper'/></div>
                  </div>
                    <div className="z-10">
                        <div className="mt-5">
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
              <Image src={digestiveTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }