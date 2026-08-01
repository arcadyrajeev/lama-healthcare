"use client";

import { TimelineItem } from "@/types/case-study";

interface TimelineProps {
  timeline: TimelineItem[];
}

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-28">
      {/* Background Decoration */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-olive-100/40 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-olive-600">
            Timeline
          </span>

          <h2 className="mt-5 font-serif text-4xl text-olive-950 md:text-5xl">
            How the situation unfolded.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Every major outcome is the result of a sequence of operational
            decisions. Understanding where things changed is the first step
            toward preventing it from happening again.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Center Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-300 lg:block" />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const left = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className="relative grid items-center lg:grid-cols-2"
                >
                  {/* Left */}

                  <div
                    className={`${left ? "lg:pr-16" : "lg:order-2 lg:pl-16"}`}
                  >
                    <div className="rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                      <span className="text-sm font-semibold uppercase tracking-widest text-olive-600">
                        Step {item.step}
                      </span>

                      <h3 className="mt-4 font-serif text-3xl text-olive-950">
                        {item.title}
                      </h3>

                      <p className="mt-5 leading-8 text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}

                  <div className="absolute left-1/2 top-12 hidden -translate-x-1/2 lg:flex">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-olive-700 text-lg font-bold text-white shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  {/* Mobile Number */}

                  <div className="mb-4 flex lg:hidden">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-700 text-sm font-semibold text-white">
                      {item.step}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
