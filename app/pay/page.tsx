"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubscriptionExtensionCard from "../components/SubscriptionExtensionCard";
import { ShieldCheck, Building2 } from "lucide-react";

export default function PayPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-12 pb-14 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Official SaaS Subscription & Payment Portal • Arman Logical Systems
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                SaaS Subscription <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">Extension Portal</span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
                Fetch your product license details, view current expiry date, choose multi-year extension duration, and complete your secure payment.
              </p>
            </div>

            {/* Merchant Identity Card */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md shrink-0 space-y-1 text-xs">
              <div className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Merchant Identity</div>
              <div className="text-sm font-bold text-white">Arman Logical Systems</div>
              <div className="text-slate-300">Sahin Arman • MCC 7372</div>
              <div className="text-slate-400">PAN: CKCPA4185J • GST Compliant</div>
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
