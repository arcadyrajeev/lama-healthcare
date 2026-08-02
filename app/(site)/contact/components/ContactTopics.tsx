"use client";

import {
  ShieldCheck,
  BadgeDollarSign,
  FileCheck2,
  BarChart3,
  Settings2,
  Building2,
  Rocket,
  CircleHelp,
} from "lucide-react";
import ContactFormModal from "./ContactFormModal";

import { useState } from "react";

const topics = [
  {
    title: "Medical Billing & Revenue Cycle",
    icon: BadgeDollarSign,
    active: true,
  },
  {
    title: "Credentialing & Enrollment",
    icon: FileCheck2,
  },
  {
    title: "HIPAA & Compliance",
    icon: ShieldCheck,
  },
  {
    title: "Reporting & Analytics",
    icon: BarChart3,
  },
  {
    title: "Practice Operations",
    icon: Settings2,
  },
  {
    title: "Practice Management",
    icon: Building2,
  },
  {
    title: "New Practice Launch",
    icon: Rocket,
  },
  {
    title: "Revenue Recovery",
    icon: BadgeDollarSign,
  },
  {
    title: "General Questions",
    icon: CircleHelp,
  },
];

export default function ContactTopics() {
  const [selectedTopic, setSelectedTopic] = useState(
    "Medical Billing & Revenue Cycle",
  );

  const [open, setOpen] = useState(false);
  return (
    <section className="relative overflow-hidden py-24">
      {/* Decorative Circles */}
      <div className="absolute left-0 top-36">
        <div className="absolute h-44 w-44 -translate-x-1/2 rounded-full bg-[#456B7C]" />

        <div className="absolute top-24 h-44 w-44 -translate-x-1/2 rounded-full border-[3px] border-[#C6944A]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
            Popular Topics
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#2F2F2F] md:text-5xl lg:text-6xl">
            What can we help
            <br />
            you with today?
          </h2>
        </div>

        {/* Topics */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <button
                onClick={() => {
                  setSelectedTopic(topic.title);
                  setOpen(true);
                }}
                key={topic.title}
                className={`group flex items-center gap-5 rounded-2xl border bg-white px-7 py-6 text-left transition-all duration-300 ${
                  topic.active
                    ? "border-[#456B7C] ring-2 ring-[#456B7C]"
                    : "border-gray-200 hover:-translate-y-1 hover:border-[#456B7C] hover:shadow-lg"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF5F7] text-[#456B7C] transition group-hover:bg-[#456B7C] group-hover:text-white">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <span className="text-lg font-semibold text-[#2F2F2F]">
                  {topic.title}
                </span>
              </button>
            );
          })}
        </div>
        <ContactFormModal
          open={open}
          selectedTopic={selectedTopic}
          onTopicChange={setSelectedTopic}
          onClose={() => setOpen(false)}
        />
      </div>
    </section>
  );
}
