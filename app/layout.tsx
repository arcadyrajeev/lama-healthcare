import type { Metadata } from "next";

import "./globals.css";
import LenisProvider from "./providers/LenisProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lamahealthcare.com"),

  title: {
    default: "Lama Healthcare | Practice Management Solutions",
    template: "%s | Lama Healthcare",
  },

  description:
    "Practice management solutions for independent healthcare practices. Credentialing, revenue cycle management, compliance, operations, and growth systems built for modern clinics.",

  keywords: [
    "Practice Management",
    "Healthcare Operations",
    "Medical Billing",
    "Credentialing",
    "Revenue Cycle Management",
    "RCM",
    "Compliance",
    "Healthcare Consulting",
    "Independent Medical Practice",
    "Practice Growth",
    "Medical Practice",
    "Healthcare Automation",
    "Medical Office Management",
    "Healthcare Software",
  ],

  applicationName: "Lama Healthcare",

  authors: [
    {
      name: "Lama Healthcare",
      url: "https://lamahealthcare.com",
    },
  ],

  creator: "Lama Healthcare",
  publisher: "Lama Healthcare",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Lama Healthcare | Practice Management Solutions",
    description:
      "Helping independent healthcare practices improve operations, compliance, credentialing, billing, and profitability.",

    url: "https://lamahealthcare.com",

    siteName: "Lama Healthcare",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lama Healthcare",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Lama Healthcare | Practice Management Solutions",

    description:
      "Built for independent healthcare practices. Better operations. Better patient care.",

    images: ["/twitter-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],

    apple: "/favicon.png",

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  category: "Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
