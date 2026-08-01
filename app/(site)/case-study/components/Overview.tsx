"use client";

import {
  AlertTriangle,
  CircleCheckBig,
  ClipboardList,
  Lightbulb,
} from "lucide-react";

import { OverviewSection } from "@/types/case-study";

interface OverviewProps {
  overview: OverviewSection;
}

const overviewCards = [
  {
    title: "Situation",
    icon: ClipboardList,
    key: "situation",
  },
  {
    title: "Problem",
    icon: AlertTriangle,
    key: "problem",
  },
  {
    title: "Solution",
    icon: Lightbulb,
    key: "solution",
  },
  {
    title: "Outcome",
    icon: CircleCheckBig,
    key: "outcome",
  },
] as const;

export default function Overview({ overview }: OverviewProps) {
  const content = {
    situation: overview.situation,
    problem: overview.problem,
    solution: overview.solution,
    outcome: overview.outcome,
  };

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-olive-600">
            Executive Summary
          </span>

          <h2 className="mt-4 font-serif text-4xl text-olive-950 md:text-5xl">
            The story at a glance.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Every case study follows a predictable pattern. A challenge
            appeared, the underlying cause was uncovered, a solution was
            implemented, and measurable operational improvements followed.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {overviewCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.key}
                className="group rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-olive-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-olive-100 text-olive-700">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 font-serif text-2xl text-olive-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {content[item.key]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
