'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import chocChipLogo from '../../../public/Logos/Choc-n-Chip.png';
import chocChipBoxWrapper from '../../assets/ChocnChip-Product.png';
import chocChipTestimonial from '../../assets/Innovative-Choc-n-Chip-Image.webp';
import chocChipBiscuit from '../../assets/Innovative-Choc-n-Chip-Biscuits.webp';
import Faq from "@/components/Faq";

export default function ChocChipPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#87d9eb] text-[#054e9c]">
              <Navbar isPremium={false}/>
              <div className="relative flex flex-col px-10 md:px-58 mt-12 md:mt-25 mb-12 md:mb-25">
                  <Image src={chocChipLogo} alt='digestive-copy' className="w-[55%] md:w-[35%]"/>
                  <Image src={chocChipBiscuit} alt='digestive-copy' className="absolute w-[25%] md:w-[20%] right-[0rem] md:right-[0rem] top-[-2rem] md:top-[-6rem]"/>
                  <Image src={chocChipBiscuit} alt='digestive-copy' className="hidden md:block absolute w-[20%] left-[0rem] md:left-[0rem] bottom-[-2rem] md:bottom-[-20rem]"/>
                  <div className="mb-10 text-[2.5rem] md:text-[8rem] leading-[2.5rem] md:leading-[8rem] font-black whitespace-pre-line">
                    {`Chip In.\nChoc Out.`}
                  </div>
                  <div className="text-base md:text-2xl text-left">{`Crunchy Edges, Gooey Chips, and that just-right Sweetness - everything you love in a chocolate chip biscuit.`}</div>
                  <div className="flex mt-5 md:mt-10">
                    <Image src={chocChipBoxWrapper} alt='digestive-box' className="relative left-[-25px] md:left-[-65px]"/>
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
                                <td className="py-3 text-left font-semibold border-r-1">Ticky Pack</td>
                                <td className="px-4 py-3 border-r-1">7</td>
                                <td className="px-4 py-3 border-r-1">48</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                              <tr>
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">14</td>
                                <td className="px-4 py-3 border-r-1">24</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                  </div>
              </div>
              <Faq isWhite productKey="choc-n-chip"/>
              <div className="w-full flex justify-center"><Image src={chocChipTestimonial} alt='bg-lp' className="mt-12 md:mt-25 w-[80%] md:w-[50%]"/></div>
        </div>        
      </div>
    );
  }