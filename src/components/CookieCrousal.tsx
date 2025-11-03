"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import havenChocolate from '../assets/slider/Haven-Chocolate.png';
import havenCoffee from '../assets/slider/Haven-Coffee.png';
import shortBread from '../assets/slider/ShortBread.png';
import digestiveOriginal from '../assets/slider/Digestive-Original.png';
import digestiveSugarFree from '../assets/slider/Digestive-Sugar-Free.png';
import fabulous from '../assets/slider/Fabulous.png';
import goldenLotus from '../assets/slider/Golden-Lotus.png';
import biscoffi from '../assets/slider/Biscoffi.png';
import friskyWaferChocolate from '../assets/slider/Frisky-Wafer-Chocolate.png';
import friskyWaferOrgange from '../assets/slider/Frisky-Wafer-Orange.png';
import friskyWaferStrawberry from '../assets/slider/Frisky-Wafer-Strawberry.png';
import friskyWaferVanilla from '../assets/slider/Frisky-Wafer-Vanilla.png';
import friskyRollsChocolate from '../assets/slider/Frisky-Rolls-Chocolate.png';
import friskyRollsHazelnut from '../assets/slider/Frisky-Rolls-Hazelnut.png';
import friskyRollsMilk from '../assets/slider/Frisky-Rolls-Milk.png';
import bricklane from '../assets/slider/Bricklane.png';
import bittens from '../assets/packages/Bitten.png';
import digestiveRegular from '../assets/packages/Digestive.png';
import butterCrunch from '../assets/packages/Butter-Crunch.png';
import tooGud from '../assets/packages/TooGud.png';
import jumboJunior from '../assets/packages/Jumbo-Junior.png';
import goodies from '../assets/packages/Goodies.png';
import charm from '../assets/packages/Charm.png';
import chocNChip from '../assets/packages/Choc-n-Chip-1.png';
import chocoRings from '../assets/packages/Choco-Rings.png';
import crustWafer from '../assets/packages/Crust-Wafer.png'
import crustRolls from '../assets/packages/Crust-Rolls.png'
import { useRouter } from "next/navigation";


const cookies = [
  {image: havenChocolate, route: '/haven'},
  {image: havenCoffee, route: '/haven'},
  {image: shortBread, route: '/short-bread'},
  {image: digestiveOriginal, route: '/digestive-premium'},  
  {image: digestiveSugarFree, route: '/digestive-premium'},
  {image: fabulous, route: '/fabulous'},
  {image: goldenLotus, route: '/golden-lotus'},
  {image: biscoffi, route: '/biscoffi'},
  {image: friskyWaferChocolate, route: '/frisky-wafer'},
  {image: friskyWaferOrgange, route: '/frisky-wafer'},
  {image: friskyWaferStrawberry, route: '/frisky-wafer'},
  {image: friskyWaferVanilla, route: '/frisky-wafer'},
  {image: friskyRollsChocolate, route: '/frisky-rolls'},
  {image: friskyRollsHazelnut, route: '/frisky-rolls'},
  {image: friskyRollsMilk, route: '/frisky-rolls'},
  {image: bricklane, route: '/bricklane'},
  {image: bittens, route: '/bittens'},
  {image: digestiveRegular, route: '/digestive'},
  {image: butterCrunch, route: '/butter-crunch'},
  {image: tooGud, route: '/tooo-gud'},
  {image: jumboJunior, route: '/jumbo-junior'},
  {image: goodies, route: '/goodies'},
  {image: charm, route: '/charm'},
  {image: chocNChip, route: '/choc-n-chip'},
  {image: chocoRings, route: '/choco-rings'},
  {image: crustWafer, route: '/crust-wafer'},
  {image: crustRolls, route: '/crust-rolls'},
];

export default function CookieCarousel() {
  const router = useRouter();
  return (
    <div className="w-full px-4 relative">
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px !important;
          height: 40px !important;
          background: white !important;
          border-radius: 50% !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
          border: 1px solid #e5e7eb !important;
        }
        
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 14px !important;
          font-weight: bold !important;
          color: #374151 !important;
        }
        
        .swiper-button-next {
          right: 10px !important;
        }
        
        .swiper-button-prev {
          left: 10px !important;
        }
        
        .swiper-button-disabled {
          opacity: 0.5 !important;
        }
      `}</style>
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView="auto"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="!py-4"
      >
        {cookies.map((cookie, i) => (
          <SwiperSlide
            key={i}
            className="!w-auto flex justify-center items-center"
          >
            <img
              src={cookie.image.src}
              alt={`cookie-${i}`}
              className="w-[100%] md:w-[100%] h-[100px] md:h-[160px] rounded-lg cursor-pointer"
              onClick={()=>router.push(cookie.route)}
            />
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
}