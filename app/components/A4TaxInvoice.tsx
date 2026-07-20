"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReactToPrint } from "react-to-print";
import { ShieldCheck, RefreshCw, Printer } from "lucide-react";

export interface InvoiceData {
  txnId: string;
  productId: string;
  productName: string;
  clientName: string;
  currentExpiry: string;
  newExpiry: string;
  years: number;
  grossSubtotal: number;
  discountAmount: number;
  gstAmount: number;
  totalAmount: number;
  channel: string;
  date: string;
}

// Helper function to convert number to Words (INR)
function numberToWordsINR(amount: number): string {
  const wordsMap: Record<number, string> = {
    0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five",
    6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten",
    11: "Eleven", 12: "Twelve", 13: "Thirteen", 14: "Fourteen", 15: "Fifteen",
    16: "Sixteen", 17: "Seventeen", 18: "Eighteen", 19: "Nineteen", 20: "Twenty",
    30: "Thirty", 40: "Forty", 50: "Fifty", 60: "Sixty", 70: "Seventy",
    80: "Eighty", 90: "Ninety"
  };

  if (amount === 0) return "Zero Rupees Only";

  const numToWords = (num: number): string => {
    if (num <= 20) return wordsMap[num] || "";
    if (num < 100) {
      const ten = Math.floor(num / 10) * 10;
      const rem = num % 10;
      return `${wordsMap[ten]} ${rem ? wordsMap[rem] : ""}`.trim();
    }
    if (num < 1000) {
      const hundred = Math.floor(num / 100);
      const rem = num % 100;
      return `${wordsMap[hundred]} Hundred ${rem ? numToWords(rem) : ""}`.trim();
    }
    if (num < 100000) {
      const thousand = Math.floor(num / 1000);
      const rem = num % 1000;
      return `${numToWords(thousand)} Thousand ${rem ? numToWords(rem) : ""}`.trim();
    }
    if (num < 10000000) {
      const lakh = Math.floor(num / 100000);
      const rem = num % 100000;
      return `${numToWords(lakh)} Lakh ${rem ? numToWords(rem) : ""}`.trim();
    }
    return `${num}`;
  };

  return `${numToWords(amount).toUpperCase()} RUPEES ONLY`;
}

export default function A4TaxInvoice({
  invoice,
  onReset
}: {
  invoice: InvoiceData;
  onReset?: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  // react-to-print hook integration
  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: `Tax_Invoice_${invoice.txnId}`,
  });

  const netTaxable = invoice.grossSubtotal - invoice.discountAmount;
  const cgst = Math.round(invoice.gstAmount / 2);
  const sgst = invoice.gstAmount - cgst;
  const spelledAmount = numberToWordsINR(invoice.totalAmount);

  return (
    <div className="w-full flex flex-col items-center space-y-6">
      
      {/* Action Bar (Screen Only) */}
      <div className="w-full max-w-[210mm] flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white print:hidden shadow-lg">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          react-to-print Enabled • Single A4 Sheet Precision
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handlePrint()}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <Printer className="w-4 h-4" /> Print / Export A4 PDF
          </button>
          {onReset && (
            <button
              onClick={onReset}
              className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> Extend Another License
            </button>
          )}
        </div>
      </div>

      {/* Printable Single A4 Sheet Wrapper */}
      <div className="w-full max-w-[210mm] overflow-x-auto flex justify-center">
        <div 
          ref={contentRef}
          className="w-[210mm] min-h-[297mm] bg-white text-slate-900 p-8 sm:p-10 shadow-2xl border border-slate-200 print:shadow-none print:border-none print:p-6 print:m-0 print:w-full print:min-h-0 flex flex-col justify-between font-sans text-xs relative overflow-hidden"
        >
          
          <style jsx global>{`
            @media print {
              body {
                background-color: #ffffff !important;
                color: #000000 !important;
                margin: 0 !important;
                padding: 0 !important;
              }
              nav, footer, .print\\:hidden {
                display: none !important;
              }
              @page {
                size: A4 portrait;
                margin: 10mm;
              }
            }
          `}</style>

          {/* Top Section */}
          <div className="space-y-6">
            
            {/* Header: Logo + Invoice No */}
            <div className="flex justify-between items-start border-b-2 border-slate-900 pb-5">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 flex items-center justify-center rounded-xl bg-slate-100 border border-slate-300 shrink-0">
                  <Image 
                    src="/Applogo.png" 
                    alt="Arman Logical Systems" 
                    fill
                    className="object-contain p-1"
                    sizes="48px"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-xl font-black text-slate-900 tracking-tight leading-tight">
                    ARMAN LOGICAL SYSTEMS
                  </h1>
                  <p className="text-[10px] font-bold text-slate-600 tracking-wide uppercase">
                    Enterprise Software Infrastructure & SaaS Gateway
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                    https://Armanlogicalsystems.in
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="px-3 py-1 bg-slate-900 text-white font-extrabold text-xs uppercase tracking-widest rounded-md inline-block">
                  TAX INVOICE & RECEIPT
                </span>
                <div className="mt-2 text-xs font-mono font-bold text-slate-900">
                  Invoice No: <span className="text-blue-700">{invoice.txnId}</span>
                </div>
                <div className="text-[10px] text-slate-600 font-mono">
                  Invoice Date: {invoice.date}
                </div>
              </div>
            </div>

            {/* Supplier & Recipient Grid */}
            <div className="grid grid-cols-2 gap-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="space-y-1">
                <div className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider">
                  ISSUED BY (SUPPLIER)
                </div>
                <div className="font-extrabold text-sm text-slate-900">Arman Logical Systems</div>
                <div className="text-[11px] text-slate-700">Proprietor: <strong>Sahin Arman</strong></div>
                <div className="text-[11px] text-slate-700 font-mono">PAN: <strong>CKCPA4185J</strong></div>
                <div className="text-[11px] text-slate-700 font-mono">MCC Code: <strong>7372</strong> (Software Services)</div>
                <div className="text-[11px] text-slate-700">Support: sahin401099@gmail.com | +91 95634 01099</div>
              </div>

              <div className="space-y-1 text-right">
                <div className="text-[10px] font-extrabold uppercase text-slate-500 tracking-wider">
                  BILLED TO (RECIPIENT)
                </div>
                <div className="font-extrabold text-sm text-slate-900">{invoice.clientName}</div>
                <div className="text-[11px] text-slate-700 font-mono">License ID: <strong className="text-blue-800">{invoice.productId}</strong></div>
                <div className="text-[11px] text-slate-700">Product: <strong>{invoice.productName}</strong></div>
                <div className="text-[11px] text-slate-700 font-semibold text-emerald-700">
                  New Extended Expiry: <strong>{invoice.newExpiry}</strong>
                </div>
              </div>
            </div>

            {/* Particulars Table */}
            <div className="overflow-hidden border border-slate-300 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-[11px] uppercase tracking-wider font-bold">
                    <th className="py-2.5 px-3">S.No</th>
                    <th className="py-2.5 px-3">Item & Service Description</th>
                    <th className="py-2.5 px-3 text-center">SAC Code</th>
                    <th className="py-2.5 px-3 text-center">Duration</th>
                    <th className="py-2.5 px-3 text-right">Base Rate</th>
                    <th className="py-2.5 px-3 text-right">Discount</th>
                    <th className="py-2.5 px-3 text-right">Taxable Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs">
                  <tr>
                    <td className="py-3 px-3 font-mono">01</td>
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900">{invoice.productName} Subscription Extension</div>
                      <div className="text-[10px] text-slate-500">
                        License Key: {invoice.productId} • Extended to {invoice.newExpiry}
                      </div>
                    </td>
                    <td className="py-3 px-3 text-center font-mono">998314</td>
                    <td className="py-3 px-3 text-center font-bold">{invoice.years} Year(s)</td>
                    <td className="py-3 px-3 text-right font-mono">₹{invoice.grossSubtotal.toLocaleString('en-IN')}</td>
                    <td className="py-3 px-3 text-right font-mono text-emerald-700">
                      {invoice.discountAmount > 0 ? `- ₹${invoice.discountAmount.toLocaleString('en-IN')}` : "₹0"}
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-bold">₹{netTaxable.toLocaleString('en-IN')}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Summary & Amount in Words */}
            <div className="grid grid-cols-12 gap-6 pt-2">
              <div className="col-span-7 space-y-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-slate-500">Total Amount in Words</div>
                  <div className="text-xs font-black text-slate-900 mt-0.5">{spelledAmount}</div>
                </div>

                <div className="p-3.5 rounded-xl border-2 border-dashed border-emerald-600 bg-emerald-50/60 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-xs font-black text-emerald-900 uppercase">
                      PAYMENT VERIFIED • {invoice.channel.toUpperCase()}
                    </div>
                    <div className="text-[10px] text-emerald-800 font-mono">
                      Ref: {invoice.txnId} • Processed via PCI-DSS Compliant Gateway
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-5 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-slate-600">
                  <span>Gross Subtotal:</span>
                  <span>₹{invoice.grossSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {invoice.discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount Savings:</span>
                    <span>- ₹{invoice.discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-700 font-bold border-t border-slate-200 pt-1">
                  <span>Net Taxable Amount:</span>
                  <span>₹{netTaxable.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>CGST (9%):</span>
                  <span>₹{cgst.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>SGST (9%):</span>
                  <span>₹{sgst.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-900 font-black text-base border-t-2 border-slate-900 pt-2">
                  <span>Total Amount Paid:</span>
                  <span className="text-blue-900">₹{invoice.totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Signature */}
          <div className="pt-8 mt-auto border-t border-slate-200">
            <div className="flex justify-between items-end">
              <div className="space-y-1 text-[10px] text-slate-500 max-w-sm">
                <p><strong>Terms & Conditions:</strong> Services delivered under MCC 7372 (Software Services & Web Design).</p>
                <p>Support URL: https://Armanlogicalsystems.in/support | Email: sahin401099@gmail.com</p>
                <p className="font-mono">This is a computer-generated tax invoice. No signature required.</p>
              </div>

              <div className="text-center space-y-1">
                <div className="h-10 border-b border-slate-400 flex items-end justify-center pb-1">
                  <span className="font-serif italic font-bold text-slate-800 text-sm">Sahin Arman</span>
                </div>
                <div className="text-[10px] font-extrabold uppercase text-slate-700">For Arman Logical Systems</div>
                <div className="text-[9px] text-slate-500">Authorized Signatory</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
