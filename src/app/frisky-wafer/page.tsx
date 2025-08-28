'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import friskyWaferChocolateText from '../../assets/frisky-wafer-chocolate-copy.webp';
import friskyWaferChocolate from '../../assets/frisky-wafer-chocolate.webp'
import friskyWaferOrangeText from '../../assets/frisky-wafer-orange-copy.webp';
import friskyWaferOrange from '../../assets/frisky-wafer-orange.webp'
import friskyWaferVanillaText from '../../assets/frisky-wafer-vanilla-copy.webp';
import friskyWaferVanilla from '../../assets/frisky-wafer-vanilla.webp'
import friskyWaferStrawberryText from '../../assets/frisky-wafer-strawberry-copy.webp';
import friskyWaferStrawberry from '../../assets/frisky-wafer-strawberry.webp'
import {
  Search,
  Mic,
  FileText,
  Ticket,
  Truck,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";

export default function FriskyWaferPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#f7c791] pb-10">
              <Navbar />
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={friskyWaferChocolateText} alt='digestive-copy' className="w-[75%] mx-auto"/>
                  <div className="flex">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">Crisped to the Core, Drenched in Decadence<span className="text-base md:text-2xl font-medium">- Every Layer Melts into Pure Chocolate Bliss.</span></div>
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
                                <td className="px-4 py-3 border-r-1">75</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">36</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">23.6</td>
                                <td className="px-4 py-3 border-r-1">10</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <Image src={friskyWaferChocolate} alt='boxes-image' className="hidden md:block w-[80%] px-28"/>
              </div>
        </div>
        <div
          className="relative w-full bg-[#ffce54] pb-10">
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={friskyWaferOrangeText} alt='digestive-copy' className="w-[75%] mx-auto"/>
                  <div className="flex float-left">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">Crisp Layers, Bursting with Zesty Orange<span className="text-base md:text-2xl font-medium">- A Tangy Twist on Classic Crunch.</span></div>
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
                                <td className="px-4 py-3 border-r-1">75</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">36</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Snack Pack</td>
                                <td className="px-4 py-3 border-r-1">23.6</td>
                                <td className="px-4 py-3 border-r-1">10</td>
                                <td className="px-4 py-3">18</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <Image src={friskyWaferOrange} alt='boxes-image' className="hidden md:block w-[80%] px-28"/>
              </div>
        </div>
        <div
          className="relative w-full bg-[#87d9eb] pb-10">
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={friskyWaferVanillaText} alt='digestive-copy' className="w-[75%] mx-auto"/>
                  <div className="flex float-left">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">Golden Crunch, Velvety Vanilla<span className="text-base md:text-2xl font-medium">- A Timeless Taste of Sweet Simplicity.</span></div>
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
                                <td className="px-4 py-3 border-r-1">75</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">36</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <Image src={friskyWaferVanilla} alt='boxes-image' className="hidden md:block w-[80%] px-28"/>
              </div>
        </div>
        <div
          className="relative w-full bg-[#ffb09b] pb-10">
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={friskyWaferStrawberryText} alt='digestive-copy' className="w-[75%] mx-auto"/>
                  <div className="flex">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold">Lush Strawberry Cream in Every Crisp Layer<span className="text-base md:text-2xl font-medium"> - A Wafer Worth Savoring.</span></div>
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
                  <Image src={friskyWaferStrawberry} alt='boxes-image' className="hidden md:block w-[80%] px-28"/>
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
  