"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { CaseStudyCard as CaseStudyCardData } from "@/types/case-study";

interface CaseStudyCardProps {
  data: CaseStudyCardData;
}

export default function CaseStudyCard({ data }: CaseStudyCardProps) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="grid lg:grid-cols-[320px_1fr]">
        {/* Image */}
        <div className="relative min-h-[320px] h-64 lg:h-full">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between p-8 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C69247]">
              {data.eyebrow ?? "Case Study"}
            </p>

            {data.location && (
              <p className="mt-3 text-sm font-medium text-[#456B7C]">
                {data.location}
              </p>
            )}

            <h3 className="mt-4 font-serif text-3xl leading-tight text-[#2E2E2E]">
              {data.title}
            </h3>

            <div className="mt-6 h-[2px] w-16 bg-[#C69247]" />

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {data.description}
            </p>

            {data.result && (
              <div className="mt-8 inline-flex rounded-full bg-[#EDF5F7] px-5 py-2 text-sm font-semibold text-[#456B7C]">
                {data.result}
              </div>
            )}
          </div>

          <Link
            href={`/${data.slug}`}
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#456B7C] px-6 py-3 font-medium text-white transition hover:bg-[#355564]"
          >
            {data.buttonText ?? "Read Case Study"}

            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
