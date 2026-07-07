"use client";

import { motion } from "framer-motion";

interface Metric {
  label: string;
  value: number;
  color: string;
}

const metrics: Metric[] = [
  {
    label: "Revenue Cycle",
    value: 46,
    color: "#A8C7D4",
  },
  {
    label: "Credentialing",
    value: 78,
    color: "#314D5A",
  },
  {
    label: "Staffing",
    value: 60,
    color: "#4F7A8B",
  },
  {
    label: "Technology",
    value: 30,
    color: "#7E7E7E",
  },
  {
    label: "HIPAA Compliance",
    value: 52,
    color: "#BE985B",
  },
  {
    label: "Digital Presence",
    value: 42,
    color: "#D6BE98",
  },
];

export default function AuditCard() {
  return (
    <div className="w-full max-w-[540px] rounded-[30px] bg-white p-8 shadow-[0_35px_80px_rgba(0,0,0,0.08)]">
      <h3 className="text-3xl font-semibold tracking-tight text-neutral-900">
        Practice Audit Report
      </h3>

      <div className="mt-10 space-y-6">
        {metrics.map((metric, index) => (
          <ProgressBar key={metric.label} {...metric} delay={index * 0.08} />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-2 text-sm">
        <span className="italic text-red-500">
          2 critical findings identified
        </span>

        <span className="text-neutral-500">
          • Comprehensive written report delivered within 5 business days
        </span>
      </div>
    </div>
  );
}

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
  delay: number;
}

function ProgressBar({ label, value, color, delay }: ProgressBarProps) {
  return (
    <div className="grid grid-cols-[130px_1fr] items-center gap-6">
      <span className="text-sm font-medium text-neutral-600">{label}</span>

      <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: value / 100,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            originX: 0,
            backgroundColor: color,
          }}
          className="h-full w-full rounded-full"
        />
      </div>
    </div>
  );
}
