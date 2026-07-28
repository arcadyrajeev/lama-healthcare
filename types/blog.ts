import type { PartialBlock } from "@blocknote/core";

export interface BlogCard {
  id: string;

  slug: string;

  title: string;

  excerpt: string;

  image: string;

  category: string;

  publishedAt: string;

  readTime: string;

  author: string;
}

// types/blog.ts

export interface BlogFormData {
  id: string;

  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImage: string;

  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;

  published: boolean;

  content: PartialBlock[];
}
