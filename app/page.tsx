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
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-500/10 dark:from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Centered Navbar with Dark/Light Toggle */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center z-10 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-blue-500/30 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold shadow-xs dark:shadow-blue-500/5 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 dark:bg-cyan-400"></span>
            </span>
            <span>Arman Gateway Ecosystem</span>
            <span className="text-slate-400 dark:text-slate-600">•</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
              All Systems Operational
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Select your platform <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-emerald-400">
              to access your dashboard.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Arman Logical Systems delivers enterprise software, localized ERPs, and custom web applications for schools, restaurants, clinics, and retail platforms.
          </p>
        </motion.div>
      </section>

      {/* Ecosystem SaaS Product Cards Grid */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-20 z-10">
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
                whileHover={{ y: -8, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative rounded-3xl p-7 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 shadow-lg dark:shadow-xl backdrop-blur-xl transition-all duration-300 cursor-pointer h-full flex flex-col justify-between overflow-hidden ${app.hoverBorder}`}
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-b ${app.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div>
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-xs dark:shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {app.icon}
                      </div>
                      <div>
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${app.badgeBg}`}>
                          {app.tagline}
                        </span>
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-1 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                          {app.title}
                        </h2>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-white group-hover:bg-blue-600 transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono mb-5">
                    <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                    {app.domain}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-medium relative z-10">
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

                  <div className="flex items-center justify-between w-full font-bold text-sm text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    <span>{app.buttonText}</span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all duration-300 shadow-xs">
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
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl border border-slate-800"
        >
          <div className="space-y-3 text-center md:text-left relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-extrabold border border-blue-500/30">
              <Calendar className="w-3.5 h-3.5" /> License Extension Hub
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Extend Your SaaS Subscription
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              Have an existing product license for Schoolahive, DineServe, ClinicMind, or LocalHub? Fetch your current expiry date and extend your annual subscription for 1 to 5 years.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link
              href="/pay"
              className="w-full md:w-auto px-8 py-4.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-base flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-98"
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
