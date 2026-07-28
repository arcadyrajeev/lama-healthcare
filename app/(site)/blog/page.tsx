// app/blog/page.tsx

import LargeCard from "@/app/components/LargeCard";
import BlogCard from "@/app/components/BlogCard";
import { getBlogs } from "@/lib/blogs";

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs.length) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-32">
        <div className="rounded-3xl border border-stone-200 bg-white p-16 text-center">
          <h1 className="text-3xl font-bold text-stone-900">No articles yet</h1>

          <p className="mt-4 text-stone-600">
            Check back soon for new healthcare resources and expert insights.
          </p>
        </div>
      </main>
    );
  }

  const [featured, ...rest] = blogs;

  return (
    <main className="bg-[#FAFAF8]">
      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <span className="inline-flex rounded-full bg-[#476B6B]/10 px-4 py-2 text-sm font-medium text-[#476B6B]">
            Resources
          </span>

          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-stone-900 lg:text-6xl">
            Insights for Better Healthcare Decisions
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Explore expert articles, practical healthcare guides, wellness
            advice, and the latest medical insights curated by the Lama
            Healthcare team.
          </p>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="mx-auto max-w-7xl px-6 pt-14 lg:px-8 lg:pt-20">
        <LargeCard blog={featured} />
      </section>

      {/* All Blogs */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#476B6B]">
              Latest Articles
            </p>

            <h2 className="mt-3 text-3xl font-bold text-stone-900 lg:text-4xl">
              Explore More Resources
            </h2>
          </div>

          <p className="hidden text-sm text-stone-500 md:block">
            {rest.length} Articles
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((blog) => (
            <BlogCard key={blog.id} data={blog} />
          ))}
        </div>
      </section>
    </main>
  );
}
