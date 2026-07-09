"use client";

import {
  Search,
  ClipboardList,
  Wrench,
  ShieldCheck,
  Check,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Audit",
    description: "We investigate. Understand where operations are breaking.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description: "We design. Create a roadmap based on findings.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Execute",
    description: "We implement. Our team handles the work.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Stay",
    description: "We manage. Continuous oversight and optimization.",
    icon: ShieldCheck,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-main py-24">
      {/* Decorative circles */}

      <div className="absolute -right-28 -top-24 h-72 w-72 rounded-full bg-white/10" />

      <div className="absolute -right-16 top-28 h-52 w-52 rounded-full border-2 border-accent/80" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            How it works
          </p>

          <h2 className="font-serif text-5xl leading-tight text-white md:text-6xl">
            A clear process.
          </h2>

          <p className="font-serif text-5xl italic text-white/80 md:text-6xl">
            Measurable results
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-[2rem] bg-white px-8 pb-10 pt-16 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Number */}

                <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-main bg-white text-xl font-semibold text-zinc-800">
                  {step.number}
                </div>

                {/* Icon */}

                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] bg-sky-100 transition group-hover:scale-105">
                  <Icon size={46} className="text-main" strokeWidth={1.8} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-zinc-800">
                  {step.title}
                </h3>

                <p className="mt-6 text-base leading-6 text-zinc-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl bg-white/10 p-6 backdrop-blur-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-300 text-white">
              <Check size={24} strokeWidth={3} />
            </div>

            <h3 className="text-center text-lg font-semibold text-white md:text-left">
              One partner, End to end accountability. Better Outcomes
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
