import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";
import type { PartialBlock } from "@blocknote/core";

const BlockEditor = dynamic(() => import("@/app/components/BlockEditor"), {
  ssr: false,
});

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditBlogPage({ params }: PageProps) {
  const { id } = await params;

  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
  });

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-8 text-3xl font-bold text-stone-900">Edit Blog</h1>

        <BlockEditor
          mode="edit"
          initialData={{
            id: blog.id,
            title: blog.title,
            slug: blog.slug,
            excerpt: blog.excerpt ?? "",
            coverImage: blog.coverImage ?? "",
            category: blog.category ?? "",
            seoTitle: blog.seoTitle ?? "",
            seoDescription: blog.seoDescription ?? "",
            canonicalUrl: blog.canonicalUrl ?? "",
            published: blog.published,
            content: blog.content as PartialBlock[],
          }}
        />
      </div>
    </main>
  );
}
