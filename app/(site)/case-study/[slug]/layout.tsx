import type { Metadata } from "next";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import ReadingProgress from "../components/ReadingProgress";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Healthcare Case Studies | Lama Healthcare",

  description:
    "Explore real stories showing how operational, compliance, credentialing and billing challenges were solved for independent healthcare practices.",
};

export default function CaseStudyLayout({ children }: LayoutProps) {
  return (
    <>
      <ReadingProgress />

      <main className="min-h-screen bg-white">{children}</main>
    </>
  );
}
