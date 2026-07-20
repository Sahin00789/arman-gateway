"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShieldCheck, RotateCcw, Clock } from "lucide-react";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <section className="relative pt-12 pb-16 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-6">
            <RotateCcw className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Mandated Compliance • Google Pay & Payment Gateway Standards
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Cancellation & Refund Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Last Updated: July 2026 • Official Policy for <strong className="text-slate-900 dark:text-slate-200">Arman Logical Systems</strong> (MCC 7372)
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex-grow w-full space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
        
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 shadow-md">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Policy Summary
          </h2>
          <p>
            At <strong>Arman Logical Systems</strong> (Merchant Owner: Sahin Arman, PAN: CKCPA4185J), we strive to ensure complete client satisfaction with our software products, website design services, and cloud platform licenses (Schoolahive ERP, DineServe POS, ClinicMind Hub, LocalHub).
          </p>
          <p>
            This policy outlines your rights regarding cancellations, refund eligibility, and payment processing timelines for payments made via Google Pay, UPI, Net Banking, or Cards.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            1. Software License & Subscription Cancellations
          </h3>
          <p>
            Clients may request cancellation of recurring software subscriptions (e.g., Schoolahive annual licenses, DineServe POS system setups) at any time.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>First 7 Days:</strong> If you cancel within 7 calendar days of your initial payment and software setup, you are eligible for a 100% full refund, provided no custom code developments have been deployed.
            </li>
            <li>
              <strong>After 7 Days:</strong> Cancellations made after 7 days will stop future billing cycles. Unused months of prepaid annual plans will be credited or refunded on a pro-rata basis minus setup administration fees.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            2. Custom Website Design & Engineering Contracts (MCC 7372)
          </h3>
          <p>
            For custom website development and bespoke software services, cancellation terms are based on milestone completion:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Prior to Project Kickoff:</strong> 100% refund of advance deposit if cancellation request is received within 48 hours of payment.
            </li>
            <li>
              <strong>During Design / Development Phase:</strong> Partial refund proportional to uncompleted project milestones as specified in the service contract.
            </li>
            <li>
              <strong>Post Production Deployment:</strong> No refunds are issued once the website or software system has been fully approved and deployed to production.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            3. Duplicate or Failed Google Pay Transactions
          </h3>
          <p>
            In cases of accidental duplicate payments via Google Pay or UPI, or where a bank debit occurs but transaction status fails:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Duplicate charges will be verified and refunded automatically within 24 to 48 hours.</li>
            <li>If your bank account was debited without a order confirmation, NPCI standards automatically reverse funds back to your original payment method within 3-5 business days.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            4. Refund Processing Timelines & Mode
          </h3>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2 shadow-xs">
            <div className="font-bold text-slate-900 dark:text-white">Refund Destination:</div>
            <p>All approved refunds will be credited back directly to the original Google Pay account, UPI VPA, or bank account used for the purchase.</p>
            <div className="font-bold text-slate-900 dark:text-white mt-2">Processing Duration:</div>
            <p>Approved refunds are processed by Arman Logical Systems within <strong>3 to 5 working days</strong>. Bank processing times may add an additional 2-4 business days depending on your issuing bank.</p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            How to Submit a Refund Request
          </h3>
          <p>
            To initiate a cancellation or refund request, please contact our support team with your payment transaction ID or Google Pay reference number:
          </p>
          <div className="pt-2 text-sm text-slate-800 dark:text-slate-200 space-y-1 font-mono">
            <div>Email: <a href="mailto:sahin401099@gmail.com" className="text-blue-600 dark:text-blue-400 underline">sahin401099@gmail.com</a></div>
            <div>Phone: <a href="tel:+919563401099" className="text-emerald-600 dark:text-emerald-400 underline">+91 95634 01099</a></div>
            <div>Support Desk: <Link href="/support" className="text-cyan-600 dark:text-cyan-400 underline">https://Armanlogicalsystems.in/support</Link></div>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
