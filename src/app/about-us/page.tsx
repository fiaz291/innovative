import heroImg from '../../assets/about-hero.webp';
import Navbar from "@/components/Navbar";
import Image from 'next/image';
import aboutUs from '../../assets/about-us.webp';
import certificate1 from '../../assets/Certificate1.png';
import certificate2 from '../../assets/Certificate2.png';
import certificate3 from '../../assets/Certificate3.png';
import certificate4 from '../../assets/Certificate4.png';
import certificate5 from '../../assets/Certificate5.png';

export default function AboutUsPage() {
    return (
    <div>
        <div
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
          className="text-white w-full bg-no-repeat bg-center bg-cover">
              <Navbar isPremium={false} />
              <div className="flex flex-col gap-4 items-center justify-center font-black h-[50vh] md:h-[85vh]">
                  <div className="text-2xl md:text-6xl text-center whitespace-pre-line mt-[-80px]">{`Where tradition\nmeets innovation`}</div>
              </div>
        </div>

        <div className='flex flex-col items-center relative text-center p-6 md:p-15 md:px-50 md:py-20'>
            <div className="font-black text-3xl md:text-6xl mb-15">{`Step into the world of quality, taste, and innovation.`}</div>
            <p className='text-base md:text-2xl mb-8'>
                At Innovative Biscuits, our passionate team of forward-thinkers is driven to revolutionize the market—one delicious bite at a time. As a responsible organization, we stay committed to all our stakeholders, with a strong focus on our consumers.
            </p>
            <p className='text-base md:text-2xl mb-8'>
                Guided by our mission to craft products that contribute to a better lifestyle and a stronger society, we continuously strive to raise industry standards. Through quality, taste, and innovation, we’ve carved our place in the hearts of our customers.
            </p>
            <p className='text-base md:text-2xl mb-8'>
                To say we love what we do wouldn’t be enough—we live it, breathe it, and bake it into every biscuit.
            </p>
        </div>

        <div className='flex flex-col md:flex-row text-white mb-0 md:mb-15'>
            <div className='flex flex-col md:w-[50%] bg-[#123a5e] p-6 md:p-15'>
                <div className='font-bold flex items-center gap-10 text-2xl md:text-4xl'>
                    Upholding Excellence in  Quality, Halal Standards & Food Safety
                </div>
                <p className='font-normal text-base md:text-2xl mt-8'>{`At INNOVATIVE BISCUITS (Pvt. Ltd.), we are dedicated to meeting customer expectations and legal requirements through the continual improvement of our Halal, Food Safety, and Quality `}</p>
                <p className='font-normal text-base md:text-2xl mt-8'>{`We ensure the provision of necessary resources and clear communication at all levels to support our strategic goals and promote active participation. Our aim is to uphold a strong culture of Quality, Halal compliance, and Food Safety across the organization.`}</p>
            </div>
            <Image src={aboutUs} alt='out-products-image' className='md:w-[50%]'/>
        </div>
        <div className='flex flex-col items-center mt-0 md:mt-25'>
          <p className="text-black font-black text-2xl md:text-6xl">Certified For Excellence</p>

          <div className="grid grid-cols-1 md:grid-cols-5 mx-10 md:mx-30 md:mx-50 my-15 place-items-center">
            <div className="h-full flex justify-center items-center max-w-[150px] md:border-r border-black md:pr-8 md:py-0 py-8">
              <Image src={certificate5} alt="BRCGS Food Safety" className="mx-auto" />
            </div>
            <hr className='md:hidden w-full border-black' />
            <div className="h-full flex justify-center items-center md:border-r border-black max-w-[250px] md:pr-8 md:py-0 py-8">
              <Image src={certificate2} alt="Halal Certified" className="mx-auto" />
            </div>
            <hr className='md:hidden w-full border-black' />
            <div className="h-full flex justify-center items-center md:border-r max-w-[150px] border-black md:pr-8 md:py-0 py-8">
              <Image src={certificate3} alt="FSSC 22000" className="mx-auto" />
            </div>
            <hr className='md:hidden w-full border-black' />
            <div className="h-full flex justify-center items-center md:border-r max-w-[150px] border-black border-offset-[30px] md:pr-8 md:py-0 py-8">
              <Image src={certificate4} alt="ISO 9001:2015" className="mx-auto" />
            </div>
            <hr className='md:hidden w-full border-black' />
            <div className="h-full flex justify-center items-center max-w-[150px] md:py-0 py-8">
              <Image src={certificate1} alt="Pakistan Standards" className="mx-auto" />
            </div>
          </div>
        </div>  
      </div>
    );
  }
  