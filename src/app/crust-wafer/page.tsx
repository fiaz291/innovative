'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import crustChocolateLogo from '../../assets/Innovative-Crust.webp';
import crustOrgangeLogo from '../../assets/Innovative-Crust3.webp';
import crustStrawberryLogo from '../../assets/Innovative-Crust2.webp';
import crustTestimonial from '../../assets/Innovative-Crust-image.webp';
import crustChocolateBoxWrapper from '../../assets/Crust-Chocolate-Product.png';
import crustOrangeBoxWrapper from '../../assets/Crust-Orange-Product.png';
import crustStrawberryBoxWrapper from '../../assets/Crust-Strawberry-Product.png';
import Faq from "@/components/Faq";

export default function CrustWaferPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#ab8150] text-white pb-12 md:pb-25 ">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25">
                  <Image src={crustChocolateLogo} alt='digestive-copy' className="w-[30%]"/>
                  <div className="text-3xl md:text-[7rem] leading-[8rem] font-black whitespace-pre-line">
                    {`Crispy Wafer,\nCreamy Chocolate.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Crispy Creamy Wafers`}</div>
                  <div className="text-base md:text-2xl text-left">{`Crispy wafer layers filled with smooth, chocolatey cream for a crunchy, delightful treat.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={crustChocolateBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
                  </div>
              </div>
        </div>        
        <div
          className="w-full bg-[#ea7832] text-white pb-12 md:pb-25 ">
              <div className="relative flex flex-col px-10 md:px-58 pt-12 md:pt-25">
                  <Image src={crustOrgangeLogo} alt='digestive-copy' className="w-[30%]"/>
                  <div className="text-3xl md:text-[7rem] leading-[8rem] font-black whitespace-pre-line">
                    {`Crunch With A\nCitrus Kick.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold my-2 md:my-5">{`Crispy Creamy Wafers`}</div>
                  <div className="text-base md:text-2xl text-left">{`Crispy wafer layers filled with a burst of tangy orange cream for a light, refreshing treat.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={crustOrangeBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
                  </div>
              </div>
        </div>        
        <div
          className="w-full bg-[#d26999] text-white">
              <div className="relative flex flex-col px-10 md:px-58 pt-12 md:pt-25 mb-12 md:mb-25">
                  <Image src={crustStrawberryLogo} alt='digestive-copy' className="w-[30%]"/>
                  <div className="text-3xl md:text-[7rem] leading-[8rem] font-black whitespace-pre-line">
                    {`Crispy Wafer,\nStrawberry Flavor.`}
                  </div>
                  <div className="text-lg md:text-5xl text-left font-semibold">{`Crispy Creamy Wafers`}</div>
                  <div className="text-base md:text-2xl text-left">{`Light, crispy wafers layered with a burst of sweet strawberry flavor for a delightful crunchy treat.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={crustStrawberryBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
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
              <Faq isWhite/>
              <div className="w-full flex justify-center"><Image src={crustTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[50%]"/></div>
        </div>        
      </div>
    );
  }