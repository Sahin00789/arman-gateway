"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-center text-center">
        
        {/* Logo and Business Name Centered at Middle (No Buttons) */}
        <Link href="/" className="flex items-center gap-3.5 group cursor-pointer justify-center">
          <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 group-hover:border-blue-500 group-hover:shadow-md transition-all duration-300">
            <Image 
              src="/Applogo.png" 
              alt="Arman Logical Systems Logo" 
              fill
              className="object-contain p-1"
              sizes="40px"
              priority
            />
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
              Arman Logical Systems
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1">
              Enterprise Software & SaaS Gateway
            </span>
          </div>
        </Link>

      </div>
    </nav>
  );
}
