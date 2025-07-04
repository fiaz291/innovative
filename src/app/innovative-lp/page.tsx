import CookieCarousel from '@/components/CookieCrousal';
import heroImg from '../../assets/lp-hero.webp';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import ourProductsImg from '../../assets/our-products.png';
import innovationLab from '../../assets/innovation-lab.png';
import recipes from '../../assets/recipes.png';
import media from '../../assets/media.png';
import hr from '../../assets/hr.png';
import careers from '../../assets/careers.png';
import { CircleArrowRight, MoveRight } from 'lucide-react';
import InfoContainer from '@/components/InfoContainer';
import UpcomingCarousel from '@/components/UpcomingCrousal';

export default function LandingPage() {
    return (
    <div>
        <div
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
          className="text-white w-full bg-no-repeat bg-center md:bg-cover pb-50 md:pb-200">
              <Navbar isPremium={false} />
              <div className="flex flex-col gap-4 items-center font-black mx-5 md:mx-30">
                  <div className="text-2xl md:text-8xl mt-50 md:mt-100">One Bite is never enough.</div>
              </div>
        </div>

        <div className='my-15'>
            <div className="pl-15 text-xl md:text-4xl mb-15 font-black">Our Brands</div>
            <CookieCarousel />
        </div>

        <div className='flex text-white'>
            <div className='flex flex-col md:w-[50%] bg-[#9e2a2b] p-15'>
                <div className='flex items-center gap-10 text-base md:text-xl'>
                    Our Products
                    <CircleArrowRight className='w-[25px] h-[25px]' />
                </div>
                <div className="font-black text-xl md:text-5xl mt-6">Satisfy your cravings the</div>
                <div className="font-black text-xl md:text-5xl mt-6">smart way.</div>
                <div className='text-xl md:text-3xl'>
                    Innovative Digestive Biscuits are crafted with whole wheat and natural brown sugar, offering a wholesome, guilt-free snack that’s as delicious as it is nourishing.
                </div>
                <div className='flex items-center gap-10 text-xl md:text-3xl font-black mt-6'>
                    Read More
                    <MoveRight className='w-[35px] h-[35px]' />
                </div>
            </div>
            <Image src={ourProductsImg} alt='out-products-image' className='hidden md:block w-[50%]'/>
        </div>

        <div className="flex flex-col md:flex-row gap-10 p-15 my-15">
            <InfoContainer image={recipes} title='Recipes & Pairings' description='It All Starts Inside'/>
            <InfoContainer image={innovationLab} title='Innovation Lab' description='Crafted from the Inside Out'/>
        </div>

        <div className='my-15'>
            <div className="pl-15 text-xl md:text-4xl mb-15 font-black">Stay Connected</div>
            <div className='flex py-15 bg-[#123a5e] items-center text-white'>
                <div className='hidden md:block px-15 w-[30%] font-black text-2xl md:text-6xl'>{`Discover\n what's new`}</div>
                <UpcomingCarousel />
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 p-15 my-15">
            <InfoContainer image={media} title='Media Resources' description='For Media & Press Inquiries'/>
            <InfoContainer image={hr} title='HR Zone' description='HR & Development Tools'/>
        </div>

        <div className='flex'>
            <div className='flex flex-col gap-4 md:w-[50%] bg-[#fef4af] p-15 py-30'>
                <div className='flex items-center gap-10 text-base md:text-xl'>
                    Team up for success
                </div>
                <div className="font-black text-xl md:text-5xl">Careers</div>
                <div className='text-xl md:text-3xl'>
                    Stay in Touch for Future Opportunities
                </div>
                <div className='flex items-center gap-10 text-xl md:text-3xl font-black mt-6'>
                    Discover
                    <MoveRight className='w-[35px] h-[35px]' />
                </div>
            </div>
            <Image src={careers} alt='out-products-image' className='hidden md:block w-[50%]'/>
        </div>
      </div>
    );
  }
  