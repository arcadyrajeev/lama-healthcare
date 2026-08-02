"use client";

import { Target, BadgeCheck } from "lucide-react";
import JourneyTimeline from "./JourneyTimeline";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function LamaJourney() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Background Decorations */}

      <div className="absolute hidden lg:block bottom-40 right-20 h-28 w-28 rounded-full bg-[#476B7C]" />

      <div className="absolute hidden lg:block bottom-35 right-40 h-20 w-20 rounded-full bg-[#C79A59]" />

      <div className="mx-auto lg:max-w-7xl px-6">
        <div className="grid items-start gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.p
            variants={fadeUp}
            className="text-sm md:hidden font-semibold uppercase tracking-[0.3em] text-[#C79A59]"
          >
            Our Journey
          </motion.p>
          <JourneyTimeline />

          {/* RIGHT */}
          <motion.div
            className="relative z-10"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-sm hidden md:block font-semibold uppercase tracking-[0.3em] text-[#C79A59]">
              Our Journey
            </p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-5xl leading-tight text-[#2B2B2B] lg:text-6xl"
            >
              <span className="font-serif">Why we exist.</span>

              <br />

              <span className="font-serif italic text-[#456B7C]">
                And Why we&apos;re
              </span>

              <br />

              <span className="font-serif italic text-[#456B7C]">
                different
              </span>
            </motion.h2>

            <motion.div
              variants={stagger}
              className="mt-12 space-y-8 text-base leading-7 text-[#666]"
            >
              <p>
                We didn&apos;t start Lama Healthcare to build another healthcare
                company. We started it because the system was failing
                independent practices, and we knew it could be better.
              </p>

              <p>
                Everything we do is shaped by what we&apos;ve experienced, what
                we&apos;ve learned, and what practices actually need to succeed.
              </p>
            </motion.div>

            {/* Bottom Card */}
            <div className="mt-16 overflow-hidden rounded-[28px] border border-gray-200 bg-neutral/50 shadow-xl backdrop-blur">
              <div className="grid md:grid-cols-2">
                {/* Left */}
                <div className="p-8">
                  <BadgeCheck
                    className="mb-5 text-[#456B7C]"
                    size={42}
                    strokeWidth={2}
                  />

                  <h3 className="text-xl font-semibold text-[#1F4E67]">
                    Built on Experience
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    We&apos;ve been in your shoes and understand the realities
                    of running an independent medical practice.
                  </p>
                </div>

                {/* Right */}
                <div className="border-t border-gray-200 p-8 md:border-l md:border-t-0">
                  <Target
                    className="mb-5 text-[#456B7C]"
                    size={42}
                    strokeWidth={2}
                  />

                  <h3 className="text-xl font-semibold text-[#1F4E67]">
                    Focused on Outcomes
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    We stay accountable to measurable results that improve
                    operations, revenue, and patient experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
