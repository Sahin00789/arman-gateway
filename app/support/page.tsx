"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Mail, 
  Phone, 
  Globe, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  Building2, 
  FileText,
  AlertCircle
} from "lucide-react";

export default function SupportPage() {
  const [ticketName, setTicketName] = useState("");
  const [ticketEmail, setTicketEmail] = useState("");
  const [ticketPhone, setTicketPhone] = useState("");
  const [txnRef, setTxnRef] = useState("");
  const [category, setCategory] = useState("Payment / GPay Query");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicketId, setSubmittedTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketName || !ticketEmail || !message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    const newTicketId = `TICKET-ALS-${Math.floor(100000 + Math.random() * 900000)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedTicketId(newTicketId);
    }, 1500);
  };

  const handleResetForm = () => {
    setSubmittedTicketId("");
    setMessage("");
    setTxnRef("");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Official Support Desk • Arman Logical Systems
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Customer Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">& Resolution Hub</span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg mt-3 max-w-2xl">
                We are dedicated to providing fast, reliable assistance for our Software Services, Website Design clients, and Google Pay payment queries.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-white text-sm">Resolution SLA</div>
              <div>⚡ Response within 4-12 Hours</div>
              <div>🛡️ Payment Disputes: 24-48 Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Support Workspace */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex-grow w-full space-y-12">
        
        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Email */}
          <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-3 shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Customer Support Email</div>
              <a href="mailto:sahin401099@gmail.com" className="text-lg font-bold text-white hover:text-blue-400 transition-colors block mt-1">
                sahin401099@gmail.com
              </a>
            </div>
            <p className="text-xs text-slate-400">
              For billing inquiries, payment confirmation, and general technical support.
            </p>
          </div>

          {/* Card 2: Phone */}
          <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-3 shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center">
              <Phone className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Direct Phone & WhatsApp</div>
              <a href="tel:+919563401099" className="text-lg font-bold text-white hover:text-emerald-400 transition-colors block mt-1">
                +91 95634 01099
              </a>
            </div>
            <p className="text-xs text-slate-400">
              Available Monday to Saturday, 9:00 AM – 7:00 PM IST.
            </p>
          </div>

          {/* Card 3: Business Identity */}
          <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 space-y-3 shadow-lg">
            <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Registered Business Profile</div>
              <div className="text-lg font-bold text-white mt-1">Arman Logical Systems</div>
            </div>
            <div className="text-xs text-slate-400 space-y-1 font-mono">
              <div>Owner: Sahin Arman</div>
              <div>MCC: 7372 (Software Services)</div>
              <div>PAN: CKCPA4185J</div>
            </div>
          </div>

        </div>

        {/* Ticket Form & FAQ split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Support Ticket Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-800/60 border border-slate-700 shadow-xl space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                Submit a Support Request
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Fill out the form below. If your request is regarding a Google Pay or UPI payment, please include your Transaction ID.
              </p>
            </div>

            {submittedTicketId ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Support Ticket Created!</h4>
                <p className="text-slate-300 text-sm">
                  Your ticket reference number is <strong className="text-emerald-400 font-mono">{submittedTicketId}</strong>.
                  Our team will review your message and reach out to <strong>{ticketEmail}</strong> shortly.
                </p>
                <button
                  onClick={handleResetForm}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all"
                >
                  Submit Another Ticket
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={ticketName}
                      onChange={(e) => setTicketName(e.target.value)}
                      placeholder="Sahin Arman"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={ticketEmail}
                      onChange={(e) => setTicketEmail(e.target.value)}
                      placeholder="sahin401099@gmail.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={ticketPhone}
                      onChange={(e) => setTicketPhone(e.target.value)}
                      placeholder="+91 95634 01099"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Google Pay / UPI Txn ID (If applicable)
                    </label>
                    <input
                      type="text"
                      value={txnRef}
                      onChange={(e) => setTxnRef(e.target.value)}
                      placeholder="e.g. GPay-ALS-92841"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Query Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 focus:outline-hidden"
                  >
                    <option value="Payment / GPay Query">Google Pay & Payment Issues</option>
                    <option value="Schoolahive Software Support">Schoolahive ERP Support</option>
                    <option value="DineServe POS Support">DineServe POS Support</option>
                    <option value="ClinicMind Support">ClinicMind Support</option>
                    <option value="Custom Web Design Inquiry">Custom Web Development Inquiry</option>
                    <option value="Refund / Cancellation Request">Refund or Cancellation Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Detailed Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your question or issue in detail..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:border-blue-500 focus:outline-hidden"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Sending Request..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Support Ticket
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Frequently Asked Questions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-800/60 border border-slate-700 shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-cyan-400" />
                Frequently Asked Questions
              </h3>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white text-sm">How long does a Google Pay transaction take to process?</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Google Pay transactions are processed instantly in real-time. Once completed, your system activation link and GST payment receipt are generated immediately.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white text-sm">What should I do if money was deducted but status is pending?</h4>
                  <p className="text-slate-400 leading-relaxed">
                    If your bank debited the amount but the transaction status shows pending, UPI protocols typically resolve this within 2 to 24 hours. You can also submit your UPI reference number above.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white text-sm">What is Arman Logical Systems refund policy?</h4>
                  <p className="text-slate-400 leading-relaxed">
                    We offer a 7-day refund policy for software subscriptions and service contracts. View our detailed policy on the <a href="/refund-policy" className="text-blue-400 hover:underline">Refund Policy Page</a>.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <h4 className="font-bold text-white text-sm">What services fall under MCC 7372?</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Merchant Category Code 7372 covers Software Services, Website Designers, ERP customization, POS cloud deployment, and technical consulting.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}
