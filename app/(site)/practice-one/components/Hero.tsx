"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white pt-32 pb-20"
      id="practicehero"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-48 top-10 h-[600px] w-[600px] rounded-full border border-accent/20" />

        <div className="absolute -right-16 top-44 h-[360px] w-[360px] rounded-full border border-accent/15" />

        <div className="absolute -left-40 bottom-0 h-[340px] w-[340px] rounded-full bg-[#456B7C]/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Built From The Inside
            </span>

            <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-[#2E2E2E] md:text-6xl xl:text-7xl">
              Run your entire
              <br />
              provider roster
              <br />
              <span className="italic text-[#456B7C]">without chasing</span>
              <br />a single document.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
              Practice One tracks every provider, every payer, and every stage
              across all your clients in one place. Documents collect
              themselves, statuses update automatically, and your clients always
              see the truth without needing to ask.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#456B7C] px-8 py-4 font-medium text-white transition hover:bg-[#355564]"
              >
                Schedule Demo
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center gap-3 rounded-full border border-[#456B7C]/20 px-8 py-4 font-medium text-[#456B7C] transition hover:bg-[#456B7C]/5"
              >
                <PlayCircle size={18} />
                Explore Features
              </Link>
            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div>
                <div className="font-serif text-4xl text-[#456B7C]">1</div>

                <p className="mt-2 text-sm text-neutral-500">
                  Provider Workspace
                </p>
              </div>

              <div>
                <div className="font-serif text-4xl text-[#456B7C]">Auto</div>

                <p className="mt-2 text-sm text-neutral-500">Status Tracking</p>
              </div>

              <div>
                <div className="font-serif text-4xl text-[#456B7C]">Smart</div>

                <p className="mt-2 text-sm text-neutral-500">
                  Document Collection
                </p>
              </div>

              <div>
                <div className="font-serif text-4xl text-[#456B7C]">Live</div>

                <p className="mt-2 text-sm text-neutral-500">
                  Client Visibility
                </p>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            {/* Concentric Circles */}

            <div className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15" />

            <div className="absolute left-1/2 top-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15" />

            <div className="absolute left-1/2 top-1/2 -z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/15" />

            {/* Dashboard */}

            <div className="overflow-hidden rounded-[34px] border border-neutral-200 bg-white shadow-2xl">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/images/practice-one/dashboard.png"
                  alt="Practice One Dashboard"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -left-8 hidden max-w-xs rounded-[28px] border border-neutral-200 bg-white p-6 shadow-xl lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Live Automation
              </p>

              <h3 className="mt-4 text-xl font-semibold text-[#2E2E2E]">
                Every enrollment stays up to date automatically.
              </h3>

              <div className="mt-6 space-y-3">
                {[
                  "Automatic payer updates",
                  "Provider document collection",
                  "Real-time status tracking",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />

                    <span className="text-sm text-neutral-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Floating Card */}

            <div className="mt-6 rounded-[28px] border border-neutral-200 bg-white p-6 shadow-xl lg:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Live Automation
              </p>

              <h3 className="mt-4 text-xl font-semibold text-[#2E2E2E]">
                Every enrollment stays up to date automatically.
              </h3>

              <div className="mt-6 space-y-3">
                {[
                  "Automatic payer updates",
                  "Provider document collection",
                  "Real-time status tracking",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />

                    <span className="text-sm text-neutral-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
