'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import butterCrunchLogo from '../../assets/Innovative-Butter-Crunch-logo.webp';
import butterCrunchBox from '../../assets/Innovative-Butter-Crunch-box.webp';
import butterCrunchWrapper from '../../assets/Innovative-Butter-Crunch-wrpper.webp';
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
                  <Image src={butterCrunchBiscuits} alt='digestive-copy' className="absolute w-[30%] right-[-7rem] top-[-5rem]"/>
                  <Image src={butterCrunchBiscuits} alt='digestive-copy' className="absolute w-[30%] left-[-10rem] bottom-[-18rem]"/>
                  <Image src={butterCrunchButter} alt='digestive-copy' className="absolute w-[15%] right-[-2rem] bottom-[5rem]"/>
                  <div className="text-3xl md:text-[8rem] leading-[8rem] font-black whitespace-pre-line">
                    {`Golden oats,\npure delight.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Crunchy Oat Biscuits with Butter`}</div>
                  <div className="text-base md:text-2xl text-left">{`Indulge in the perfect balance of crunchy oats and rich creamy butter with Innovative Crunchy Oat Biscuits. Every bite delivers wholesome texture and irresistable flavor - a satisfying treat for any time of day.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#d39130]"><Image src={butterCrunchBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#d39130]"><Image src={butterCrunchWrapper} alt='digestive-wrapper'/></div>
                  </div>
                    <div className="z-10">
                        <div className="mt-20 px-20">
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
              <Image src={butterCrunchTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }