"use client";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  CircleArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import map from "../assets/map.jpeg";
import Image from "next/image";

export default function Footer() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    message: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("MESSAGE SENT!");
    setForm({
      firstName: "",
      message: "",
      email: "",
    });
  };

  return (
    <footer className="bg-[#1A1717] text-white py-15 px-6 md:px-30 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Links Section */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-3">
            {[
              { label: "Who We Are", link: "/about-us" },
              { label: "Export", link: "/export" },
              { label: "Innovation Lab", link: "/innovation-lab" },
              { label: "Recipes", link: "/coming-soon" },
              { label: "Our Impact", link: "/sustainability" },
              { label: "Careers", link: "/careers" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => router.push(item.link)}
              >
                <CircleArrowRight className="w-[35px] h-[35px]" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Social Section */}
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col items-center space-y-5 border-x border-white/30 px-5">
              <Link href="https://www.facebook.com/InnovativeBiscuits/">
                <Facebook className="w-[80px] h-[45px]" />
              </Link>
              <Link href="https://www.instagram.com/innovative.biscuits/">
                <Instagram className="w-[80px] h-[40px]" />
              </Link>
              <Link href="https://x.com/innovativebis">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 1227"
                  fill="currentColor"
                  className="w-[70px] h-[35px]"
                >
                  <path d="M714.163 519.284L1160.89 0H1057.16L667.137 450.887L354.421 0H0L463.313 681.821L0 1226.37H103.736L512.101 752.236L845.579 1226.37H1200L714.137 519.284H714.163ZM562.491 690.396L517.924 626.899L141.622 79.6941H304.051L608.858 515.685L653.425 579.182L1056.79 1150.3H894.36L562.491 690.396Z" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/@innovativebiscuits1478">
                <Youtube className="w-[80px] h-[40px]" />
              </Link>
              <Link href="https://www.linkedin.com/company/innovative-biscuits-pvt.-ltd/posts/?feedView=all">
                <Linkedin className="w-[80px] h-[40px]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-base">
          <h3 className="font-bold text-2xl mb-1">Contact us</h3>
          <p className="mb-1">
            Innovative Biscuits - 153 M, Industrial Area, Kotlakhpat, Lahore,
            Pakistan-5400
          </p>
          <p className="mb-1">Ph: +92-35215855-77-99</p>
          <p className="mb-1">info@innovativebiscuits.com</p>
          <a
            href="https://www.google.com/maps/place/Innovative+biscuits/data=!4m2!3m1!1s0x0:0x3cbc3ccd7def20f1?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            className="inline-flex mt-2 hover:opacity-70"
          >
            <Image src={map} alt="map" className="w-full h-full" />
          </a>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs mb-1">Name</label>
            <input
              value={form.firstName}
              onChange={handleChange}
              name="firstName"
              className="bg-white w-full p-2 text-black"
              required
              type="text"
            />
          </div>
          <div>
            <label className="block text-xs mb-1">Email</label>
            <input
              value={form.email}
              onChange={handleChange}
              name="email"
              className="bg-white w-full p-2 text-black"
              required
              type="email"
            />
          </div>
          <div>
            <label className="block text-xs mb-1">Leave us a message</label>
            <textarea
              value={form.message}
              onChange={handleChange}
              name="message"
              required
              className="resize-none bg-white w-full p-2 text-black h-20"
            />
          </div>
          <button
            type="submit"
            className="cursor-pointer bg-gray-300 text-black px-6 py-2 rounded-[24px] hover:bg-gray-800 hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="text-xs text-right mt-10 text-white/60">
        All rights reserved by Innovative Biscuits © 2019
      </div>
    </footer>
  );
}
