"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Pencil, Plus, LogOut, Trash2 } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  category: string | null;
  published: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

interface AdminDashboardProps {
  blogs: Blog[];
  adminCode: string;
}

export default function AdminDashboard({
  blogs,
  adminCode,
}: AdminDashboardProps) {
  const router = useRouter();

  async function logout() {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });

      router.refresh();
      router.push("./login");
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteBlog(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog? This action cannot be undone.",
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/admin/blogs/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete blog");
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete blog.");
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-10 py-[10rem]">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold">Blog CMS</h1>

          <p className="mt-2 text-stone-500">Manage all your blog posts.</p>
        </div>

        <div className="flex gap-3">
          <Link
            href="./admin/blogs/new"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-stone-900 px-5 py-3 text-white transition hover:bg-black"
          >
            <Plus size={18} />
            New Blog
          </Link>

          <button
            onClick={logout}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border px-5 py-3 transition hover:bg-stone-100"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white">
        <table className="w-full table-fixed">
          <thead className="bg-stone-100">
            <tr>
              <th className="w-[45%] p-4 text-left">Title</th>
              <th className="w-[10%] p-4 text-left">Category</th>
              <th className="w-[10%] p-4 text-left">Status</th>
              <th className="w-[10%] p-4 text-left">Updated</th>
              <th className="w-[20%] p-4"></th>
            </tr>
          </thead>

          <tbody>
            {blogs.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-10 text-center text-stone-500">
                  No blogs have been created yet.
                </td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr
                  key={blog.id}
                  className="border-t transition hover:bg-stone-50"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-24 overflow-hidden rounded-lg border bg-stone-100 shrink-0">
                        {blog.coverImage ? (
                          <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs text-stone-400">
                            No Image
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="truncate font-semibold">
                          {blog.title}
                        </div>

                        <div className="mt-1 truncate text-sm text-stone-500">
                          {blog.slug}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">{blog.category || "-"}</td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        blog.published
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {blog.published ? "Published" : "Draft"}
                    </span>
                  </td>

                  <td className="p-4 text-sm text-stone-500">
                    {new Date(blog.updatedAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/${adminCode}/admin/blogs/${blog.id}`}
                        className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 transition hover:bg-stone-100"
                      >
                        <Pencil size={16} />
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteBlog(blog.id)}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-red-300 px-4 py-2 text-red-600 transition hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                        <span className="hidden xl:inline">Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
