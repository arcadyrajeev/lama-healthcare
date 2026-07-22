"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

import type { BlogCard as BlogCardData } from "@/types/blog";

interface BlogCardProps {
  data: BlogCardData;
}

export default function BlogCard({ data }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#C6944A] hover:shadow-2xl">
      {/* Image */}
      <Link
        href={`/resources/${data.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-7 lg:p-8">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span className="font-semibold uppercase tracking-[0.18em] text-[#456B7C]">
            {data.category}
          </span>

          <span>•</span>

          <span>{data.publishedAt}</span>

          <span>•</span>

          <span className="inline-flex items-center gap-1">
            <Clock3 size={15} />
            {data.readTime}
          </span>
        </div>

        {/* Title */}
        <Link href={`/resources/${data.slug}`}>
          <h3 className="mt-6 font-serif text-2xl leading-tight text-[#2F2F2F] transition-colors duration-300 group-hover:text-[#456B7C] lg:text-[30px]">
            {data.title}
          </h3>
        </Link>

        {/* Divider */}
        <div className="mt-6 h-[2px] w-16 bg-[#C6944A]" />

        {/* Excerpt */}
        <p className="mt-6 flex-1 text-[17px] leading-8 text-gray-600">
          {data.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Written By
            </p>

            <p className="mt-1 font-medium text-[#2F2F2F]">{data.author}</p>
          </div>

          <Link
            href={`/resources/${data.slug}`}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#456B7C] text-white transition-all duration-300 hover:bg-[#355564]"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}
