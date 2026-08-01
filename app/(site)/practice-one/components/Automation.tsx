"use client";

import { Bot, MailSearch, FileSearch, GitBranch } from "lucide-react";

export default function Automation() {
  const automation = [
    {
      icon: MailSearch,
      title: "Reads Payer Correspondence",
      description:
        "Incoming payer emails are monitored automatically, ensuring updates are captured the moment they arrive.",
    },
    {
      icon: FileSearch,
      title: "Extracts Provider Data",
      description:
        "Practice One intelligently reads provider documents and prepares structured information instead of requiring manual entry.",
    },
    {
      icon: GitBranch,
      title: "Moves Workflows Forward",
      description:
        "Enrollment stages update automatically whenever real progress occurs, creating an accurate timeline without manual tracking.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-main py-28 text-white">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        <div className="absolute -right-32 -top-24 h-72 w-72 rounded-full bg-white/10" />

        <div className="absolute -right-24 top-28 h-52 w-52 rounded-full border-2 border-accent/80" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left */}

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              The Automation
            </span>

            <h2 className="mt-6 font-serif text-5xl leading-tight lg:text-6xl">
              We built the
              <br />
              automation
              <br />
              ourselves.
            </h2>

            <p className="mt-10 text-lg leading-8 text-white/75">
              The most time-consuming parts of credentialing weren&apos;t
              outsourced to generic automation platforms. They were designed
              specifically for the realities of payer communication, provider
              documents and enrollment workflows.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/75">
              Every capability was refined using real correspondence and real
              operational data from independent practices, ensuring the platform
              performs reliably in everyday healthcare operations.
            </p>

            <div className="mt-14 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                  <Bot size={28} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    Built In House
                  </p>

                  <h3 className="mt-3 font-serif text-3xl">
                    Automation that understands credentialing.
                  </h3>

                  <p className="mt-5 leading-8 text-white/70">
                    Practice One was developed around the workflows healthcare
                    teams actually perform, making automation practical instead
                    of generic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="space-y-6">
            {automation.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-accent/30 hover:bg-white/10"
                >
                  <div className="flex gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                      <Icon size={30} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                          Step {(index + 1).toString().padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="mt-4 font-serif text-3xl">{item.title}</h3>

                      <p className="mt-5 leading-8 text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Bottom Callout */}

            <div className="rounded-[32px] border border-accent/20 bg-accent/10 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Why It Matters
              </p>

              <h3 className="mt-5 font-serif text-3xl text-white">
                Less administration. More confidence.
              </h3>

              <p className="mt-5 leading-8 text-white/75">
                By automating repetitive operational work while keeping people
                in control of decisions, Practice One reduces delays, improves
                visibility and lets credentialing teams focus on moving
                providers toward approval instead of maintaining spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
