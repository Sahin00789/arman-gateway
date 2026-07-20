"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Lock, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <section className="relative pt-12 pb-16 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-6">
            <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Data Protection • Payment Encryption Compliance
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Last Updated: July 2026 • Official Privacy Notice for <strong className="text-slate-900 dark:text-slate-200">Arman Logical Systems</strong>
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex-grow w-full space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
        
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 shadow-md">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            Commitment to User Privacy
          </h2>
          <p>
            <strong>Arman Logical Systems</strong> (Merchant: Sahin Arman) respects your personal privacy. This Privacy Policy details how we collect, handle, store, and protect customer data when you use our website (<a href="https://Armanlogicalsystems.in" className="text-blue-600 dark:text-blue-400 underline">https://Armanlogicalsystems.in</a>) and process payments via Google Pay or UPI.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            1. Information We Collect
          </h3>
          <p>
            When you register, request support, or initiate a payment on our platform:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Contact Details:</strong> Full name, email address, phone number provided during checkout or support submission.</li>
            <li><strong>Payment Transaction Metadata:</strong> Google Pay transaction reference, UPI VPA, order amount, timestamp, and payment status.</li>
            <li><strong>Security Note:</strong> We do NOT store full credit/debit card numbers or bank account PINs on our servers. All sensitive financial data is tokenized and processed via PCI-DSS compliant Google Pay & RBI licensed Payment Gateway partners.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            2. How Information is Used
          </h3>
          <p>We use your information solely for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Fulfilling software licensing, website setup, and system provisioning (MCC 7372).</li>
            <li>Generating official invoice receipts and payment confirmation emails.</li>
            <li>Responding to customer support tickets submitted via <a href="/support" className="text-blue-600 dark:text-blue-400 underline">/support</a>.</li>
            <li>Preventing fraudulent transactions and ensuring network security.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            3. Data Sharing & Third-Party Gateways
          </h3>
          <p>
            We do not sell, rent, or trade customer data to third parties. We share transactional metadata exclusively with authorized payment processors (Google Pay, UPI NPCI network, bank gateways) strictly required to complete payment processing.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            4. Data Security & Encryption
          </h3>
          <p>
            Our infrastructure uses 256-bit SSL encryption for data in transit and strict access controls for stored records.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 font-mono text-xs shadow-xs">
          <div className="font-bold text-slate-900 dark:text-white text-sm font-sans mb-1">Grievance & Data Privacy Contact</div>
          <div>Sahin Arman (Business Owner)</div>
          <div>Arman Logical Systems</div>
          <div>Email: sahin401099@gmail.com</div>
          <div>Phone: +91 95634 01099</div>
          <div>Support URL: https://Armanlogicalsystems.in/support</div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
