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
  CreditCard,
  Globe,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

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
    tagline: "Education ERP & Student OS",
    description: "Complete digital infrastructure for modern schools, exam grading, attendance tracking, and academic ledgers.",
    domain: "school.armanlogicalsystems.in",
    features: ["Exam Results & Marks", "Student Attendance", "Academic Ledger & Fees"],
    icon: <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    badgeBg: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-300",
    hoverBorder: "hover:border-blue-500/60 hover:shadow-blue-500/10",
    glowColor: "from-blue-600/20 via-blue-500/10 to-transparent",
    accentColor: "text-blue-600 dark:text-blue-400",
    buttonText: "Launch Schoolahive"
  },
  {
    id: "dineserve",
    title: "DineServe",
    tagline: "Restaurant Operating System",
    description: "Smart management for dining experiences, direct table QR ordering, captain screens, and kitchen display.",
    domain: "dine.armanlogicalsystems.in",
    features: ["Table QR Ordering", "Captain & Chef Views", "Kitchen Display & Inventory"],
    icon: <Utensils className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
    badgeBg: "bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300",
    hoverBorder: "hover:border-cyan-500/60 hover:shadow-cyan-500/10",
    glowColor: "from-cyan-600/20 via-cyan-500/10 to-transparent",
    accentColor: "text-cyan-600 dark:text-cyan-400",
    buttonText: "Launch DineServe"
  },
  {
    id: "clinicmind",
    title: "ClinicMind",
    tagline: "Healthcare Infrastructure Hub",
    description: "Digital operating hub for local clinics, doctor appointment scheduling, patient EMR, and pharmacy stock.",
    domain: "clinic.armanlogicalsystems.in",
    features: ["Doctor Booking Engine", "Medicine Inventory", "FaceID Geofence Attendance"],
    icon: <Stethoscope className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
    badgeBg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
    hoverBorder: "hover:border-emerald-500/60 hover:shadow-emerald-500/10",
    glowColor: "from-emerald-600/20 via-emerald-500/10 to-transparent",
    accentColor: "text-emerald-600 dark:text-emerald-400",
    buttonText: "Launch ClinicMind"
  },
  {
    id: "localhub",
    title: "LocalHub",
    tagline: "Retail & Marketplace OS",
    description: "Neighborhood retail operating system, local shop catalog listings, live customer offers, and marketplace updates.",
    domain: "shop.armanlogicalsystems.in",
    features: ["Local Shop Listings", "Live Store Offers", "Community Marketplace"],
    icon: <Store className="w-8 h-8 text-amber-600 dark:text-amber-400" />,
    badgeBg: "bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-300",
    hoverBorder: "hover:border-amber-500/60 hover:shadow-amber-500/10",
    glowColor: "from-amber-600/20 via-amber-500/10 to-transparent",
    accentColor: "text-amber-600 dark:text-amber-400",
    buttonText: "Launch LocalHub"
  }
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 16 } }
};

export default function Gateway() {
  return (
    <main className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 ${jakarta.variable} font-sans flex flex-col relative overflow-hidden transition-colors duration-300`}>
      
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Dynamic Ambient Background Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-500/15 via-cyan-500/10 dark:from-blue-600/20 dark:via-cyan-400/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Responsive Navigation Bar */}
      <Navbar />

      {/* Modern High-Impact Hero Section */}
      <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 text-center z-10 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Logo Mark Hero Spotlight Badge */}
          <div className="inline-flex items-center gap-3 p-2 sm:p-2.5 px-4 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xl backdrop-blur-xl hover:scale-105 transition-transform duration-300">
            <div className="w-8 h-8 p-1 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 border border-blue-200 dark:border-slate-700 flex items-center justify-center shrink-0">
              <Logo variant="mark" className="w-full h-full" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                Arman Logical Systems
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400">
                SaaS Gateway
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12] max-w-4xl mx-auto">
            Select your platform <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-emerald-400">
              to access your dashboard.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Enterprise software, localized ERPs, and digital operating infrastructure for schools, clinics, restaurants, and retail marketplaces.
          </p>

          {/* Dual Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#platforms"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-98 cursor-pointer"
            >
              <span>Explore Applications</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <Link
              href="/pay"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 hover:border-blue-500 dark:hover:border-cyan-400 font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md transition-all duration-200 active:scale-98"
            >
              <CreditCard className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              <span>Extend License</span>
            </Link>
          </div>

        </motion.div>
      </section>

      {/* Ecosystem SaaS Product Cards Grid */}
      <section id="platforms" className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-20 z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {apps.map((app) => (
            <Link href={`https://${app.domain}`} key={app.id} passHref>
              <motion.div 
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative rounded-3xl p-5 sm:p-7 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 shadow-lg dark:shadow-xl backdrop-blur-xl transition-all duration-300 cursor-pointer h-full flex flex-col justify-between overflow-hidden ${app.hoverBorder}`}
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-b ${app.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div>
                  <div className="flex items-start justify-between mb-5 sm:mb-6 relative z-10 gap-3">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-xs dark:shadow-inner shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {app.icon}
                      </div>
                      <div className="min-w-0">
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border inline-block truncate max-w-full ${app.badgeBg}`}>
                          {app.tagline}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-1 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors truncate">
                          {app.title}
                        </h2>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-all shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono mb-4 sm:mb-5 max-w-full truncate">
                    <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                    <span className="truncate">{app.domain}</span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium relative z-10">
                    {app.description}
                  </p>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800/80 pt-5 mt-auto relative z-10">
                  <ul className="space-y-2.5 mb-6">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700 dark:text-slate-300 font-medium text-xs">
                        <CheckCircle2 size={15} className={`mr-2.5 shrink-0 ${app.accentColor}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between w-full font-bold text-xs sm:text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    <span>{app.buttonText}</span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all duration-300 shadow-xs shrink-0">
                      <ArrowRight size={18} className="transition-transform group-hover:-rotate-45" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Subscription Extension Callout Card */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 backdrop-blur-xl border border-slate-800"
        >
          <div className="space-y-3 text-center md:text-left relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-extrabold border border-blue-500/30">
              <Calendar className="w-3.5 h-3.5" /> License Extension Hub
            </div>
            
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Extend Your SaaS Subscription
            </h2>

            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-medium">
              Have an existing product license for Schoolahive, DineServe, ClinicMind, or LocalHub? Fetch your current expiry date and extend your annual subscription for 1 to 5 years.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link
              href="/pay"
              className="w-full md:w-auto px-6 sm:px-8 py-3.5 sm:py-4.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-98"
            >
              <CreditCard className="w-5 h-5 text-cyan-300 shrink-0" />
              <span>Extend SaaS Subscription</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </main>
  );
}
