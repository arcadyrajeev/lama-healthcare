"use client";

import { SearchCheck, FileCheck2, RefreshCcw, ShieldCheck } from "lucide-react";

import { SolutionSection } from "@/types/case-study";

interface SolutionProps {
  solution: SolutionSection;
}

const icons = [SearchCheck, FileCheck2, RefreshCcw, ShieldCheck];

export default function Solution({ solution }: SolutionProps) {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-olive-100/40 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-teal-100/30 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-olive-600">
            {solution.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-olive-950 md:text-5xl">
            {solution.title}
          </h2>

          {solution.subtitle && (
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              {solution.subtitle}
            </p>
          )}
        </div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Vertical Line */}

          <div className="absolute left-7 top-0 hidden h-full w-px bg-neutral-200 lg:block" />

          <div className="space-y-16">
            {solution.steps.map((step, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col gap-8 lg:flex-row lg:gap-12"
                >
                  {/* Left */}

                  <div className="flex items-start gap-6 lg:w-64">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-olive-700 text-white shadow-lg">
                      <Icon size={24} />
                    </div>

                    <span className="pt-3 text-sm font-semibold tracking-[0.3em] text-olive-600">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Right */}

                  <div className="flex-1 rounded-[30px] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <h3 className="font-serif text-3xl text-olive-950">
                      {step.title}
                    </h3>

                    <p className="mt-5 leading-8 text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Summary */}

        <div className="mt-24 rounded-[36px] bg-olive-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive-600">
                Our Approach
              </p>

              <h3 className="mt-4 font-serif text-3xl text-olive-950">
                Fix the system.
                <br />
                The results follow naturally.
              </h3>

              <p className="mt-6 max-w-3xl leading-8 text-neutral-600">
                Instead of treating isolated symptoms, we examine the entire
                operational workflow, identify the underlying failure point,
                implement sustainable corrections, and introduce verification
                steps that prevent the issue from recurring.
              </p>
            </div>

            <div className="rounded-3xl border border-olive-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-olive-600">
                Framework
              </p>

              <ul className="mt-6 space-y-5">
                {["Audit", "Identify", "Correct", "Validate"].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-neutral-700"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-olive-600" />

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
