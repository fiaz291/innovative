"use client";

import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LearnMore() {
    const router = useRouter();
    return (
        <div className='flex flex-col md:flex-row p-6 md:p-12 md:p-45 bg-[#efeff0] gap-10 md:gap-0'>
            <div className='md:w-[50%] font-black text-2xl md:text-5xl my-auto '>
                {`Learn More About Innovative`}
            </div>

            <div className='flex flex-col gap-5 md:gap-10 md:px-30 w-[100%]'>
                <div className='cursor-pointer font-black flex items-center gap-2 text-base md:text-3xl' onClick={()=>router.push('/about-us')}>
                    About Us
                    <MoveRight className='w-[35px] h-[35px]' />
                </div>
                <hr className="border-0 h-[1px] w-full bg-[#000000]" />
                <div className='cursor-pointer font-black flex items-center gap-2 text-base md:text-3xl' onClick={()=>router.push('/leadership')}>
                    Our Leadership
                    <MoveRight className='w-[35px] h-[35px]' />
                </div>
                <hr className="border-0 h-[1px] w-full bg-[#000000]" />
                <div className='cursor-pointer font-black flex items-center gap-2 text-base md:text-3xl' onClick={()=>router.push('/coming-soon')}>
                    Awards
                    <MoveRight className='w-[35px] h-[35px]' />
                </div>
            </div>
        </div>
    )
}
