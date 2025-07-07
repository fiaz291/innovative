'use-client';

import heroImg from '../../assets/sustainability-hero.png';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import sun from '../../assets/sun.png';
import clouds from '../../assets/Clouds.png';
import circleTriangles from '../../assets/circle-triangle.png';
import classroom1 from '../../assets/classroom1.png';
import classroom2 from '../../assets/classroom2.png';
import classroom3 from '../../assets/classroom3.png';
import future from '../../assets/future.png';
import { MoveRight } from 'lucide-react';

export default function CareerPage() {
    return (
    <div>
        <div
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
          className="text-white w-full bg-no-repeat bg-center md:bg-cover pb-50 md:pb-200">
              <Navbar isPremium={false} />
              <div className="flex flex-col gap-4 items-center font-black mx-5 md:mx-30">
                  <div className="text-2xl md:text-8xl mt-50 md:mt-100 whitespace-pre-line text-center">{`Good for You.\nBetter for the Planet.`}</div>
              </div>
        </div>

        <div className='flex flex-col items-center relative text-center pb-25'>
            <Image src={sun} alt='sun-image' className='absolute left-0 top-[-58px] md:top-[-242px] w-[60px] md:w-[250px]'/>
            <div className='w-[100%] h-auto'>
                <div className='float-right w-[30%]'>
                    <Image src={clouds} alt='clouds-image'/>
                </div>
            </div>

            <div className="font-black text-2xl md:text-8xl mb-15 px-5 md:px-60">{`Sustainability at Our Core`}</div>
            <p className='text-lg md:text-4xl mb-8 px-5 md:px-60'>
                At Innovative Biscuits, we believe that progress should never come at the planet’s expense. That’s why we’re committed to building a business that’s not only responsible but regenerative — one that gives back more than it takes.
            </p>
            <p className='text-lg md:text-4xl mb-8 px-5 md:px-60'>
                From cutting down production waste and optimizing packaging to energy-efficient practices and responsible sourcing, we’re taking bold steps toward a greener, cleaner future.
            </p>
            <p className='text-lg md:text-4xl mb-8 px-5 md:px-60'>
                Our vision for sustainability goes beyond the environment — it includes empowering communities, supporting education, and nurturing a culture of long-term wellbeing.
            </p>
            <Image src={circleTriangles} alt='circle-triangles-image' className='absolute right-0 bottom-[-3px] w-[155px] md:w-[400px]'/>
        </div>

        <div className='flex flex-col gap-5 text-white'>
          <div className='flex'>
            <div className='w-full md:w-[40%] bg-[#8e2e19] p-15 text-xl md:text-6xl font-black'>Smarter Production</div>
            <div className='hidden md:flex justify-center items-center w-[60%] bg-[#fd9b6c] text-lg md:text-4xl'>Reducing energy and water usage with efficient systems</div>
          </div>
          <div className='flex'>
            <div className='hidden md:flex justify-center items-center w-[60%] bg-[#5899AF] text-lg md:text-4xl'>Minimizing food and packaging waste through innovation</div>
            <div className='w-full md:w-[40%] bg-[#123A5E] p-15 text-xl md:text-6xl font-black'>Less Waste</div>
          </div>
          <div className='flex'>
            <div className='w-full md:w-[40%] bg-[#94673D] p-15 text-xl md:text-6xl font-black'>Clean Packaging</div>
            <div className='hidden md:flex justify-center items-center w-[60%] bg-[#DF9F3E] text-lg md:text-4xl'>Shifting to recyclable, eco-conscious materials</div>
          </div>
          <div className='flex'>
            <div className='hidden md:flex justify-center items-center w-[60%] bg-[#85acab] text-lg md:text-4xl'>Supporting local causes and uplifting future generations</div>
            <div className='w-full md:w-[40%] bg-[#036a89] p-15 text-xl md:text-6xl font-black'>Communityt Impact</div>
          </div>
        </div>

        <div className='flex flex-col my-15 md:m-30'>
            <div className='text-2xl md:text-8xl whitespace-pre-line text-center font-black'>{`Meet Jumbo Junior:\nLearning with Every Bite`}</div>
            <div className='flex mt-15 mb-25'>
                <div className='hidden md:block w-[40%] bg-[#123a5e]'></div>
                <div className='w-full md:w-[60%] bg-[#fef4af] px-15 py-30'>
                    <p className='text-lg md:text-4xl mb-10'>
                        One of our proudest initiatives is <strong>Jumbo Junior</strong> - a biscuit designed not just to nourish, but to nurture young minds. Behind every pack is a purpose: to inspire the next generation to care for the world they live in.
                    </p>
                    <p className='text-lg md:text-4xl'>
                        Through fun, engaging animated content, Jumbo Junior talks directly to kids about real-world issues - from <strong>global warming</strong> to <strong>water scarcity</strong> to <strong>pandemic awareness</strong> - in a way they understand and remember.
                    </p>
                </div>
            </div>
            <div className='text-xl md:text-6xl whitespace-pre-line text-center font-black'>{`Taking the Message to Classrooms`}</div>
            <p className='text-base md:text-3xl my-10 px-5 md:px-25 text-center'>Because learning happens best where curiosity lives, Jumbo Junior goes beyond the screen and into <strong>schools across Pakistan.</strong> Through interactive sessions and on-ground activities, we’re helping students understand how small actions today lead to a greener, cleaner tomorrow.</p>
            <div className='flex flex-col md:flex-row gap-5'>
                <Image src={classroom1} alt='classroom-image' className='md:w-[33%]'/>
                <Image src={classroom2} alt='classroom-image' className='md:w-[33%]'/>
                <Image src={classroom3} alt='classroom-image' className='md:w-[33%]'/>
            </div>
        </div>

        <div className='flex flex-col'>
            <div className='text-xl md:text-6xl whitespace-pre-line text-center font-black'>{`A Greener Future, One Step at a Time`}</div>
            <p className='text-base md:text-3xl my-10 px-5 md:px-40 text-center'>This is just the beginning. With Jumbo Junior leading the way, we’re committed to expanding our environmental outreach — addressing urgent issues and empowering young minds to become thoughtful, informed citizens of the future.</p>
            <div className='w-[100%] h-auto'>
                <div className='float-right w-[70%]'>
                    <Image src={future} alt='clouds-image'/>
                </div>
            </div>
        </div>
        

        <div className='flex flex-col md:flex-row p-12 md:p-45 bg-[#efeff0] gap-10 md:gap-0'>
            <div className='md:w-[50%] font-black text-2xl md:text-7xl my-auto '>
                {`Learn More About Innovative`}
            </div>

            <div className='flex flex-col gap-5 md:gap-20 md:px-30'>
                <div className='font-black flex items-center gap-10 text-base md:text-3xl'>
                    About Us
                    <MoveRight className='w-[35px] h-[35px]' />
                </div>
                <div className='font-black flex items-center gap-10 text-base md:text-3xl'>
                    Our Leadership
                    <MoveRight className='w-[35px] h-[35px]' />
                </div>
                <div className='font-black flex items-center gap-10 text-base md:text-3xl'>
                    Awards
                    <MoveRight className='w-[35px] h-[35px]' />
                </div>
            </div>
        </div>
      </div>
    );
  }
  