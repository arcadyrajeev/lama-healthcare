import type { Metadata } from "next";

import HomeHero from "@/app/components/HomeHero";
import ProblemSection from "./components/ProblemSection";
import ExperienceSection from "./components/ExperienceSection";
import SolutionSection from "./components/SolutionSection";
import ServicesSection from "./components/ServiceSection";
import ProcessSection from "./components/ProcessSection";
import FaqSection from "./components/FaqSection";
import VideoSection from "./components/VideoSection";
import FinalCTA from "./components/FinalCTA";

export const metadata: Metadata = {
  title: "Lama Healthcare | Smarter Practice Operations",

  description:
    "Streamline healthcare practice operations with Lama Healthcare. Simplify medical billing, credentialing, compliance, and practice management with one accountable team.",

  keywords: [
    "Healthcare practice management",
    "Medical billing services",
    "Healthcare credentialing",
    "Medical practice operations",
    "Healthcare revenue cycle management",
    "Lama Healthcare",
  ],

  authors: [
    {
      name: "Lama Healthcare",
    },
  ],

  creator: "Lama Healthcare",

  metadataBase: new URL("https://YOUR-DOMAIN.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Lama Healthcare | Smarter Practice Operations",

    description:
      "Better operations create better healthcare. Simplify your practice operations with Lama Healthcare.",

    url: "/",

    siteName: "Lama Healthcare",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lama Healthcare | Practice Operations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Lama Healthcare | Smarter Practice Operations",

    description:
      "Streamline healthcare practice operations with Lama Healthcare.",

    images: ["/og-image.jpg"],
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
};

export default function HomePage() {
  return (
    <main className="min-h-[200vh] overflow-x-hidden bg-white">
      <HomeHero />
      <ProblemSection />
      <VideoSection />
      <ExperienceSection />
      <SolutionSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <FinalCTA />
    </main>
  );
}
