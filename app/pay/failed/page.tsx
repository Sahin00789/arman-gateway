"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { AlertTriangle, RefreshCw, HelpCircle, ArrowLeft, ShieldAlert, PhoneCall } from "lucide-react";
import { Suspense } from "react";

function FailedContent() {
  const searchParams = useSearchParams();

  const failTxnId = searchParams.get("txnId") || `ALS-FAIL-${Math.floor(10000000 + Math.random() * 90000000)}`;
  const reason = searchParams.get("reason") || "Transaction declined by issuing bank or cancelled by user.";
  const productId = searchParams.get("productId") || "SCH-2026-884";

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      
      {/* Decline Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-800 border border-red-300 dark:border-red-500/40 shadow-2xl space-y-6 text-center">
        
        <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-500/20 border-2 border-red-500 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
        </div>

        <div>
          <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-100 dark:bg-red-500/20 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-500/30">
            Payment Unsuccessful
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-3">
            Transaction Declined
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-lg mx-auto mt-2">
            We were unable to complete your payment for License <strong>{productId}</strong>. No subscription changes have been applied.
          </p>
        </div>

        {/* Failure Details Box */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-left font-mono text-xs space-y-2">
          <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="text-slate-500 dark:text-slate-400">Reference ID:</span>
            <span className="text-red-600 dark:text-red-400 font-bold">{failTxnId}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
            <span className="text-slate-500 dark:text-slate-400">Decline Reason:</span>
            <span className="text-slate-800 dark:text-slate-200">{reason}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-slate-500 dark:text-slate-400">Merchant:</span>
            <span className="text-slate-800 dark:text-slate-200">Arman Logical Systems (Sahin Arman)</span>
          </div>
        </div>

        {/* Refund Assurance Note */}
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-left text-xs text-amber-800 dark:text-amber-300 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">Was money debited from your account?</strong>
            If your bank account was debited despite a failed status, NPCI protocols ensure funds will be automatically credited back to your original payment method within 2 to 4 business days.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href={`/pay?productId=${productId}`}
            className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <RefreshCw className="w-4 h-4" /> Try Payment Again
          </Link>
          <Link
            href="/support"
            className="px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center justify-center gap-2 transition-all"
          >
            <HelpCircle className="w-4 h-4 text-cyan-500" /> Contact Support Desk
          </Link>
        </div>

      </div>

    </div>
  );
}

export default function PayFailedPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-grow w-full">
        <Suspense fallback={
          <div className="text-center py-20 font-bold text-slate-400">Loading Transaction Details...</div>
        }>
          <FailedContent />
        </Suspense>
      </section>

      <Footer />
    </div>
  );
}
