"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="w-full bg-white  lg:mt-[6vw] lg:px-12">
      <div className="mx-auto  px-3">
        {/* Hero */}
        <div className="overflow-hidden rounded-[32px] mt-16 lg:mt-20 bg-[#eef2f4] shadow-sm">
          <div className="grid lg:grid-cols-2 relative">
            {/* Left Content */}
            <div className="flex relative flex-col justify-center p-8 sm:p-12 lg:p-16 z-10">
              <h1 className="font-serif text-4xl leading-tight text-[#2b2b2b] sm:text-5xl">
                We didn&apos;t build another
                <br />
                healthcare company.
              </h1>

              <p className="mt-8 font-serif text-3xl leading-tight text-[#2b2b2b] sm:text-4xl">
                We built the{" "}
                <span className="italic text-[#476a7c]">
                  operational system
                </span>{" "}
                we wished we had.
              </p>

              <Link
                href="/contact"
                className="mt-12 inline-flex w-fit items-center gap-3 rounded-full bg-[#c59b5c] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#b88b4b]"
              >
                Schedule a Call
                <ArrowUpRight size={22} />
              </Link>
            </div>

            {/* Right Image */}
            <div className="absolute inset-0 z-0 lg:h-auto min-h-[600px]">
              <Image
                src="/images/about-hero1.webp" // Replace with your image
                alt="Healthcare Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#F5F5F3]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
