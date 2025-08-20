'use client';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronLeft, Search } from "lucide-react";
import Image from "next/image";
import premiumLogo from '../assets/innovative-premium-logo.svg';
import logo from '../assets/innovative-logo.svg';
import rectangle from '../assets/rectangle-bg.svg'

export default function Navbar({isPremium = true, isTransparentBg = false}: {isPremium?: boolean, isTransparentBg?: boolean}) {
  const router = useRouter();
  return (
    <nav className={`bg-transparent px-2 md:px-15 pb-3 w-full ${isPremium || isTransparentBg ? 'text-black' : 'text-white'} ${isTransparentBg && 'border-b'}`}>
      <div className="flex items-center justify-between pt-[15px]">
        <div className="flex items-center gap-10">
          <Image
            src={isPremium ? premiumLogo : logo}
            alt="Logo"
            className="h-20 w-auto object-contain mt-[-25px]"
          />

          <ul className={`hidden md:flex items-center gap-8 text-sm font-medium`}>
            {isPremium ? 
                <>
                    <li
                     onClick={() => router.push('/premium-lp')}
                     className="flex items-center gap-1 cursor-pointer">
                      Home <ChevronDown className="w-4 h-4" />
                    </li>
                    <li className="relative group cursor-pointer">
                      <div className="flex items-center gap-1">
                        Our Products <ChevronDown className="w-4 h-4" />
                      </div>
                      <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md min-w-[180px] text-black z-50">
                        <li
                          onClick={() => router.push('/digestive-premium')}
                          className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
                        >
                          Digestive Premium
                        </li>
                      </ul>
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                      Creations <ChevronDown className="w-4 h-4" />
                    </li>
                </> : 
                <>
                    <li className="relative group cursor-pointer">
                      <div className="flex items-center gap-1">
                        How We Are <ChevronDown className="w-4 h-4" />
                      </div>
                      <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md min-w-[180px] text-black z-50">
                        <li
                          onClick={() => router.push('/leadership')}
                          className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
                        >
                          Leadership
                        </li>
                        <li
                          onClick={() => router.push('/vision')}
                          className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
                        >
                          Vision
                        </li>
                      </ul>
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
                    <li className="relative group cursor-pointer">
                      <div className="flex items-center gap-1">
                        Our Impact <ChevronDown className="w-4 h-4" />
                      </div>
                      <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md min-w-[180px] text-black z-50">
                        <li
                          onClick={() => router.push('/sustainability')}
                          className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
                        >
                          Sustainbility
                        </li>
                      </ul>
                    </li>
                    <li className="relative group cursor-pointer">
                      <div className="flex items-center gap-1">
                        Resources <ChevronDown className="w-4 h-4" />
                      </div>
                      <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md min-w-[180px] text-black z-50">
                        <li
                          onClick={() => router.push('/careers')}
                          className="px-4 py-2 hover:bg-gray-100 rounded cursor-pointer"
                        >
                          Careers
                        </li>
                      </ul>
                    </li>
                </>
                }
          </ul>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          {isPremium ? 
            <div onClick={()=>router.push('/innovative-lp')} className="flex items-center gap-1 cursor-pointer">
                <ChevronLeft className="w-4 h-4" />
                Back
            </div> :
            <div className="relative ">
                <div onClick={()=>router.push('/premium-lp')} className={`flex items-center gap-1 cursor-pointer relative z-1 ${isTransparentBg && 'text-white'}`}>
                    Premium
                </div>
                <Image
                  src={rectangle}
                  alt="Logo"
                  className="absolute bottom-[0px] left-[-6px] max-w-[80px]"
                />
            </div>
            }
          <div onClick={()=>router.push('/contact-us')} className="cursor-pointer">Contact</div>
          <Search className="w-5 h-5 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
