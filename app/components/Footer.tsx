"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Globe, Lock, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 z-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Business Identity */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 brightness-0 invert opacity-90">
                <Image 
                  src="/Applogo.png" 
                  alt="Arman Logical Systems Logo" 
                  fill
                  className="object-contain"
                  sizes="36px"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Arman Logical Systems
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enterprise digital infrastructure, localized SaaS solutions, and cloud operating systems for education, clinics, restaurants, and retail marketplaces.
            </p>
            <div className="pt-2 flex flex-col space-y-1.5 text-xs text-slate-400">
              <div><strong className="text-slate-300">Merchant Name:</strong> Sahin Arman</div>
              <div><strong className="text-slate-300">PAN:</strong> CKCPA4185J</div>
              <div><strong className="text-slate-300">MCC:</strong> 7372 (Software Services)</div>
            </div>
          </div>

          {/* Column 2: Ecosystem Applications */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              SaaS Platforms
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://school.armanlogicalsystems.in" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-between">
                  Schoolahive ERP <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://dine.armanlogicalsystems.in" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-between">
                  DineServe POS <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://clinic.armanlogicalsystems.in" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-between">
                  ClinicMind Hub <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://shop.armanlogicalsystems.in" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-between">
                  LocalHub Market <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Mandated Policy Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Billing & Policies
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/pay" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Extend Subscription / Pay
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Customer Support & Help Desk
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Cancellation & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Support & Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500">Support Email</div>
                  <a href="mailto:sahin401099@gmail.com" className="text-slate-200 hover:text-blue-400 font-medium transition-colors">
                    sahin401099@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500">Support Phone</div>
                  <a href="tel:+919563401099" className="text-slate-200 hover:text-emerald-400 font-medium transition-colors">
                    +91 95634 01099
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500">Corporate Portal</div>
                  <a href="https://Armanlogicalsystems.in" className="text-slate-200 hover:text-cyan-400 font-medium transition-colors">
                    https://Armanlogicalsystems.in
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with payment logos & copyright */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Arman Logical Systems. All rights reserved. Registered under MCC 7372 (Software Services & Web Design).
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" /> Google Pay • UPI • Cards • Net Banking
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
