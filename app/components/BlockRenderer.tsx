"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

import type { PartialBlock } from "@blocknote/core";

interface BlockRendererProps {
  blocks: PartialBlock[];
}

export default function BlockRenderer({ blocks }: BlockRendererProps) {
  const editor = useCreateBlockNote({
    initialContent: blocks,
  });

  return (
    <div
      className="
        article-content

        [&_.bn-container]:!max-w-none
        [&_.bn-container]:!bg-transparent

        [&_.bn-editor]:!bg-transparent
        [&_.bn-editor]:!px-0
        [&_.bn-editor]:!text-[18px]
        [&_.bn-editor]:!leading-9
        [&_.bn-editor]:!text-stone-700

        [&_.bn-block-content]:!max-w-none

        [&_h1]:mt-16
        [&_h1]:mb-8
        [&_h1]:text-5xl
        [&_h1]:font-bold
        [&_h1]:text-stone-900

        [&_h2]:mt-14
        [&_h2]:mb-6
        [&_h2]:text-4xl
        [&_h2]:font-bold
        [&_h2]:text-stone-900

        [&_h3]:mt-12
        [&_h3]:mb-5
        [&_h3]:text-3xl
        [&_h3]:font-semibold
        [&_h3]:text-stone-900

        [&_p]:my-6
        [&_p]:leading-9
        [&_p]:text-stone-700

        [&_ul]:my-8
        [&_ol]:my-8

        [&_li]:my-2

        [&_blockquote]:my-10
        [&_blockquote]:rounded-2xl
        [&_blockquote]:border-l-4
        [&_blockquote]:border-[#476B6B]
        [&_blockquote]:bg-[#476B6B]/5
        [&_blockquote]:px-8
        [&_blockquote]:py-6
        [&_blockquote]:italic

        [&_img]:my-10
        [&_img]:rounded-3xl

        [&_hr]:my-12

        [&_table]:my-10
        [&_table]:w-full
        [&_table]:border-collapse

        [&_td]:border
        [&_td]:border-stone-200
        [&_td]:p-4

        [&_th]:border
        [&_th]:border-stone-200
        [&_th]:bg-stone-100
        [&_th]:p-4

        [&_a]:text-[#476B6B]
        [&_a]:underline-offset-4
        [&_a:hover]:underline

        [&_pre]:my-10
        [&_pre]:overflow-x-auto
        [&_pre]:rounded-2xl
      "
    >
      <BlockNoteView editor={editor} editable={false} theme="light" />
    </div>
  );
}
