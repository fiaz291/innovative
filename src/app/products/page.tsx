'use client';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import digestiveLogo from '../../assets/regular-products/Digestive.png';
import digestiveBox from '../../assets/regular-products/Digestive-Box.png';
import butterCrunchLogo from '../../assets/regular-products/Butter-Crunch.png';
import butterCrunchBox from '../../assets/regular-products/Butter-Crunch-Box.png';
import tooGudLogo from '../../assets/regular-products/Too-Gud.png';
import toooGudBox from '../../assets/regular-products/Too-Gud-Box.png';
import goodiesLogo from '../../assets/regular-products/Goodies.png';
import goodiesBox from '../../assets/regular-products/Goodies-Box.png';
import crustRollsChocolateLogo from '../../assets/regular-products/Crust-Rolls.png';
import crustRollsChocolateBox from '../../assets/regular-products/Crust-Rolls-Box.png';
import crustChocolateLogo from '../../assets/regular-products/Crust.png';
import crustChocolateBox from '../../assets/regular-products/Crust-Box.png';
import chocChipLogo from '../../assets/regular-products/Choc-n-Chip.png';
import chocChipBox from '../../assets/regular-products/Choc-n-Chip-Box.png';
import charmLogo from '../../assets/regular-products/Charm.png';
import charmBox from '../../assets/regular-products/Charm-Box.png';
import jumboJuniorLogo from '../../assets/Innovative-Jumbo-Junior.webp';
import jumboJuniorBox from '../../assets/Jumbo-Junior-Product.png';
import zeeraLogo from '../../assets/regular-products/Zeera.png';
import zeeraBox from '../../assets/regular-products/Zeera-Box.png';
import peanutLogo from '../../assets/regular-products/Peanut.png';
import peanutBox from '../../assets/regular-products/Peanut-Box.png';
import chocoRingsLogo from '../../assets/regular-products/ChocoRings.png';
import chocoRingsBox from '../../assets/regular-products/ChocoRings-Box.png';
import snappLogo from '../../assets/regular-products/Snapp.png';
import snappBox from '../../assets/regular-products/Snapp-Box.png';
import bittensLogo from '../../assets/regular-products/Bittens.png';
import bittensBox from '../../assets/regular-products/Bittens-Box.png';

import { useRouter } from 'next/navigation';

export default function ProductsPage() {
    const router = useRouter();
    return (
    <div>
        <div className="text-white w-full bg-no-repeat bg-center md:bg-cover">
              <Navbar isPremium={false} isTransparentBg />
        </div>

        <div className='flex flex-col m-15 md:m-30'>
            <div className='text-2xl md:text-6xl text-center font-black'>{`Our Signature Products`}</div>
        </div>

        <div className='flex flex-col m-10 md:m-20'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#9f2a2a] justify-center items-center text-white py-10 px-5'>
                    <Image src={digestiveLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/digestive')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#e7ad72_60%,#f5f0f2_60%)]'>
                    <Image src={digestiveBox} alt='digestive-image' className='md:h-[340px]'/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#f1c88e_70%,#f5f0f2_70%)]'>
                    <Image src={butterCrunchBox} alt='butter-crunch-image' className='md:h-[340px]'/>
                </div>
                <div className='flex flex-col md:w-[50%] bg-[#febe56] items-center justify-center text-white py-10 px-5'>
                    <Image src={butterCrunchLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6 text-[#8b0304]' onClick={() => router.push('/butter-crunch')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#7f1438] justify-center items-center text-white py-10 px-5'>
                    <Image src={tooGudLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/tooo-gud')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#e7ad72_60%,#f5f0f2_60%)]'>
                    <Image src={toooGudBox} alt='digestive-image' className='md:h-[340px]'/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#d6ecbc_70%,#f5f0f2_70%)]'>
                    <Image src={goodiesBox} alt='goodies-image' className='relative left-[-30px] md:h-[340px]'/>
                </div>
                <div className='flex flex-col md:w-[50%] bg-[#84a117] items-center justify-center text-white py-10 px-5'>
                    <Image src={goodiesLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/goodies')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#faa92a] justify-center items-center text-white py-10 px-5'>
                    <Image src={crustRollsChocolateLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/crust-rolls')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#ffdf91_60%,#f5f0f2_60%)]'>
                    <Image src={crustRollsChocolateBox} alt='crust-rolls-image' className='md:h-[340px]'/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#f6d0b4_70%,#f5f0f2_70%)]'>
                    <Image src={crustChocolateBox} alt='goodies-image' className='md:h-[340px]'/>
                </div>
                <div className='flex flex-col md:w-[50%] bg-[#5a2918] items-center justify-center text-white py-10 px-5'>
                    <Image src={crustChocolateLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/crust-wafer')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#4abed8] justify-center items-center text-white py-10 px-5'>
                    <Image src={chocChipLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/choc-n-chip')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#d1f7ff_60%,#f5f0f2_60%)]'>
                    <Image src={chocChipBox} alt='chox-n-chip-image' className=' md:h-[340px]'/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#ffd87a_70%,#f5f0f2_70%)]'>
                    <Image src={charmBox} alt='goodies-image' className='md:h-[340px]'/>
                </div>
                <div className='flex flex-col md:w-[50%] bg-[#a63131] items-center justify-center text-white py-10 px-5'>
                    <Image src={charmLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/charm')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#2362b0] justify-center items-center text-white py-10 px-5'>
                    <Image src={jumboJuniorLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/jumbo-junior')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#85c9ef_60%,#f5f0f2_60%)]'>
                    <Image src={jumboJuniorBox} alt='jumbo-junior-image' className='relative left-[-30px] md:h-[340px]'/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#f6d0b4_70%,#f5f0f2_70%)]'>
                    <Image src={zeeraBox} alt='zeera-image' className='md:h-[340px]'/>
                </div>
                <div className='flex flex-col md:w-[50%] bg-[#7e3f1e] items-center justify-center text-white py-10 px-5'>
                    <Image src={zeeraLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/zeera')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#66c9c7] justify-center items-center text-white py-10 px-5'>
                    <Image src={peanutLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/peanut')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#d1f7ff_70%,#f5f0f2_70%)]'>
                    <Image src={peanutBox} alt='peanut-image' className='md:h-[340px]'/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#e7e0a7_70%,#f5f0f2_70%)]'>
                    <Image src={chocoRingsBox} alt='choco-rings-image' className='md:h-[340px]'/>
                </div>
                <div className='flex flex-col md:w-[50%] bg-[#8d664f] items-center justify-center text-white py-10 px-5'>
                    <Image src={chocoRingsLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/choco-rings')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#0c54a0] justify-center items-center text-white py-10 px-5'>
                    <Image src={snappLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/snapp')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#85c9ef_70%,#f5f0f2_70%)]'>
                    <Image src={snappBox} alt='snapp-image' className='md:h-[340px]'/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='flex justify-center py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#cbf3fc_70%,#f5f0f2_70%)]'>
                    <Image src={bittensBox} alt='choco-rings-image' className='md:md:h-[340px] w-[259px]'/>
                </div>
                <div className='flex flex-col md:w-[50%] bg-[#87d9eb] items-center justify-center text-white py-10 px-5'>
                    <Image src={bittensLogo} alt={'logo'} className='w-[50%]'/>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/bittens')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
            </div>

        </div>
      </div>
    );
  }
  