import type { Metadata } from "next";

import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Story from "./components/Story";
import Automation from "./components/Automation";
import Features from "./components/Features";
import CaseStudy from "./components/CaseStudy";
import CTA from "./components/CTA";

export const metadata: Metadata = {
  title: "Practice One | Provider Credentialing & Enrollment Platform",

  description:
    "Automate provider credentialing, enrollment, document collection, CAQH management, compliance, and onboarding with Practice One by Lama Healthcare.",

  keywords: [
    "Provider Credentialing",
    "Credentialing Software",
    "Medical Credentialing",
    "Healthcare Credentialing",
    "Provider Enrollment",
    "Provider Onboarding",
    "CAQH Management",
    "Credentialing Automation",
    "Medical Practice Software",
    "Healthcare Workflow Automation",
  ],

  alternates: {
    canonical: "/practice-one",
  },

  openGraph: {
    title: "Practice One | Provider Credentialing Platform",
    description:
      "Run your entire provider roster without chasing documents. Built for independent healthcare practices.",
    url: "https://lamahealthcare.com/practice-one",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Practice One by Lama Healthcare",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Practice One | Provider Credentialing Platform",
    description:
      "Automate provider credentialing, enrollment, compliance, and onboarding.",
    images: ["/og-image.jpg"],
  },
};

export default function PracticeOnePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Story />
      <CaseStudy />
      <Automation />
      <Features />
      <CTA />
    </>
  );
}
