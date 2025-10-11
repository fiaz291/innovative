'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import bricklaneText from '../../assets/bricklane-copy.webp';
import bricklane from '../../assets/Bricklane-Product.png'
import Faq from "@/components/Faq";

export default function ShortBreadPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#e7ad72] pb-10">
              <Navbar />
              <div className="flex flex-col px-10 md:px-30">
                  <Image src={bricklaneText} alt='digestive-copy' className="w-[80%] mx-auto"/>
                  <div className="flex mt-6">
                    <div className="md:pl-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">Premium taste with a purpose<span className="text-base md:text-2xl font-medium"> - ethically sourced, beautifully crafted, truly unforgettable</span></div>
                        <div className="mt-15">
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
                              <tr>
                                <td className="py-3 text-left font-semibold border-r-1">Munch Pack</td>
                                <td className="px-4 py-3 border-r-1">50</td>
                                <td className="px-4 py-3 border-r-1">12</td>
                                <td className="px-4 py-3">12</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                    <Image src={bricklane} alt='boxes-image' className="hidden md:block w-[50%]"/>
                  </div>
              </div>
             <Faq />
        </div>
      </div>
    );
  }
  