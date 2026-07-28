"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import type { BlogCard as BlogCardData } from "@/types/blog";

type BlogCardProps = {
  data: BlogCardData;
};

export default function BlogCard({ data }: BlogCardProps) {
  return (
    <Link href={`/blog/${data.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#476B6B]/20 hover:shadow-xl">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Fade into card */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
        </div>

        {/* Content */}
        <div className="relative -mt-8 flex flex-1 flex-col px-6 pb-6">
          <div className="rounded-2xl bg-white p-6">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-stone-500">
              <span className="rounded-full bg-[#476B6B]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#476B6B]">
                {data.category}
              </span>

              <span className="flex items-center gap-1">
                <Calendar size={14} />

                {new Date(data.publishedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>

              <span className="flex items-center gap-1">
                <Clock size={14} />
                {data.readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-5 line-clamp-2 text-xl font-semibold leading-snug text-stone-900 transition-colors duration-300 group-hover:text-[#476B6B] lg:text-2xl">
              {data.title}
            </h3>

            {/* Excerpt */}
            <p className="mt-4 line-clamp-3 flex-1 leading-7 text-stone-600">
              {data.excerpt}
            </p>

            {/* Footer */}
            <div className="mt-8 flex items-center justify-between border-t border-stone-100 pt-5">
              <span className="text-sm text-stone-500">
                By{" "}
                <span className="font-medium text-stone-900">
                  {data.author}
                </span>
              </span>

              <span className="inline-flex items-center gap-2 font-medium text-[#476B6B] transition-all duration-300 group-hover:gap-3">
                Read
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
