"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, PhoneCall } from "lucide-react";

import { CTASection } from "@/types/case-study";

interface CTAProps {
  cta: CTASection;
}

export default function CTA({ cta }: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-[-220px] top-[-220px] h-[520px] w-[520px] rounded-full border border-olive-100" />

        <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full border border-olive-100" />

        <div className="absolute left-[-150px] bottom-[-150px] h-[340px] w-[340px] rounded-full bg-olive-100/40 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-olive-950 px-8 py-14 shadow-2xl md:px-16 md:py-20">
          <div className="grid items-center gap-14 lg:grid-cols-[2fr_1fr]">
            {/* Left */}

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                {cta.eyebrow}
              </span>

              <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-tight text-white md:text-6xl">
                {cta.title}
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70">
                {cta.description}
              </p>

              {/* Buttons */}

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-teal-400 px-8 py-4 font-semibold text-olive-950 transition hover:bg-teal-300"
                >
                  <CalendarDays size={20} />

                  {cta.button}

                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="tel:+17255551234"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-4 font-medium text-white transition hover:bg-white/10"
                >
                  <PhoneCall size={18} />
                  Call Our Team
                </Link>
              </div>
            </div>

            {/* Right */}

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                What Happens Next
              </p>

              <div className="mt-8 space-y-6">
                {[
                  "Review your current workflow",
                  "Identify operational risks",
                  "Prioritize the biggest gaps",
                  "Recommend practical next steps",
                ].map((item, index) => (
                  <div key={item} className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-400 text-sm font-bold text-olive-950">
                      {index + 1}
                    </div>

                    <div className="pt-2 text-white/80">{item}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-7 text-white/70">
                  No obligation. No generic sales pitch. You&apos;ll leave the
                  conversation with a clear understanding of where your
                  operational risks are and what to do next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
