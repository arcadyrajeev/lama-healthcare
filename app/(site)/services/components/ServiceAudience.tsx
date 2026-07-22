"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import type { ServiceAudience as ServiceAudienceData } from "@/types/service";

interface ServiceAudienceProps {
  data: ServiceAudienceData;
}

export default function ServiceAudience({ data }: ServiceAudienceProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute -left-24 top-20 h-48 w-48 rounded-full bg-[#456B7C]" />

      <div className="absolute -right-10 bottom-20 h-24 w-24 rounded-full bg-[#C6944A]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-[#EDF5F7]" />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
              {data.eyebrow}
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#2F2F2F] md:text-5xl">
              {data.title}
            </h2>

            <div className="mt-8 h-[2px] w-24 bg-[#C6944A]" />

            {data.description && (
              <p className="mt-8 text-lg leading-8 text-gray-600">
                {data.description}
              </p>
            )}

            <div className="mt-10 space-y-6">
              {data.audiences.map((audience, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#C6944A] hover:shadow-lg"
                >
                  <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#456B7C] text-white">
                    <CheckCircle2 size={20} />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-[#2F2F2F]">
                      {audience.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {audience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
