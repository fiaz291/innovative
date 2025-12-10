'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import goldenLotusText from '../../assets/golden-lotus-copy.webp';
import goldenLotus from '../../assets/golden-lotus.webp'
import goldenLotusBiscuit from '../../assets/golden-lotus-biscuit.webp'
import Faq from "@/components/Faq";

export default function GoldenLotusPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#f4978f] pb-10">
              <Navbar />
              <Image src={goldenLotusBiscuit} alt='digestive-copy' className="absolute rotate-[55deg] w-[25%] md:w-[18%] left-[-3rem] md:left-[-10rem] top-10 md:top-0 bottom-[40rem] md:bottom-[60rem] my-auto"/>
              <Image src={goldenLotusBiscuit} alt='digestive-copy' className="absolute w-[25%] md:w-[18%] right-[-4rem] md:right-[-10rem] top-0 bottom-0 my-auto"/>
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={goldenLotusText} alt='digestive-copy' className="w-full md:w-[80%] mt-[-20px] md:mt-[-50px]"/>
                  <div className="flex">
                    <div className="md:px-28">
                        <div className="text-lg md:text-4xl leading-4 md:leading-[2.5rem] text-center md:text-left font-semibold">Steeped in Tradition, Perfected for today  <span className="text-base md:text-2xl leading-4 md:leading-[2.5rem] font-medium"> - Premium Lotus Biscuits that honor Classic Caramelized taste</span></div>
                        <div className="mt-5">
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
                    <Image src={goldenLotus} alt='boxes-image' className="md:w-[70%]"/>
                  </div>
              </div>
              <Faq productKey="golden-lotus" />
        </div>
      </div>
    );
  }