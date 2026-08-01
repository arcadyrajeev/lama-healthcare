"use client";

import {
  FileStack,
  Workflow,
  MessageSquareText,
  Eye,
  ShieldCheck,
  Database,
  ArrowRight,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: FileStack,
      title: "Collect Documents Once",
      description:
        "Providers upload everything through a single secure link from any device. Documents stay organized, eliminating repeated requests for the same certificates.",
    },
    {
      icon: Workflow,
      title: "Automatic Status Tracking",
      description:
        "Practice One reads payer correspondence and advances enrollment stages automatically while preserving the exact message behind every update.",
    },
    {
      icon: MessageSquareText,
      title: "Automatic Provider Updates",
      description:
        "Providers receive honest progress updates automatically, reducing uncertainty and eliminating repetitive status requests.",
    },
    {
      icon: Eye,
      title: "Client Visibility",
      description:
        "Every client sees the same real-time progress through a secure read-only portal, replacing status calls with complete transparency.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Monitoring",
      description:
        "Track licenses and credentialing milestones proactively, helping practices stay ahead of renewals and compliance deadlines.",
    },
    {
      icon: Database,
      title: "Secure Multi-Practice Platform",
      description:
        "Every client's data remains isolated with permanent audit logs, allowing credentialing teams to confidently manage multiple practices.",
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#456B7C]/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            What It Does For You
          </span>

          <h2 className="mt-6 font-serif text-5xl leading-tight text-[#2E2E2E] lg:text-6xl">
            The endless parts
            <br />
            of credentialing,
            <span className="italic text-[#456B7C]"> handled.</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            Practice One removes repetitive operational work, giving
            credentialing teams more visibility, fewer manual tasks and better
            communication with providers and clients.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#456B7C]/20 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#456B7C]/10 text-[#456B7C] transition duration-300 group-hover:bg-[#456B7C] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 font-serif text-3xl leading-tight text-[#2E2E2E]">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-neutral-600">
                  {feature.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-medium text-[#456B7C]">
                  Learn More
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-24 overflow-hidden rounded-[40px] bg-[#EDF5F7]">
          <div className="grid items-center gap-10 p-10 lg:grid-cols-[1.5fr_1fr] lg:p-14">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                One Platform
              </span>

              <h3 className="mt-5 font-serif text-4xl leading-tight text-[#2E2E2E]">
                Every provider.
                <br />
                Every payer.
                <br />
                Every stage.
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Instead of juggling spreadsheets, inboxes and disconnected
                portals, Practice One gives your team a single operational
                workspace where every enrollment can be monitored from start to
                finish.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-lg">
              <div className="space-y-5">
                {[
                  "Single provider workspace",
                  "Live enrollment timeline",
                  "Automatic document collection",
                  "Real-time payer updates",
                  "Client portal",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-accent" />

                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
