"use-client";

import LearnMore from "@/components/LearnMore";
import Navbar from "@/components/Navbar";

export default function LeadershipPage() {
  return (
    <div>
      <div className="w-full bg-no-repeat bg-center md:bg-cover">
        <Navbar isPremium={false} isTransparentBg />
        <div className="flex flex-col gap-4 items-center text-center font-black mx-5 md:mx-30">
          <div className="text-2xl md:text-6xl mt-25 md:mt-40 whitespace-pre-line">{`Leadership that\ninspires innovation.`}</div>
          <div className="text-lg md:text-4xl my-10 md:my-15 md:mb-25 border-b border-b-[1.5px] border-b-[#000000] pb-2">
            {" "}
            Our Leadership
          </div>
        </div>

        <div className="flex flex-col gap-5 text-white md:text-left">
          <div className="flex">
            <div className="flex flex-col w-full md:w-[64git remote -v%] bg-[#6b9ebd] p-15">
              <div className="text-base md:text-xl font-medium">
                THE HONORABLE CHAIRMAN
              </div>
              <div className="text-xl md:text-4xl font-black mt-2 md:mt-5 mb-5 md:mb-10">
                SHEIKH MUNIR HUSSAIN
              </div>
            </div>
            <div className="min-h-[25rem] hidden md:block p-15 w-[60%] bg-[#123a5e]">
              <p className='font-normal text-base md:text-xl'>
                At Innovative Biscuits, we are founded on the principles of trust, integrity, and hard work. Our mission extends far beyond the manufacture of biscuits. We are committed to enriching our society and providing opportunities for growth and prosperity, while steadfastly upholding our values and traditions. I firmly believe that we all have a profound responsibility to contribute to the community, and it is our individual duty to add value wherever possible. At Innovative Biscuits, we take immense pride in fulfilling this responsibility and making a positive impact.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="min-h-[25rem] hidden md:block p-15 w-[60%] bg-[#123a5e]">
              <p className='font-normal text-base md:text-xl'>
                {`Innovative Biscuits is on a mission to revolutionize the market with our innovative approach, unwavering commitment to quality, and dedication to making a difference. We believe that food has the power to uplift and inspire, and we're passionate about creating products that deliver on that promise. With a team of like-minded innovators, we're driven to exceed expectations and set new benchmarks for the industry. We know that innovation alone is not enough. That's why we're equally committed to operational excellence - streamlining our processes, reducing waste, and investing in our people. By combining innovation with operational excellence, we're able to deliver high-quality products efficiently and sustainably, making a positive impact on our customers, our community, and the environment.`}
              </p>
            </div>
            <div className="flex flex-col w-full md:w-[40%] bg-[#fd9b6c] p-15">
              <div className="text-base md:text-xl font-medium">
                THE MANAGING DIRECTOR
              </div>
              <div className="text-xl md:text-4xl font-black mt-2 md:mt-5 mb-5 md:mb-10">
                MR. AAMIR RAZA
              </div>
            </div>
          </div>
        </div>

        <LearnMore />
      </div>
    </div>
  );
}
