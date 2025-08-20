'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import biscuit from '../../assets/biscuit.webp';
import digestiveText from '../../assets/digestive-original.png';
import sugarFreeText from '../../assets/sugar-free-text.png';
import wheat from '../../assets/wheat.webp';
import singleWheat from '../../assets/single-wheat.webp';
import digestiveBoxes from '../../assets/boxes.png'
import sugarFreeBoxes from '../../assets/sugar-free-boxes.png'
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
    <div className="overflow-hidden">
        <div
          className="w-full bg-[#e7ad72] pb-10">
              <Navbar />
              <div className="relative flex flex-col px-10 md:px-30 mt-12 md:mt-25">
                  <Image src={digestiveText} alt='digestive-copy' className="w-[75%] mx-auto"/>
                  <Image src={biscuit} alt='biscuit' className="absolute w-[30%] top-0 right-[-50px] md:right-[-200px]"/>
                  <Image src={wheat} alt='wheat-image' className="absolute w-[50%] top-[110px] md:top-[-50px] md:bottom-0 md:my-auto left-[-70px] md:left-[-400px]"/>
                  <Image src={singleWheat} alt='wheat-image' className="absolute w-[40%] top-[160px] md:top-0 md:bottom-0 md:my-auto right-[-65px] md:right-[-300px]"/>
                  <div className="flex mt-20 md:mt-40">
                    <div className="md:pl-28">
                        <div className="text-lg md:text-5xl text-center md:text-left font-medium">{`Simple Goodness, Perfectly Baked`}</div>
                        <div className="text-base md:text-3xl text-center md:text-left">{`A Wholesome Digestive Biscuit Crafted With Whole Wheat, Natural Sweetness, and Satisfying Subtle Crunch.`}</div>
                        <div className="mt-5">
                          <table className="w-full text-center border-spacing-y-2">
                            <thead>
                              <tr className="text-base md:text-4xl border-b-1">
                                <td className="py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                              </tr>
                            </thead>
                            <tbody className="text-base md:text-4xl">
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Standard Pack</td>
                                <td className="px-4 py-3 border-r-1">270</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">24</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">30</td>
                                <td className="px-4 py-3 border-r-1">10+1</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                    <Image src={digestiveBoxes} alt='boxes-image' className="hidden md:block w-[35%]"/>
                  </div>
              </div>
        </div>
        <div className="w-full bg-[#88d9eb] pb-10">
              <div className="relative flex flex-col px-10 md:px-30 pt-12 md:pt-25">
                <Image src={sugarFreeText} alt='digestive-copy' className="w-[75%] mx-auto"/>
                <Image src={biscuit} alt='original-image' className="absolute w-[20%] top-[1rem] md:top-[2rem] right-[-1.5rem] md:right-[-7rem]"/>
                <Image src={biscuit} alt='original-image' className="absolute w-[20%] top-[7rem] md:top-[40rem] left-[-2.5rem] md:left-[-13rem]"/>
                <Image src={wheat} alt='wheat-image' className="absolute w-[30%] top-[1rem] md:top-[2rem] left-[-3.5rem] md:left-[-12rem]"/>
                <Image src={singleWheat} alt='wheat-image' className="absolute w-[40%] top-[180px] md:top-0 md:bottom-0 md:my-auto right-[-65px] md:right-[-300px]"/>
                  <div className="flex mt-10">
                    <div className="md:pl-28">
                        <div className="text-lg md:text-5xl text-center md:text-left font-medium">{`Healthy Snacking, Elevated`}</div>
                        <div className="text-base md:text-3xl text-center md:text-left">{`Whole Wheat Digestives Without Sugar, Designed for Taste and Wellness in Every Bite.`}</div>
                        <div className="mt-5">
                          <table className="w-full text-center border-spacing-y-2">
                            <thead>
                              <tr className="text-base md:text-4xl border-b-1">
                                <td className="py-2 text-left font-semibold border-r-1">{`Packaging SKU`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Pack Weight\nGM`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line border-r-1">{`Packs\nPer Box`}</td>
                                <td className="px-2 md:px-4 py-2 whitespace-pre-line">{`Boxes\nPer Carton`}</td>
                              </tr>
                            </thead>
                            <tbody className="text-base md:text-4xl">
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Standard Pack</td>
                                <td className="px-4 py-3 border-r-1">270</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">24</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">30</td>
                                <td className="px-4 py-3 border-r-1">10+1</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                    <Image src={sugarFreeBoxes} alt='boxes-image' className="hidden md:block w-[35%]"/>
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
  