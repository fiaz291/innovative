'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import tooGudLogo from '../../assets/Innovative-TooGud.webp';
import toooGudBoxWrapper from '../../assets/ToooGud-Product.png';
import tooGudTestimonial from '../../assets/innovative-toogud-image.webp';
import tooGudBiscuit from '../../assets/toogud-cookie.webp';
import Faq from "@/components/Faq";

export default function ToooGudPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#e7ad72] text-[#7f1438]">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={tooGudLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={tooGudBiscuit} alt='digestive-copy' className="absolute w-[20%] right-[-2rem] md:right-[-5rem] top-[-2rem] md:top-[-5rem]"/>
                  <Image src={tooGudBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-2rem] md:left-[-12rem] bottom-[15rem] md:bottom-0 rotate-[113deg]"/>
                  <div className="text-3xl md:text-[8rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`Tooo Good\nTo Shares!`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Rick Egg & Milk Cookies`}</div>
                  <div className="text-base md:text-2xl text-left">{`Toogud combines the goodness of egg and milk for a melt-in-your-mouth cookie experience.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={toooGudBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
                  </div>
                    <div className="flex justify-center z-10">
                        <div className="w-[80%] mt-20 md:px-20">
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
                                <td className="px-4 py-3">12</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite/>
              <div className="w-full flex justify-center"><Image src={tooGudTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[80%] md:w-[50%]"/></div>
        </div>        
      </div>
    );
  }