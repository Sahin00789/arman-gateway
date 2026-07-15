"use client";

import { motion, Variants } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GraduationCap, Utensils, Stethoscope, Store, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Premium Typography
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: '--font-plus-jakarta' 
});

// App Ecosystem Data
const apps = [
  {
    id: "schoolahive",
    title: "Schoolahive",
    tagline: "Education ERP",
    description: "Complete management for modern schools.",
    domain: "school.armanlogicalsystems.in",
    features: ["Exam Results & Marks", "Student Attendance", "Academic Ledger"],
    icon: <GraduationCap size={36} className="text-brand-blue" />,
    hoverColor: "group-hover:from-blue-600 group-hover:to-blue-400",
    buttonText: "Open Schoolahive"
  },
  {
    id: "dineserve",
    title: "DineServe",
    tagline: "Restaurant OS",
    description: "Smart management for dining experiences.",
    domain: "dine.armanlogicalsystems.in",
    features: ["Table QR Ordering", "Captain & Chef Views", "Kitchen Display"],
    icon: <Utensils size={36} className="text-brand-cyan" />,
    hoverColor: "group-hover:from-cyan-500 group-hover:to-cyan-400",
    buttonText: "Open DineServe"
  },
  {
    id: "clinicmind",
    title: "ClinicMind",
    tagline: "Healthcare Hub",
    description: "Digital infrastructure for local clinics.",
    domain: "clinic.armanlogicalsystems.in",
    features: ["Doctor Booking", "Medicine Inventory", "FaceID Geofence"],
    icon: <Stethoscope size={36} className="text-emerald-500" />,
    hoverColor: "group-hover:from-emerald-500 group-hover:to-emerald-400",
    buttonText: "Open ClinicMind"
  },
  {
    id: "localhub",
    title: "LocalHub",
    tagline: "Retail & Market",
    description: "Neighborhood retail and marketplace.",
    domain: "shop.armanlogicalsystems.in",
    features: ["Shop Listings", "Live Offers", "Local Updates"],
    icon: <Store size={36} className="text-orange-500" />,
    hoverColor: "group-hover:from-orange-500 group-hover:to-orange-400",
    buttonText: "Open LocalHub"
  }
];

// Strict Type-Safe Animations
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } }
};

export default function Gateway() {
  return (
    <main className={`min-h-screen bg-slate-50 text-slate-900 ${jakarta.variable} font-sans flex flex-col relative`}>
      
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* --- Upgraded Full-Width Navigation --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer">
            {/* Clean, unrestrictive logo container */}
            <div className="relative h-10 w-10 flex items-center justify-center">
              <Image 
                src="/Applogo.png" 
                alt="Arman Logical Systems Logo" 
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Arman Logical Systems
              </span>
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Gateway Ecosystem
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Clean Hero Section --- */}
      <section className="relative w-full max-w-4xl mx-auto px-6 pt-24 pb-20 text-center z-10 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-blue font-semibold text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            All Systems Operational
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Select your platform <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              to access your dashboard.
            </span>
          </h1>
        </motion.div>
      </section>

      {/* --- Upgraded Premium Cards --- */}
      <section className="w-full max-w-6xl mx-auto px-6 pb-32 z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {apps.map((app) => (
            <Link href={`https://${app.domain}`} key={app.id} passHref>
              {/* Outer Card acts as the animated border */}
              <motion.div 
                variants={fadeUp}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative rounded-[2rem] p-[2px] bg-gradient-to-b from-slate-200 to-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-full ${app.hoverColor}`}
              >
                {/* Inner Card (White background) */}
                <div className="relative bg-white rounded-[calc(2rem-2px)] p-8 h-full flex flex-col overflow-hidden">
                  
                  {/* Subtle Background Glow inside card */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl group-hover:bg-brand-light transition-colors duration-500"></div>

                  <div className="relative z-10 flex items-start justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        {app.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                          {app.title}
                        </h2>
                        <span className="text-sm font-semibold text-slate-500">
                          {app.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="relative z-10 text-slate-600 font-medium mb-8">
                    {app.description}
                  </p>

                  <div className="relative z-10 border-t border-slate-100 pt-6 mt-auto">
                    <ul className="space-y-3 mb-8">
                      {app.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-700 font-medium text-sm">
                          <CheckCircle2 size={16} className="text-slate-300 group-hover:text-brand-cyan transition-colors mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between w-full font-bold text-slate-400 group-hover:text-slate-900 transition-colors duration-300">
                      {app.buttonText}
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                        <ArrowRight size={18} className="transition-transform group-hover:-rotate-45" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* --- Upgraded Enterprise Footer --- */}
      <footer className="w-full bg-slate-900 border-t border-slate-800 pt-20 pb-10 z-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                 {/* Footer Logo - Grayscale */}
                <div className="relative h-8 w-8 brightness-0 invert opacity-90">
              <Image 
                src="/Applogo.png" 
                alt="Arman Logical Systems Logo" 
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  Arman Logical Systems
                </span>
              </div>
              <p className="text-slate-400 font-medium max-w-sm">
                Empowering Indian businesses, schools, and clinics with scalable, localized digital infrastructure.
              </p>
            </div>

            {/* Ecosystem Column */}
            <div>
              <h3 className="text-white font-bold mb-6 tracking-wide">Ecosystem</h3>
              <ul className="space-y-4 text-sm font-medium text-slate-400">
                <li><Link href="https://school.armanlogicalsystems.in" className="hover:text-brand-cyan transition-colors">Schoolahive ERP</Link></li>
                <li><Link href="https://dine.armanlogicalsystems.in" className="hover:text-brand-cyan transition-colors">DineServe POS</Link></li>
                <li><Link href="https://clinic.armanlogicalsystems.in" className="hover:text-brand-cyan transition-colors">ClinicMind Hub</Link></li>
                <li><Link href="https://shop.armanlogicalsystems.in" className="hover:text-brand-cyan transition-colors">LocalHub Market</Link></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-white font-bold mb-6 tracking-wide">Company</h3>
              <ul className="space-y-4 text-sm font-medium text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 font-medium text-sm">
              © {new Date().getFullYear()} Arman Logical Systems. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              Made in <span className="text-white">India</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
