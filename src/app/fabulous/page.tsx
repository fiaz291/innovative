'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import fabulousText from '../../assets/fabulous-copy.webp';
import fabulous from '../../assets/fabulous.webp'
import Faq from "@/components/Faq";

export default function FabulousPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#f8b145] pb-10">
              <Navbar />
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={fabulousText} alt='digestive-copy' className="md:w-[80%]"/>
                  <div className="flex md:mt-[-50px]">
                    <div className="md:px-42">
                        <div className="text-lg md:text-4xl leading-4 md:leading-[2.5rem] text-center md:text-left font-semibold">Golden, chewy and loaded with gooey chocolate chips <span className="text-base md:text-2xl leading-4 md:leading-[2.5rem] font-medium">{` - these cookies are pure joy in every bite. Baked to perfection with just the right balance of crunch and softness, they're a classic made truly fabulous.`}</span></div>
                        <div className="mt-5 mb-5 md:mt-5 md:mb-15">
                          <table className="w-full md:w-[70%] text-center border-spacing-y-2">
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
                                <td className="py-3 text-left font-semibold border-r-1">Standard Pack</td>
                                <td className="px-4 py-3 border-r-1">96</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">30</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <Image src={fabulous} alt='boxes-image' className="md:w-[70%]"/>
                  </div>
              </div>
              <Faq productKey="fabulous" />
        </div>
      </div>
    );
  }