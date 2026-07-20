"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileText, Building2 } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <section className="relative pt-12 pb-16 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-6">
            <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            Legal Agreement • Google Pay Merchant Terms
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Terms of Service & Business Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Effective Date: July 2026 • Registered Entity: <strong className="text-slate-900 dark:text-slate-200">Arman Logical Systems</strong>
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 flex-grow w-full space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
        
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3 shadow-md">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            1. Business Profile & Identification
          </h2>
          <p>
            Welcome to <strong>Arman Logical Systems</strong> (accessible at <Link href="https://Armanlogicalsystems.in" className="text-blue-600 dark:text-blue-400 underline">https://Armanlogicalsystems.in</Link>). This website and all affiliated web platforms (Schoolahive ERP, DineServe POS, ClinicMind Hub, LocalHub Market) are operated under Merchant Owner <strong>Sahin Arman</strong> (PAN: CKCPA4185J).
          </p>
          <p>
            Our official Merchant Category Code (MCC) registered with Google Pay and payment aggregators is <strong>7372</strong>, covering <em>Software Services, Custom Web Application Design, Cloud Infrastructure, and IT Consulting Services</em>.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            2. Google Pay & Digital Payment Usage
          </h3>
          <p>
            By initiating payments on our portal (<Link href="/pay" className="text-blue-600 dark:text-blue-400 underline">https://Armanlogicalsystems.in/pay</Link>) using Google Pay, UPI, Cards, or Net Banking, you agree to provide true, accurate, and complete billing details.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payments are processed securely via PCI-DSS compliant Google Pay APIs and authorized Indian Payment Gateway Aggregators.</li>
            <li>All transaction prices are listed in Indian Rupees (INR ₹) inclusive of applicable taxes unless stated otherwise.</li>
            <li>Upon successful transaction authorization, an automated payment confirmation receipt will be issued to your provided email address.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            3. Software Delivery & Service SLAs
          </h3>
          <p>
            For digital SaaS products (Schoolahive, DineServe, ClinicMind), access credentials and activation instructions are delivered electronically to the customer within 24 hours of payment authorization. For custom website development contracts, milestones and delivery schedules operate per the agreed scope statement.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            4. Intellectual Property
          </h3>
          <p>
            All codebases, user interfaces, branding, software architecture, and contents of Arman Logical Systems and its subdomains remain the exclusive intellectual property of Arman Logical Systems and Sahin Arman.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            5. Contact Information & Support Desk
          </h3>
          <p>
            For support, billing inquiries, or legal concerns:
          </p>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-xs text-slate-700 dark:text-slate-300 space-y-1 shadow-xs">
            <div>Business: Arman Logical Systems</div>
            <div>Owner: Sahin Arman</div>
            <div>Email: sahin401099@gmail.com</div>
            <div>Phone: +91 95634 01099</div>
            <div>Support Desk: https://Armanlogicalsystems.in/support</div>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
