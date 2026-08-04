"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock3, MapPin, Tag } from "lucide-react";

import { HeroSection } from "@/types/case-study";

interface HeroProps {
  hero: HeroSection;
}

export default function Hero({ hero }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Decoration */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-48 h-[420px] w-[420px] rounded-full border border-olive-200" />

        <div className="absolute -top-28 -right-28 h-[280px] w-[280px] rounded-full border border-olive-200/60" />

        <div className="absolute top-40 -left-32 h-64 w-64 rounded-full bg-olive-100/30 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6 pt-32 pb-20">
        {/* Back */}

        <Link
          href="/case-study"
          className="mb-10 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-olive-700"
        >
          <ArrowLeft size={16} />
          Back to Case Studies
        </Link>

        {/* Heading */}

        <div className="max-w-4xl">
          <span className="inline-flex rounded-full bg-olive-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-olive-700">
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-serif text-5xl font-medium leading-tight text-olive-950 md:text-7xl">
            {hero.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl">
            {hero.subtitle}
          </p>
        </div>

        {/* Meta */}

        <div className="mt-12 flex flex-wrap gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Tag className="text-olive-700" size={20} />

            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Category
              </p>

              <p className="font-medium text-neutral-900">{hero.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock3 className="text-olive-700" size={20} />

            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Reading Time
              </p>

              <p className="font-medium text-neutral-900">{hero.readTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-olive-700" size={20} />

            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Location
              </p>

              <p className="font-medium text-neutral-900">{hero.location}</p>
            </div>
          </div>
        </div>

        {/* Tags */}

        <div className="mt-8 flex flex-wrap gap-3">
          {hero.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-olive-200 bg-olive-50 px-4 py-2 text-sm font-medium text-olive-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hero Image */}

        <div className="mt-16 overflow-hidden rounded-[36px] border border-neutral-200 bg-neutral-100 shadow-xl">
          {hero.heroImage ? (
            <div className="relative aspect-[16/9]">
              <Image
                src={hero.heroImage}
                alt={hero.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="flex aspect-[16/9] items-center justify-center bg-neutral-100">
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-neutral-200" />

                <p className="text-sm text-neutral-400">
                  Case Study Cover Image
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
