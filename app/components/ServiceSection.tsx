"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Revenue Cycle Management",
    description:
      "Maximize collections and reduce revenue leakage across the entire revenue cycle.",
    href: "/services/revenue-cycle-management",
    span: "large",
  },
  {
    title: "Credentialing & Enrollment",
    description:
      "Accelerate provider enrollment while minimizing delays and costly errors.",
    href: "/services/credentialing-enrollment",
    span: "large",
  },
  {
    title: "Compliance Management",
    description: "Stay compliant with payer and regulatory requirements.",
    href: "/services/compliance-management",
    span: "small",
  },
  {
    title: "Practice Operations",
    description:
      "Streamline workflows to improve efficiency and accountability.",
    href: "/services/practice-operations",
    span: "small",
  },
  {
    title: "Reporting & Analytics",
    description: "Gain complete visibility into your practice performance.",
    href: "/services/reporting-analytics",
    span: "small",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#BE995A]">
            Our Services
          </p>

          <h2 className="mt-4 text-5xl font-serif leading-tight text-[#1F1F1F]">
            End-to-end operations.
            <br />
            <span className="italic text-[#2F6173]">
              Built for independent practices
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-6 md:grid-rows-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={
                service.span === "large"
                  ? "md:col-span-3 md:row-span-3"
                  : "md:col-span-2 md:row-span-2"
              }
            >
              <Link
                href={service.href}
                className="
        group
        relative
        flex
        h-full
        min-h-[240px]
        flex-col
        justify-between
        overflow-hidden
        rounded-2xl md:rounded-3xl
        bg-[#F1F0EE]
         p-3 md:p-8
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:bg-white
        hover:shadow-2xl
      "
              >
                {/* Top Right Arrow */}

                <div className="flex justify-end">
                  <div
                    className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#2F6173]
            opacity-0
            shadow-md
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
                  >
                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>
                </div>

                {/* Content */}

                <div>
                  <h3
                    className={`font-light subheading leading-tight text-[#1F1F1F] transition-colors group-hover:text-[#2F6173] ${
                      service.span === "large"
                        ? "text-2xl md:text-4xl"
                        : "text-2xl"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm md:text-lg md:leading-8 text-neutral-600">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Accent */}

                <div
                  className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-[#BE995A]
          transition-all
          duration-500
          group-hover:w-full
        "
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Lama Outline */}

      <div className="pointer-events-none absolute right-0 top-0 hidden opacity-10 xl:block">
        {/* Replace with your outline SVG */}
      </div>
    </section>
  );
}
