'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import digestiveVertical from '../../assets/digestive-vertical.webp';
import digestiveSugarFreeVertical from '../../assets/digestive-suger-free-vertical.webp';
import digestiveSmall from '../../assets/digestive-small-pack.webp';
import digestiveSugarFreeSmall from '../../assets/digestive-sugar-free-small-pack.png';
import original from '../../assets/original.png';
import sugarFree from '../../assets/sugar-free.png';
import biscuit from '../../assets/biscuit.webp';
import {
  Search,
  Mic,
  FileText,
  Ticket,
  Truck,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";

export default function DigestivePremiumPage() {
    return (
    <div>
        <div
          className="w-full bg-[#f8d3ca] pb-50 md:pb-100">
              <Navbar />
              <div className="flex flex-col gap-4 items-center mx-5 md:mx-30">
                  <div className="text-2xl md:text-6xl font-black mt-12 md:mt-25 whitespace-pre-line text-center">{`Not Just Bicuits. An Experience.`}</div>
                  <div className="text-base md:text-3xl mt-5 text-center px-10 md:px-30">
                    Discover the premium side of snacking with Innovative Biscuits. Made from carefully selected ingredients, our premium range combines wholesome goodness with refined taste—perfect for those who crave quality in every bite.
                  </div>
              </div>

              <div className="relative flex flex-col px-10 md:px-30">
                  <Image src={original} alt='original-image' className="absolute w-[20%] md:w-[15%] top-5 left-19 md:top-5 md:left-113"/>
                  <Image src={biscuit} alt='original-image' className="absolute w-[20%] top-15 md:top-40 left-0 right-0 mx-auto"/>
                  <div className="text-5xl md:text-[14rem] text-[#740101] font-black mt-12 md:mt-25 text-center">Digestive</div>
                  <div className="text-4xl md:text-[18rem] text-[#740101] font-black text-center">{`Original`}</div>
                  <div className="flex mt-10">
                    <div className="md:pl-28">
                        <div className="text-base md:text-5xl text-center md:text-left">{`Innovative Digestive Original is crafted with high-fiber whole wheat and naturally sourced brown sugar, offering a perfect balance of health and flavor. With no artificial colors or preservatives, it's a smart, satisfying snack for those who value both wellness and great taste.`}</div>
                        <div className="mt-5">
                          <table className="w-full text-center border-spacing-y-2">
                            <thead>
                              <tr className="text-base md:text-4xl border-b-1">
                                <td className="px-2 md:px-4 py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                              </tr>
                            </thead>
                            <tbody className="text-base md:text-4xl">
                              <tr className="border-b-1">
                                <td className="px-4 py-3 text-left font-semibold border-r-1">Munch Pack</td>
                                <td className="px-4 py-3 border-r-1">36.0</td>
                                <td className="px-4 py-3 border-r-1">6</td>
                                <td className="px-4 py-3">24</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="px-4 py-3 text-left font-semibold border-r-1">Mini Half Roll</td>
                                <td className="px-4 py-3 border-r-1">54.0</td>
                                <td className="px-4 py-3 border-r-1">6</td>
                                <td className="px-4 py-3">24</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="px-4 py-3 text-left font-semibold border-r-1">Half Roll</td>
                                <td className="px-4 py-3 border-r-1">72.0</td>
                                <td className="px-4 py-3 border-r-1">6</td>
                                <td className="px-4 py-3">24</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 text-left font-semibold border-r-1">Family Pack</td>
                                <td className="px-4 py-3 border-r-1">84.0</td>
                                <td className="px-4 py-3 border-r-1">1</td>
                                <td className="px-4 py-3">96</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                    <Image src={digestiveVertical} alt='classroom-image' className="hidden md:block w-[35%]"/>
                    <Image src={digestiveSmall} alt='classroom-image' className="absolute w-[40%] md:w-[20%] bottom-[-8rem] md:bottom-[-7rem] right-[2rem] md:right-[24rem]"/>
                  </div>
              </div>
        </div>
        <div className="w-full bg-[#c8eff8] pb-50 md:pb-100">
              <div className="relative flex flex-col px-10 md:px-30">
                <Image src={biscuit} alt='original-image' className="absolute w-[20%] top-[1rem] md:top-[2rem] right-[-1.5rem] md:right-[-7rem]"/>
                <Image src={biscuit} alt='original-image' className="absolute w-[20%] top-[7rem] md:top-[25rem] left-[-2.5rem] md:left-[-13rem]"/>
                <Image src={sugarFree} alt='original-image' className="absolute w-[20%] md:w-[15%] top-5 left-19 md:top-5 md:left-113"/>
                  <div className="text-5xl md:text-[14rem] text-[#162850] font-black mt-12 md:mt-25 text-center">{`Digestive`}</div>
                  <div className="text-5xl md:text-[14rem] text-[#162850] font-black text-center">{`Sugar Free`}</div>
                  <div className="flex mt-10">
                    <div className="md:pl-28">
                        <div className="text-base md:text-5xl text-center md:text-left">{`Innovative Digestive Original is crafted with high-fiber whole wheat and naturally sourced brown sugar, offering a perfect balance of health and flavor. With no artificial colors or preservatives, it's a smart, satisfying snack for those who value both wellness and great taste.`}</div>
                        <div className="mt-5">
                          <table className="w-full text-center border-spacing-y-2">
                            <thead>
                              <tr className="text-base md:text-4xl border-b-1">
                                <td className="px-2 md:px-4 py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                              </tr>
                            </thead>
                            <tbody className="text-base md:text-4xl">
                              <tr className="border-b-1">
                                <td className="px-4 py-3 text-left font-semibold border-r-1">Munch Pack</td>
                                <td className="px-4 py-3 border-r-1">36.0</td>
                                <td className="px-4 py-3 border-r-1">6</td>
                                <td className="px-4 py-3">24</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="px-4 py-3 text-left font-semibold border-r-1">Mini Half Roll</td>
                                <td className="px-4 py-3 border-r-1">54.0</td>
                                <td className="px-4 py-3 border-r-1">6</td>
                                <td className="px-4 py-3">24</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="px-4 py-3 text-left font-semibold border-r-1">Half Roll</td>
                                <td className="px-4 py-3 border-r-1">72.0</td>
                                <td className="px-4 py-3 border-r-1">6</td>
                                <td className="px-4 py-3">24</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 text-left font-semibold border-r-1">Family Pack</td>
                                <td className="px-4 py-3 border-r-1">84.0</td>
                                <td className="px-4 py-3 border-r-1">1</td>
                                <td className="px-4 py-3">96</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                    <Image src={digestiveSugarFreeVertical} alt='classroom-image' className="hidden md:block w-[35%]"/>
                    <Image src={digestiveSugarFreeSmall} alt='classroom-image' className="absolute w-[40%] md:w-[20%] bottom-[-8rem] md:bottom-[-7rem] right-[2rem] md:right-[24rem]"/>
                  </div>
              </div>
              <div className="mt-30 mx-5 md:mx-70 p-4">
                  <div className="flex items-center justify-between border-b-3 border-white pb-2 mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Search for answers</h2>
                    <div className="flex items-center gap-3">
                      <Mic className="w-5 h-5 text-gray-700" />
                      <Search className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-15 space-y-3">
                    <HelpItem icon={<FileText className="w-5 h-5" />} label="Nutrition Facts" />
                    <HelpItem icon={<Ticket className="w-5 h-5" />} label="Question about a promotion" />
                    <HelpItem icon={<Truck className="w-5 h-5" />} label="Question about an online order" />
                    <HelpItem icon={<ShoppingCart className="w-5 h-5" />} label="Find a product" />
                    <HelpItem icon={<MessageSquare className="w-5 h-5" />} label="FAQs" />
                  </div>
                </div>
        </div>

        
      </div>
    );
  }

  function HelpItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-between border-b last:border-b-0 pb-2">
      <div className="flex items-center gap-3 text-gray-800">
        {icon}
        <span className="text-sm">{label}</span>
      </div>
    </div>
  );
}
  