"use client";

import Link from "next/link";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between relative">
        
        {/* Left Spacer */}
        <div className="w-12 sm:w-28"></div>

        {/* Logo and Business Name Centered at Middle */}
        <Link href="/" className="flex items-center gap-3.5 group cursor-pointer justify-center">
          <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 group-hover:border-blue-500 group-hover:shadow-md transition-all duration-300">
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
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
              Arman Logical Systems
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase flex items-center gap-1">
              Enterprise Software & SaaS Gateway
            </span>
          </div>
        </Link>

        {/* Dark / Light Mode Toggle Switch (Absolute Right) */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={toggleTheme}
            className="px-3 py-2 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-cyan-400 transition-all duration-200 shadow-xs active:scale-95 flex items-center gap-2 text-xs font-bold cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Dark / Light Mode"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-600" />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}
