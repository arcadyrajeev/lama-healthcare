"use client";

import Link from "next/link";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function FinalCTA() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();

      cal("ui", {
        theme: "light",
      });
    })();
  }, []);
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[40px] bg-main px-8 py-16 text-white shadow-2xl lg:px-20 lg:py-20">
          {/* Decorative Elements */}
          <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-white/5" />

          <div className="absolute -right-16 -bottom-20 h-60 w-60 rounded-full border-2 border-accent/40" />

          <div className="absolute right-20 top-14 h-24 w-24 rounded-full border border-white/10" />

          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[1fr_340px]">
            {/* Left */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Ready to Strengthen Your Practice?
              </p>

              <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
                Better operations create
                <br />
                better healthcare.
              </h2>

              <div className="mt-8 h-[2px] w-24 bg-accent" />

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
                Whether you&apos;re launching a new practice, improving revenue
                cycle performance, or strengthening compliance, our team helps
                you build systems that support long-term growth.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  data-cal-link="yourusername/discovery-call"
                  data-cal-config='{"layout":"month_view"}'
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:brightness-95"
                >
                  <CalendarDays size={18} />
                  Schedule Discovery Call
                  <ArrowRight size={18} />
                </button>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition hover:bg-white/20"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-[30px] border border-white/10 bg-white/10 p-8 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.25em] text-accent">
                Trusted Partnership
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="leading-7 text-white/80">
                    End-to-end healthcare operations support.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="leading-7 text-white/80">
                    Credentialing, billing, compliance, and practice growth.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="leading-7 text-white/80">
                    Practical guidance backed by healthcare expertise.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/10 p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-accent">
                  Average Response
                </p>

                <p className="mt-2 font-serif text-4xl">24 Hours</p>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  We respond to every inquiry within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
