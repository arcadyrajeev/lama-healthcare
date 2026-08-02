"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[36px] bg-[#456B7C]">
          {/* Background Shape */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              clipPath: "polygon(0 100%,100% 20%,100% 100%)",
              background: "#ffffff",
            }}
          />

          <div className="relative grid gap-12 px-8 py-10 md:px-12 md:py-14 lg:grid-cols-[1.25fr_auto_0.95fr] lg:items-center lg:px-16 lg:py-16">
            {/* Left */}
            <div>
              <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                We&apos;re here to support
                <br />
                <span className="italic text-[#E6C48A]">your success.</span>
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden h-40 w-px bg-white/25 lg:block" />

            {/* Right */}
            <div className="flex flex-col items-start lg:items-end">
              <div className="max-w-md lg:text-right">
                <p className="text-lg leading-8 text-white/85">
                  A strong partnership means you&apos;re never alone. Let&apos;s
                  keep your practice moving forward.
                </p>
              </div>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center rounded-full bg-white p-2 pl-8 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <span className="text-xl font-semibold text-[#2F2F2F]">
                  Get in Touch
                </span>

                <span className="ml-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#456B7C] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={22} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
