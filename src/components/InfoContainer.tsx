import { MoveRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type InfoContainerProps = {
    image: string | StaticImageData;
    title: string;
    description: string;
}

export default function InfoContainer({image, title, description} : InfoContainerProps) {
    return (
        <div className="w-[100%] md:w-[50%] flex flex-col">
            <Image src={image} alt='info-image'/>
            <div className='mt-10 font-black text-2xl'>{title}</div>
            <div className="mt-2 text-xl flex gap-30">
                <div>{description}</div>
                <MoveRight />
            </div>
        </div>
    )
}