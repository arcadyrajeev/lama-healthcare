"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import CTAButton from "./CTAButton";
import FloatingCards from "./FloatingCards";

export default function HomeHero() {
  const heroRef = useRef<HTMLElement>(null);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsDesktop(window.innerWidth >= 1366);
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Lama movement
  const lamaY = useTransform(scrollYProgress, [0, 1], [140, -140]);

  // Floating cards movement
  const cardsY = useTransform(scrollYProgress, [0, 1], [200, -280]);

  // Background movement
  const gradientY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={heroRef} className="  px-4 lg:px-12">
      {/* Decorative Blur */}

      <motion.div
        style={isDesktop ? { y: gradientY } : {}}
        className="hidden md:block absolute left-1/2 top-44 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#9FD9E8]/30 blur-[130px]"
      />

      <motion.div
        style={isDesktop ? { y: gradientY } : {}}
        className=" hidden md:block absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#C7A46A]/20 blur-[90px]"
      />

      <div className="relative  flex flex-col  bg-neutral-100 mx-16 mt-18 lg:mt-24 rounded-4xl z-10 mx-auto flex min-h-screenitems-center px-2 py-10 xl:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 px-5">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h1 className="mt-8 text-4xl font-serif leading-[1.05] tracking-tight text-[#1F1F1F] md:text-5xl xl:text-7xl">
              Your practice is losing{" "}
              <span className="italic text-[#2F6173]"> revenue </span>
              without even noticing it.
            </h1>

            <p className="mt-8 max-w-lg text-sm lg:text-lg leading-6 lg:leading-8 text-neutral-600">
              We help independent healthcare practices maximize revenue, reduce
              operational costs and simplify day-to-day billing workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton size="lg">Get Your Free Audit</CTAButton>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row lg:items-center gap-4 ">
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

          <div className="relative flex min-h-[400px] items-center justify-center  ">
            {/* Soft Glow */}

            <motion.div
              style={isDesktop ? { y: gradientY, x: 150 } : {}}
              className="absolute md:block hidden h-[540px] w-[540px] rounded-full bg-gradient-to-br from-[#B5E8F2] via-[#D9F2F8]/40 to-transparent blur-[120px] "
            />

            {/* Lama */}

            <motion.div
              style={isDesktop ? { y: lamaY } : {}}
              className="absolute z-10 portrait:w-[800px]  portrait:md:h-[300px] landscape:w-[1000px] landscape:h-[600px] -translate-x-10 md:-translate-y-40 lg:landscape:-translate-x-40 "
            >
              <Image
                src="/images/lama-hero.webp"
                alt="Lama Healthcare"
                height={2000}
                width={2000}
                priority
                className="object-contain "
              />
            </motion.div>

            {/* Floating Cards */}
          </div>
        </div>
        <div className="relative w-full  h-[200vw]  landscape:h-[10vh] md:portrait:h-[20vh]">
          <motion.div
            style={{ y: cardsY }}
            className="
              absolute
              z-20
              top-10 sm:top-26

              landscape:left-auto
              landscape:right-0
              landscape:-top-50
              landscape:bottom-auto
              landscape:translate-x-0"
          >
            <FloatingCards />
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
    </section>
  );
}
