"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock3 } from "lucide-react";

export default function ContactSupport() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid overflow-hidden rounded-[32px] border border-gray-200 bg-white lg:grid-cols-[1fr_0.8fr_0.8fr]">
          {/* CTA Card */}
          <div className="flex flex-col justify-between bg-[#456B7C] p-8 text-white md:p-10 lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E6C48A]">
                Personalized Support
              </p>

              <h2 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
                Need personalized
                <br />
                support?
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/80">
                Can&apos;t find what you&apos;re looking for? Our team is ready
                to help you with operational, compliance, billing, or
                credentialing questions.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-8 rounded-full bg-white px-2 py-2 pl-6 text-base font-semibold text-[#2F2F2F] transition hover:shadow-lg"
              >
                <span>Schedule a Discovery Call</span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#456B7C] text-white transition group-hover:translate-x-1">
                  <ArrowRight size={20} />
                </span>
              </Link>
            </div>
          </div>

          {/* Support Hours */}
          <div className="flex flex-col justify-center border-t border-gray-200 p-8 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="flex items-center gap-3">
              <Clock3 className="text-[#C6944A]" size={22} />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
                Support Hours
              </p>
            </div>

            <h3 className="mt-8 text-3xl font-semibold leading-snug text-[#2F2F2F]">
              Monday to Friday,
              <br />
              8:00 AM to 5:00 PM PST
            </h3>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Closed on weekends and major holidays.
            </p>
          </div>

          {/* Contact */}
          <div className="flex relative flex-col h-full w-full justify-center bg-[#F8F7F5] ">
            <Image
              src="/images/calender.webp"
              alt="Contact Support"
              fill
              className="absolute inset-0 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
