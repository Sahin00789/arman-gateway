"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubscriptionExtensionCard from "../components/SubscriptionExtensionCard";
import { ShieldCheck } from "lucide-react";

export default function PayPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-12 pb-14 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Official SaaS Subscription & Payment Portal • Arman Logical Systems
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                SaaS Subscription <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-cyan-300 dark:to-emerald-400">Extension Portal</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
                Fetch your product license details, view current expiry date, choose multi-year extension duration, and complete your secure payment.
              </p>
            </div>

            {/* Merchant Identity Card */}
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm shrink-0 space-y-1 text-xs">
              <div className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[10px]">Merchant Identity</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Arman Logical Systems</div>
              <div className="text-slate-700 dark:text-slate-300">Sahin Arman • MCC 7372</div>
              <div className="text-slate-500 dark:text-slate-400">PAN: CKCPA4185J • GST Compliant</div>
            </div>
          </div>

        </div>
      </section>

      {/* Subscription Extension Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-grow w-full">
        <SubscriptionExtensionCard />
      </section>

      <Footer />
    </div>
  );
}
