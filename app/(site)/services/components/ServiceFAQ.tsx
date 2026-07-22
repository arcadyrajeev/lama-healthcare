"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { ServiceFAQ as ServiceFAQData } from "@/types/service";

interface ServiceFAQProps {
  data: ServiceFAQData;
}

export default function ServiceFAQ({ data }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute -left-24 top-20 h-52 w-52 rounded-full bg-[#456B7C]" />

      <div className="absolute -right-10 bottom-16 h-24 w-24 rounded-full bg-[#C6944A]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-[420px_1fr]">
          {/* Left Content */}
          <div className="sticky top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
              {data.eyebrow}
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#2F2F2F] md:text-5xl">
              {data.title}
            </h2>

            <div className="mt-8 h-[2px] w-24 bg-[#C6944A]" />

            {data.description && (
              <p className="mt-8 text-lg leading-8 text-gray-600">
                {data.description}
              </p>
            )}
          </div>

          {/* Accordion */}
          <div className="space-y-5">
            {data.items.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-[28px] border border-gray-200 bg-white transition-all duration-300 hover:border-[#C6944A] hover:shadow-lg"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-6 p-7 text-left"
                  >
                    <h3 className="font-serif text-xl text-[#2F2F2F] md:text-2xl">
                      {faq.question}
                    </h3>

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#456B7C] text-white transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-gray-100 px-7 pb-7 pt-6">
                        <p className="leading-8 text-gray-600">{faq.answer}</p>
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
