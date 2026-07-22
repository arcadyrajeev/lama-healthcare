"use client";

import BlogCard from "@/app/components/BlogCard";

import type { RelatedBlogs as RelatedBlogsData } from "@/types/service";

interface RelatedBlogsProps {
  data: RelatedBlogsData;
}

export default function RelatedBlogs({ data }: RelatedBlogsProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute -left-24 top-16 h-52 w-52 rounded-full bg-[#456B7C]" />

      <div className="absolute -right-12 bottom-10 h-24 w-24 rounded-full bg-[#C6944A]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
            {data.eyebrow}
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#2F2F2F] md:text-5xl">
            {data.title}
          </h2>

          <div className="mx-auto mt-8 h-[2px] w-24 bg-[#C6944A]" />

          {data.description && (
            <p className="mt-8 text-lg leading-8 text-gray-600">
              {data.description}
            </p>
          )}
        </div>

        {/* Blog Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {data.blogs.map((blog) => (
            <BlogCard key={blog.slug} data={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
