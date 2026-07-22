"use client";

import type { ServiceStats as ServiceStatsData } from "@/types/service";

interface ServiceStatsProps {
  data: ServiceStatsData;
}

export default function ServiceStats({ data }: ServiceStatsProps) {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFB] py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute -left-24 top-12 h-56 w-56 rounded-full bg-[#456B7C]" />

      <div className="absolute -right-10 bottom-12 h-24 w-24 rounded-full bg-[#C6944A]" />

      <div className="relative mx-auto max-w-7xl px-6">
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

        {/* Stats */}
        <div className="mt-20 grid gap-8 lg:grid-cols-12">
          {/* Featured Stat */}
          <div className="overflow-hidden rounded-[36px] bg-[#456B7C] p-10 text-white lg:col-span-5">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">
              Featured Metric
            </p>

            <h3 className="mt-8 font-serif text-6xl md:text-7xl">
              {data.stats[0]?.value}
            </h3>

            <div className="mt-6 h-[2px] w-20 bg-[#C6944A]" />

            <h4 className="mt-8 text-2xl font-semibold">
              {data.stats[0]?.label}
            </h4>

            {data.stats[0]?.description && (
              <p className="mt-6 leading-8 text-white/80">
                {data.stats[0].description}
              </p>
            )}
          </div>

          {/* Remaining Stats */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {data.stats.slice(1).map((stat, index) => (
              <div
                key={index}
                className="rounded-[30px] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6944A] hover:shadow-xl"
              >
                <h3 className="font-serif text-5xl text-[#456B7C]">
                  {stat.value}
                </h3>

                <div className="mt-5 h-[2px] w-14 bg-[#C6944A]" />

                <h4 className="mt-6 text-xl font-semibold text-[#2F2F2F]">
                  {stat.label}
                </h4>

                {stat.description && (
                  <p className="mt-4 leading-7 text-gray-600">
                    {stat.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
