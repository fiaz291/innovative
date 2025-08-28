'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import goldenLotusText from '../../assets/golden-lotus-copy.webp';
import goldenLotus from '../../assets/golden-lotus.webp'
import goldenLotusBiscuit from '../../assets/golden-lotus-biscuit.webp'
import {
  Search,
  Mic,
  FileText,
  Ticket,
  Truck,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";

export default function GoldenLotusPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#f4978f] pb-10">
              <Navbar />
              <Image src={goldenLotusBiscuit} alt='digestive-copy' className="absolute rotate-[55deg] w-[25%] left-[-3rem] md:left-[-10rem] top-0 bottom-[40rem] md:bottom-[60rem] my-auto"/>
              <Image src={goldenLotusBiscuit} alt='digestive-copy' className="absolute w-[25%] right-[-4rem] md:right-[-10rem] top-0 bottom-0 my-auto"/>
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={goldenLotusText} alt='digestive-copy' className="w-[85%] mx-auto"/>
                  <div className="flex">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">Steeped in tradition, perfected for today <span className="text-base md:text-2xl font-medium"> - premium Lotus biscuits that honor classic caramelized taste</span></div>
                        <div className="mt-5">
                          <table className="w-full md:w-[70%] text-center border-spacing-y-2">
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
                  <Image src={goldenLotus} alt='boxes-image' className="hidden md:block w-[80%] px-28"/>
              </div>
              <div className="mx-5 md:mx-70 p-4">
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
  