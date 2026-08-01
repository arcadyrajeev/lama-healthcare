"use client";

import Image from "next/image";
import { Building2, HeartHandshake, Lightbulb } from "lucide-react";

export default function Story() {
  const pillars = [
    {
      icon: Building2,
      title: "Built Inside Real Practices",
      description:
        "Practice One was created by people who managed day-to-day healthcare operations, not by developers guessing how credentialing works.",
    },
    {
      icon: HeartHandshake,
      title: "Designed Around Reality",
      description:
        "Every workflow reflects the messy reality of provider onboarding, payer communication, document collection and operational follow-through.",
    },
    {
      icon: Lightbulb,
      title: "Created Because Nothing Else Existed",
      description:
        "We searched for software that showed the true state of every enrollment. When we couldn't find it, we built our own.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFB] py-28">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-accent/10" />

        <div className="absolute -left-52 bottom-0 h-[420px] w-[420px] rounded-full bg-[#456B7C]/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image */}

          <div className="relative">
            <div className="overflow-hidden rounded-[36px] bg-white shadow-xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/practice-one/founders-story.jpg"
                  alt="Why Practice One was built"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 -right-8 hidden max-w-xs rounded-[28px] border border-neutral-200 bg-white p-6 shadow-xl lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Built From Experience
              </p>

              <h3 className="mt-4 font-serif text-2xl text-[#2E2E2E]">
                We solved the problem we lived every day.
              </h3>

              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Practice One began as an internal solution before becoming the
                platform that powers healthcare operations today.
              </p>
            </div>
          </div>

          {/* Content */}

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Why We Built This
            </span>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#2E2E2E] lg:text-6xl">
              We ran the
              <br />
              practices.
              <br />
              <span className="italic text-[#456B7C]">We lived this.</span>
            </h2>

            <div className="mt-10 space-y-7 text-lg leading-8 text-neutral-600">
              <p>
                We spent years working inside independent medical practices,
                where credentialing became the operational function everyone
                depended on but almost nobody could truly see.
              </p>

              <p>
                We watched provider applications appear to move while nothing
                actually changed. We watched providers remain unbillable for
                months because information lived across inboxes, spreadsheets,
                payer portals and disconnected systems.
              </p>

              <p>
                We searched for software that honestly reflected the real state
                of every enrollment. When nothing delivered that visibility, we
                built Practice One ourselves.
              </p>
            </div>

            {/* Pillars */}

            <div className="mt-14 space-y-5">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="flex gap-5 rounded-[26px] border border-neutral-200 bg-white p-6 transition hover:border-[#456B7C]/20 hover:shadow-lg"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#456B7C]/10 text-[#456B7C]">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#2E2E2E]">
                        {pillar.title}
                      </h3>

                      <p className="mt-3 leading-7 text-neutral-600">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
