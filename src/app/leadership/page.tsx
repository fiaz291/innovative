"use-client";

import LearnMore from "@/components/LearnMore";
import Navbar from "@/components/Navbar";

export default function CareerPage() {
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
            <div className="flex flex-col w-full md:w-[60%] bg-[#6b9ebd] p-15">
              <div className="text-base md:text-xl font-medium">
                THE HONORABLE CHAIRMAN
              </div>
              <div className="text-xl md:text-4xl font-black mt-2 md:mt-5 mb-5 md:mb-10">
                SHEIKH MUNIR HUSSAIN
              </div>
              <div className="text-lg md:text-2xl font-semibold">
                GET TO KNOW+
              </div>
            </div>
            <div className="min-h-[25rem] hidden md:block p-15 w-[40%] bg-[#123a5e]"></div>
          </div>

          <div className="flex">
            <div className="min-h-[25rem] hidden md:block p-15 w-[40%] bg-[#123a5e]"></div>
            <div className="flex flex-col w-full md:w-[60%] bg-[#fd9b6c] p-15">
              <div className="text-base md:text-xl font-medium">
                THE MANAGING DIRECTOR
              </div>
              <div className="text-xl md:text-4xl font-black mt-2 md:mt-5 mb-5 md:mb-10">
                MR. AAMIR RAZA
              </div>
              <div className="text-lg md:text-2xl font-semibold">
                GET TO KNOW+
              </div>
            </div>
          </div>
        </div>

        <LearnMore />
      </div>
    </div>
  );
}
