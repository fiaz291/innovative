import heroImg from '../../assets/innovative-lab-hero.webp';
import Navbar from "@/components/Navbar";
import LearnMore from '@/components/LearnMore';
import Image from 'next/image';
import lab1 from '../../assets/lab-img-1.webp';
import lab2 from '../../assets/lab-img-2.webp';
import lab3 from '../../assets/lab-img-3.webp';
import lab4 from '../../assets/lab-img-4.webp';
import lab5 from '../../assets/lab-img-5.webp';
import lab6 from '../../assets/lab-img-6.webp';
import lab7 from '../../assets/lab-img-7.webp';
import lab8 from '../../assets/lab-img-8.webp';
import lab9 from '../../assets/lab-img-9.webp';
import lab10 from '../../assets/lab-img-10.webp';

export default function InnovationLabgPage() {
    return (
    <div>
        <div
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
          className="text-white w-full bg-no-repeat bg-center md:bg-cover">
              <Navbar isPremium={false} />
              <div className="flex flex-col gap-4 items-center justify-center text-center font-black h-[85vh]">
                  <div className="text-2xl md:text-6xl whitespace-pre-line mt-[-80px]">{`The Epicenter of\ndelicious disruption`}</div>
              </div>
        </div>

        <div className='flex flex-col items-center p-25'>
            <p className="text-black font-black text-2xl md:text-6xl mb-25">Innovation Lab</p>
            <div className='flex flex-col gap-8'>
              <div className='flex gap-8'>
                <div className='w-[50%]'>
                  <Image src={lab1} alt='lab-image' />
                </div>
                 <div className='w-[50%]'>
                  <Image src={lab2} alt='lab-image' className='w-full h-full'/>
                </div>
              </div>
              <div className='flex gap-8'>
                 <div className='w-[50%]'>
                  <Image src={lab3} alt='lab-image' className='w-full h-full'/>
                </div>
                 <div className='w-[50%]'>
                  <Image src={lab4} alt='lab-image' className='w-full h-full'/>
                </div>
              </div>
              <div className='flex gap-8'>
                 <div className='w-[50%]'>
                  <Image src={lab5} alt='lab-image' className='w-full h-full'/>
                </div>
                 <div className='w-[50%]'>
                  <Image src={lab6} alt='lab-image' className='w-full h-full'/>
                </div>
              </div>
              <div className='flex gap-8'>
                 <div className='w-[50%]'>
                  <Image src={lab7} alt='lab-image' className='w-full h-full'/>
                </div>
                 <div className='w-[50%]'>
                  <Image src={lab8} alt='lab-image' className='w-full h-full'/>
                </div>
              </div>
              <div className='flex gap-8'>
                 <div className='w-[50%]'>
                  <Image src={lab9} alt='lab-image' className='w-full h-full'/>
                </div>
                 <div className='w-[50%]'>
                  <Image src={lab10} alt='lab-image' className='w-full h-full'/>
                </div>
              </div>
            </div>
        </div>


        <LearnMore />
      </div>
    );
  }
  