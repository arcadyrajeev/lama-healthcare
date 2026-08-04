"use client";

import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (702) 500-0077",
    detail: "Mon,Fri, 8 AM to 5 PM PST",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "support@lamahc.com",
    detail: "We respond within one business day",
  },
  {
    icon: MessageCircle,
    title: "Chat with Us",
    value: "Live chat with our team",
    detail: "Mon,Fri, 8 AM to 5 PM PST",
  },
];

export default function ContactHero() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto px-16">
        <div className="grid  relative z-0 overflow-hidden rounded-[36px] bg-[#F7F5F2] lg:grid-cols-[1.5fr_0.5fr]">
          {/* Left */}
          <div className="flex relative z-5 flex-col justify-center p-8 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
              Contact Us
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-tight text-[#2F2F2F] md:text-5xl lg:text-6xl">
              We&apos;re here to help
              <br />
              <span className="italic text-[#456B7C]">
                your practice thrive.
              </span>
            </h1>

            <div className="mt-8 h-[2px] w-24 bg-[#C6944A]" />

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              Whether you&apos;re launching a new practice, improving
              operations, or need support with compliance, billing, or
              credentialing, our team is ready to help.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {contacts.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#456B7C] text-white">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-10 text-lg font-semibold text-[#2F2F2F]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#456B7C]">
                      {item.value}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="absolute right-0 top-0 inset-0 min-h-[350px] lg:min-h-full">
            <Image
              src="/images/contact-heroimage.webp"
              alt="Lama Healthcare Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
