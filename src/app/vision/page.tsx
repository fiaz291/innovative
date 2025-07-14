import heroImg from '../../assets/vision.webp';
import Navbar from "@/components/Navbar";
import LearnMore from '@/components/LearnMore';

export default function LandingPage() {
    return (
    <div>
        <div
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
          className="text-white w-full bg-no-repeat bg-center md:bg-cover pb-50 md:pb-200">
              <Navbar isPremium={false} />
              <div className="flex flex-col gap-4 items-center text-center font-black mx-5 md:mx-30">
                  <div className="text-2xl md:text-8xl mt-50 md:mt-100 whitespace-pre-line">{`Where Every Bite\nBrings a Smile`}</div>
              </div>
        </div>

        <div className='flex flex-col my-15 md:m-30'>
            <div className='text-xl md:text-6xl whitespace-pre-line text-center font-black'>Our Vision</div>
            <p className='text-base md:text-3xl my-2 md:my-10 px-5 md:px-25 text-center'>At <strong>Innovative Biscuits,</strong> we believe that <strong>revery biscuit is a moment of joy</strong> - a reason to smile, share, and savour. With every bite, we carry a promise of excellence, crafted with care and baked with purpose.</p>
            <p className='text-base md:text-3xl my-2 md:my-10 px-5 md:px-25 text-center'>We take this joy seriously — and that means <strong>responsibility at every step:</strong></p>
        </div>

        <div className='flex flex-col gap-5 text-white text-center md:text-left'>
          <div className='flex'>
            <div className='flex items-center w-full md:w-[40%] bg-[#8e2e19] p-15 text-xl md:text-5xl font-black whitespace-pre-line'>{`Responsibility\nTowards Ingredients`}</div>
            <div className='hidden md:flex p-15 items-center w-[60%] bg-[#fd9b6c] text-lg md:text-4xl text-[#8e2e19]'>
              <ul className='list-disc'>
                <li>Ethical sourcing </li>
                <li>Transparent, informational labeling according to dietary and religious requirements</li>
              </ul>
            </div>
          </div>
          <div className='flex'>
            <div className='hidden md:flex p-15 items-center w-[60%] bg-[#5899af] text-lg md:text-4xl'>
              <ul className='list-disc'>
                <li>Responsibility towards local suppliers</li>
                <li>Environmental awareness and inspiring the next generation about it </li>
              </ul>
            </div>
            <div className='flex items-center w-full md:w-[40%] bg-[#123A5E] p-15 text-xl md:text-5xl font-black whitespace-pre-line'>{`Responsibility\nTowards Community`}</div>
          </div>
          <div className='flex'>
            <div className='flex items-center w-full md:w-[40%] bg-[#94673D] p-15 text-xl md:text-5xl font-black whitespace-pre-line'>{`Responsibility\nTowards Regulations`}</div>
            <div className='hidden md:flex p-15 items-center w-[60%] bg-[#df9f3e] text-lg md:text-4xl'>
              <ul className='list-disc'>
                <li>Good manufacturing practices to abide by</li>
                <li>Food safety and quality systems to uphold</li>
                <li>Collaboration with scientists, authorities, nutritionists and suppliers to ensure quality and safety</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col my-15 md:m-30'>
            <div className='text-xl md:text-6xl whitespace-pre-line text-center font-black'>Our Mission</div>
            <p className='text-base md:text-3xl my-2 md:my-10 px-5 md:px-25 text-center'>At <strong>Innovative Biscuits,</strong> we are more than biscuit manufacturers  - we are tastemakers, trailblazers, and change-makers. Rooted in a deep love for food and a passion for national progress, we believe in creating not just great products, but a greater purpose. Innovation is our compass - guiding us to reimagine the ordinary through bold, responsible, and visionary thinking.</p>
        </div>

        <div className='flex mt-15 mb-25 text-white'>
            <div className='w-full md:w-[40%] bg-[#123a5e] p-25'>
              <p className='flex items-center text-xl md:text-6xl font-black py-5 md:pt-5 md:pb-25 border-b'>{`Agile Thinking`}</p>
              <p className='flex items-center text-xl md:text-6xl font-black py-5 md:pt-5 md:pb-25 border-b'>{`Resilient Foundations`}</p>
              <p className='flex items-center text-xl md:text-6xl font-black py-5 md:pt-5 md:pb-25'>{`Elevated Experiences`}</p>
            </div>
            <div className='hidden md:block md:w-[60%] bg-[#5899af] p-25'>
                <p className='text-lg md:text-3xl pt-5 pb-13 border-b'>
                    We move with purpose and precision — anticipating trends, accelerating production, and staying ahead of the curve to serve our consumers with speed and smarts.
                </p>
                <p className='text-lg md:text-3xl pt-5 pb-27 border-b'>
                    Built on trust, quality, and responsibility, we strengthen every link in our value chain — from our ingredients and teams to the communities we serve.
                </p>
                <p className='text-lg md:text-3xl pt-5'>
                    We strive for excellence in every detail. With world-class ingredients and forward-looking processes, we deliver not just products — but joy, nourishment, and pride.
                </p>
            </div>
        </div>

        <LearnMore />
      </div>
    );
  }
  