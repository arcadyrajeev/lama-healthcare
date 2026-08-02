"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Medical Billing / RCM",
    image: "/images/services/medical-billing.webp",
    description:
      "Maximize collections and reduce revenue leakage across the entire revenue cycle.",
    href: "/services/medical-billing",
    span: "large",
  },
  {
    title: "Credentialing & Enrollment",
    image: "/images/services/credentialing.webp",
    description:
      "Accelerate provider enrollment while minimizing delays and costly errors.",
    href: "/services/credentialing",
    span: "large",
  },
  {
    title: "Compliance Management",
    image: "/images/services/compliance.webp",
    description: "Stay compliant with payer and regulatory requirements.",
    href: "/services/hipaa-compliance",
    span: "small",
  },
  {
    title: "Practice Operations",
    image: "/images/services/practice-operations.webp",
    description:
      "Streamline workflows to improve efficiency and accountability.",
    href: "/services/practice-operations",
    span: "small",
  },
  {
    title: "Launching New Practice",
    image: "/images/services/practice-launch.webp",
    description:
      "Assist with Launching New Medical Practice | Start Your Practice Right ",
    href: "/services/new-practice-consulting",
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

        <div className="mt-16  grid grid-cols-1 gap-6 md:grid-cols-6">
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
              className={`${
                service.span === "large"
                  ? "h-[320px] md:h-[350px]  md:col-span-3  "
                  : " h-[320px] md:h-[300px] md:col-span-2 "
              }`}
            >
              <Link
                href={service.href}
                className="group relative min-h-[250px] flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="absolute inset-0 z-0 aspect-[16/6] overflow-hidden">
                  <div className="absolute inset-0 bottom-10 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className="absolute inset-0 transition-transform duration-700 h-[95%] group-hover:scale-105">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover "
                    />
                  </div>

                  <div className="absolute  inset-0 bg-gradient-to-t from-white via-white via-[5%] to-transparent to-[50%]" />
                </div>

                {/* Content */}
                <div className="flex mt-auto flex-col dm-sans  p-8 z-10 relative  group-hover:scale-102 transition-transform duration-700">
                  <div className="flex items-start justify-between">
                    <h3 className="text-3xl font-medium leading-8 ">
                      {service.title}
                    </h3>

                    <div className="ml-4 flex  p-2 items-center justify-center rounded-full  transition group-hover:bg-white group-hover:border group-hover:border-[#476B6B] group-hover:text-[#476B6B]">
                      <ArrowUpRight
                        size={30}
                        className="transition-all duration-500 group-hover:rotate-45"
                      />
                    </div>
                  </div>

                  <p className="mt-2 text-lg leading-7 text-neutral-600">
                    {service.description}
                  </p>
                </div>
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
