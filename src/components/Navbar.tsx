import { ChevronDown, ChevronLeft, Search } from "lucide-react";
import Image from "next/image";
import premiumLogo from '../assets/innovative-premium-logo.svg';
import logo from '../assets/innovative-logo.svg';
import rectangle from '../assets/rectangle-bg.svg'

export default function Navbar({isPremium = true, isTransparentBg = false}: {isPremium?: boolean, isTransparentBg?: boolean}) {
  return (
    <nav className={`bg-transparent px-2 md:px-15 pb-3 w-full ${isPremium || isTransparentBg ? 'text-black' : 'text-white'} ${isTransparentBg && 'border-b'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image
            src={isPremium ? premiumLogo : logo}
            alt="Logo"
            className="h-20 w-auto object-contain"
          />

          <ul className={`hidden md:flex items-center gap-8 text-sm font-medium`}>
            {isPremium ? 
                <>
                    <li className="flex items-center gap-1 cursor-pointer">
                      Home <ChevronDown className="w-4 h-4" />
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                      Our Products <ChevronDown className="w-4 h-4" />
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                      Creations <ChevronDown className="w-4 h-4" />
                    </li>
                </> : 
                <>
                    <li className="flex items-center gap-1 cursor-pointer">
                      How We Are <ChevronDown className="w-4 h-4" />
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                      Our Products <ChevronDown className="w-4 h-4" />
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                      Innovation Lab<ChevronDown className="w-4 h-4" />
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                      Recipes<ChevronDown className="w-4 h-4" />
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                      Our Impact<ChevronDown className="w-4 h-4" />
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                      Resources<ChevronDown className="w-4 h-4" />
                    </li>
                </>
                }
          </ul>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          {isPremium ? 
            <div className="flex items-center gap-1 cursor-pointer">
                <ChevronLeft className="w-4 h-4" />
                Back
            </div> :
            <div className="relative ">
                <div className={`flex items-center gap-1 cursor-pointer relative z-1 ${isTransparentBg && 'text-white'}`}>
                    Premium
                </div>
                <Image
                  src={rectangle}
                  alt="Logo"
                  className="absolute bottom-[0px] left-[-6px] max-w-[80px]"
                />
            </div>
            }
          <div className="cursor-pointer">Contact</div>
          <Search className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
