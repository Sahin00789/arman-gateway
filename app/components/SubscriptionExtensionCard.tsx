"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Calendar, 
  CreditCard, 
  QrCode, 
  ShieldCheck, 
  ArrowRight, 
  RefreshCw, 
  Building2, 
  Percent,
  Lock
} from "lucide-react";
import A4TaxInvoice from "./A4TaxInvoice";

// Mock Database of Products / Licenses for Demonstration & Auto-Fetch
const mockProductsDatabase: Record<string, {
  name: string;
  category: string;
  clientName: string;
  annualRate: number;
  currentExpiry: string;
  expiryYear: number;
  expiryMonth: number;
  expiryDay: number;
  status: string;
}> = {
  "SCH-2026-884": {
    name: "Schoolahive ERP",
    category: "Education ERP",
    clientName: "St. Xavier's High School",
    annualRate: 12000,
    currentExpiry: "15 Oct 2026",
    expiryYear: 2026,
    expiryMonth: 9, // Oct (0-indexed)
    expiryDay: 15,
    status: "Active • Renewal Ready"
  },
  "DIN-2026-102": {
    name: "DineServe POS",
    category: "Restaurant Operating System",
    clientName: "Royal Feast Diner",
    annualRate: 9500,
    currentExpiry: "01 Dec 2026",
    expiryYear: 2026,
    expiryMonth: 11,
    expiryDay: 1,
    status: "Active • Renewal Ready"
  },
  "CLN-2026-501": {
    name: "ClinicMind Hub",
    category: "Healthcare Infrastructure",
    clientName: "Metro City Care Clinic",
    annualRate: 8500,
    currentExpiry: "20 Nov 2026",
    expiryYear: 2026,
    expiryMonth: 10,
    expiryDay: 20,
    status: "Active • Renewal Ready"
  },
  "HUB-2026-309": {
    name: "LocalHub Market",
    category: "Retail & Marketplace OS",
    clientName: "Apex General Store",
    annualRate: 7000,
    currentExpiry: "10 Jan 2027",
    expiryYear: 2027,
    expiryMonth: 0,
    expiryDay: 10,
    status: "Active"
  }
};

const durationOptions = [
  { years: 1, label: "1 Year", discount: 0, tag: "Standard" },
  { years: 2, label: "2 Years", discount: 10, tag: "Save 10%" },
  { years: 3, label: "3 Years", discount: 20, tag: "Save 20% • Popular", popular: true },
  { years: 5, label: "5 Years", discount: 35, tag: "Save 35% • Best Value" },
];

export default function SubscriptionExtensionCard() {
  const [productId, setProductId] = useState("SCH-2026-884");
  const [fetchedProduct, setFetchedProduct] = useState<any>(mockProductsDatabase["SCH-2026-884"]);
  const [isSearching, setIsSearching] = useState(false);

  const [selectedDuration, setSelectedDuration] = useState(durationOptions[2]); // 3 years default
  const [paymentMethod, setPaymentMethod] = useState<"gpay" | "upi_qr" | "card" | "netbanking">("gpay");
  const [copiedVpa, setCopiedVpa] = useState(false);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [receipt, setReceipt] = useState<any>(null);

  // Fetch product logic
  const handleFetchProduct = (idToFetch?: string) => {
    const queryId = (idToFetch || productId).trim().toUpperCase();
    if (!queryId) return;

    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
      if (mockProductsDatabase[queryId]) {
        setFetchedProduct(mockProductsDatabase[queryId]);
        setProductId(queryId);
      } else {
        const dynamicProduct = {
          name: queryId.startsWith("SCH") ? "Schoolahive ERP" : queryId.startsWith("DIN") ? "DineServe POS" : queryId.startsWith("CLN") ? "ClinicMind Hub" : "Arman Software License",
          category: "Software Service (MCC 7372)",
          clientName: "Registered Enterprise Client",
          annualRate: 10000,
          currentExpiry: "31 Dec 2026",
          expiryYear: 2026,
          expiryMonth: 11,
          expiryDay: 31,
          status: "Verified License"
        };
        setFetchedProduct(dynamicProduct);
      }
    }, 500);
  };

  // Pricing calculations
  const years = selectedDuration.years;
  const discountPercent = selectedDuration.discount;
  const baseRate = fetchedProduct ? fetchedProduct.annualRate : 10000;
  const grossSubtotal = baseRate * years;
  const discountAmount = Math.round((grossSubtotal * discountPercent) / 100);
  const netSubtotal = grossSubtotal - discountAmount;
  const gstAmount = Math.round(netSubtotal * 0.18);
  const totalAmount = netSubtotal + gstAmount;

  // New Expiry Calculation
  const getNewExpiryDate = () => {
    if (!fetchedProduct) return "";
    const newYear = fetchedProduct.expiryYear + years;
    const dateObj = new Date(newYear, fetchedProduct.expiryMonth, fetchedProduct.expiryDay);
    return dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const handleCopyVpa = () => {
    navigator.clipboard.writeText("sahin401099@okicici");
    setCopiedVpa(true);
    setTimeout(() => setCopiedVpa(false), 2000);
  };

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    const generatedTxnId = `ALS-INV-${Math.floor(10000000 + Math.random() * 90000000)}`;

    setTimeout(() => {
      setIsProcessing(false);
      setReceipt({
        txnId: generatedTxnId,
        productId,
        productName: fetchedProduct.name,
        clientName: fetchedProduct.clientName,
        currentExpiry: fetchedProduct.currentExpiry,
        newExpiry: getNewExpiryDate(),
        years,
        grossSubtotal,
        discountAmount,
        gstAmount,
        totalAmount,
        channel: paymentMethod === 'gpay' ? 'Google Pay (GPay)' : paymentMethod === 'upi_qr' ? 'UPI QR' : paymentMethod === 'card' ? 'Card' : 'Net Banking',
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      });
      setPaymentSuccess(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-6xl lg:max-w-7xl mx-auto">
      
      {paymentSuccess && receipt ? (
        /* Render Single A4 Page Tax Invoice */
        <A4TaxInvoice 
          invoice={receipt} 
          onReset={() => setPaymentSuccess(false)} 
        />
      ) : (
        /* Wide 2-Column Responsive Dashboard Layout (Dark/Light Compliant) */
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-2xl space-y-8 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          
          {/* Header Bar */}
          <div className="border-b border-slate-200 dark:border-slate-700 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> SaaS Renewal & Extension Hub
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Extend Your SaaS Subscription
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
                Enter your Product ID or License Key to fetch current subscription details, select duration, and pay.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-xs shrink-0 flex items-center gap-3">
              <div>
                <div className="text-slate-500 dark:text-slate-400 font-bold uppercase text-[10px]">Arman Logical Systems</div>
                <div className="text-emerald-700 dark:text-emerald-400 font-semibold">Sahin Arman • MCC 7372</div>
              </div>
              <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Fetch Product + Duration Selection (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Search & Fetch Product */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-4">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  1. Enter Product ID / License Key
                </label>

                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      value={productId}
                      onChange={(e) => setProductId(e.target.value)}
                      placeholder="e.g. SCH-2026-884"
                      className="w-full pl-4 pr-10 py-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-mono font-bold text-base uppercase focus:border-blue-500 focus:outline-hidden"
                    />
                    {isSearching && (
                      <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-spin absolute right-3.5 top-4" />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleFetchProduct()}
                    className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shrink-0 flex items-center gap-2 shadow-md"
                  >
                    <Search className="w-4 h-4" /> Fetch Product
                  </button>
                </div>

                {/* Quick Demo Sample Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold">Sample License Keys:</span>
                  {Object.keys(mockProductsDatabase).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleFetchProduct(key)}
                      className={`px-3 py-1 rounded-lg border text-xs font-mono font-bold transition-all ${
                        productId.toUpperCase() === key
                          ? "bg-blue-50 dark:bg-blue-600/40 border-blue-500 text-blue-700 dark:text-blue-300"
                          : "bg-white dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>

                {/* Fetched Product Result Card */}
                {fetchedProduct && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 rounded-xl bg-white dark:bg-slate-950 border border-blue-300 dark:border-blue-500/40 space-y-3 shadow-md"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-500/30">
                          {fetchedProduct.category}
                        </span>
                        <h4 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{fetchedProduct.name}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Subscriber Org: <strong>{fetchedProduct.clientName}</strong></p>
                      </div>
                      <div className="sm:text-right bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
                        <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">Current Expiry</span>
                        <span className="text-base font-black text-amber-600 dark:text-amber-400 flex items-center sm:justify-end gap-1.5 mt-0.5">
                          <Calendar className="w-4 h-4" /> {fetchedProduct.currentExpiry}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Step 2: Select Duration in Years */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    2. Select Extension Duration (Years)
                  </label>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <Percent className="w-3.5 h-3.5" /> Save up to 35%
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {durationOptions.map((opt) => {
                    const isSelected = selectedDuration.years === opt.years;
                    return (
                      <div
                        key={opt.years}
                        onClick={() => setSelectedDuration(opt)}
                        className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
                          isSelected
                            ? "bg-blue-50 dark:bg-blue-950/80 border-blue-500 ring-2 ring-blue-500/40 shadow-md"
                            : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600"
                        }`}
                      >
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">{opt.tag}</div>
                        <div className="text-2xl font-black text-slate-900 dark:text-white my-1.5">{opt.label}</div>
                        <div className="text-xs text-blue-600 dark:text-cyan-300 font-bold">
                          {opt.discount > 0 ? `${opt.discount}% OFF` : "Standard"}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Payment Channels + Single Pay Button (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/90 shadow-xl space-y-6">
                
                {/* Step 3: Choose Payment Channel */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                    3. Select Payment Channel
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("gpay")}
                      className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        paymentMethod === "gpay"
                          ? "bg-blue-600 border-blue-500 text-white shadow-md"
                          : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <CreditCard className="w-4 h-4" /> Google Pay
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("upi_qr")}
                      className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        paymentMethod === "upi_qr"
                          ? "bg-blue-600 border-blue-500 text-white shadow-md"
                          : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <QrCode className="w-4 h-4" /> UPI QR Scan
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        paymentMethod === "card"
                          ? "bg-blue-600 border-blue-500 text-white shadow-md"
                          : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <CreditCard className="w-4 h-4" /> Cards
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("netbanking")}
                      className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        paymentMethod === "netbanking"
                          ? "bg-blue-600 border-blue-500 text-white shadow-md"
                          : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      <Building2 className="w-4 h-4" /> Net Banking
                    </button>
                  </div>
                </div>

                {/* Channel Helper Details */}
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>
                      {paymentMethod === 'gpay' ? 'Google Pay (GPay) API' : paymentMethod === 'upi_qr' ? 'UPI VPA Payment' : paymentMethod === 'card' ? 'Credit / Debit Card' : 'Net Banking Gateway'}
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold">Instant Renewal</span>
                  </div>
                  {paymentMethod === 'upi_qr' && (
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-mono text-slate-500 dark:text-slate-400">sahin401099@okicici</span>
                      <button
                        type="button"
                        onClick={handleCopyVpa}
                        className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-600/30 text-blue-700 dark:text-blue-300 text-[10px] font-bold"
                      >
                        {copiedVpa ? "Copied!" : "Copy VPA"}
                      </button>
                    </div>
                  )}
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    New Extended Expiry Date: <strong className="text-blue-700 dark:text-cyan-300">{getNewExpiryDate()}</strong>
                  </p>
                </div>

                {/* Single Prominent Widescreen Pay Button containing the Amount ONLY */}
                <button
                  onClick={handlePay}
                  disabled={isProcessing}
                  className="w-full py-4.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-lg sm:text-xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all active:scale-98 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2 text-base font-bold">
                      <RefreshCw className="w-5 h-5 animate-spin text-cyan-300" />
                      Processing Payment...
                    </div>
                  ) : (
                    <>
                      <CreditCard className="w-6 h-6 text-cyan-300" />
                      Pay ₹{totalAmount.toLocaleString('en-IN')} INR
                      <span className="text-xs font-semibold text-blue-200 border-l border-blue-400/40 pl-3">
                        {years} Yr Extension
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 text-center">
                  Includes 18% GST • Computer Generated Single A4 Tax Invoice
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
