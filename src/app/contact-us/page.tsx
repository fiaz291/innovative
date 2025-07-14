'use-client';

import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

export default function CareerPage() {
    return (
        <div>
            <div className="text-white w-full bg-no-repeat bg-center md:bg-cover">
                  <Navbar isPremium={false} isTransparentBg />
            </div>
            <ContactForm />
        </div>
    );
  }
  