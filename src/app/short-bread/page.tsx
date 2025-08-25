'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import shortBreadText from '../../assets/short-bread-copy.webp';
import shortBread from '../../assets/short-bread.webp'
import shortBreadBiscuit from '../../assets/short-bread-biscuit.webp'
import {
  Search,
  Mic,
  FileText,
  Ticket,
  Truck,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";

export default function ShortBreadPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#ffa372] pb-10">
              <Navbar />
              <Image src={shortBreadBiscuit} alt='digestive-copy' className="absolute w-[35%] left-[-4rem] md:left-[-18rem] top-[13rem] md:top-[75rem] bottom-0 my-auto"/>
              <div className="flex flex-col px-10 md:px-30 mt-12 md:mt-25">
                  <Image src={shortBreadText} alt='digestive-copy' className="w-[75%] mx-auto"/>
                  <div className="flex mt-20 md:mt-40">
                    <div className="md:pl-28">
                        <div className="text-lg md:text-5xl text-center md:text-left font-semibold">Handcrafted with the finest butter and baked to perfection <span className="text-base md:text-3xl font-medium">- a cookie that speaks the language of luxury.</span></div>
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
  