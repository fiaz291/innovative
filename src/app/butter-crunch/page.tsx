'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import butterCrunchLogo from '../../../public/Logos/Butter-Crundh.png';
import butterCrunchBoxWrapper from '../../assets/Butter-Crunch-Product.png';
import butterCrunchTestimonial from '../../assets/Butter-Crunch-Model.png';
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
                  <Image src={butterCrunchLogo} alt='digestive-copy' className="w-[55vw] md:w-[22vw]"/>
                  <Image src={butterCrunchBiscuits} alt='digestive-copy' className="absolute w-[35%] md:w-[25%] right-[0rem] md:right-[0rem] top-[-2rem] md:top-[-5rem]"/>
                  <Image src={butterCrunchBiscuits} alt='digestive-copy' className="hidden md:block absolute w-[20%] left-[0rem] md:left-[0rem] bottom-[-3.5rem] md:bottom-[-18rem]"/>
                  <Image src={butterCrunchButter} alt='digestive-copy' className="absolute w-[10%] right-[0rem] md:right-[0rem] bottom-[5rem]"/>
                  <div className="mb-6 text-[2.5rem] md:text-[8rem] leading-[2.5rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`Golden Oats,\nPure Delight.`}
                  </div>
                  <div className="text-base md:text-2xl text-left">{`Indulge in the Perfect Balance of Crunchy Oats and Rich Creamy Butter with Innovative Crunchy Oat Biscuits. Every bite delivers Wholesome Texture and Irresistible flavor - a satisfying treat for any time of day.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={butterCrunchBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
                  </div>
                    <div className="flex justify-center z-10">
                        <div className="w-full mt-5 md:mt-20 md:px-20 flex justify-center">
                          <table className="w-full max-w-[900px] text-center border-spacing-y-2 ">
                            <thead>
                              <tr className="text-[10px] md:text-xl border-b-1">
                                <td className="pr-2 md:pr-4 py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                              </tr>
                            </thead>
                            <tbody className="text-[10px] md:text-xl">
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
              <Faq isWhite productKey="butter-crunch"/>
              <div className="w-full flex justify-center"><Image src={butterCrunchTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[80%] md:w-[50%]"/></div>
        </div>        
      </div>
    );
  }