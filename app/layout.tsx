import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Injecting the premium typography globally
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// Premium production SEO Metadata 
export const metadata: Metadata = {
  title: "Arman Logical Systems | Gateway Ecosystem",
  description: "Secure digital infrastructure and centralized operating systems for local schools, clinics, restaurants, and marketplaces.",
  keywords: ["Arman Logical Systems", "Schoolahive", "DineServe", "ClinicMind", "LocalHub", "SaaS India"],
  authors: [{ name: "Arman Logical Systems" }],
  openGraph: {
    title: "Arman Logical Systems | Gateway Ecosystem",
    description: "The digital backbone for local communities. Access your dedicated enterprise platforms.",
    url: "https://armanlogicalsystems.in",
    siteName: "Arman Logical Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arman Logical Systems | Gateway Ecosystem",
    description: "The digital backbone for local communities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-cyan/30">
        {children}
      </body>
    </html>
  );
}
