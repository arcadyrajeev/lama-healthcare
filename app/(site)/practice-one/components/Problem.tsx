"use client";

import { AlertTriangle, Clock3, MailWarning, Search } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: Clock3,
      title: "Payers move slowly",
      description:
        "Enrollment timelines depend on payer review, but practices rarely know where applications are actually waiting.",
    },
    {
      icon: MailWarning,
      title: "Documents get stuck",
      description:
        "One missing document or an overlooked request can quietly delay an entire provider enrollment.",
    },
    {
      icon: Search,
      title: "No real visibility",
      description:
        "Most software cannot show the true status of every enrollment, forcing teams to manually investigate progress.",
    },
    {
      icon: AlertTriangle,
      title: "Silence becomes blame",
      description:
        "When nobody can see what's happening, clients assume nothing is happening and credentialers spend their day defending work instead of doing it.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 top-20 h-[420px] w-[420px] rounded-full bg-[#456B7C]/5 blur-3xl" />

        <div className="absolute -right-52 bottom-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.9fr]">
          {/* Left */}

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              The Problem
            </span>

            <h2 className="mt-6 font-serif text-5xl leading-tight text-[#2E2E2E] lg:text-6xl">
              Credentialing is the
              <br />
              black box
              <span className="italic text-[#456B7C]"> everyone blames.</span>
            </h2>

            <div className="mt-10 space-y-7 text-lg leading-8 text-neutral-600">
              <p>
                When a provider cannot begin billing, everyone immediately looks
                at credentialing. Yet most delays aren&apos;t caused by poor
                work. They come from slow payer responses, missing documentation
                or stale provider information.
              </p>

              <p>
                The real problem is visibility. Traditional software rarely
                shows where an enrollment actually stands, leaving teams to
                answer constant status questions with incomplete information.
              </p>

              <p>
                When progress cannot be seen, silence gets interpreted as
                inaction. Teams spend their time proving they are working
                instead of moving providers toward approval.
              </p>
            </div>

            <div className="mt-12 rounded-[32px] border border-[#456B7C]/10 bg-[#EDF5F7] p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#456B7C] text-white">
                  <AlertTriangle size={26} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    The Real Issue
                  </p>

                  <h3 className="mt-3 text-2xl font-serif text-[#2E2E2E]">
                    Lack of visibility creates unnecessary work.
                  </h3>

                  <p className="mt-4 leading-7 text-neutral-600">
                    Practice One wasn&apos;t built to make credentialers work
                    harder. It was built to eliminate uncertainty by making
                    every provider, payer and enrollment visible in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="grid gap-6">
            {problems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-[30px] border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#456B7C]/20 hover:shadow-xl"
                >
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#456B7C]/10 text-[#456B7C] transition group-hover:bg-[#456B7C] group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-serif text-[#2E2E2E]">
                        {item.title}
                      </h3>

                      <p className="mt-4 leading-7 text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
