"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AuditCard from "./AuditCard";
import CTAButton from "./CTAButton";

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Glass card parallax
  const containerY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Decorative circles
  const circleLeft = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const circleRight = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="relative   py-24 lg:py-36">
      <div className="mx-auto px-6 lg:px-24">
        {/* Decorative Circle */}

        <motion.div
          style={{ y: circleLeft }}
          className="absolute left-16 z-1 top-0 hidden h-44 w-44 rounded-full bg-[#2F6173] lg:block"
        />

        <motion.div
          style={{ y: circleRight }}
          className="absolute right-0 top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full bg-[#C49B5D] lg:block"
        />

        {/* Glass Container */}

        <motion.div
          style={{
            y: containerY,
          }}
          className="
          relative
          z-20
          overflow-hidden
          rounded-[42px]
          border
          border-white/90
          bg-neutral-300/30
          backdrop-blur-lg
          shadow-[0_35px_100px_rgba(0,0,0,0.08)]
        "
        >
          {/* Background Blur */}

          <div className="absolute inset-0">
            <div className="absolute left-1/4 top-10 h-40 w-40 rounded-full bg-[#8FC6D3]/20 blur-[90px]" />

            <div className="absolute right-1/4 top-24 h-44 w-44 rounded-full bg-[#C59C60]/20 blur-[80px]" />

            <div className="absolute bottom-10 left-1/2 h-44 w-44 rounded-full bg-[#DCECF1]/60 blur-[90px]" />
          </div>

          <div className="relative z-10 grid gap-14 px-8 py-10 lg:grid-cols-5 lg:px-16 lg:py-16">
            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
              className="col-span-3"
            >
              <AuditCard />
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="flex flex-col justify-center col-span-2 "
            >
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#B9925A]">
                The Problem
              </span>

              <h2 className="mt-6 text-4xl font-serif leading-tight text-[#1F1F1F] ">
                Most practices don&apos;t
                <br />
                have a staffing
                <br />
                problem.
              </h2>

              <p className="mt-10 text-4xl font-serif leading-tight text-[#1F1F1F] ">
                They have an
                <br />
                <span className="italic text-[#3D7185]">
                  operational visibility
                </span>
                <br />
                <span className="italic text-[#3D7185]">problem.</span>
              </p>

              <div className="mt-14">
                <CTAButton size="lg" href="#">
                  Get Your Audit
                </CTAButton>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
