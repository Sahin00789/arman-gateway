"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import A4TaxInvoice from "../../components/A4TaxInvoice";
import { CheckCircle2, ArrowLeft, RefreshCw, HelpCircle, ShieldCheck } from "lucide-react";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();

  const txnId = searchParams.get("txnId") || `ALS-INV-${Math.floor(10000000 + Math.random() * 90000000)}`;
  const productId = searchParams.get("productId") || "SCH-2026-884";
  const productName = searchParams.get("productName") || "Schoolahive ERP";
  const clientName = searchParams.get("clientName") || "St. Xavier's High School";
  const newExpiry = searchParams.get("newExpiry") || "15 Oct 2029";
  const years = Number(searchParams.get("years")) || 3;
  const grossSubtotal = Number(searchParams.get("grossSubtotal")) || 36000;
  const discountAmount = Number(searchParams.get("discountAmount")) || 7200;
  const gstAmount = Number(searchParams.get("gstAmount")) || 5184;
  const totalAmount = Number(searchParams.get("totalAmount")) || 33984;
  const channel = searchParams.get("channel") || "Google Pay (GPay)";
  const date = searchParams.get("date") || new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const invoiceData = {
    txnId,
    productId,
    productName,
    clientName,
    currentExpiry: "15 Oct 2026",
    newExpiry,
    years,
    grossSubtotal,
    discountAmount,
    gstAmount,
    totalAmount,
    channel,
    date
  };

  return (
    <div className="space-y-8">
      
      {/* Celebration Banner */}
      <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-white dark:bg-slate-800 border border-emerald-300 dark:border-emerald-500/40 shadow-2xl text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
        </div>

        <div>
          <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
            Payment Confirmed • Subscription Extended
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-3">
            Payment Successful!
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-xl mx-auto mt-1">
            Your payment for <strong>{productName}</strong> ({clientName}) has been processed successfully. Your subscription is now renewed until <strong>{newExpiry}</strong>.
          </p>
        </div>

        {/* Quick Nav Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-2 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Ecosystem Home
          </Link>
          <Link
            href="/pay"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md"
          >
            <RefreshCw className="w-4 h-4" /> Extend Another Product
          </Link>
          <Link
            href="/support"
            className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-950 text-slate-200 font-bold text-xs flex items-center gap-2 transition-all"
          >
            <HelpCircle className="w-4 h-4 text-cyan-400" /> Support Desk
          </Link>
        </div>
      </div>

      {/* Embedded Printable Single A4 Tax Invoice Component */}
      <A4TaxInvoice invoice={invoiceData} />

    </div>
  );
}

export default function PaySuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-grow w-full">
        <Suspense fallback={
          <div className="text-center py-20 font-bold text-slate-400">Loading Payment Confirmation...</div>
        }>
          <SuccessContent />
        </Suspense>
      </section>

      <Footer />
    </div>
  );
}
