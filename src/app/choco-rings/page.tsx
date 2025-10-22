'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import chocoRingsLogo from '../../assets/Innovative-Choco-Rings-logo.webp';
import chocoRingsBoxWrapper from '../../assets/Choco-Rings-Product.png';
import chocoRingsTestimonial from '../../assets/Innovative-Choco-Rings.webp';
import chocoRingsBiscuit from '../../assets/Innovative-Choco-Rings-Product.webp';
import Faq from "@/components/Faq";

export default function ChocoRingsPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#8d664f] text-[#dfdab8]">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={chocoRingsLogo} alt='digestive-copy' className="w-[50%] md:w-[30%]"/>
                  <Image src={chocoRingsBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[4rem] top-[-2rem] md:top-[-6rem]"/>
                  <Image src={chocoRingsBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-3rem] md:left-[-12rem] bottom-[-2rem] md:bottom-[-16rem]"/>
                  <Image src={chocoRingsBiscuit} alt='digestive-copy' className="absolute w-[15%] left-[-1rem] md:left-[-2rem] top-[20rem]"/>
                  <div className="text-[2.5rem] md:text-[8rem] leading-[2.5rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`A Perfect\nChoco Circle.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Biscuits Coated with Indulging Chocolate`}</div>
                  <div className="text-base md:text-2xl text-left">{`Delicious biscuits coated in rich, indulgent chocolate for a perfectly sweet crunchy treat.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={chocoRingsBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
                  </div>
                    <div className="flex justify-center z-10">
                        <div className="md:w-[80%] mt-5 md:mt-20 md:px-20">
                          <table className="w-full text-center border-spacing-y-2 text-white">
                            <thead>
                              <tr className="text-[10px] md:text-xl border-b-1">
                                <td className="py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                              </tr>
                            </thead>
                            <tbody className="text-[10px] md:text-xl">
                              <tr>
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">17.5</td>
                                <td className="px-4 py-3 border-r-1">12</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite/>
              <div className="w-full flex justify-center"><Image src={chocoRingsTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[80%] md:w-[50%]"/></div>
        </div>        
      </div>
    );
  }