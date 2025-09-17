'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import chocChipLogo from '../../assets/Innovative-Choc-n-Chip.webp';
import chocChipBox from '../../assets/Innovative-Choc-n-Chip-Box.webp';
import chocChipWrapper from '../../assets/Innovative-Choc-n-Chip-Wrapper.webp';
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
                  <Image src={chocChipLogo} alt='digestive-copy' className="w-[30%]"/>
                  <Image src={chocChipBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[-5rem] top-[-6rem]"/>
                  <Image src={chocChipBiscuit} alt='digestive-copy' className="absolute w-[25%] left-[-12rem] bottom-[-20rem]"/>
                  <div className="text-3xl md:text-8xl font-black whitespace-pre-line">
                    {`Chip In.\nChoc Out.`}
                  </div>
                  <div className="text-lg md:text-4xl text-left font-semibold">{`Chocolate Chip Cookies`}</div>
                  <div className="text-base md:text-2xl text-left">{`Crucnchy edges, gooey chips, and that just-right sweetness - everything you love in a chocolate chip biscuit.`}</div>
                  <div className="flex gap-5 md:gap-10 mt-5 md:mt-10">
                    <div className="w-[50%] bg-[#b8f2ff]"><Image src={chocChipBox} alt='digestive-box'/></div>
                    <div className="flex items-center w-[50%] bg-[#b8f2ff]"><Image src={chocChipWrapper} alt='digestive-wrapper'/></div>
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
                                <td className="py-3 text-left font-semibold border-r-1">Ticky Pack</td>
                                <td className="px-4 py-3 border-r-1">7</td>
                                <td className="px-4 py-3 border-r-1">48</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                              <tr className="border-b-1">
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
              <Faq isWhite/>
              <Image src={chocChipTestimonial} alt='bg-lp' className="mt-12 md:mt-25"/>
        </div>        
      </div>
    );
  }