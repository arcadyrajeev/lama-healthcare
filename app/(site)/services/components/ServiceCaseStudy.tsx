"use client";

import CaseStudyCard from "@/app/components/CaseStudyCard";
import type { CaseStudyCard as CaseStudyCardData } from "@/types/case-study";

interface ServiceCaseStudyProps {
  data: CaseStudyCardData;
}

export default function ServiceCaseStudy({ data }: ServiceCaseStudyProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-[#456B7C]" />

      <div className="absolute right-0 bottom-16 h-24 w-24 translate-x-1/2 rounded-full bg-[#C6944A]" />

      <div className="mx-auto max-w-7xl px-6">
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

          <p className="mt-8 text-lg leading-8 text-gray-600">
            See how Lama Healthcare partners with practices to improve
            operational efficiency, strengthen revenue cycles, and create
            measurable business outcomes.
          </p>
        </div>

        {/* Card */}
        <CaseStudyCard data={data} />
      </div>
    </section>
  );
}
