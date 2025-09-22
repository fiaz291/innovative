'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import chocoRingsLogo from '../../assets/Innovative-Choco-Rings-logo.webp';
import chocoRingsBox from '../../assets/Innovative-Choco-Rings-box.webp';
import chocoRingsWrapper from '../../assets/Innovative-Choco-Rings-wrapper.webp';
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
                  <Image src={chocoRingsLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={chocoRingsBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[4rem] top-[-6rem]"/>
                  <Image src={chocoRingsBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-12rem] bottom-[-16rem]"/>
                  <Image src={chocoRingsBiscuit} alt='digestive-copy' className="absolute w-[15%] left-0 top-[20rem]"/>
                  <div className="text-3xl md:text-[8rem] leading-[8rem] font-black whitespace-pre-line">
                    {`A perfect\nchoco circle.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Biscuits Coated with Indulging Chocolate`}</div>
                  <div className="text-base md:text-2xl text-left">{`Delicious biscuits coated in rich, indulgent chocolate for a perfectly sweet crunchy treat.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="flex items-center justify-center w-[50%] bg-[#c7a28c]"><Image src={chocoRingsBox} alt='digestive-box'/></div>
                    <div className="flex items-center justify-center w-[50%] bg-[#c7a28c]"><Image src={chocoRingsWrapper} alt='digestive-wrapper' className="w-[70%]"/></div>
                  </div>
                    <div className="z-10">
                        <div className="mt-20 px-20">
                          <table className="w-full text-center border-spacing-y-2 text-white">
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
              <Image src={chocoRingsTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }