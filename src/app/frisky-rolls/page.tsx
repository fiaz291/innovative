'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import friskyChocolateRollsText from '../../assets/frisky-chocolate-rolls-copy.webp';
import friskyChocolateRolls from '../../assets/frisky-chocolate-rolls.webp'
import friskyHazelnutRollsText from '../../assets/frisky-hazelnut-rolls-copy.webp';
import friskyHazelnuteRolls from '../../assets/frisky-hazelnut-rolls.webp'
import friskyMilkyRollsText from '../../assets/frisky-milky-rolls-copy.webp';
import friskyMilkyRolls from '../../assets/frisky-milky-rolls.webp'
import {
  Search,
  Mic,
  FileText,
  Ticket,
  Truck,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";

export default function FriskyRollsPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#ffbe76] pb-10">
              <Navbar />
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={friskyChocolateRollsText} alt='digestive-copy' className="w-[100%] mx-auto"/>
                  <div className="flex">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">Rolled for the Crunch, Filled for the Crave<span className="text-base md:text-2xl font-medium"> - Chocolate That Twists Into Pure Bliss.</span></div>
                        <div className="mt-15 mb-15">
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
                                <td className="px-4 py-3 border-r-1">86.4</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">48</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">32.4</td>
                                <td className="px-4 py-3 border-r-1">10</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <Image src={friskyChocolateRolls} alt='boxes-image' className="hidden md:block w-[100%]"/>
              </div>
        </div>
        <div
          className="relative w-full bg-[#ffaa93] pb-10">
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={friskyHazelnutRollsText} alt='digestive-copy' className="w-[100%] mx-auto"/>
                  <div className="flex float-left">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">A Swirl of Crisp Delight, a Heart of Hazelnut Gold</div>
                        <div className="mt-15 mb-15">
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
                                <td className="px-4 py-3 border-r-1">86.4</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">48</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <Image src={friskyHazelnuteRolls} alt='boxes-image' className="hidden md:block w-[100%]"/>
              </div>
        </div>
        <div
          className="relative w-full bg-[#96ddf2] pb-10">
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={friskyMilkyRollsText} alt='digestive-copy' className="w-[100%] mx-auto"/>
                  <div className="flex">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">Soft Creaminess in a Crisp Embrace <span className="text-base md:text-2xl font-medium"> - Milk Wafer Rolls Made to Soothe and Satisfy.</span></div>
                        <div className="mt-15 mb-15">
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
                                <td className="px-4 py-3 border-r-1">84.4</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">48</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">32.4</td>
                                <td className="px-4 py-3 border-r-1">10</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <Image src={friskyMilkyRolls} alt='boxes-image' className="hidden md:block w-[100%]"/>
              </div>
              <div className="mx-5 md:mx-70 py-4 px-40">
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
  