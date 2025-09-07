'use-client';

import heroImg from '../../assets/career-hero.webp';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import innovationLady from '../../assets/innovation-lady.webp';
import culture from '../../assets/hr.png';
import { MoveRight } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import LearnMore from '@/components/LearnMore';

export default function CareerPage() {
    return (
    <div>
        <div
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
          className="text-white w-full bg-no-repeat bg-center md:bg-cover">
              <Navbar isPremium={false} />
              <div className="flex flex-col gap-4 items-center justify-center font-black h-[85vh]">
                  <div className="text-2xl md:text-6xl whitespace-pre-line text-center mt-[-80px]">{`Stay In. Stand Out.\nStay Ahead`}</div>
              </div>
        </div>

        <div className='flex flex-col p-12 md:p-45 text-black relative'>
            <div className='absolute mx-auto left-0 right-0 top-[-30px] w-[80%]'>
                <SearchBar />
            </div>
            <div className='font-black text-xl md:text-5xl mt-12'>Career Areas</div>
            <div className='md:font-semibold text-base md:text-2xl md:leading-15 whitespace-pre-line'>{`Human Resources & Administration  Finance & Legal\n Research & Development  Technology  Marketing & Sales\nProduction & Operations  Supply Chain`}</div>

        </div>

        <div className='flex text-white mb-15'>
            <div className='flex flex-col md:w-[60%] bg-[#5899af] p-15 pl-25 justify-center'>
                <div className='font-black flex items-center gap-10 text-2xl md:text-5xl mb-4'>
                    Rise with Innovation
                </div>
                <div className='font-semibold text-xl md:text-3xl'>
                    Looking to Launch Your Career? Start with Innovative.
                </div>
                <p className='font-normal text-base md:text-2xl mt-8'>{`At Innovative Biscuits, we’re more than a workplace - we’re a launchpad for bold beginnings. Whether you're exploring internships or stepping into your first role, this is where fresh perspectives are welcomed, ideas are celebrated, and your individuality is your greatest asset.`}</p>
                <p className='font-normal text-base md:text-2xl mt-8'>{`We believe growth should never mean losing who you are. Bring your energy, curiosity, and unique story - and we’ll help you build skills, gain real-world experience, and rise with purpose.`}</p>
            </div>
            <Image src={innovationLady} alt='out-products-image' className='hidden md:block w-[40%]'/>
        </div>

        <div className='flex flex-col md:flex-row gap-2 md:gap-8 md:px-30 text-white'>
            <div className='bg-[#94673d] px-10 py-15 flex flex-col w-default md:w-[50%]'>
                <div className='font-black flex items-center gap-10 text-2xl md:text-4xl mb-4'>
                    Your Journey Begins Here
                </div>
                <div className='font-semibold text-xl md:text-2xl'>
                    Just graduated? Step into a world of real impact.
                </div>
                <p className='font-normal text-base md:text-2xl mt-8'>{`At Innovative Biscuits, we give you more than a first job — we give you a launchpad. Work alongside passionate teams, tackle real challenges, and grow faster than you imagined — all while staying true to who you are.`}</p>
                <div className='font-black flex items-center gap-10 text-base md:text-2xl mt-15'>
                    Search Jobs
                    <MoveRight className='w-[35px] h-[35px]' />
                </div>
            </div>
            <div className='bg-[#8e2e19] px-10 py-15 flex flex-col w-default md:w-[50%]'>
                <div className='font-black flex items-center gap-10 text-2xl md:text-4xl mb-4'>
                    Internships & Programs
                </div>
                <div className='font-semibold text-xl md:text-2xl'>
                    Explore. Learn. Grow.
                </div>
                <p className='font-normal text-base md:text-2xl mt-8'>{`Our internships and early career programs are designed to give you hands-on experience, real projects, and a front-row seat to innovation. Discover your potential — and make your mark from day one.`}</p>
                <div className='font-black flex items-center gap-10 text-base md:text-2xl mt-15'>
                    Learn More
                    <MoveRight className='w-[35px] h-[35px]' />
                </div>
            </div>

        </div>


        <div className='flex text-white my-15'>
            <Image src={culture} alt='out-products-image' className='hidden md:block w-[40%]'/>
            <div className='flex flex-col md:w-[60%] bg-[#fd9b6c] p-15'>
                <div className='font-black flex items-center gap-10 text-2xl md:text-4xl mb-4'>
                    Our Culture
                </div>
                <div className='font-semibold text-xl md:text-3xl'>
                    Rooted in Purpose. Rising with People.
                </div>
                <p className='font-normal text-base md:text-2xl mt-8'>{`At Innovative Biscuits, culture isn’t an add-on - it’s at the core of everything we do. We believe in bold ideas, shared success, and the simple joy of doing meaningful work together. We’re not just making food - we’re making impact.`}</p>
            </div>
        </div>

        <LearnMore />
      </div>
    );
  }
  