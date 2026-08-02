"use client";

import { useEffect } from "react";

import CaseCard from "@/app/components/CaseCard";
import type { CaseStudyCard as CaseStudyCardData } from "@/types/case-study";

interface ServiceCaseStudyProps {
  data: CaseStudyCardData;
}

export default function ServiceCaseStudy({ data }: ServiceCaseStudyProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute -left-10 top-20 -z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-[#456B7C]/15 blur-3xl" />

      <div className="absolute bottom-16 right-0 -z-10 h-28 w-28 translate-x-1/2 rounded-full bg-[#C6944A]/20 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
            Success Story
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#2F2F2F] md:text-5xl">
            Real Results.
            <br />
            <span className="italic text-[#456B7C]">
              Real Healthcare Practices.
            </span>
          </h2>

          <div className="mx-auto mt-8 h-[2px] w-24 bg-[#C6944A]" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            See how Lama Healthcare partners with practices to improve
            operational efficiency, strengthen revenue cycles, and create
            measurable business outcomes.
          </p>
        </div>

        {/* Case Study Card */}
        <CaseCard data={data} />
      </div>
    </section>
  );
}
