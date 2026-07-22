"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ServiceHero as ServiceHeroData } from "@/types/service";

interface ServiceHeroProps {
  data: ServiceHeroData;
}

export default function ServiceHero({ data }: ServiceHeroProps) {
  return (
    <section className="py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[32px] bg-[#F5F5F3]">
          <div className="grid items-center lg:grid-cols-2">
            {/* Left */}
            <div className="px-8 py-12 lg:px-14 lg:py-16">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
                {data.eyebrow}
              </p>

              <h1 className="text-4xl font-serif leading-tight text-[#2F2F2F] md:text-5xl lg:text-6xl">
                {data.title}

                {data.highlight && (
                  <>
                    <br />

                    <span className="italic text-[#42697C]">
                      {data.highlight}
                    </span>
                  </>
                )}
              </h1>

              <div className="mt-8 h-[2px] w-24 bg-[#C6944A]" />

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#666666]">
                {data.description}
              </p>

              <Link
                href={data.ctaLink}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#C6944A] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#b58542]"
              >
                {data.ctaText}

                <ArrowUpRight size={20} />
              </Link>

              <p className="mt-4 text-sm text-gray-500">
                No obligation. No long-term contracts.
              </p>
            </div>

            {/* Right */}
            <div className="relative h-[350px] md:h-[500px] lg:h-[620px]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
