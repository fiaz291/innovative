'use-client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import havenCoffeeText from '../../assets/haven-coffee-copy.webp';
import havenCoffee from '../../assets/haven-coffee.webp'
import havenChocolateText from '../../assets/haven-chocolate-copy.webp';
import havenChocolate from '../../assets/haven-chocolate.webp'
import havenCoffeeBiscuit from '../../assets/haven-coffee-bisuit.webp';
import havenCoffeeBean from '../../assets/haven-coffee-bean.webp';
import havenChocolateBiscuit from '../../assets/haven-chocolate-biscuit.webp';
import {
  Search,
  Mic,
  FileText,
  Ticket,
  Truck,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";

export default function HavenPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#f1c88e] pb-10">
              <Navbar />
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={havenCoffeeBiscuit} alt='biscuit' className="absolute w-[25%] top-0 bottom-70 md:bottom-120 my-auto right-[-50px] md:right-[-130px]"/>
                  <Image src={havenCoffeeBean} alt='bean' className="absolute w-[12%] top-[150px] md:top-[-250px] md:bottom-0 md:my-auto left-0"/>
                  <Image src={havenCoffeeText} alt='digestive-copy' className="w-[75%] mx-auto"/>
                  <div className="flex">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold"><span className="text-base md:text-2xl font-medium">Where the bold aroma of coffee meets a melting chocolate center — every bite a journey of rich, layered flavor.</span></div>
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
                                <td className="px-4 py-3 border-r-1">132</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">30</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Pouch Pack</td>
                                <td className="px-4 py-3 border-r-1">44</td>
                                <td className="px-4 py-3 border-r-1">10</td>
                                <td className="px-4 py-3">12</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <Image src={havenCoffee} alt='boxes-image' className="hidden md:block w-[80%] px-28"/>
              </div>
        </div>
        <div
          className="relative w-full bg-[#ffce54] pb-10">
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={havenChocolateBiscuit} alt='biscuit' className="absolute w-[25%] top-0 bottom-0 my-auto right-[-50px] md:right-[-90px]"/>
                  <Image src={havenChocolateBiscuit} alt='biscuit' className="absolute rotate-[-70deg] w-[25%] top-0 bottom-180 my-auto left-[-50px] md:left-[-100px]"/>
                  <Image src={havenChocolateText} alt='digestive-copy' className="w-[75%] mx-auto"/>
                  <div className="flex">
                    <div className="px-28">
                        <div className="text-lg md:text-4xl text-center md:text-left font-semibold"><span className="text-base md:text-2xl font-medium">Gourmet on the Outside, Decadence on the Inside — Chocolate-Filled Cookies that Redefine Luxury Snacking.</span></div>
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
                                <td className="px-4 py-3 border-r-1">132</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">30</td>
                              </tr>
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Pouch Pack</td>
                                <td className="px-4 py-3 border-r-1">44</td>
                                <td className="px-4 py-3 border-r-1">10</td>
                                <td className="px-4 py-3">12</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                    </div>
                  </div>
                  <Image src={havenChocolate} alt='boxes-image' className="hidden md:block w-[80%] px-28"/>
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
  