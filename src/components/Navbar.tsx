'use client';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronLeft, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import premiumLogo from '../assets/innovative-premium-logo.svg';
import logoLight from '../assets/Innovative-Logo-White.png';
import logoDark from '../assets/Innovative-Logo-Black.png';
import { useState } from 'react';

const whoWeAreItems = [
  { title: "Leadership", route: "/leadership" },
  { title: "Vision", route: "/vision" },
  { title: "About Us", route: "/about-us" },
];

const resourcesItems = [
  { title: "Innovation Lab", route: "/innovation-lab" },
  { title: "Sustainability", route: "/sustainability" },
];

const premiumProducts = [
  { title: "Digestive Premium", route: "/digestive-premium" },
  { title: "Short Bread", route: "/short-bread" },
  { title: "Golden Lotus", route: "/golden-lotus" },
  { title: "Fabulous", route: "/fabulous" },
  { title: "Frisky Rolls", route: "/frisky-rolls" },
  { title: "Frisky Wafer", route: "/frisky-wafer" },
  { title: "Haven", route: "/haven" },
  { title: "Biscoffi", route: "/biscoffi" },
  { title: "Bricklane", route: "/bricklane" },
];

const products = [
  { title: "Digestive", route: "/digestive" },
  { title: "Butter Crunch", route: "/butter-crunch" },
  { title: "Choc n Chip", route: "/choc-n-chip" },
  { title: "Choco Rings", route: "/choco-rings" },
  { title: "Crust Rolls", route: "/crust-rolls" },
  { title: "Crust Wafer", route: "/crust-wafer" },
  { title: "Goodies", route: "/goodies" },
  { title: "Jumbo Junior", route: "/jumbo-junior" },
  { title: "Tooo Gud", route: "/tooo-gud" },
  { title: "Peanut", route: "/peanut" },
  { title: "Zeera", route: "/zeera" },
  { title: "Snapp", route: "/snapp" },
  { title: "Bittens", route: "/bittens" },
  { title: "Charm", route: "/charm" },
];

export default function Navbar({
  isPremium = true,
  isTransparentBg = false,
  isTextWhite = false,
}: {
  isPremium?: boolean;
  isTransparentBg?: boolean;
  isTextWhite?: boolean;
}) {
  const router = useRouter();
  const [showMegaNav, setShowMegaNav] = useState(false);
  const [tab, setTab] = useState('Who We Are');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [megaNavItems, setMegaNavItems] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper for toggling mega navs
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMegaNav = (tabName: string, items: any) => {
    if (tab === tabName) setShowMegaNav(!showMegaNav);
    else setShowMegaNav(true);
    setTab(tabName);
    setMegaNavItems(items);
  };

  return (
    <>
      <nav
        className={`relative z-50 bg-transparent px-2 md:px-15 pb-3 w-full ${(isPremium && !isTextWhite) || isTransparentBg || showMegaNav
          ? 'text-black'
          : 'text-white'
          } ${isTransparentBg && 'border-b'} ${showMegaNav && 'bg-white'}`}
      >
        <div className="flex items-center justify-between">
          {/* Logo and menu */}
          <div className="flex items-center gap-10">
            <Image
              src={isPremium ? premiumLogo : (isTransparentBg || showMegaNav) ? logoDark : logoLight}
              alt="Logo"
              className={`h-15 w-auto object-contain ${!isPremium && 'mt-[20px]'} cursor-pointer`}
              onClick={() => router.push(isPremium ? 'premium-lp' : '/innovative-lp')}
            />

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
              {isPremium ? (
                <>
                  <li
                    onClick={() => router.push('/premium-lp')}
                    className="text-lg flex items-center gap-1 cursor-pointer py-2 hover:border-b-5"
                  >
                    Home <ChevronDown className="w-4 h-4" />
                  </li>
                  <li
                    className="relative cursor-pointer py-2 hover:border-b-5"
                    onClick={() => handleMegaNav('Our Products', premiumProducts)}
                  >
                    <div className="text-lg flex items-center gap-1">
                      Our Products <ChevronDown className="w-4 h-4" />
                    </div>
                  </li>
                  <li
                    onClick={() => router.push('/coming-soon')}
                    className="text-lg cursor-pointer py-2 hover:border-b-5"
                  >
                    Creations
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={() => handleMegaNav('Who We Are', whoWeAreItems)}
                    className="text-lg cursor-pointer py-2 hover:border-b-5 flex items-center gap-1"
                  >
                    Who We Are <ChevronDown className="w-4 h-4" />
                  </li>
                  <li
                    onClick={() => handleMegaNav('Products', products)}
                    className="text-lg cursor-pointer py-2 hover:border-b-5 flex items-center gap-1"
                  >
                    Our Products <ChevronDown className="w-4 h-4" />
                  </li>
                  <li onClick={() => router.push('/export')} className="text-lg cursor-pointer py-2 hover:border-b-5">
                    Export
                  </li>
                  <li onClick={() => router.push('/coming-soon')} className="text-lg cursor-pointer py-2 hover:border-b-5">
                    Recipes
                  </li>
                  <li
                    onClick={() => handleMegaNav('Resources', resourcesItems)}
                    className="text-lg cursor-pointer py-2 hover:border-b-5 flex items-center gap-1"
                  >
                    Resources <ChevronDown className="w-4 h-4" />
                  </li>
                  <li onClick={() => router.push('/careers')} className="text-lg cursor-pointer py-2 hover:border-b-5">
                    Careers
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6 text-sm font-medium">
            {/* Hamburger on mobile */}
            <div className="md:hidden cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </div>

            {/* Desktop right section */}
            <div className="hidden md:flex items-center gap-6">
              {isPremium ? (
                <div
                  onClick={() => router.push('/innovative-lp')}
                  className="text-lg flex items-center gap-1 cursor-pointer py-2 hover:border-b-5"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </div>
              ) : (
                <div className="relative">
                  <Image
                    src={premiumLogo}
                    alt="Logo"
                    className="h-20 w-auto object-contain mt-[-25px] cursor-pointer"
                    onClick={() => router.push('premium-lp')}
                  />
                </div>
              )}
              <div
                onClick={() => router.push('/contact-us')}
                className="text-lg cursor-pointer py-2 hover:border-b-5"
              >
                Contact
              </div>
              <Search className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white text-black z-40 p-6 overflow-y-auto animate-slide-down">
            {/* Header inside drawer */}
            <div className="flex justify-between items-center mb-6">
              <Image
                src={isPremium ? premiumLogo : logoDark}
                alt="Logo"
                className="h-12 w-auto cursor-pointer"
                onClick={() => {
                  router.push(isPremium ? '/premium-lp' : '/innovative-lp');
                  setMobileMenuOpen(false);
                }}
              />
              <X className="w-7 h-7 cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
            </div>

            <ul className="space-y-4 text-lg">
              {isPremium ? (
                <>
                  <li onClick={() => { router.push('/premium-lp'); setMobileMenuOpen(false); }}>Home</li>
                  <li onClick={() => handleMegaNav('Our Products', premiumProducts)} className="flex items-center gap-2">
                    Our Products <ChevronDown className="w-4 h-4" />
                  </li>
                  <li onClick={() => { router.push('/coming-soon'); setMobileMenuOpen(false); }}>Creations</li>
                  <li onClick={() => { router.push('/contact-us'); setMobileMenuOpen(false); }}>Contact</li>
                </>
              ) : (
                <>
                  <li onClick={() => handleMegaNav('Who We Are', whoWeAreItems)} className="flex items-center gap-2">
                    Who We Are <ChevronDown className="w-4 h-4" />
                  </li>
                  <li onClick={() => handleMegaNav('Products', products)} className="flex items-center gap-2">
                    Our Products <ChevronDown className="w-4 h-4" />
                  </li>
                  <li onClick={() => { router.push('/export'); setMobileMenuOpen(false); }}>Export</li>
                  <li onClick={() => { router.push('/coming-soon'); setMobileMenuOpen(false); }}>Recipes</li>
                  <li onClick={() => handleMegaNav('Resources', resourcesItems)} className="flex items-center gap-2">
                    Resources <ChevronDown className="w-4 h-4" />
                  </li>
                  <li onClick={() => { router.push('/careers'); setMobileMenuOpen(false); }}>Careers</li>
                  <li onClick={() => { router.push('/contact-us'); setMobileMenuOpen(false); }}>Contact</li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>

      {/* Overlay for mega nav */}
      {showMegaNav && (
        <div
          className={`fixed w-full h-full top-0 bg-black opacity-50 z-40`}
          onClick={() => setShowMegaNav(false)}
        />
      )}

      {/* Mega Nav */}
      <div
        className={`absolute top-[${isPremium ? '72' : '82'}px] bg-white shadow-2xl w-full text-black z-50 border-t border-gray-100 transition-all duration-300 ease-out ${showMegaNav
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-5 pointer-events-none'
          }`}
      >
        <div className="p-6 grid grid-cols-1 md:grid-cols-[25%_75%]">
          <div>
            <h1 className="text-[32px] font-bold text-gray-900 pl-4 md:pl-0">{tab}</h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {megaNavItems?.map((item: { title: string; route: string }, index: number) => (
              <div
                key={index}
                onClick={() => {
                  router.push(item.route);
                  setShowMegaNav(false);
                  setMobileMenuOpen(false);
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
