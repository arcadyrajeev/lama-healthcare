"use client";

import { useState } from "react";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import Image from "next/image";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

import { uploadImage } from "@/lib/uploadImage";

import type { BlogFormData } from "@/types/blog";

type BlockEditorProps = {
  mode: "create" | "edit";
  initialData?: BlogFormData;
};

export default function BlockEditor({ mode, initialData }: BlockEditorProps) {
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");

  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? "");

  const [category, setCategory] = useState(initialData?.category ?? "");

  const [seoTitle, setSeoTitle] = useState(initialData?.seoTitle ?? "");

  const [seoDescription, setSeoDescription] = useState(
    initialData?.seoDescription ?? "",
  );

  const [canonicalUrl, setCanonicalUrl] = useState(
    initialData?.canonicalUrl ?? "",
  );

  const [published, setPublished] = useState(initialData?.published ?? false);

  const editor = useCreateBlockNote({
    initialContent: initialData?.content ?? [
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Start writing your blog...",
            styles: {},
          },
        ],
      },
    ],

    uploadFile: async (file) => {
      return await uploadImage(file, "blog-content");
    },

    pasteHandler: ({ event, editor, defaultPasteHandler }) => {
      const markdown =
        event.clipboardData?.getData("text/markdown") ||
        event.clipboardData?.getData("text/plain");

      if (!markdown?.trim()) {
        return defaultPasteHandler();
      }

      const normalizedMarkdown = markdown.replace(
        /([^\n])\n(-\s)/g,
        "$1\n\n$2",
      );

      (async () => {
        try {
          const blocks =
            await editor.tryParseMarkdownToBlocks(normalizedMarkdown);

          editor.insertBlocks(
            blocks,
            editor.getTextCursorPosition().block,
            "after",
          );
        } catch {
          defaultPasteHandler();
        }
      })();

      return true;
    },
  });

  async function handleCoverUpload(file: File) {
    try {
      setUploading(true);

      const url = await uploadImage(file, "blog-covers");

      setCoverImage(url);
    } finally {
      setUploading(false);
    }
  }

  async function handleSave() {
    setSaving(true);

    try {
      const payload = {
        title,
        slug,
        excerpt,
        coverImage,
        category,
        seoTitle,
        seoDescription,
        canonicalUrl,
        published,
        content: editor.document,
      };

      const endpoint =
        mode === "create"
          ? "/api/admin/blogs"
          : `/api/admin/blogs/${initialData?.id}`;

      const method = mode === "create" ? "POST" : "PATCH";

      const res = await fetch(endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      alert(
        mode === "create"
          ? "Blog created successfully!"
          : "Blog updated successfully!",
      );
    } catch (error) {
      console.error(error);

      alert(error instanceof Error ? error.message : "Failed to save blog.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="border-b">
        {coverImage ? (
          <div className="relative h-[420px]">
            <Image src={coverImage} alt="Cover" fill className="object-cover" />

            <button
              onClick={() => setCoverImage("")}
              className="absolute top-5 right-5 rounded-lg bg-black/70 px-4 py-2 text-white"
            >
              Remove
            </button>
          </div>
        ) : (
          <label className="flex h-72 cursor-pointer flex-col items-center justify-center gap-3 bg-stone-100">
            <p className="text-lg font-medium">Upload Cover Image</p>

            <p className="text-sm text-stone-500">Recommended 1600 × 900</p>

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) {
                  handleCoverUpload(file);
                }
              }}
            />
          </label>
        )}
      </div>

      <div className="space-y-6 border-b p-8">
        <div>
          <label className="mb-2 block text-sm font-medium">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog title"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-stone-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Slug</label>
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="blog-slug"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-stone-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Health"
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-stone-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Excerpt</label>
          <textarea
            rows={4}
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Short summary..."
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-stone-900"
          />
        </div>
      </div>

      <div className="p-8">
        <BlockNoteView editor={editor} theme="light" />
      </div>

      <div className="space-y-6 border-t p-8">
        <h2 className="text-lg font-semibold">SEO</h2>

        <div>
          <label className="mb-2 block text-sm font-medium">SEO Title</label>
          <input
            value={seoTitle}
            onChange={(e) => setSeoTitle(e.target.value)}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            SEO Description
          </label>

          <textarea
            rows={4}
            value={seoDescription}
            onChange={(e) => setSeoDescription(e.target.value)}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Canonical URL
          </label>

          <input
            value={canonicalUrl}
            onChange={(e) => setCanonicalUrl(e.target.value)}
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />

          <span>Published</span>
        </label>
      </div>

      {(uploading || saving) && (
        <div className="border-t p-4 text-sm text-stone-500">
          {uploading ? "Uploading image..." : "Saving..."}
        </div>
      )}

      <div className="flex justify-end border-t p-6">
        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded-lg bg-stone-900 px-6 py-3 text-white disabled:opacity-50"
        >
          {saving
            ? mode === "create"
              ? "Creating..."
              : "Updating..."
            : mode === "create"
              ? "Create Blog"
              : "Update Blog"}
        </button>
      </div>
    </div>
  );
}
