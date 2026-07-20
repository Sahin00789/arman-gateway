import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F172A" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://armanlogicalsystems.in"),
  title: {
    default: "Arman Logical Systems | SaaS Gateway & Enterprise Software",
    template: "%s | Arman Logical Systems",
  },
  description: "Official digital gateway for Arman Logical Systems (MCC 7372). Access Schoolahive ERP, DineServe POS, ClinicMind Hub, LocalHub, and extend SaaS annual subscriptions.",
  keywords: [
    "Arman Logical Systems",
    "Sahin Arman",
    "Schoolahive ERP",
    "DineServe POS",
    "ClinicMind Hub",
    "LocalHub",
    "SaaS Subscription Extension",
    "Software Services India",
    "Website Designers MCC 7372",
    "Google Pay Business Verification"
  ],
  authors: [{ name: "Sahin Arman", url: "https://armanlogicalsystems.in" }],
  creator: "Arman Logical Systems",
  publisher: "Arman Logical Systems",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/Applogo.png", type: "image/png" }
    ],
    apple: "/Applogo.png",
  },
  openGraph: {
    title: "Arman Logical Systems | SaaS Gateway & Enterprise Software",
    description: "Centralized operating systems for schools, clinics, restaurants, and retail platforms. Extend subscriptions and pay securely via Google Pay.",
    url: "https://armanlogicalsystems.in",
    siteName: "Arman Logical Systems",
    images: [
      {
        url: "/Applogo.png",
        width: 800,
        height: 800,
        alt: "Arman Logical Systems Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arman Logical Systems | Enterprise Software Gateway",
    description: "Centralized operating systems for schools, clinics, restaurants, and retail platforms.",
    images: ["/Applogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arman Logical Systems",
    "url": "https://armanlogicalsystems.in",
    "logo": "https://armanlogicalsystems.in/Applogo.png",
    "founder": {
      "@type": "Person",
      "name": "Sahin Arman"
    },
    "description": "Enterprise software infrastructure, localized ERPs, and custom web applications.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-95634-01099",
      "contactType": "customer service",
      "email": "sahin401099@gmail.com",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://school.armanlogicalsystems.in",
      "https://dine.armanlogicalsystems.in",
      "https://clinic.armanlogicalsystems.in",
      "https://shop.armanlogicalsystems.in"
    ]
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 font-sans transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
