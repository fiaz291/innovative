'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import zeeraLogo from '../../assets/Innovative-Zeera.png';
import zeeraBox from '../../assets/innovative-zeera-box.webp';
import zeeraWrapper from '../../assets/innovative-zeera-wrapper.webp';
import zeeraTestimonial from '../../assets/innovative-zeera-image.webp';
import zeeraBiscuit from '../../assets/innovative-zeera-biscuit.webp';
import Faq from "@/components/Faq";

export default function DigestivePremiumPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#bdaaa6] text-[#7e3f1e]">
              <Navbar isPremium={false} isTextWhite/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={zeeraLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={zeeraBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[-7rem]"/>
                  <Image src={zeeraBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-12rem] bottom-[-24rem]"/>
                  <div className="text-3xl md:text-8xl font-black whitespace-pre-line">
                    {`Crisp with\na cumin kick.`}
                  </div>
                  <div className="text-lg md:text-4xl text-left font-semibold">{`Tasty Salty Biscuits with Cumin Seeds`}</div>
                  <div className="text-base md:text-2xl text-left">{`Crunchy biscuits loaded with the rich flavor of roasted peanuts for a nutty treat in every bite.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#7e3f1e]"><Image src={zeeraBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#7e3f1e]"><Image src={zeeraWrapper} alt='digestive-wrapper'/></div>
                  </div>
                    <div className="z-10">
                        <div className="mt-5">
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
              <Image src={zeeraTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }