'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import shortBreadText from '../../assets/short-bread-copy.webp';
import shortBread from '../../assets/short-bread.webp'
import shortBreadBiscuit from '../../assets/short-bread-biscuit.webp'
import Faq from "@/components/Faq";

export default function ShortBreadPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#ffa372] pb-10">
              <Navbar />
              <Image src={shortBreadBiscuit} alt='digestive-copy' className="hidden md:block absolute w-[35%] left-[-4rem] md:left-[-18rem] top-[40rem] bottom-0 my-auto"/>
              <div className="flex flex-col px-10 md:px-30 mt-6 md:mt-12">
                  <Image src={shortBreadText} alt='digestive-copy' className="w-[80%] mx-auto"/>
                  <div className="flex mt-10 md:mt-20 px-34 gap-10">
                    <div>
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">Handcrafted with the finest butter and baked to perfection <span className="text-base md:text-2xl font-medium">- a cookie that speaks the language of luxury.</span></div>
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
                              <tr>
                                <td className="py-3 text-left font-semibold border-r-1">Standard Pack</td>
                                <td className="px-4 py-3 border-r-1">68</td>
                                <td className="px-4 py-3 border-r-1">5</td>
                                <td className="px-4 py-3">12</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                    <Image src={shortBread} alt='boxes-image' className="hidden md:block w-[35%]"/>
                  </div>
              </div>
              <Faq />
        </div>
      </div>
    );
  }