"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudyHero() {
  return (
    <section className="bg-white pt-32 pb-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-[#F7F8F8]">
          {/* Decorative Circles */}

          <div className="pointer-events-none absolute -right-20 -bottom-20">
            <div className="absolute h-72 w-72 rounded-full border border-accent/30" />
            <div className="absolute left-12 top-12 h-48 w-48 rounded-full border border-accent/20" />
            <div className="absolute left-24 top-24 h-24 w-24 rounded-full bg-[#456B7C]" />
          </div>

          <div className="grid items-center gap-12 px-8 py-12 lg:grid-cols-2 lg:px-16 lg:py-20">
            {/* Left */}

            <div>
              <span className="rounded-full bg-[#F3E7D5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Real Practice Stories
              </span>

              <h1 className="mt-8 max-w-2xl font-serif text-5xl leading-tight text-[#2E2E2E] lg:text-7xl">
                Real healthcare
                <br />
                challenges.
                <br />
                Real operational
                <span className="italic text-[#456B7C]"> solutions.</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                Every case study is based on a real operational challenge faced
                by an independent medical practice. Discover how better systems,
                accountability, and operational expertise transformed complex
                problems into measurable outcomes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/services/medical-billing"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-medium text-white transition hover:bg-[#b78238]"
                >
                  Explore Services
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#456B7C] px-7 py-4 font-medium text-[#456B7C] transition hover:bg-[#456B7C] hover:text-white"
                >
                  Schedule Discovery Call
                </Link>
              </div>

              {/* Stats */}

              <div className="mt-14 flex flex-wrap gap-10">
                <div>
                  <p className="font-serif text-4xl text-[#456B7C]">5+</p>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-500">
                    Real Case Studies
                  </p>
                </div>

                <div>
                  <p className="font-serif text-4xl text-[#456B7C]">
                    Independent
                  </p>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-500">
                    Medical Practices
                  </p>
                </div>

                <div>
                  <p className="font-serif text-4xl text-[#456B7C]">100%</p>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray-500">
                    Real Experiences
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="relative">
              <div className="relative overflow-hidden rounded-[32px] bg-white shadow-xl">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/services/credentialing-hero.webp"
                    alt="Healthcare Case Studies"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Card */}

              <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-6 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                  Featured Topics
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    "Medical Billing",
                    "Credentialing",
                    "HIPAA Compliance",
                    "Practice Operations",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#456B7C]" />

                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
