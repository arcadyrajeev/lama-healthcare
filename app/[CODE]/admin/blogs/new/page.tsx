"use client";

import dynamic from "next/dynamic";

const BlockEditor = dynamic(() => import("@/app/components/BlockEditor"), {
  ssr: false,
});

export default function NewBlogPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-10 lg:py-[10rem]">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-8 text-3xl font-bold text-stone-900">Create Blog</h1>

        <BlockEditor mode="create" />
      </div>
    </main>
  );
}
