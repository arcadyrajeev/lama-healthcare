"use client";

import { X } from "lucide-react";
import ContactForm from "./ContactForm";

interface Props {
  open: boolean;
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
  onClose: () => void;
}

export default function ContactFormModal({
  open,
  selectedTopic,
  onTopicChange,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-6">
      <div className="relative max-h-[90vh] w-full max-w-4xl ">
        <button
          onClick={onClose}
          className="absolute right-0 top-0 z-20 cursor-pointer flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100"
        >
          <X size={20} />
        </button>

        <ContactForm
          selectedTopic={selectedTopic}
          onTopicChange={onTopicChange}
        />
      </div>
    </div>
  );
}
