"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ServiceProblem as ServiceProblemData } from "@/types/service";

interface ServiceProblemProps {
  data: ServiceProblemData;
}

export default function ServiceProblem({ data }: ServiceProblemProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Decorative Shapes */}
      <div className="absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#3F6677]" />

      <div className="absolute -right-10 top-1/2 h-28 w-28 rounded-full bg-[#C89A5A]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-[#F7F7F5]">
          <div className="grid items-center lg:grid-cols-2">
            {/* Image */}
            <div className="relative order-2 h-[320px] lg:order-1 lg:h-[500px]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative order-1 px-8 py-12 lg:order-2 lg:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C89A5A]">
                {data.eyebrow}
              </p>

              <h2 className="mt-5 text-4xl leading-tight text-[#2E2E2E] lg:text-5xl">
                <span className="font-serif">{data.title}</span>

                {data.highlight && (
                  <>
                    <br />

                    <span className="font-serif italic text-[#456B7C]">
                      {data.highlight}
                    </span>
                  </>
                )}
              </h2>

              <div className="mt-8 h-[2px] w-20 bg-[#C89A5A]" />

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
                {data.description}
              </p>

              <Link
                href={data.ctaLink ?? "/contact"}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#456B7C] px-7 py-4 text-white transition hover:bg-[#355564]"
              >
                {data.ctaText ?? "Get Your Audit"}

                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
