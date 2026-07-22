"use client";

import {
  FileWarning,
  BadgeX,
  Users,
  CircleDollarSign,
  HeartCrack,
} from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Billers cut corners",
    description:
      "Claims were under billed, follow ups were ignored, leaving revenue on the table.",
  },
  {
    icon: BadgeX,
    title: "Credentialing mistakes",
    description:
      "Provider enrollment delays created unnecessary payment interruptions and compliance risks.",
  },
  {
    icon: Users,
    title: "Everyone blamed someone else",
    description:
      "Vendors worked in silos, creating confusion instead of accountability.",
  },
  {
    icon: CircleDollarSign,
    title: "We paid more",
    description:
      "Costs kept increasing while operational performance continued to decline.",
  },
  {
    icon: HeartCrack,
    title: "Our team was burned out",
    description:
      "Staff spent more time fixing broken systems than caring for patients.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Decorative Circles */}
      <div className="absolute left-10 top-[55%] h-28 w-28 rounded-full bg-[#43697B]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C69247]">
            What We Saw
          </p>

          <h2 className="mt-5 text-5xl leading-tight text-[#2F2F2F] md:text-6xl">
            <span className="font-serif">The same problems.</span>

            <br />

            <span className="font-serif italic text-[#42697C]">
              Over and over again.
            </span>
          </h2>

          <div className="mt-8 h-[2px] w-48 bg-[#C69247]" />

          <p className="mt-10 max-w-2xl text-lg leading-9 text-gray-600">
            We lived these challenges firsthand. Nothing changed until we built
            the system and accountability that solved them.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#E6DCC8]">
                  <Icon size={42} strokeWidth={2} className="text-[#456B7C]" />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-center text-2xl font-semibold leading-tight text-[#222]">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="mx-auto my-6 h-[2px] w-10 bg-[#C69247]" />

                {/* Description */}
                <p className="text-center text-base leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
