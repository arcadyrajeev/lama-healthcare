"use client";

import { ChevronDown, Mail, MessageSquare, Phone, User } from "lucide-react";

const topics = [
  "Medical Billing & Revenue Cycle",
  "Credentialing & Enrollment",
  "HIPAA & Compliance",
  "Reporting & Analytics",
  "Practice Operations",
  "Practice Management",
  "New Practice Launch",
  "Revenue Recovery",
  "General Questions",
];

interface ContactFormProps {
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
}

export default function ContactForm({
  selectedTopic,
  onTopicChange,
}: ContactFormProps) {
  return (
    <section className="py-2">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
            Contact Us
          </p>

          <h2 className="mt-2 font-serif text-xl leading-tight text-[#2F2F2F]">
            What can we help you with?
          </h2>

          <p className="mt-3 text-xs leading-6 text-gray-600">
            Select a topic and our team will get back to you within one business
            day.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Topic */}
          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
              Select Topic
            </label>

            <div className="relative">
              <select
                value={selectedTopic}
                onChange={(e) => onTopicChange(e.target.value)}
                className="h-12 w-full appearance-none cursor-pointer font-semibold rounded-xl border border-gray-200 bg-white px-4 pr-12 text-sm text-[#2F2F2F] outline-none transition focus:border-[#456B7C]"
              >
                {topics.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
              />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
              Full Name
            </label>

            <div className="relative">
              <User
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
              />

              <input
                type="text"
                placeholder="John Smith"
                className="h-12 w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#456B7C]"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                />

                <input
                  type="email"
                  placeholder="john@email.com"
                  className="h-12 w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#456B7C]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                />

                <input
                  type="tel"
                  placeholder="(702) XXX XXXX"
                  className="h-12 w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#456B7C]"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
              Tell us about your practice
            </label>

            <div className="relative">
              <MessageSquare
                size={16}
                className="absolute left-4 top-4 text-[#456B7C]"
              />

              <textarea
                rows={4}
                placeholder="Briefly describe how we can help..."
                className="w-full resize-none rounded-xl border border-gray-200 py-4 pl-11 pr-4 text-sm leading-6 outline-none transition focus:border-[#456B7C]"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#456B7C] px-7 text-sm font-medium text-white transition hover:bg-[#355564]"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
