"use client";

import { motion } from "framer-motion";

import { type Variants } from "framer-motion";

import {
  AlertTriangle,
  BadgeX,
  CircleDollarSign,
  Users,
  Clock3,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const experiences = [
  {
    icon: AlertTriangle,
    title: "Billers cut corners",
    points: [
      "Claims under-billed.",
      "Follow-ups ignored.",
      "Revenue left behind.",
    ],
  },
  {
    icon: BadgeX,
    title: "Credentialing mistakes",
    points: [
      "Delayed enrollments.",
      "Missed deadlines.",
      "Months of lost momentum.",
    ],
  },
  {
    icon: Users,
    title: "Everyone blamed someone else",
    points: ["More vendors.", "More confusion.", "No accountability."],
  },
  {
    icon: CircleDollarSign,
    title: "We paid more",
    points: ["More software.", "More contractors.", "More problems to fix."],
  },
];

export default function ExperienceSection() {
  return (
    <section className=" py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#BE995A]">
            Our Experience
          </p>

          <h2 className="mt-4 text-5xl font-serif leading-tight text-[#1F1F1F]">
            What We Saw Running
            <br />
            <span className="font-serif text-main italic">
              Our Own Practices
            </span>
          </h2>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={card}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
          group
          rounded-[30px]
          border
          border-neutral-200
          bg-[#F2F1EF]
          p-8
          shadow-sm
          transition-all
          hover:border-[#3E6A7A]/20
          hover:shadow-xl
        "
              >
                {/* Icon */}

                <div
                  className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-white/60
            bg-white/70
            text-[#3E6A7A]
            shadow-md
            backdrop-blur-xl
            transition-all
            duration-300
            group-hover:rotate-6
            group-hover:scale-110
          "
                >
                  <Icon size={28} strokeWidth={2} />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-3xl dm-sans font-medium leading-tight text-[#1F1F1F]">
                  {item.title}
                </h3>

                {/* List */}

                <ul className="mt-8 space-y-4">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[17px] text-neutral-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#BE995A]" />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Banner */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            mt-14
            overflow-hidden
            rounded-[36px]
            bg-main
            px-8
            py-10
            lg:px-12
            lg:py-12
          "
        >
          {/* Background Shape */}

          <div
            className="
              absolute
              -right-20
              top-50
              h-full
              w-[170%]
              rotate-[-12deg]
              bg-white/6
            "
          />

          <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-light dm-sans flex gap-6 text-7xl items-center text-white">
                  <Clock3 size={50} strokeWidth={1.5} /> 15+
                </p>

                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-yellow-400">
                  Hours Lost Weekly
                </p>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  Administrative work that distracted from patient care.
                </p>
              </div>

              <div>
                <p className="font-light dm-sans flex gap-6 items-center text-7xl text-white">
                  <Users size={50} strokeWidth={1.5} />1
                </p>

                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-yellow-400">
                  Unified Partner
                </p>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  One team managing operations, compliance, billing, and growth.
                </p>
              </div>
            </div>

            <div className="my-8 h-px bg-white/10" />
            <div className="flex flex-col gap-3 lg:ml-8">
              {" "}
              <blockquote className="font-serif text-2xl leading-relaxed text-white">
                &quot;Healthcare practices shouldn&apos;t need five vendors to
                solve one operational problem.&quot;
              </blockquote>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-yellow-400">
                Lama Healthcare Philosophy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
