"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Building2,
  Users,
  ClipboardCheck,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFB] py-28">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-accent/20" />

        <div className="absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border border-accent/15" />

        <div className="absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-[#456B7C]/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-main">
          <div className="grid items-center gap-16 p-10 lg:grid-cols-[2fr_1fr] lg:p-16">
            {/* Left */}

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                See It On Your Own Roster
              </span>

              <h2 className="mt-6 max-w-4xl font-serif text-5xl leading-tight text-white lg:text-6xl">
                See what Practice One
                <br />
                does to your
                <span className="italic text-accent"> workload.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">
                Every practice operates differently. During your discovery call,
                we&apos;ll walk through your current provider roster,
                credentialing workflow and operational challenges to show
                exactly how Practice One fits your team.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-medium text-white transition hover:bg-[#B8843C]"
                >
                  <CalendarDays size={20} />
                  Schedule a Free Discovery Call
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-medium text-white transition hover:bg-white/10"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Right */}

            <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                During The Call
              </p>

              <div className="mt-8 space-y-7">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                    <Building2 size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Review Your Workflow
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/70">
                      We&apos;ll understand how your current credentialing
                      process works today.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                    <Users size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Evaluate Your Provider Roster
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/70">
                      We&apos;ll identify where providers lose time before they
                      ever become billable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                    <ClipboardCheck size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Show Practice One Live
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-white/70">
                      We&apos;ll demonstrate how the platform simplifies your
                      exact workflow using real examples.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-7 text-white/70">
                  No obligation, no generic sales presentation. Just a practical
                  walkthrough focused on your team&apos;s operational
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
