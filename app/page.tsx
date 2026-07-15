"use client";

import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GraduationCap, Utensils, Stethoscope, Store, ArrowRight } from "lucide-react";
import Link from "next/link";

// Typography
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: '--font-plus-jakarta' 
});

// App Data
const apps = [
  {
    id: "schoolahive",
    title: "Schoolahive",
    description: "Complete ERP for modern education.",
    domain: "school.armanlogicalsystems.in",
    features: ["Exam Results", "Student Attendance", "Academic Ledger"],
    icon: <GraduationCap size={44} className="text-brand-blue" />,
    gradient: "from-blue-500/10 via-brand-blue/5 to-transparent",
    borderHover: "hover:border-brand-blue/50"
  },
  {
    id: "dineserve",
    title: "DineServe",
    description: "Smart management for restaurants.",
    domain: "dine.armanlogicalsystems.in",
    features: ["Table QR Ordering", "Captain View", "Kitchen Display"],
    icon: <Utensils size={44} className="text-brand-cyan" />,
    gradient: "from-cyan-500/10 via-brand-cyan/5 to-transparent",
    borderHover: "hover:border-brand-cyan/50"
  },
  {
    id: "clinicmind",
    title: "ClinicMind",
    description: "Digital infrastructure for healthcare.",
    domain: "clinic.armanlogicalsystems.in",
    features: ["Doctor Booking", "Medicine Inventory", "FaceID Geofence"],
    icon: <Stethoscope size={44} className="text-emerald-500" />,
    gradient: "from-emerald-500/10 via-emerald-400/5 to-transparent",
    borderHover: "hover:border-emerald-500/50"
  },
  {
    id: "localhub",
    title: "LocalHub",
    description: "Neighborhood retail and marketplace.",
    domain: "shop.armanlogicalsystems.in",
    features: ["Shop Listings", "Live Offers", "Local Updates"],
    icon: <Store size={44} className="text-orange-500" />,
    gradient: "from-orange-500/10 via-orange-400/5 to-transparent",
    borderHover: "hover:border-orange-500/50"
  }
];

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function Gateway() {
  return (
    <main className={`min-h-screen bg-[#F8FAFC] text-slate-900 ${jakarta.variable} font-sans relative flex flex-col items-center overflow-hidden`}>
      
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* --- Floating Navigation --- */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[90%] max-w-5xl mt-6 px-6 py-4 flex items-center justify-between bg-white/70 backdrop-blur-xl border border-white rounded-full shadow-sm z-50"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white font-bold text-xl shadow-md">
            A
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            Arman Logical Systems
          </span>
        </div>
      </motion.nav>

      {/* --- Hero Section --- */}
      <section className="relative w-full max-w-5xl mx-auto px-6 pt-24 pb-16 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            The Operating System <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-cyan">
              for Local Communities
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Select your dedicated platform below to access management tools, public portals, and secure ledgers.
          </p>
        </motion.div>
      </section>

      {/* --- App Gateway Grid --- */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-32 z-10 flex-grow">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {apps.map((app) => (
            <Link href={`https://${app.domain}`} key={app.id} passHref>
              <motion.div 
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative bg-white/80 backdrop-blur-lg rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 ${app.borderHover} overflow-hidden cursor-pointer h-full flex flex-col`}
              >
                {/* Dynamic Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                {/* Card Header (Icon & Title) */}
                <div className="relative z-10 flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {app.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                    <ArrowRight size={20} className="text-slate-400 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="relative z-10 mb-6">
                  <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-2">
                    {app.title}
                  </h2>
                  <p className="text-slate-500 font-medium">
                    {app.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="relative z-10 space-y-2 mt-auto">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 font-medium text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-cyan transition-colors mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* --- Footer --- */}
      <footer className="w-full border-t border-slate-200/60 bg-white/50 backdrop-blur-sm py-8 mt-auto z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-medium text-sm">
            © 2026 Arman Logical Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
