// lib/blogs.ts

import { prisma } from "@/lib/prisma";
import type { BlogCard } from "@/types/blog";

export async function getBlogs(): Promise<BlogCard[]> {
  const blogs = await prisma.blog.findMany({
    where: {
      published: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
  });

  return blogs.map((blog) => ({
    id: blog.id,
    slug: blog.slug,
    title: blog.title,
    excerpt: blog.excerpt ?? "",
    image: blog.coverImage ?? "/images/blog-placeholder.jpg",
    category: blog.category ?? "Healthcare",
    publishedAt:
      blog.publishedAt?.toISOString() ?? blog.createdAt.toISOString(),
    readTime: `${Math.max(
      1,
      Math.ceil(JSON.stringify(blog.content).length / 5000),
    )} min read`,
    author: "Lama Healthcare",
  }));
}
