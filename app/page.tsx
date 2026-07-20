"use client";

import { motion, Variants } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { 
  GraduationCap, 
  Utensils, 
  Stethoscope, 
  Store, 
  ArrowRight, 
  CheckCircle2,
  Calendar,
  Sparkles,
  CreditCard
} from "lucide-react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    description: "Complete management for modern schools, student attendance & academic ledgers.",
    domain: "school.armanlogicalsystems.in",
    features: ["Exam Results & Marks", "Student Attendance", "Academic Ledger"],
    icon: <GraduationCap size={36} className="text-blue-600" />,
    hoverColor: "group-hover:from-blue-600 group-hover:to-blue-400",
    buttonText: "Open Schoolahive"
  },
  {
    id: "dineserve",
    title: "DineServe",
    tagline: "Restaurant OS",
    description: "Smart management for dining experiences, table QR ordering & kitchen display.",
    domain: "dine.armanlogicalsystems.in",
    features: ["Table QR Ordering", "Captain & Chef Views", "Kitchen Display"],
    icon: <Utensils size={36} className="text-cyan-500" />,
    hoverColor: "group-hover:from-cyan-500 group-hover:to-cyan-400",
    buttonText: "Open DineServe"
  },
  {
    id: "clinicmind",
    title: "ClinicMind",
    tagline: "Healthcare Hub",
    description: "Digital infrastructure for local clinics, doctor bookings & medicine stock.",
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
    description: "Neighborhood retail OS, marketplace listings & local offers.",
    domain: "shop.armanlogicalsystems.in",
    features: ["Shop Listings", "Live Offers", "Local Updates"],
    icon: <Store size={36} className="text-orange-500" />,
    hoverColor: "group-hover:from-orange-500 group-hover:to-orange-400",
    buttonText: "Open LocalHub"
  }
];

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

      {/* Centered Navbar without buttons */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center z-10 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 font-semibold text-xs sm:text-sm mb-6 shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            Arman Logical Systems Gateway • All Systems Operational
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]">
            Select your platform <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600">
              to access your dashboard.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Arman Logical Systems delivers enterprise software, localized ERPs, and custom web applications for schools, restaurants, clinics, and retail platforms.
          </p>
        </motion.div>
      </section>

      {/* Ecosystem SaaS Product Cards Grid */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {apps.map((app) => (
            <Link href={`https://${app.domain}`} key={app.id} passHref>
              <motion.div 
                variants={fadeUp}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative rounded-[2rem] p-[2px] bg-gradient-to-b from-slate-200 to-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-full ${app.hoverColor}`}
              >
                <div className="relative bg-white rounded-[calc(2rem-2px)] p-8 h-full flex flex-col overflow-hidden">
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl group-hover:bg-blue-50 transition-colors duration-500"></div>

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
                          <CheckCircle2 size={16} className="text-slate-300 group-hover:text-cyan-500 transition-colors mr-3" />
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

      {/* Subscription Extension Card BELOW the products */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-3 text-center md:text-left relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-bold border border-blue-500/30">
              <Calendar className="w-3.5 h-3.5" /> License Extension Hub
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Extend Your SaaS Subscription
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              Have an existing product license for Schoolahive, DineServe, ClinicMind, or LocalHub? Fetch your current expiry date and extend your annual subscription for 1 to 5 years.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link
              href="/pay"
              className="w-full md:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-98"
            >
              <CreditCard className="w-5 h-5 text-cyan-300" />
              Extend SaaS Subscription
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
