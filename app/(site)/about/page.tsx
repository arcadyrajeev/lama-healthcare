import FaqSection from "@/app/components/FaqSection";
import AboutHero from "./components/AboutHero";
import AboutStory from "./components/AboutStory";
import LamaJourney from "./components/LamaJourney";
import NumbersSection from "./components/NumbersSection";
import ProblemsSection from "./components/ProblemSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lama Healthcare | Built by Healthcare Operators",

  description:
    "Learn how Lama Healthcare was built by operators who experienced the challenges of running independent healthcare practices. Discover our mission, journey, and commitment to building accountable operational systems that improve patient care.",

  keywords: [
    "About Lama Healthcare",
    "Healthcare Operations",
    "Healthcare Management",
    "Practice Management Company",
    "Medical Practice Operations",
    "Healthcare Consulting",
    "Independent Healthcare Practices",
    "Medical Practice Growth",
    "Healthcare Leadership",
    "Operational Excellence",
    "Healthcare Administration",
    "Revenue Cycle Management",
    "Credentialing Experts",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Lama Healthcare | Built by Healthcare Operators",

    description:
      "We didn't build another healthcare company. We built the operational system we wished we had.",

    url: "https://lamahealthcare.com/about",

    siteName: "Lama Healthcare",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Lama Healthcare",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "About Lama Healthcare",

    description:
      "Learn how Lama Healthcare helps independent practices improve operations through proven systems and real operational experience.",

    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-[200vh] overflow-x-hidden bg-white ">
      <AboutHero />
      <AboutStory />
      <LamaJourney />
      <ProblemsSection />
      <NumbersSection />
      <FaqSection />
    </main>
  );
}
