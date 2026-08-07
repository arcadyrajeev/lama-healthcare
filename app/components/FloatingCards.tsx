"use client";

import { ArrowUpRight, BadgeDollarSign, TrendingUp } from "lucide-react";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import ScheduleButton from "./ScheduleButton";

export default function FloatingCards() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();

      cal("ui", {
        theme: "light",
      });
    })();
  }, []);
  return (
    <div className="w-full">
      <div className="grid portrait:w-full landscape:w-[50vw] grid-cols-1 md:grid-cols-3 gap-4">
        {/* LEFT CARD */}

        <div className="md:row-span-4 flex h-full flex-col justify-between rounded-3xl bg-[#2F6173] p-8 text-white shadow-2xl">
          <div>
            <p className="text-[34px] font-light leading-[1.1]">
              We lived
              <br />
              this
              <br />
              problem
              <br />
              ourselves.
            </p>

            <div className="mt-6 h-px w-20 bg-white/20" />
          </div>

          <div>
            <h2 className="text-6xl font-semibold tracking-tight">10K+</h2>

            <p className="mt-2 text-sm text-white/70">
              Claims Successfully Processed
            </p>

            <div className="mt-6">
              <ScheduleButton
                size="sm"
                data-cal-link="https://cal.com/rajeev-das-girvlq/discovery-call"
                data-cal-config='{"layout":"month_view"}'
              >
                Schedule Call
              </ScheduleButton>
            </div>
          </div>
        </div>

        {/* Revenue */}

        <GlassCard
          icon={<TrendingUp size={24} />}
          title="Revenue Impact"
          value="6.8%"
          description="Average increase in collections after optimization."
        />

        {/* Credentialing */}

        <GlassCard
          icon={<BadgeDollarSign size={24} />}
          title="Credentialing Cost"
          value="$4.2K"
          description="Monthly savings through streamlined workflows."
        />

        {/* Bottom */}

        <div className="md:col-span-2 rounded-3xl bg-white p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Independent Practices</p>

              <h3 className="mt-1 text-2xl font-semibold">Healthcare First</h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2F6173] text-white">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-neutral-500">
            We combine real practice management experience with technology to
            improve operations and maximize revenue.
          </p>
        </div>
      </div>
    </div>
  );
}

interface GlassCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

function GlassCard({ icon, title, value, description }: GlassCardProps) {
  return (
    <div
      className="
      rounded-3xl
      row-span-3
      border
      border-white/90
      bg-neutral-300/30
      backdrop-blur-lg
      p-6
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-white/50
    "
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[#2F6173]">
        {icon}
      </div>

      <p className="mt-5 text-xs uppercase tracking-[0.18em] text-neutral-500">
        {title}
      </p>

      <h3 className="mt-2 text-[38px] font-semibold leading-none text-[#2F6173]">
        {value}
      </h3>

      <p className="mt-4 text-sm leading-6 text-neutral-500">{description}</p>
    </div>
  );
}
