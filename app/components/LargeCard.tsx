"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

import type { BlogCard } from "@/types/blog";

type LargeCardProps = {
  blog: BlogCard;
};

export default function LargeCard({ blog }: LargeCardProps) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group block overflow-hidden rounded-3xl border border-stone-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/8] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Fade into white */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-white/30 to-white" />
      </div>

      {/* Content */}
      <div className="relative -mt-28 px-6 pb-8 md:px-10 md:pb-10">
        <div className="max-w-4xl rounded-3xl bg-white/90 p-6 backdrop-blur-md md:p-8">
          {/* Meta */}
          <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="rounded-full bg-[#476B6B]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#476B6B]">
              {blog.category}
            </span>

            <span className="flex items-center gap-2 text-sm text-stone-500">
              <Calendar size={15} />
              {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>

            <span className="flex items-center gap-2 text-sm text-stone-500">
              <Clock size={15} />
              {blog.readTime}
            </span>

            <span className="flex items-center gap-2 text-sm text-stone-500">
              <User size={15} />
              {blog.author}
            </span>
          </div>

          {/* Title */}
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-stone-900 transition-colors duration-300 group-hover:text-[#476B6B] md:text-5xl">
            {blog.title}
          </h2>

          {/* Excerpt */}
          <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 md:text-lg">
            {blog.excerpt}
          </p>

          {/* CTA */}
          <div className="mt-8 inline-flex items-center gap-2 font-medium text-[#476B6B] transition-all duration-300 group-hover:gap-3">
            Read Article
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
