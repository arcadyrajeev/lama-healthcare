"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldCheck } from "lucide-react";

export default function CaseStudyCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Decorative Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-accent/20" />

        <div className="absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-accent/15" />

        <div className="absolute -left-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#456B7C]/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-main">
          <div className="grid items-center gap-14 p-10 lg:grid-cols-[2fr_1fr] lg:p-16">
            {/* Left */}

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Ready To Find Your Story?
              </span>

              <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-tight text-white">
                Every case study started with a problem nobody realized existed.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">
                Billing issues, credentialing delays, compliance gaps and
                operational inefficiencies rarely appear overnight. We help
                independent medical practices uncover hidden risks before they
                become expensive problems.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-medium text-white transition hover:bg-[#b78238]"
                >
                  <CalendarDays size={20} />
                  Schedule Discovery Call
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right */}

            <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
                <ShieldCheck className="text-accent" size={28} />
              </div>

              <h3 className="mt-8 font-serif text-3xl text-white">
                What We&apos;ll Review
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Medical Billing & Revenue Cycle",
                  "Credentialing & Payer Enrollment",
                  "HIPAA & Compliance",
                  "Practice Operations",
                  "Workflow Efficiency",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />

                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-7 text-white/70">
                  Every engagement begins with understanding your current
                  systems, identifying operational risks, and recommending
                  practical improvements tailored to your practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
