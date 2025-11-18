'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import crustRollsChocolateLogo from '../../assets/Innovative-Crust-Rolls-Chocolate-logo.webp';
import crustRollsChocolateBoxWrapper from '../../assets/Crust-Rolls-Chocolate-Product.png';
import crustRollsOrgangeLogo from '../../assets/Innovative-Crust-Rolls-Orange-logo.webp';
import crustRollsOrgangeBoxWrapper from '../../assets/Crust-Rolls-Orange-Product.png';
import crustRollsTestimonial from '../../assets/Innovative-Crust-Rolls.webp';
import Faq from "@/components/Faq";

export default function CrustRollsPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#faa92a] text-[#683410] pb-12 md:pb-25 ">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25">
                  <Image src={crustRollsChocolateLogo} alt='digestive-copy' className="w-[50%] md:w-[30%]"/>
                  <div className="text-[2.5rem] md:text-[7rem] leading-[2.5rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`Roll. Crunch.\nIndulge`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Cream Filled Wafer Rolls`}</div>
                  <div className="text-base md:text-2xl text-left">{`Light, crispy wafer rolls filled with smooth, creamy goodness for a crunchy, indulgent treat.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={crustRollsChocolateBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
                  </div>
              </div>
        </div>     
        <div
          className="w-full bg-[#f87500] text-white">
              <div className="relative flex flex-col px-10 md:px-58 pt-12 md:pt-25 mb-12 md:mb-25">
                  <Image src={crustRollsOrgangeLogo} alt='digestive-copy' className="w-[50%] md:w-[30%]"/>
                  <div className="text-[2.5rem] md:text-[7rem] leading-[2.5rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`Crispy Rolls,\nCitrus Goals.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold">{`Cream Filled Wafer Rolls`}</div>
                  <div className="text-base md:text-2xl text-left">{`Crispy wafer rolls with smooth, tangy orange cream for a zesty, crunchy treat.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={crustRollsOrgangeBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
                  </div>
                    <div className="flex justify-center z-10">
                        <div className="md:w-[80%] mt-5 md:mt-20 md:px-20">
                          <table className="w-full text-center border-spacing-y-2">
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
                                <td className="px-4 py-3 border-r-1">12</td>
                                <td className="px-4 py-3 border-r-1">24</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                              <tr>
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
              <Faq isWhite productKey="crust-rolls"/>
              <div className="w-full flex justify-center">
                <Image src={crustRollsTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[80%] md:w-[50%]"/>
              </div>
        </div>        
      </div>
    );
  }