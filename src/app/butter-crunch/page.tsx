'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import butterCrunchLogo from '../../assets/Innovative-Butter-Crunch-logo.webp';
import butterCrunchBoxWrapper from '../../assets/Butter-Crunch-Product.png';
import butterCrunchTestimonial from '../../assets/Innovative-Butter-Crunch-Image.webp';
import butterCrunchButter from '../../assets/butter-crunch-butter.webp';
import butterCrunchBiscuits from '../../assets/innovative-butter-crunch-biscuits.webp';
import Faq from "@/components/Faq";

export default function ButterCrunchPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#febe56] text-[#8b0304]">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={butterCrunchLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={butterCrunchBiscuits} alt='digestive-copy' className="absolute w-[30%] right-[-2rem] md:right-[-7rem] top-[-5rem]"/>
                  <Image src={butterCrunchBiscuits} alt='digestive-copy' className="absolute w-[30%] left-[-2rem] md:left-[-10rem] bottom-[-3.5rem] md:bottom-[-18rem]"/>
                  <Image src={butterCrunchButter} alt='digestive-copy' className="absolute w-[15%] right-[-1rem] md:right-[-2rem] bottom-[5rem]"/>
                  <div className="text-3xl md:text-[8rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`Golden Oats,\nPure Delight.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Crunchy Oat Biscuits with Butter`}</div>
                  <div className="text-base md:text-2xl text-left">{`Indulge in the perfect balance of crunchy oats and rich creamy butter with Innovative Crunchy Oat Biscuits. Every bite delivers wholesome texture and irresistable flavor - a satisfying treat for any time of day.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={butterCrunchBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
                  </div>
                    <div className="flex justify-center z-10">
                        <div className="w-[80%] mt-20 md:px-20">
                          <table className="w-full text-center border-spacing-y-2 ">
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
              <div className="w-full flex justify-center"><Image src={butterCrunchTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[80%] md:w-[50%]"/></div>
        </div>        
      </div>
    );
  }