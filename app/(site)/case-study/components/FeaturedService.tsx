"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { RelatedService } from "@/types/case-study";

interface FeaturedServiceProps {
  service: RelatedService;
}

export default function FeaturedService({ service }: FeaturedServiceProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-28">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full border border-olive-100" />

        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-olive-100" />

        <div className="absolute -left-32 bottom-0 h-[340px] w-[340px] rounded-full bg-olive-100/30 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] border border-neutral-200 bg-white shadow-xl">
          <div className="grid items-center lg:grid-cols-2">
            {/* Left */}

            <div className="p-10 md:p-16">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-olive-600">
                Related Service
              </span>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-olive-950 md:text-5xl">
                {service.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
                {service.description}
              </p>

              <Link
                href={service.href ?? "/services"}
                className="group mt-12 inline-flex items-center gap-3 rounded-full bg-olive-700 px-8 py-4 font-medium text-white transition hover:bg-olive-800"
              >
                {service.cta ?? "Explore Service"}

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Right */}

            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-olive-950">
              {/* Decorative circles */}

              <div className="absolute h-[420px] w-[420px] rounded-full border border-white/10" />

              <div className="absolute h-[280px] w-[280px] rounded-full border border-white/10" />

              <div className="absolute h-[150px] w-[150px] rounded-full border border-white/10" />

              {/* Card */}

              <div className="relative z-10 w-[320px] rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-md">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-400">
                  Featured Service
                </span>

                <h3 className="mt-5 font-serif text-3xl leading-tight text-white">
                  {service.title}
                </h3>

                <div className="mt-8 h-px bg-white/10" />

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />

                    <span className="text-white/80">End-to-end management</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />

                    <span className="text-white/80">
                      Operational visibility
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />

                    <span className="text-white/80">Ongoing support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
