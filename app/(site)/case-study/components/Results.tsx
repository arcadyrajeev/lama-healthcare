"use client";

import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";

import { ResultsSection } from "@/types/case-study";

interface ResultsProps {
  results: ResultsSection;
}

const icons = [CheckCircle2, TrendingUp, CircleDollarSign, ShieldCheck];

export default function Results({ results }: ResultsProps) {
  return (
    <section className="relative overflow-hidden bg-olive-950 py-28 text-white">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-56 -right-56 h-[520px] w-[520px] rounded-full border border-white/5" />

        <div className="absolute -bottom-48 -left-48 h-[420px] w-[420px] rounded-full bg-olive-700/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
            {results.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            {results.title}
          </h2>

          {results.subtitle && (
            <p className="mt-6 text-lg leading-8 text-white/70">
              {results.subtitle}
            </p>
          )}
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {results.cards.map((card, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={card.label}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-teal-400/20 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-400/15 text-teal-400">
                  <Icon size={28} />
                </div>

                <div className="mt-10">
                  <div className="font-serif text-5xl leading-none">
                    {card.value}
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{card.label}</h3>

                  {card.description && (
                    <p className="mt-4 leading-7 text-white/70">
                      {card.description}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Divider */}

        <div className="my-20 h-px bg-white/10" />

        {/* Bottom */}

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
              Business Impact
            </span>

            <h3 className="mt-5 font-serif text-4xl">
              Strong operations produce predictable outcomes.
            </h3>

            <p className="mt-8 max-w-3xl leading-8 text-white/70">
              Every successful outcome in this case study came from fixing the
              underlying operational process rather than treating individual
              symptoms. Once the workflow became reliable, compliance, billing,
              documentation, and staff confidence naturally improved.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
              Outcome Summary
            </p>

            <ul className="mt-8 space-y-5">
              {[
                "Root cause identified",
                "Operational process corrected",
                "Documentation improved",
                "Future risk reduced",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <CheckCircle2 size={20} className="text-teal-400" />

                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
