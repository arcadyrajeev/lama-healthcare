"use client";

import type { ServiceFeatures as ServiceFeaturesData } from "@/types/service";

import {
  Activity,
  BookOpenCheck,
  Building2,
  CalendarClock,
  CheckCircle2,
  SearchCheck,
  CircleDollarSign,
  Database,
  FileText,
  FileWarning,
  GraduationCap,
  ClipboardList,
  Handshake,
  HardHat,
  LockKeyhole,
  Scale,
  ShieldCheck,
  UserPlus,
  LayoutDashboard,
  Users,
  Workflow,
} from "lucide-react";

interface ServiceFeaturesProps {
  data: ServiceFeaturesData;
}

export const serviceIcons = {
  // Credentialing
  Users: Users,
  UserPlus: UserPlus,
  Database: Database,
  ShieldCheck: ShieldCheck,
  CalendarClock: CalendarClock,
  SearchCheck: SearchCheck,
  Handshake: Handshake,
  FileWarning: FileWarning,
  Activity: Activity,
  ClipboardList: ClipboardList,
  Building2: Building2,
  BookOpenCheck: BookOpenCheck,
  LockKeyhole: LockKeyhole,
  HardHat: HardHat,
  CircleDollarSign: CircleDollarSign,
  Workflow: Workflow,
  LayoutDashboard: LayoutDashboard,
  Scale: Scale,
  FileText: FileText,
  GraduationCap: GraduationCap,
} as const;

export default function ServiceFeatures({ data }: ServiceFeaturesProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
            {data.eyebrow}
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#2F2F2F] md:text-5xl">
            {data.title}
          </h2>

          <div className="mx-auto mt-8 h-[2px] w-24 bg-[#C6944A]" />

          {data.description && (
            <p className="mt-8 text-sm lg:text-lg leading-6 lg:leading-8  text-gray-600">
              {data.description}
            </p>
          )}
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {data.items.map((feature, index) => {
            const Icon = feature.icon
              ? serviceIcons[feature.icon as keyof typeof serviceIcons]
              : CheckCircle2;

            return (
              <article
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C6944A] hover:shadow-xl"
              >
                {/* Background Decoration */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#EDF5F7] transition-transform duration-300 group-hover:scale-125" />

                {/* Icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#456B7C] text-white">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="font-serif text-2xl text-[#2F2F2F]">
                    {feature.title}
                  </h3>

                  <div className="mt-5 h-[2px] w-14 bg-[#C6944A]" />

                  <p className="mt-5 leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
