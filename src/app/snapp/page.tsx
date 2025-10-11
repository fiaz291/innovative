'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import snappLogo from '../../assets/Innovative-Snapp.webp';
import snappBoxWrapper from '../../assets/Snapp-Product.png';
import snappTestimonial from '../../assets/Innovative-Snapp-image.webp';
import snappBiscuit from '../../assets/Innovative-Snapp-Biscuit.webp';
import Faq from "@/components/Faq";

export default function SnappPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#2a5b94] text-white">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={snappLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={snappBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[-5rem]"/>
                  <Image src={snappBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-8rem] bottom-[-8rem] scale-x-[-1] rotate-[-15deg]"/>
                  <div className="text-3xl md:text-[8rem] leading-[8rem] font-black whitespace-pre-line">
                    {`Indulge In\nEvery Snapp.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Creamy Wafer Coated With Indulging Chocoalte`}</div>
                  <div className="text-base md:text-2xl text-left">{`A light crispy wafer filled with smooth cream and wrapped in rich, indulgent chocolate for the perfect crunchy bite.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={snappBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
                  </div>
                    <div className="flex justify-center z-10">
                        <div className="w-[80%] mt-20 md:px-20">
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
                                <td className="py-3 text-left font-semibold border-r-1">Ticky Pack</td>
                                <td className="px-4 py-3 border-r-1">4</td>
                                <td className="px-4 py-3 border-r-1">48</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                              <tr>
                                <td className="py-3 text-left font-semibold border-r-1">Snack Roll</td>
                                <td className="px-4 py-3 border-r-1">8.5</td>
                                <td className="px-4 py-3 border-r-1">24</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite/>
              <div className="w-full flex justify-center"><Image src={snappTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[50%]"/></div>
        </div>        
      </div>
    );
  }