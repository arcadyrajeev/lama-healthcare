import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";

import { prisma } from "@/lib/prisma";
import { PartialBlock } from "@blocknote/core";
import BlockRenderer from "@/app/components/BlockRenderer";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: {
      slug,
      published: true,
    },
  });

  if (!blog) {
    notFound();
  }

  return (
    <main className="bg-[#FAFAF8]">
      {/* spacing for fixed navbar */}
      <div className="h-28 lg:h-32" />

      {/* Header */}
      <section className="mx-auto max-w-4xl px-6">
        <span className="inline-flex rounded-full bg-[#476B6B]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#476B6B]">
          {blog.category}
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
          {blog.title}
        </h1>

        {blog.excerpt && (
          <p className="mt-6 text-xl leading-9 text-stone-600">
            {blog.excerpt}
          </p>
        )}

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-b border-stone-200 py-6 text-sm text-stone-500">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span className="font-medium text-stone-800">Lama Healthcare</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            {blog.publishedAt?.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            {Math.max(
              1,
              Math.ceil(JSON.stringify(blog.content).length / 5000),
            )}{" "}
            min read
          </div>
        </div>
      </section>

      {/* Cover */}
      {blog.coverImage && (
        <section className="mx-auto mt-14 max-w-6xl px-6">
          <div className="overflow-hidden rounded-[32px]">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              width={1600}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </section>
      )}

      {/* Article */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <BlockRenderer blocks={blog.content as PartialBlock[]} />
      </section>

      {/* Author */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-3xl border border-stone-200 bg-white p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Written By
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-stone-900">
            Lama Healthcare
          </h3>

          <p className="mt-4 leading-8 text-stone-600">
            Delivering trusted healthcare insights, wellness guidance, and
            evidence-based medical information to help you make informed
            decisions for yourself and your family.
          </p>
        </div>
      </section>
    </main>
  );
}
