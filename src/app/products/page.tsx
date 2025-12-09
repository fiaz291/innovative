'use client';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import digestiveLogo from '../../assets/products-assets/Digestive-Logo.png';
import digestiveBox from '../../assets/products-assets/Digestive-Product.png';
import butterCrunchLogo from '../../assets/products-assets/Butter-Crunch-Logo.png';
import butterCrunchBox from '../../assets/products-assets/Butter-Crunch-Product.png';
import tooGudLogo from '../../assets/products-assets/Tooo-Gud-Logo.png';
import toooGudBox from '../../assets/products-assets/ToooGud-Product.png';
import goodiesLogo from '../../assets/regular-products/Goodies.png';
import goodiesBox from '../../assets/regular-products/Goodies-Box.png';
import crustRollsChocolateLogo from '../../assets/products-assets/Crust-Rolls-Logo.png';
import crustRollsChocolateBox from '../../assets/products-assets/Crust-Rolls-Chocolate-Product.png';
import crustChocolateLogo from '../../assets/products-assets/Crust-Logo.png';
import crustChocolateBox from '../../assets/regular-products/Crust-Box.png';
import chocChipLogo from '../../assets/products-assets/Choc-n-Chip-Logo.png';
import chocChipBox from '../../assets/products-assets/Choc-n-Chip-Product.png';
import charmLogo from '../../assets/products-assets/Charm-Logo.png';
import charmBox from '../../assets/products-assets/Charm-Product.png';
import jumboJuniorLogo from '../../assets/Innovative-Jumbo-Junior.webp';
import jumboJuniorBox from '../../assets/products-assets/Jumbo-Junior-Product.png';
import zeeraLogo from '../../assets/products-assets/Zeera-Logo.png';
import zeeraBox from '../../assets/products-assets/Zeera-Product.png';
import peanutLogo from '../../assets/products-assets/Peanut-Logo.png';
import peanutBox from '../../assets/products-assets/Peanut-Product.png';
import chocoRingsLogo from '../../assets/products-assets/Choco-Rings.png';
import chocoRingsBox from '../../assets/products-assets/Choco-Rings-Product.png';
import snappLogo from '../../assets/products-assets/Snapp-Logo.png';
import snappBox from '../../assets/products-assets/Snapp-Product.png';
import bittensLogo from '../../assets/products-assets/Bitten-Logo.png';
import bittensBox from '../../assets/products-assets/Bitten-Product.png';

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
                    <Image src={digestiveBox} alt='digestive-image' />
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#f1c88e_70%,#f5f0f2_70%)]'>
                    <Image src={butterCrunchBox} alt='butter-crunch-image' />
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
                    <Image src={toooGudBox} alt='digestive-image' />
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
                    <Image src={crustRollsChocolateBox} alt='crust-rolls-image' />
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#f6d0b4_70%,#f5f0f2_70%)]'>
                    <Image src={crustChocolateBox} alt='goodies-image' />
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
                    <Image src={charmBox} alt='goodies-image' />
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
                    <Image src={zeeraBox} alt='zeera-image' />
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
                    <Image src={peanutBox} alt='peanut-image' />
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#e7e0a7_70%,#f5f0f2_70%)]'>
                    <Image src={chocoRingsBox} alt='choco-rings-image' />
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
                    <Image src={snappBox} alt='snapp-image' />
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='flex justify-center py-10 px-5 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#cbf3fc_70%,#f5f0f2_70%)]'>
                    <Image src={bittensBox} alt='choco-rings-image' />
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
  