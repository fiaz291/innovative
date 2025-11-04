'use client';

import heroImg from '../../assets/career-hero.webp';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import innovationLady from '../../assets/innovation-lady.webp';
import culture from '../../assets/hr.png';
import { MoveRight } from 'lucide-react';
import SearchBar from '@/components/SearchBar';
import LearnMore from '@/components/LearnMore';
import RequestForm from '@/components/RequestForm';
import { useState } from 'react';

export default function CareerPage() {
    const [open, setOpen] = useState(false);
    return (
    <div>
        <div
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
          className="text-white w-full bg-no-repeat bg-center bg-cover">
              <Navbar isPremium={false} />
              <div className="flex flex-col gap-4 items-center justify-center font-black h-[50vh] md:h-[85vh]">
                  <div className="text-3xl md:text-6xl whitespace-pre-line text-center mt-[-80px]">{`Stay In. Stand Out.\nStay Ahead`}</div>
              </div>
        </div>

        <div className='flex flex-col p-6 md:p-12 md:p-45 text-black relative'>
            <div className='absolute mx-auto left-0 right-0 top-[-30px] w-[80%]'>
                <SearchBar />
            </div>
            <div className='font-black text-xl md:text-5xl mt-15 md:mt-12'>Career Areas</div>
            <div className='md:font-semibold text-base md:text-2xl md:leading-15 whitespace-pre-line'>{`Human Resources & Administration  Finance & Legal\n Research & Development  Technology  Marketing & Sales\nProduction & Operations  Supply Chain`}</div>

        </div>

        <div className='flex flex-col-reverse md:flex-row text-white md:mb-15'>
            <div className='flex flex-col md:w-[60%] bg-[#5899af] p-6 pl-6 md:p-15 md:pl-25 justify-center'>
                <div className='font-black flex items-center gap-10 text-2xl md:text-5xl mb-4'>
                    Rise with Innovation
                </div>
                <div className='font-semibold text-xl md:text-3xl'>
                    Looking to Launch Your Career? Start with Innovative.
                </div>
                <p className='font-normal text-base md:text-2xl mt-8'>{`At Innovative Biscuits, we’re more than a workplace - we’re a launchpad for bold beginnings. Whether you're exploring internships or stepping into your first role, this is where fresh perspectives are welcomed, ideas are celebrated, and your individuality is your greatest asset.`}</p>
                <p className='font-normal text-base md:text-2xl mt-8'>{`We believe growth should never mean losing who you are. Bring your energy, curiosity, and unique story - and we’ll help you build skills, gain real-world experience, and rise with purpose.`}</p>
            </div>
            <Image src={innovationLady} alt='out-products-image' className='md:w-[40%]'/>
        </div>

        <div className='flex flex-col md:flex-row gap-2 md:gap-8 md:px-30 text-white'>
            <div className='bg-[#94673d] px-10 pr-14 py-15 flex flex-col w-default'>
                <div className='font-black flex items-center gap-10 text-2xl md:text-4xl mb-4'>
                    Your Journey Begins Here
                </div>
                <div className='font-semibold text-xl md:text-2xl'>
                    Just graduated? Step into a world of real impact.
                </div>
                <p className='font-normal text-base md:text-2xl mt-8'>{`At Innovative Biscuits, we give you more than a first job — we give you a launchpad. Work alongside passionate teams, tackle real challenges, and grow faster than you imagined — all while staying true to who you are.`}</p>
                <div onClick={()=>setOpen(true)} className='cursor-pointer font-black flex items-center gap-10 text-base md:text-2xl mt-15'>
                    Search Jobs
                    <MoveRight className='w-[35px] h-[35px]' />
                </div>
            </div>
        </div>


        <div className='flex flex-col md:flex-row text-white md:my-15'>
            <Image src={culture} alt='out-products-image' className='md:w-[40%]'/>
            <div className='flex flex-col md:w-[60%] bg-[#fd9b6c] p-6 md:p-15'>
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
        <RequestForm open={open} setOpen={setOpen}/>
      </div>
    );
  }
  