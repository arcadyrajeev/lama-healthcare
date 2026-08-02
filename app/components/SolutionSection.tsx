"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Clock3, TrendingDown, ChartNoAxesCombined } from "lucide-react";

const features = [
  {
    title: "Lower Operations Cost",
    icon: TrendingDown,
  },
  {
    title: "Faster Credentialing",
    icon: Clock3,
  },
  {
    title: "Full Visibility",
    icon: Eye,
  },
  {
    title: "Stronger Revenue Performance",
    icon: ChartNoAxesCombined,
  },
];

export default function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F4] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="absolute hidden lg:block -left-42 bottom-24 h-72 w-72 rounded-full bg-main/20" />

          <div className="absolute  hidden lg:block  -left-15 bottom-10 h-52 w-52 rounded-full border-2 border-accent/80" />
          <Image
            src="/lama.svg"
            alt="Lama"
            width={280}
            height={380}
            className="mb-4 opacity-20 absolute top-5 left-10 z-0 "
          />

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              
              portrait:h-[30vh]
              landscape:h-[400px]
              overflow-hidden
               rounded-2xl md:rounded-3xl
              bg-neutral-200
            "
          >
            {/* Replace with Image or Video */}

            <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-screen object-contain"
              >
                <source src="/videos/platform-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* RIGHT */}

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-[#BE995A]"
            >
              The Solution
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-5xl font-serif leading-tight text-[#1F1F1F]"
            >
              One accountable team,
              <br />
              <span className="italic text-[#3E6A7A]">
                One operational system.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-xl text-base leading-8 text-[#2C2C2C]"
            >
              <span className="font-bold text-main">Practice One </span> is the
              credentialing platform built and tested by the team that uses it
              every day. It tracks every provider, automates status updates, and
              gives practice managers real time visibility without spreadsheets
              or constant follow ups. Choose the model that fits your practice.
              Use Practice One with Lama Healthcare&apos;s managed service, or
              as a standalone platform for your internal team.
            </motion.p>

            {/* Features */}

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="relative mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4"
            >
              {/* Decorative circles */}

              <div className="absolute -left-6 bottom-10 h-28 w-28 rounded-full bg-[#3E6A7A]" />

              <div className="absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-[#B78E52]" />

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 30,
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="
                      relative
                      rounded-2xl
                      border
                      border-white/50
                      bg-white/70
                      p-3
                      backdrop-blur-xl
                      shadow-md
                    "
                  >
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F5F6] text-[#3E6A7A]">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-lgleading-tight text-[#1F1F1F]">
                      {feature.title}
                    </h3>
                  </motion.div>
                );
              })}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 font-serif leading-tight text-[#1F1F1F]
             text-4xl md:text-5xl lg:text-[3.4rem]"
            >
              Built by credentialers.
              <br />
              <span className="italic text-[#3D6B7A]">
                Used by our own team.
                <br />
                Now available to yours.
              </span>
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
