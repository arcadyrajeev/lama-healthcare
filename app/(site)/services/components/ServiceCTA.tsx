"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import type { ServiceCTA as ServiceCTAData } from "@/types/service";

interface ServiceCTAProps {
  data: ServiceCTAData;
}

export default function ServiceCTA({ data }: ServiceCTAProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-[#456B7C] px-8 py-16 text-white shadow-2xl md:px-14 lg:px-20 lg:py-20">
          {/* Decorative Circles */}
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/5" />

          <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-[#C6944A]/20" />

          <div className="absolute right-10 top-10 h-20 w-20 rounded-full border border-white/10" />

          <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1fr_340px]">
            {/* Content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E7C58B]">
                {data.eyebrow}
              </p>

              <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
                {data.title}
              </h2>

              <div className="mt-8 h-[2px] w-24 bg-[#C6944A]" />

              {data.description && (
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
                  {data.description}
                </p>
              )}

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={data.primaryButton.href}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6944A] px-8 py-4 font-semibold text-white transition hover:bg-[#b9873d]"
                >
                  {data.primaryButton.label}
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href={data.secondaryButton.href}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Phone size={18} />
                  {data.secondaryButton.label}
                </Link>
              </div>
            </div>

            {/* Side Card */}
            <div className="rounded-[30px] border border-white/10 bg-white/10 p-8 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.25em] text-[#E7C58B]">
                Why Lama Healthcare?
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#C6944A]" />

                  <p className="leading-7 text-white/80">
                    Strategic healthcare operations consulting.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#C6944A]" />

                  <p className="leading-7 text-white/80">
                    Revenue cycle optimization with measurable outcomes.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#C6944A]" />

                  <p className="leading-7 text-white/80">
                    Dedicated experts focused on long-term growth.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-widest text-[#E7C58B]">
                  Response Time
                </p>

                <p className="mt-2 font-serif text-4xl">24 hrs</p>

                <p className="mt-2 text-sm text-white/70">
                  We&apos;ll get back to you within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
