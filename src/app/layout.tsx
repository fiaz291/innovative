import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innovative Biscuits",
  description:
    "Where we create magic by turning wheat and dough into spectacular biscuits, wafers and baked treats! Bite into this amazing journey as we explore the world.",
  icons: {
    icon: "/Logos/Innovative-Logo-lp.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col font-[family-name:var(--font-montserrat)]">
          <main className="flex-grow">{children}</main>
          <ScrollToTop />

          <Footer />
        </div>
      </body>
    </html>
  );
}
