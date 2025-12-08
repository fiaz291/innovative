'use client';
import heroImg from '../../assets/premium-products-hero.webp';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import digestive from '../../assets/digestive.png';
import digestiveBiscuits from '../../assets/digestive-biscuits.webp';
import haven from '../../assets/haven.png';
import havenBiscuits from '../../assets/haven-biscuits.webp';
import biscoffi from '../../assets/biscoffi-products-page.png';
import biscoffiBiscuits from '../../assets/biscoffi-biscuits-products-page.webp';
import frisky from '../../assets/frisky.png';
import friskyRollsBiscuits from '../../assets/frisky-biscuits.webp';
import friskyWafersBiscuits from '../../assets/frisky-wafer.webp';
import shortBread from '../../assets/shortbread.png';
import shortBreadBiscuits from '../../assets/shortbread-biscuits.webp';
import goldenLotus from '../../assets/golden-lotus-pp.png';
import goldenLotusBiscuit from '../../assets/golden-lotus-bisuit-pp.webp';
import fabulous from '../../assets/fabulous-pp.png';
import fabulousBiscuit from '../../assets/fabulous-biscuit.webp';
import bricklane from '../../assets/bricklane-1.png';
import bricklaneBiscuits from '../../assets/bricklane-biscuits.webp';
import { useRouter } from 'next/navigation';

export default function PremiumProductsPage() {
    const router = useRouter();
    return (
    <div>
        <div
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
          className="text-white w-full bg-no-repeat bg-center md:bg-cover">
              <Navbar isTextWhite/>
              <div className="flex flex-col gap-4 items-center font-black mx-5 md:mx-30 py-25 md:py-75">
                  <div className="text-2xl md:text-6xl text-center">Elevate Every Bite.</div>
              </div>
        </div>

        <div className='flex flex-col m-10 md:m-20'>
            <div className='text-xl md:text-4xl underline underline-offset-20 decoration-1 text-center font-black mb-5 md:mb-10'>{`Our premium Products`}</div>
            <div className='text-2xl md:text-6xl whitespace-pre-line text-center font-black'>{`Not just Biscuits. An Experience.`}</div>
            <p className='text-base md:text-2xl my-10 px-5 md:px-25 text-center'>Discover the premium side of snacking with Innovative Biscuits. Made from carefully selected ingredients, out premium range combines wholesome goodness with refined taste - perfect for those who crave quality in every bite.</p>
        </div>

        <div className='flex flex-col m-10 md:m-20'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#9f2a2a] pt-10 pb-30 justify-center text-white px-15'>
                    <Image src={digestive} alt={'digestive'} className='w-[50%]'/>
                    <div className='text-lg md:text-2xl mt-6'>
                        Simple Goodness, Perfectly Backed - A Wholesome Digestive Biscuit
                    </div>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/digestive-premium')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 items-center flex md:w-[50%] bg-[linear-gradient(to_bottom,#e7ad72_70%,#f5f0f2_70%)]'>
                    <Image src={digestiveBiscuits} alt='out-products-image' className='h-[100%]'/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#f1c88e_60%,#f5f0f2_60%)]'>
                    <Image src={havenBiscuits} alt='out-products-image' className='h-[100%]'/>
                </div>
                <div className='flex flex-col md:w-[50%] bg-[#99693a] pt-10 pb-30 justify-center text-white px-15'>
                    <Image src={haven} alt={'digestive'} className='w-[40%] relative left-[-8px]'/>
                    <div className='text-xl md:text-3xl font-black mt-6'>
                        Cookies With Indulging Chocolate Inside
                    </div>
                    <div className='text-lg md:text-2xl '>
                        Gourmet on the Outside, Decadence on the Inside
                    </div>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/haven')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#231f20] pt-10 pb-30 justify-center text-white px-15'>
                    <Image src={biscoffi} alt={'digestive'} className='w-[50%] relative left-[-6px]'/>
                    <div className='text-xl md:text-3xl font-black mt-6'>
                        The Aromatic Coffee Crackers
                    </div>
                    <div className='text-lg md:text-2xl'>
                        Brewed to Be Eaten - Artisan Crackers Infused with Rich Coffee Notes
                    </div>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/biscoffi')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#ffce54_60%,#f5f0f2_60%)]'>
                    <Image src={biscoffiBiscuits} alt='out-products-image' className='h-[100%]'/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#ffaa93_50%,#f5f0f2_50%)]'>
                    <Image src={friskyRollsBiscuits} alt='out-products-image' className='h-[100%]'/>
                </div>
                <div className='flex flex-col md:w-[50%] bg-[#79498c] pt-10 pb-30 justify-center text-white px-15'>
                    <Image src={frisky} alt={'digestive'} className='w-[40%] relative left-[-8px]'/>
                    <div className='text-xl md:text-3xl font-black mt-6'>
                        Crispy Wafer Rolls Filled With Bursting Cream
                    </div>
                    <div className='text-lg md:text-2xl'>
                        Swirls of Delight - Delicately Rolls Wafers Filled With Lush Cream
                    </div>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/frisky-rolls')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#6b9ebd] pt-10 pb-30 justify-center text-white px-15'>
                    <Image src={frisky} alt={'digestive'} className='w-[40%] relative left-[-8px]'/>
                    <div className='text-xl md:text-3xl font-black mt-6'>
                        Crispy Wafer Filled With Flavoured Cream
                    </div>
                    <div className='text-lg md:text-2xl'>
                        Crisp Layers of Delight - Light, Flaky Wafers Filled with Smooth Cream
                    </div>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/frisky-wafer')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#87d9eb_55%,#f5f0f2_55%)]'>
                    <Image src={friskyWafersBiscuits} alt='out-products-image' className='h-[100%]'/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#ffa372_70%,#f5f0f2_70%)]'>
                    <Image src={shortBreadBiscuits} alt='out-products-image' className='h-[100%]'/>
                </div>
                <div className='flex flex-col md:w-[50%] bg-[#231f20] pt-10 pb-30 justify-center text-white px-15'>
                    <Image src={shortBread} alt={'digestive'} className='w-[50%] relative left-[-10px]'/>
                    <div className='text-xl md:text-3xl font-black mt-6'>
                        Butter Cookies
                    </div>
                    <div className='text-lg md:text-2xl'>
                        Handcrafted with the finest butter and baked to perfection
                    </div>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/short-bread')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#b54845] pt-10 pb-30 justify-center text-white px-15'>
                    <Image src={goldenLotus} alt={'digestive'} className='w-[50%] relative left-[-10px]'/>
                    <div className='text-xl md:text-3xl font-black mt-6'>
                        Golden Caramel Goodness
                    </div>
                    <div className='text-lg md:text-2xl'>
                        Steeped in tradition, perfected for today - premium Lotus biscuits
                    </div>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/golden-lotus')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#f4978f_60%,#f5f0f2_60%)]'>
                    <Image src={goldenLotusBiscuit} alt='out-products-image' className='h-[100%]'/>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='py-10 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#f8b145_60%,#f5f0f2_60%)]'>
                    <Image src={fabulousBiscuit} alt='out-products-image' className='h-[100%]'/>
                </div>
                <div className='flex flex-col md:w-[50%] bg-[#79498c] pt-10 pb-30 justify-center text-white px-15'>
                    <Image src={fabulous} alt={'digestive'} className='w-[50%] relative left-[-10px]'/>
                    <div className='text-xl md:text-3xl font-black mt-6'>
                        Chocolate Chip Cookies
                    </div>
                    <div className='text-lg md:text-2xl'>
                        Golden, chewy and loaded with gooey chocolate chips - these cookies are oure joy in every bite.
                    </div>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/fabulous')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:w-[50%] bg-[#9f2a2a] pt-10 pb-30 justify-center text-white px-15'>
                    <Image src={bricklane} alt={'digestive'} className='w-[25%] relative left-[-10px]'/>
                    <div className='text-xl md:text-3xl font-black mt-6'>
                        Experience The Chocolate Indulgence
                    </div>
                    <div className='text-lg md:text-2xl'>
                        Premium taste with a purpose - ethically sourced, beautifully crafted, truly unforgettable
                    </div>
                    <div className='cursor-pointer flex items-center gap-2 text-lg md:text-2xl font-black mt-6' onClick={() => router.push('/bricklane')}>
                        Read More
                        <MoveRight className='w-[35px] h-[35px]' />
                    </div>
                </div>
                <div className='py-10 items-center md:flex md:w-[50%] bg-[linear-gradient(to_bottom,#e7ad72_60%,#f5f0f2_60%)]'>
                    <Image src={bricklaneBiscuits} alt='out-products-image' className='h-[100%]'/>
                </div>
            </div>
        </div>
      </div>
    );
  }
  