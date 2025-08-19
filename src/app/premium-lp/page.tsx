import girlImg from '../../assets/Girl.webp'
import Navbar from "@/components/Navbar";
import ourProductsImg from '../../assets/our-products.png';
import creationsImg from '../../assets/creations.png';
import InfoContainer from '@/components/InfoContainer';
import Image from 'next/image';

export default function LandingPage() {
    return (
       <div
        className={`
          text-black w-full bg-no-repeat bg-cover bg-[#f5c899]
        `}
      >

            <Navbar />
            <div className="flex flex-col gap-4 items-center font-black my-15 mx-5 md:mx-30">
                <div className="text-2xl md:text-5xl">Innovative Premium</div>
                <div className="text-3xl md:text-9xl">Crafted for the</div>
                <div className="text-3xl md:text-9xl mb-8">Exceptional.</div>
                <div className="md:px-80 text-center font-medium text-xl md:text-3xl">The premium range is a celebration of craftsmanship and excellence — thoughtfully created with superior ingredients and precision, offering an elevated experience in every product.</div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 mx-15">
                <InfoContainer image={ourProductsImg} title='Our Products' description='It All Starts'/>
                <InfoContainer image={creationsImg} title='Creations' description='Crafted from the Inside Out'/>
            </div>

            <Image src={girlImg} alt='bg-lp'/>
      </div>
    );
  }
  