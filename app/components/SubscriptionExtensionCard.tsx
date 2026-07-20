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
  Percent
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
    }, 600);
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
    <div className="w-full max-w-4xl mx-auto">
      
      {paymentSuccess && receipt ? (
        /* Render Single A4 Page Tax Invoice */
        <A4TaxInvoice 
          invoice={receipt} 
          onReset={() => setPaymentSuccess(false)} 
        />
      ) : (
        /* Extension Workflow Card */
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-2xl space-y-8 text-slate-100">
          
          {/* Header */}
          <div className="border-b border-slate-700 pb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> SaaS Renewal & Extension Hub
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Extend Your SaaS Subscription
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Enter your Product ID or License Key to fetch current subscription details, choose extension years, and pay.
            </p>
          </div>

          {/* Step 1: Search & Fetch Product */}
          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              1. Enter Product ID / License Key
            </label>

            <div className="flex gap-2">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  placeholder="e.g. SCH-2026-884"
                  className="w-full pl-4 pr-10 py-3 rounded-2xl bg-slate-900 border border-slate-700 text-white font-mono font-bold text-sm uppercase focus:border-blue-500 focus:outline-hidden"
                />
                {isSearching && (
                  <RefreshCw className="w-4 h-4 text-blue-400 animate-spin absolute right-3.5 top-3.5" />
                )}
              </div>
              <button
                type="button"
                onClick={() => handleFetchProduct()}
                className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all shrink-0 flex items-center gap-1.5 shadow-md"
              >
                <Search className="w-4 h-4" /> Fetch Product
              </button>
            </div>

            {/* Quick Demo Sample Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-400 text-[11px]">Sample IDs:</span>
              {Object.keys(mockProductsDatabase).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleFetchProduct(key)}
                  className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono font-semibold transition-all ${
                    productId.toUpperCase() === key
                      ? "bg-blue-600/30 border-blue-500 text-blue-300"
                      : "bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200"
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
                className="p-5 rounded-2xl bg-slate-900/90 border border-blue-500/40 space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {fetchedProduct.category}
                    </span>
                    <h4 className="text-xl font-extrabold text-white mt-1">{fetchedProduct.name}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Subscriber: <strong>{fetchedProduct.clientName}</strong></p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Current Expiry</span>
                    <span className="text-base font-extrabold text-amber-400 flex items-center justify-end gap-1">
                      <Calendar className="w-4 h-4" /> {fetchedProduct.currentExpiry}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Step 2: Select Duration in Years */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                2. Select Extension Duration (Years)
              </label>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
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
                    className={`p-4 rounded-2xl border text-center cursor-pointer transition-all ${
                      isSelected
                        ? "bg-blue-950/70 border-blue-500 ring-2 ring-blue-500/30"
                        : "bg-slate-900/70 border-slate-700/70 hover:border-slate-600"
                    }`}
                  >
                    <div className="text-[11px] text-slate-400 font-bold uppercase">{opt.tag}</div>
                    <div className="text-2xl font-black text-white my-1">{opt.label}</div>
                    <div className="text-[11px] text-cyan-300 font-bold">
                      {opt.discount > 0 ? `${opt.discount}% OFF` : "Standard"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Choose Payment Channel & Pay Button ONLY containing Amount */}
          <div className="space-y-4">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              3. Select Payment Method & Pay
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod("gpay")}
                className={`py-3 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  paymentMethod === "gpay"
                    ? "bg-blue-600 border-blue-500 text-white shadow-md"
                    : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white"
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
                    : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white"
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
                    : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white"
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
                    : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white"
                }`}
              >
                <Building2 className="w-4 h-4" /> Net Banking
              </button>
            </div>

            {/* Single Prominent Pay Button containing the calculated Amount */}
            <button
              onClick={handlePay}
              disabled={isProcessing}
              className="w-full py-4.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all active:scale-98 disabled:opacity-50"
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
                  <span className="text-xs font-normal text-blue-200 border-l border-blue-400/40 pl-3">
                    {years} Year{years > 1 ? 's' : ''} Extension
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>

          {/* Footer Merchant SLA */}
          <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Merchant: Arman Logical Systems (Sahin Arman)
            </span>
            <span>MCC Code: 7372</span>
          </div>

        </div>
      )}

    </div>
  );
}
