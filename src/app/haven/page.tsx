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
import Faq from "@/components/Faq";

export default function HavenPage() {
    return (
    <div className="overflow-hidden">
        <div
          className="relative w-full bg-[#f1c88e] pb-10">
              <Navbar />
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={havenCoffeeBiscuit} alt='biscuit' className="absolute w-[23%] top-0 bottom-70 md:bottom-170 my-auto right-[-50px] md:right-[-130px]"/>
                  <Image src={havenCoffeeBean} alt='bean' className="absolute w-[8%] top-[150px] md:top-[-250px] md:bottom-0 md:my-auto left-0"/>
                  <Image src={havenCoffeeText} alt='digestive-copy' className="md:w-[80%] mx-auto"/>
                  <div className="flex">
                    <div className="md:px-40">
                        <div className="text-lg md:text-4xl leading-4 md:leading-[2.5rem] text-center md:text-left font-semibold"><span className="text-base md:text-2xl leading-4 md:leading-[2.5rem] font-medium">Where the bold aroma of coffee meets a melting chocolate center — every bite a journey of rich, layered flavor.</span></div>
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
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Standard Pack</td>
                                <td className="px-4 py-3 border-r-1">132</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">30</td>
                              </tr>
                              <tr>
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
                  <div className="w-full flex justify-center"><Image src={havenCoffee} alt='boxes-image' className="md:w-[70%] md:px-20"/></div>
              </div>
        </div>
        <div
          className="relative w-full bg-[#ffce54] pb-10">
              <div className="flex flex-col items-center px-10 md:px-30">
                  <Image src={havenChocolateBiscuit} alt='biscuit' className="absolute w-[23%] top-0 bottom-0 my-auto right-[-50px] md:right-[-90px]"/>
                  <Image src={havenChocolateBiscuit} alt='biscuit' className="absolute rotate-[-70deg] w-[20%] top-10 md:top-0 bottom-220 my-auto left-[-50px] md:left-[-100px]"/>
                  <Image src={havenChocolateText} alt='digestive-copy' className="md:w-[70%] mx-auto"/>
                  <div className="flex">
                    <div className="md:px-40">
                        <div className="text-lg md:text-4xl leading-4 md:leading-[2.5rem] text-center md:text-left font-semibold"><span className="text-base md:text-2xl leading-4 md:leading-[2.5rem] font-medium">Gourmet on the Outside, Decadence on the Inside — Chocolate-Filled Cookies that Redefine Luxury Snacking.</span></div>
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
                              <tr className="border-b-1">
                                <td className="py-3 text-left font-semibold border-r-1">Standard Pack</td>
                                <td className="px-4 py-3 border-r-1">132</td>
                                <td className="px-4 py-3 border-r-1">-</td>
                                <td className="px-4 py-3">30</td>
                              </tr>
                              <tr>
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
                  <div className="w-full flex justify-center"><Image src={havenChocolate} alt='boxes-image' className="md:w-[70%] md:px-20"/></div>
              </div>
              <Faq />
        </div>
      </div>
    );
  }