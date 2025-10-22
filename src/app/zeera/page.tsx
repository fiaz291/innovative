'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import zeeraLogo from '../../assets/Innovative-Zeera.png';
import zeeraBoxWrapper from '../../assets/Zeera-Product.png';
import zeeraTestimonial from '../../assets/innovative-zeera-image.webp';
import zeeraBiscuit from '../../assets/innovative-zeera-biscuit.webp';
import Faq from "@/components/Faq";

export default function ZeeraPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#bdaaa6] text-[#7e3f1e]">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={zeeraLogo} alt='digestive-copy' className="w-[50%] md:w-[30%]"/>
                  <Image src={zeeraBiscuit} alt='digestive-copy' className="absolute w-[18%] right-[-2rem] md:right-[-4rem]"/>
                  <Image src={zeeraBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-4rem] md:left-[-12rem] bottom-[12rem] md:bottom-[-24rem]"/>
                  <div className="text-5xl md:text-[8rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`Crisp With\nA Cumin Kick.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Tasty Salty Biscuits with Cumin Seeds`}</div>
                  <div className="text-base md:text-2xl text-left">{`Crunchy biscuits loaded with the rich flavor of roasted peanuts for a nutty treat in every bite.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={zeeraBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
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
              <div className="w-full flex justify-center"><Image src={zeeraTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[80%] md:w-[50%]"/></div>
        </div>        
      </div>
    );
  }