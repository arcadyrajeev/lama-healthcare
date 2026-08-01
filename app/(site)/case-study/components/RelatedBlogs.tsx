"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { RelatedBlog } from "@/types/case-study";

interface RelatedBlogsProps {
  blogs: RelatedBlog[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-28">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-olive-100/30 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-teal-100/30 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-olive-600">
              Continue Reading
            </span>

            <h2 className="mt-5 font-serif text-4xl text-olive-950 md:text-5xl">
              More real healthcare stories.
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Explore more real-world examples of how operational challenges
              become opportunities for stronger systems, better compliance, and
              healthier medical practices.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-3 font-medium text-olive-700 transition hover:text-olive-900"
          >
            View All Case Studies
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/case-studies/${blog.slug}`}
              className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}

              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                {blog.image ? (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-neutral-100">
                    <span className="text-sm text-neutral-400">
                      Case Study Cover
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}

              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-olive-600">
                  Case Study
                </span>

                <h3 className="mt-4 font-serif text-2xl leading-snug text-olive-950 transition group-hover:text-olive-700">
                  {blog.title}
                </h3>

                <div className="mt-8 inline-flex items-center gap-2 font-medium text-olive-700">
                  Read Case Study
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
