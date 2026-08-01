"use client";

import { Search, ShieldAlert, Workflow, TriangleAlert } from "lucide-react";

import { FindingsSection } from "@/types/case-study";

interface FindingsProps {
  findings: FindingsSection;
}

const icons = [Search, TriangleAlert, Workflow, ShieldAlert];

export default function Findings({ findings }: FindingsProps) {
  return (
    <section className="relative overflow-hidden bg-olive-950 py-28 text-white">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full border border-white/5" />

        <div className="absolute -top-20 -right-20 h-[320px] w-[320px] rounded-full border border-white/5" />

        <div className="absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-olive-700/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
            {findings.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            {findings.title}
          </h2>

          {findings.subtitle && (
            <p className="mt-6 text-lg leading-8 text-white/70">
              {findings.subtitle}
            </p>
          )}
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {findings.cards.map((card, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={card.title}
                className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/30 hover:bg-white/10"
              >
                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-400/15 text-teal-400">
                  <Icon size={28} />
                </div>

                {/* Number */}

                <span className="mt-8 block text-xs font-semibold tracking-[0.3em] text-white/40">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                {/* Title */}

                <h3 className="mt-3 font-serif text-2xl leading-snug">
                  {card.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-white/70">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-20 rounded-[32px] border border-teal-400/20 bg-teal-400/10 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                Key Insight
              </p>

              <h3 className="mt-3 font-serif text-3xl leading-tight">
                The visible problem was never the root cause.
              </h3>
            </div>

            <div className="max-w-xl">
              <p className="leading-8 text-white/70">
                Every case study reveals the same pattern. The issue practices
                notice first is usually just a symptom. The real solution comes
                from identifying and correcting the operational gap underneath
                it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
