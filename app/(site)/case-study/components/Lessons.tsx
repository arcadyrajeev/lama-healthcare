"use client";

import { CheckCircle2 } from "lucide-react";

import { LessonsSection } from "@/types/case-study";

interface LessonsProps {
  lessons: LessonsSection;
}

export default function Lessons({ lessons }: LessonsProps) {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Decoration */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-olive-100/40 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}

          <div className="sticky top-32 self-start">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-olive-600">
              {lessons.eyebrow}
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-olive-950 md:text-5xl">
              {lessons.title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Every case study reveals more than a single operational issue. It
              highlights principles that every independent practice can use to
              reduce risk, improve efficiency, and build stronger systems.
            </p>

            <div className="mt-12 rounded-[28px] border border-olive-100 bg-olive-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive-700">
                Key Takeaway
              </p>

              <p className="mt-5 leading-8 text-neutral-700">
                Sustainable improvement comes from building reliable systems,
                not reacting to isolated problems. The strongest practices are
                proactive long before issues become visible.
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="grid gap-6">
            {lessons.items.map((lesson, index) => (
              <article
                key={lesson}
                className="group rounded-[28px] border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-olive-200 hover:shadow-xl"
              >
                <div className="flex items-start gap-6">
                  {/* Number */}

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-olive-700 font-serif text-lg text-white">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-olive-600" />

                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        Lesson
                      </span>
                    </div>

                    <p className="mt-4 text-lg leading-8 text-neutral-700">
                      {lesson}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
