'use client';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronLeft, Search } from "lucide-react";
import Image from "next/image";
import premiumLogo from '../assets/innovative-premium-logo.svg';
import logo from '../assets/innovative-logo.svg';
import rectangle from '../assets/rectangle-bg.svg'
import { useState } from 'react';

const whoWeAreItems = [
  {
    title: "Leadership",
    route: "/leadership",
  },
  {
    title: "Vision",
    route: "/vision",
  },
  {
    title: "About Us",
    route: "/about-us",
  },
];

const resourcesItems = [
  {
    title: "Innovation Lab",
    route: "/innovation-lab",
  },
  {
    title: "Sustainability",
    route: "/sustainability",
  },
];

const premiumProducts = [
  {
    title: "Digestive Premium",
    route: "/digestive-premium",
  },
  {
    title: "Short Bread",
    route: "/short-bread",
  },
  {
    title: "Golden Lotus",
    route: "/golden-lotus",
  },
  {
    title: "Fabulous",
    route: "/fabulous",
  },
  {
    title: "Frisky Rolls",
    route: "/frisky-rolls",
  },
  {
    title: "Frisky Wafer",
    route: "/frisky-wafer",
  },
  {
    title: "Haven",
    route: "/haven",
  },
  {
    title: "Biscoffi",
    route: "/biscoffi",
  },
  {
    title: "Bricklane",
    route: "/bricklane",
  },
];

const prodcuts = [
  {
    title: "Digestive",
    route: "/digestive",
  },
  {
    title: "Butter Crunch",
    route: "/butter-crunch",
  },
  {
    title: "Choc n Chip",
    route: '#',
    // route: "/choc-n-chip",
  },
  {
    title: "Choco Rings",
    route: '#',
    // route: "/choco-rings",
  },
  {
    title: "Crust Rolls",
    route: '#',
    // route: "/crust-rolls",
  },
  {
    title: "Crust Wafer",
    route: '#',
    // route: "/crust-wafer",
  },
  {
    title: "Goodies",
    route: "/goodies",
  },
  {
    title: "Jumbo Junior",
    route: '#',
    // route: "/jumbo-junior",
  },
  {
    title: "Tooo Gud",
    route: "/tooo-gud",
  },
  {
    title: "Olys",
    route: '#',
    // route: "/olys",
  },
  {
    title: "Peanut",
    route: "/peanut",
  },
  {
    title: "Zeera",
    route: "/zeera",
  },
  {
    title: "Snapp",
    route: '#',
    // route: "/snapp",
  },
  {
    title: "Bittens",
    route: '#',
    // route: "/bittens",
  },
];

export default function Navbar({isPremium = true, isTransparentBg = false, isTextWhite}: {isPremium?: boolean, isTransparentBg?: boolean, isTextWhite?: boolean}) {
  const router = useRouter();
  const [showMegaNav, setShowMegaNav] = useState(false);
  const [tab, setTab] = useState('Who We Are');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [megaNavItems, setMegaNavItems] = useState<any>(null);

  return (
    <>
    <nav className={`bg-transparent px-2 md:px-15 pb-3 w-full ${isPremium || isTransparentBg || showMegaNav ? 'text-black' : 'text-white'} ${isTransparentBg && 'border-b'}  ${isTextWhite && 'text-white'} ${showMegaNav && 'bg-white'}`}>
      <div className="flex items-center justify-between pt-[15px]">
        <div className="flex items-center gap-10">
          <Image
            src={isPremium ? premiumLogo : logo}
            alt="Logo"
            className="h-20 w-auto object-contain mt-[-25px] cursor-pointer"
            onClick={() => router.push('/innovative-lp')}
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
                      <div className="flex items-center gap-1" onClick={()=> {
                        if(tab === 'Our Products')
                          setShowMegaNav(!showMegaNav);
                        else setShowMegaNav(true);
                          setTab('Our Products');
                          setMegaNavItems(premiumProducts);
                      }}>
                        Our Products <ChevronDown className="w-4 h-4" />
                      </div>
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                      Creations
                    </li>
                </> : 
                <>
                    <li className="relative cursor-pointer" onClick={()=> {
                      if(tab === 'Who We Are')
                        setShowMegaNav(!showMegaNav);
                      else setShowMegaNav(true);
                        setTab('Who We Are');
                        setMegaNavItems(whoWeAreItems);
                      }}>
                      <div className="flex items-center gap-1">
                        Who We Are <ChevronDown className="w-4 h-4" />
                      </div>
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer" onClick={() => {
                      if(tab === 'Products')
                        setShowMegaNav(!showMegaNav);
                      else setShowMegaNav(true);
                      setTab('Products');
                      setMegaNavItems(prodcuts);
                    }
                    }>
                      Our Products <ChevronDown className="w-4 h-4" />
                    </li>
                    <li 
                      onClick={() => router.push('/export')}
                      className="flex items-center gap-1 cursor-pointer">
                        Export
                    </li>
                    <li className="flex items-center gap-1 cursor-pointer">
                      Recipes
                    </li>
                    <li className="relative group cursor-pointer" onClick={()=> {
                      if(tab === 'Resources')
                        setShowMegaNav(!showMegaNav);
                      else setShowMegaNav(true);
                        setTab('Resources');
                        setMegaNavItems(resourcesItems);
                      }}>
                      <div className="flex items-center gap-1">
                        Resources <ChevronDown className="w-4 h-4" />
                      </div>
                    </li>
{/*                     <li className="relative group cursor-pointer">
                      <div className="flex items-center gap-1">
                        Our Impact
                      </div>
                    </li> */}
                    <li className="relative group cursor-pointer">
                      <div className="flex items-center gap-1" onClick={()=>router.push('/careers')}>
                        Careers
                      </div>
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
                <div onClick={()=>router.push('/premium-lp')} className={`flex items-center gap-1 cursor-pointer relative z-1 ${isTransparentBg || showMegaNav && 'text-white'}`}>
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
    <div
      className={`absolute top-[82px] bg-white shadow-2xl w-full text-black z-50 border-t border-gray-100
        transition-all duration-300 ease-out
        ${showMegaNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
      `}
    >
      <div className="p-6 grid grid-cols-[25%_75%]">
        <div>
          <h1 className="text-[32px] font-bold text-gray-900">{tab}</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {megaNavItems?.map((item: {title: string, route:string}, index: number) => (
            <div
              key={index}
              onClick={() => {
                router.push(item.route);
                setShowMegaNav(false);
              }}
              className="p-4 hover:bg-gray-100 rounded cursor-pointer"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
}
