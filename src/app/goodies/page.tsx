'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import goodiesLogo from '../../assets/Innovative-Goodies.webp';
import goodiesBox from '../../assets/Innovative-Goodies-box.webp';
import goodiesWrapper from '../../assets/Innovative-Goodies-wrapper.webp';
import goodiesLemonBox from '../../assets/Innovative-Goodies-box-lemon.webp';
import goodiesLemonWrapper from '../../assets/Innovative-Goodies-wrapper-lemon.webp';
import goodiesTestimonial from '../../assets/Innovative-Goodies-Image.webp';
import goodiesBiscuit from '../../assets/goodies-biscuit.webp';
import Faq from "@/components/Faq";

export default function GoodiesPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#9e2e30] text-white pb-12 md:pb-25 ">
              <Navbar isPremium={false} isTextWhite/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25">
                  <Image src={goodiesLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={goodiesBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[-7rem]"/>
                  <div className="text-3xl md:text-8xl font-black whitespace-pre-line">
                    {`Classic taste,\nfresh goodness.`}
                  </div>
                  <div className="text-lg md:text-4xl text-left font-semibold">{`Egg & Milk Biscuits`}</div>
                  <div className="text-base md:text-2xl text-left">{`The perfect blend of fresh eggs and creamy milk - a biscuit that's soft, golden, and full of homemade comfort.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#fb8587]"><Image src={goodiesBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#fb8587]"><Image src={goodiesWrapper} alt='digestive-wrapper'/></div>
                  </div>
                    <div className="z-10">
                        <div className="mt-5">
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
                                <td className="py-3 text-left font-semibold border-r-1">Munch Pack</td>
                                <td className="px-4 py-3 border-r-1">35.2</td>
                                <td className="px-4 py-3 border-r-1">12</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
        </div>        
        <div
          className="w-full bg-[#b2d235] text-[#365a04]">
              <div className="relative flex flex-col px-10 md:px-58 pt-12 md:pt-25 mb-12 md:mb-25">
                  <Image src={goodiesLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={goodiesBiscuit} alt='digestive-copy' className="absolute w-[25%] my-auto left-[-12rem] bottom-0 top-[10rem] rotate-[60deg]"/>
                  <div className="text-3xl md:text-8xl font-black whitespace-pre-line">
                    {`Classic taste,\nfresh goodness.`}
                  </div>
                  <div className="text-lg md:text-4xl text-left font-semibold">{`Egg & Milk Biscuits`}</div>
                  <div className="text-base md:text-2xl text-left">{`Crisp elegance with a citrus twist - the luxury of lemon, egg, and milk in every golden bite.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#365a04]"><Image src={goodiesLemonBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#365a04]"><Image src={goodiesLemonWrapper} alt='digestive-wrapper'/></div>
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
                                <td className="px-4 py-3 border-r-1">17.6</td>
                                <td className="px-4 py-3 border-r-1">12</td>
                                <td className="px-4 py-3">30</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Mini Half Roll</td>
                                <td className="px-4 py-3 border-r-1">35.2</td>
                                <td className="px-4 py-3 border-r-1">12</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                              <tr>
                                <td className="py-3 text-left font-semibold border-r-1">Half Roll</td>
                                <td className="px-4 py-3 border-r-1">52.8</td>
                                <td className="px-4 py-3 border-r-1">8</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite/>
              <Image src={goodiesTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }