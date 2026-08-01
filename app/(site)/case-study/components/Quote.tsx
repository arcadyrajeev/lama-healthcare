"use client";

import { QuoteSection } from "@/types/case-study";

interface QuoteProps {
  quote: QuoteSection;
}

export default function Quote({ quote }: QuoteProps) {
  return (
    <section className="relative overflow-hidden bg-olive-950 py-32 text-white">
      {/* Decorative Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      </div>

      <div className="container relative mx-auto max-w-5xl px-6">
        {/* Quote Mark */}

        <div className="text-center">
          <div className="font-serif text-8xl leading-none text-teal-400/30 md:text-9xl">
            &quot;
          </div>

          {/* Quote */}

          <blockquote className="-mt-10">
            <p className="mx-auto max-w-4xl font-serif text-3xl leading-tight text-white md:text-5xl md:leading-[1.25]">
              {quote.text}
            </p>
          </blockquote>

          {/* Divider */}

          <div className="mx-auto mt-16 h-px w-24 bg-teal-400/40" />

          {/* Author */}

          {quote.author && (
            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-400">
                {quote.author}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
