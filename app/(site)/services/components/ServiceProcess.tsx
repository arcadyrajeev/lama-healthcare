"use client";

import { ArrowDown } from "lucide-react";

import type { ServiceProcess as ServiceProcessData } from "@/types/service";

interface ServiceProcessProps {
  data: ServiceProcessData;
}

export default function ServiceProcess({ data }: ServiceProcessProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute -left-24 top-24 h-48 w-48 rounded-full bg-[#456B7C]" />

      <div className="absolute -right-10 bottom-20 h-24 w-24 rounded-full bg-[#C6944A]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
            {data.eyebrow}
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#2F2F2F] md:text-5xl">
            {data.title}
          </h2>

          <div className="mx-auto mt-8 h-[2px] w-24 bg-[#C6944A]" />

          {data.description && (
            <p className="mt-8 text-lg leading-8 text-gray-600">
              {data.description}
            </p>
          )}
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Center Line */}
          <div className="absolute left-7 top-0 hidden h-full w-[2px] bg-[#E5E7EB] md:block" />

          <div className="space-y-10">
            {data.steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col gap-6 md:flex-row md:gap-10"
              >
                {/* Number */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#456B7C] font-semibold text-white shadow-lg">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6944A] hover:shadow-xl">
                  <h3 className="font-serif text-2xl text-[#2F2F2F]">
                    {step.title}
                  </h3>

                  <div className="mt-4 h-[2px] w-16 bg-[#C6944A]" />

                  <p className="mt-5 leading-8 text-gray-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index !== data.steps.length - 1 && (
                  <div className="hidden absolute left-[21px] top-[72px] md:flex justify-center">
                    <ArrowDown size={20} className="text-[#C6944A]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
