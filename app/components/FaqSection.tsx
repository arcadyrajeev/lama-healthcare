"use client";

import { useState } from "react";
import { ChevronDown, Quote } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question:
      "How is Lama different from a traditional billing or credentialing company?",
    answer:
      "Lama goes beyond handling isolated tasks. We audit your operations, identify bottlenecks, implement improvements, and continuously optimize your workflows for measurable business outcomes.",
  },
  {
    question: "Do I need to replace my existing staff?",
    answer:
      "No. We work alongside your existing team, improving systems and processes rather than replacing your people.",
  },
  {
    question: "How do you identify operational gaps?",
    answer:
      "Through workflow analysis, reporting reviews, interviews with your staff, KPI evaluations, and operational audits.",
  },
  {
    question: "How long does the audit process take?",
    answer:
      "Most audits take between one and two weeks depending on the size and complexity of your organization.",
  },
  {
    question:
      "We already have vendors handling these functions. Why would we need Lama?",
    answer:
      "Most vendors perform assigned tasks. Lama focuses on improving the entire operational ecosystem so every vendor and internal team performs better together.",
  },
  {
    question: "How quickly can implementation begin?",
    answer:
      "Typically within a few days after the audit presentation and roadmap approval.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We establish measurable KPIs before implementation and continuously monitor improvements in efficiency, revenue, compliance, and operational performance.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[320px_1fr]">
          {/* Left */}

          <div>
            <h2 className="font-serif text-5xl leading-none text-black md:text-6xl">
              Frequently
              <br />
              asked
              <br />
              Questions
            </h2>
          </div>

          {/* Right */}

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl bg-neutral-100 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center gap-6 px-8 py-7 text-left"
                  >
                    {/* Left Icon */}

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                      <Quote className="text-main" size={22} strokeWidth={2} />
                    </div>

                    {/* Question */}

                    <span className="flex-1 text-lg font-medium text-zinc-800">
                      {faq.question}
                    </span>

                    {/* Arrow */}

                    <ChevronDown
                      className={`transition duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-26 pr-8 text-base leading-8 text-zinc-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
