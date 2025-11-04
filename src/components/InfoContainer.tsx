'use client';
import { MoveRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from 'next/navigation';

type InfoContainerProps = {
    image: string | StaticImageData;
    title: string;
    description: string;
    route?: string;
    fullWidth?: boolean;
}

export default function InfoContainer({image, title, description, route, fullWidth=false} : InfoContainerProps) {
    const router = useRouter();
    return (
        <div className={`w-[100%] ${fullWidth ? 'md:w-[100%] h-[468px]' : 'md:w-[50%]'} flex flex-col`}>
            <Image src={image} className={`${fullWidth ? 'md:w-[100%] h-[468px]' : 'md:w-[100%]'}`} alt='info-image'/>
            <div className="cursor-pointer" onClick={() => route && router.push(route)}>
                <div className='mt-5 md:mt-10 font-black text-2xl px-6'>{title}</div>
                <div className="mt-2 text-xl flex gap-2 items-center px-6">
                    <div>{description}</div>
                    <MoveRight />
                </div>
            </div>
        </div>
    )
}