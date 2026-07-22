"use client";

import { Check } from "lucide-react";

import type { ServiceDifference as ServiceDifferenceData } from "@/types/service";

interface ServiceDifferenceProps {
  data: ServiceDifferenceData;
}

export default function ServiceDifference({ data }: ServiceDifferenceProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Decorative Circles */}
      <div className="absolute -left-24 top-0 h-56 w-56 rounded-full bg-[#456B7C]" />

      <div className="absolute -right-10 bottom-10 h-24 w-24 rounded-full bg-[#C6944A]" />

      <div className="mx-auto max-w-7xl px-6">
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

        {/* Difference Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {data.items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6944A] hover:shadow-xl"
            >
              {/* Decorative Circle */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#EDF5F7] transition-transform duration-300 group-hover:scale-125" />

              {/* Number */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#456B7C] text-white">
                <Check size={24} />
              </div>

              <h3 className="relative z-10 mt-8 font-serif text-2xl text-[#2F2F2F]">
                {item.title}
              </h3>

              <div className="mt-5 h-[2px] w-16 bg-[#C6944A]" />

              <p className="relative z-10 mt-5 leading-8 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
