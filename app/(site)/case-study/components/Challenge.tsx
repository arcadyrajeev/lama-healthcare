"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { ContentSection } from "@/types/case-study";

interface ChallengeProps {
  challenge: ContentSection;
}

export default function Challenge({ challenge }: ChallengeProps) {
  return (
    <section className="relative overflow-hidden bg-olive-950 py-20 text-white sm:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full border border-white/10" />

        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full border border-white/10" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-olive-700/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-400 sm:text-sm">
              {challenge.eyebrow}
            </span>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {challenge.title}
            </h2>

            {challenge.subtitle && (
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/75 md:text-xl md:leading-9">
                {challenge.subtitle}
              </p>
            )}

            <div className="mt-10 space-y-6 md:mt-12 md:space-y-8">
              {challenge.description.map((paragraph, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-5">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-teal-400"
                  />

                  <p className="leading-8 text-white/80">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            {challenge.image ? (
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:rounded-[36px]">
                <Image
                  src={challenge.image}
                  alt={challenge.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw,
                         (max-width: 1024px) 80vw,
                         45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                {/* Soft Border Glow */}
                <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/10 sm:rounded-[36px]" />
              </div>
            ) : (
              <div className="flex aspect-[4/5] items-center justify-center rounded-[28px] border border-dashed border-white/20 bg-white/5 sm:rounded-[36px]">
                <div className="text-center">
                  <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-white/10" />

                  <p className="text-sm text-white/40">Challenge Image</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
