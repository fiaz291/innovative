'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import biscoffiText from '../../assets/biscoffi-copy.webp';
import biscoffi from '../../assets/biscoffi.webp'
import biscoffiSmallBean from '../../assets/biscoffi-small-bean.webp'
import havenCoffeeBean from '../../assets/haven-coffee-bean.webp';
import Faq from "@/components/Faq";

export default function BiscoffiPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#ffce54] pb-10">
              <Navbar />
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={biscoffiSmallBean} alt='small-bean' className="absolute w-[6%] top-30 md:top-50 right-5 md:right-20"/>
                  <Image src={havenCoffeeBean} alt='bean' className="absolute w-[10%] top-40 md:top-90 left-[-10px] md:left-[-30px]"/>
                  <Image src={biscoffiText} alt='digestive-copy' className="md:w-[80%] mx-auto mb-5 md:mb-0"/>
                  <div className="flex">
                    <div className="md:px-40">
                        <div className="text-lg md:text-4xl leading-4 md:leading-[2.5rem] text-center md:text-left font-semibold">Brewed to be Eaten<span className="text-base md:text-2xl leading-4 md:leading-[2.5rem] font-medium">{` - Artisan Crackers Infused with Rich Coffee Notes, toasted to a Delicate, Satisfying Crisp.`}</span></div>
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
                                <td className="py-3 text-left font-semibold border-r-1">Munch Pack</td>
                                <td className="px-4 py-3 border-r-1">35</td>
                                <td className="px-4 py-3 border-r-1">6</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <div className="w-full flex justify-center"><Image src={biscoffi} alt='boxes-image' className="md:w-[70%] md:px-20"/></div>
              </div>
              <Faq productKey="biscoffi" />
        </div>
      </div>
    );
}
  