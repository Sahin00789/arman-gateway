"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronDown, 
  ExternalLink,
  GraduationCap, 
  Utensils, 
  Stethoscope, 
  Store,
  CreditCard,
  HelpCircle,
  ShieldCheck
} from "lucide-react";
import Logo from "./Logo";
import { useTheme } from "./ThemeProvider";

interface NavAppItem {
  id: string;
  title: string;
  tagline: string;
  domain: string;
  icon: React.ReactNode;
}

const navApps: NavAppItem[] = [
  {
    id: "schoolahive",
    title: "Schoolahive",
    tagline: "Education ERP",
    domain: "school.armanlogicalsystems.in",
    icon: <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
  },
  {
    id: "dineserve",
    title: "DineServe",
    tagline: "Restaurant OS",
    domain: "dine.armanlogicalsystems.in",
    icon: <Utensils className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
  },
  {
    id: "clinicmind",
    title: "ClinicMind",
    tagline: "Healthcare Hub",
    domain: "clinic.armanlogicalsystems.in",
    icon: <Stethoscope className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
  },
  {
    id: "localhub",
    title: "LocalHub",
    tagline: "Retail & Market",
    domain: "shop.armanlogicalsystems.in",
    icon: <Store className="w-5 h-5 text-amber-600 dark:text-amber-400" />
  }
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close mobile drawer on resize to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo and Title */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer min-w-0">
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:shadow-md transition-all duration-300 p-1">
            <Logo variant="mark" className="w-full h-full" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm sm:text-base md:text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight truncate">
              Arman Logical Systems
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase hidden xs:block truncate">
              SaaS Ecosystem
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-shrink-0">
          
          {/* Platforms Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors cursor-pointer"
              aria-expanded={isDropdownOpen}
            >
              Platforms
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : "text-slate-400"}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 top-full pt-2 w-72 z-50"
                >
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-2 shadow-xl border border-slate-200 dark:border-slate-800 ring-1 ring-black/5">
                    <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Ecosystem Apps
                    </div>
                    {navApps.map((app) => (
                      <a
                        key={app.id}
                        href={`https://${app.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 transition-all">
                          {app.icon}
                        </div>
                        <div className="flex flex-col flex-grow">
                          <span className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
                            {app.title}
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 text-slate-400 transition-opacity" />
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {app.tagline}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Nav Links */}
          <Link
            href="/pay"
            className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            Extend Subscription
          </Link>

          <Link
            href="/support"
            className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            Support
          </Link>

          {/* Dark / Light Mode Toggle Switch */}
          <button
            type="button"
            onClick={toggleTheme}
            className="ml-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-500 dark:hover:border-cyan-400 transition-all duration-200 shadow-xs active:scale-95 flex items-center gap-2 text-xs font-bold cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Dark / Light Mode"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span className="hidden lg:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-600" />
                <span className="hidden lg:inline">Dark</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex md:hidden items-center gap-2 flex-shrink-0">
          {/* Theme Toggle Button on Mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle Dark / Light Mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Hamburger Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition-all border border-slate-200 dark:border-slate-800 cursor-pointer"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-4">
              
              {/* Ecosystem Apps Grid */}
              <div className="space-y-1.5">
                <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Ecosystem Platforms
                </div>
                {navApps.map((app) => (
                  <a
                    key={app.id}
                    href={`https://${app.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 active:bg-slate-200 dark:active:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        {app.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                          {app.title}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {app.tagline}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              {/* Mobile Quick Links */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1">
                <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Navigation
                </div>
                <Link
                  href="/pay"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <CreditCard className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Extend Subscription
                </Link>
                <Link
                  href="/support"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <HelpCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Contact Support
                </Link>
                <Link
                  href="/privacy"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Privacy & Policy
                </Link>
              </div>

              {/* Status Footer inside Drawer */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      All Systems Operational
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
