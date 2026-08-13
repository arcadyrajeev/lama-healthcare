"use client";

import { X } from "lucide-react";
import GetAuditForm from "./GetAuditForm";

interface AuditFormModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuditFormModal({ open, onClose }: AuditFormModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden bg-black/60 p-4 sm:p-6"
      onWheel={(e) => e.stopPropagation()}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative bg-white flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px]">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close audit form"
            className="absolute right-4 top-4 z-50 flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-100"
          >
            <X size={20} />
          </button>

          {/* ONLY THIS AREA SCROLLS */}
          <div className="max-h-[92vh] overflow-y-auto overscroll-contain">
            <GetAuditForm />
          </div>
        </div>
      </div>
    </div>
  );
}
