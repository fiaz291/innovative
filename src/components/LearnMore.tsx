import { MoveRight } from "lucide-react";

export default function LearnMore() {
    return (
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
    )
}
