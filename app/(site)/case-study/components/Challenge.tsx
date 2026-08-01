"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { ContentSection } from "@/types/case-study";

interface ChallengeProps {
  challenge: ContentSection;
  image?: string;
}

export default function Challenge({ challenge, image }: ChallengeProps) {
  return (
    <section className="relative overflow-hidden bg-olive-950 py-28 text-white">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full border border-white/10" />

        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full border border-white/10" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-olive-700/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
              {challenge.eyebrow}
            </span>

            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
              {challenge.title}
            </h2>

            {challenge.subtitle && (
              <p className="mt-8 text-xl leading-9 text-white/75">
                {challenge.subtitle}
              </p>
            )}

            <div className="mt-12 space-y-8">
              {challenge.description.map((paragraph, index) => (
                <div key={index} className="flex items-start gap-5">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-teal-400"
                  />

                  <p className="leading-8 text-white/80">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div>
            {image ? (
              <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-white/10 shadow-2xl">
                <Image
                  src={image}
                  alt={challenge.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/5] items-center justify-center rounded-[36px] border border-dashed border-white/20 bg-white/5">
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
