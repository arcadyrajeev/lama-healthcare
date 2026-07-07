"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import CTAButton from "./CTAButton";
import FloatingCards from "./FloatingCards";

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Lama movement
  const lamaY = useTransform(scrollYProgress, [0, 1], [140, -140]);
  const lamaScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  // Floating cards movement
  const cardsY = useTransform(scrollYProgress, [0, 1], [200, -280]);
  const cardsRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const cardsScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1, 0.98],
  );

  // Background movement
  const gradientY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={heroRef} className="relative  px-12">
      {/* Decorative Blur */}

      <motion.div
        style={{ y: gradientY }}
        className="absolute left-1/2 top-44 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#9FD9E8]/30 blur-[130px]"
      />

      <motion.div
        style={{ y: gradientY }}
        className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#C7A46A]/20 blur-[90px]"
      />

      <div className="relative  bg-neutral-100 mx-16 mt-24 rounded-4xl z-10 mx-auto flex min-h-screenitems-center px-6 py-8 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="inline-flex rounded-full border border-[#B9925A]/30 bg-[#B9925A]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#B9925A]">
              Revenue Cycle Management
            </span>

            <h1 className="mt-8 text-5xl font-serif leading-[1.05] tracking-tight text-[#1F1F1F] md:text-6xl xl:text-7xl">
              Your practice is
              <br />
              losing <span className="italic text-[#2F6173]">revenue</span>
              <br />
              without even
              <br />
              noticing it.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-neutral-600">
              We help independent healthcare practices maximize revenue, reduce
              operational costs and simplify day-to-day billing workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton size="lg">Get Your Free Audit</CTAButton>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="h-11 w-11 rounded-full border-2 border-white bg-neutral-300" />
                <div className="h-11 w-11 rounded-full border-2 border-white bg-neutral-400" />
                <div className="h-11 w-11 rounded-full border-2 border-white bg-neutral-500" />
              </div>

              <div>
                <p className="font-semibold text-[#1F1F1F]">
                  Trusted by Healthcare Practices
                </p>

                <p className="text-sm text-neutral-500">
                  10,000+ claims successfully processed
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <div className="relative flex min-h-[760px] items-center justify-center">
            {/* Soft Glow */}

            <motion.div
              style={{ y: gradientY, x: 150 }}
              className="absolute h-[540px] w-[540px] rounded-full bg-gradient-to-br from-[#B5E8F2] via-[#D9F2F8]/40 to-transparent blur-[120px]"
            />

            {/* Lama */}

            <motion.div
              style={{
                y: lamaY,
                scale: lamaScale,
              }}
              className="absolute z-10  w-[900px] h-[800px] -translate-x-30"
            >
              <Image
                src="/images/lama-background.png"
                alt="Lama Healthcare"
                height={2000}
                width={2000}
                priority
                className="object-contain "
              />
            </motion.div>

            {/* Floating Cards */}

            <motion.div
              style={{
                y: cardsY,
                rotate: cardsRotate,
                scale: cardsScale,
              }}
              className="absolute right-0 top-3/4 z-20 "
            >
              <FloatingCards />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
    </section>
  );
}
