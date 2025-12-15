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
import certificate1 from '../../assets/Certificate1.png';
import certificate2 from '../../assets/Certificate2.png';
import certificate3 from '../../assets/Certificate3.png';
import certificate4 from '../../assets/Certificate4.png';
import certificate5 from '../../assets/Certificate5.png';

export default function InnovationLabgPage() {
    return (
    <div>
        <div
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
          className="text-white w-full bg-no-repeat bg-center bg-cover">
              <Navbar isPremium={false} />
              <div className="flex flex-col gap-4 items-center justify-center text-center font-black h-[50vh] md:h-[85vh]">
                  <div className="text-3xl md:text-6xl whitespace-pre-line mt-[-80px]">{`The Epicenter of\ndelicious disruption`}</div>
              </div>
        </div>

        <div className='flex flex-col items-center p-6 md:p-25'>
            <p className="text-black font-black text-2xl md:text-6xl mb-6 md:mb-25">Innovation Lab</p>
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


        
        <div className="flex flex-col items-center my-10 md:my-25">
          <p className="text-black font-black text-2xl md:text-6xl">
            Certified For Excellence
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 mx-10 md:mx-30 md:mx-50 my-5">
            <div className="flex justify-center items-center max-w-[100px] md:max-w-[150px]">
              <Image
                src={certificate1}
                alt="Pakistan Standards"
                className="mx-auto"
              />
            </div>
            <div className="min-w-[100%] md:min-w-[1px] min-h-[1px] md:min-h-[100px] bg-black" />
            <div className="flex justify-center items-center max-w-[100px] md:max-w-[250px]">
              <Image
                src={certificate2}
                alt="Halal Certified"
                className="mx-auto"
              />
            </div>
            <div className="min-w-[100%] md:min-w-[1px] min-h-[1px] md:min-h-[100px] bg-black" />
            <div className="flex justify-center items-center max-w-[100px] md:max-w-[150px]">
              <Image src={certificate3} alt="FSSC 22000" className="mx-auto" />
            </div>
            <div className="min-w-[100%] md:min-w-[1px] min-h-[1px] md:min-h-[100px] bg-black" />
            <div className="flex justify-center items-center max-w-[100px] md:max-w-[200px] min-w-[100px] md:min-w-[200px]">
              <Image src={certificate4} alt="ISO 9001:2015" className="mx-auto" />
            </div>
            <div className="min-w-[100%] md:min-w-[1px] min-h-[1px] md:min-h-[100px] bg-black" />
  
            <div className="flex justify-center items-center max-w-[100px] md:max-w-[150px] ">
              <Image
                src={certificate5}
                alt="BRCGS Food Safety"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <LearnMore />
      </div>
    );
  }
  