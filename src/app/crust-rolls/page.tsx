'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import crustRollsChocolateLogo from '../../assets/Innovative-Crust-Rolls-Chocolate-logo.webp';
import crustRollsChocolateBox from '../../assets/Innovative-Crust-Rolls-chocolate-box.webp';
import crustRollsChocolateWrapper from '../../assets/Innovative-Crust-Rolls-chocolate-wraper.webp';
import crustRollsOrgangeLogo from '../../assets/Innovative-Crust-Rolls-Orange-logo.webp';
import crustRollsOrgangeBox from '../../assets/Innovative-Crust-Rolls-Orange-box.webp';
import crustRollsOrgangeWrapper from '../../assets/Innovative-Crust-Rolls-Orange-wraper.webp';
import crustRollsTestimonial from '../../assets/Innovative-Crust-Rolls.webp';
import Faq from "@/components/Faq";

export default function CrustRollsPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#fabe2b] text-[#683410] pb-12 md:pb-25 ">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25">
                  <Image src={crustRollsChocolateLogo} alt='digestive-copy' className="w-[30%]"/>
                  <div className="text-3xl md:text-[7rem] leading-[8rem] font-black whitespace-pre-line">
                    {`Roll. crunch.\nindulge`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Cream Filled Wafer Rolls`}</div>
                  <div className="text-base md:text-2xl text-left">{`Light, crispy wafer rolls filled with smooth, creamy goodness for a crunchy, indulgent treat.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#d3a46e]"><Image src={crustRollsChocolateBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#d3a46e]"><Image src={crustRollsChocolateWrapper} alt='digestive-wrapper'/></div>
                  </div>
              </div>
        </div>     
        <div
          className="w-full bg-[#ed7024] text-white">
              <div className="relative flex flex-col px-10 md:px-58 pt-12 md:pt-25 mb-12 md:mb-25">
                  <Image src={crustRollsOrgangeLogo} alt='digestive-copy' className="w-[30%]"/>
                  <div className="text-3xl md:text-[7rem] leading-[8rem] font-black whitespace-pre-line">
                    {`Crispy rolls,\ncitrus goals.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold">{`Cream Filled Wafer Rolls`}</div>
                  <div className="text-base md:text-2xl text-left">{`Crispy wafer rolls with smooth, tangy orange cream for a zesty, crunchy treat.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#ffdd75]"><Image src={crustRollsOrgangeBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#ffdd75]"><Image src={crustRollsOrgangeWrapper} alt='digestive-wrapper'/></div>
                  </div>
                    <div className="z-10">
                        <div className="mt-20 px-20">
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
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">12</td>
                                <td className="px-4 py-3 border-r-1">24</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Munch Pack</td>
                                <td className="px-4 py-3 border-r-1">25</td>
                                <td className="px-4 py-3 border-r-1">12</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite/>
              <Image src={crustRollsTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }