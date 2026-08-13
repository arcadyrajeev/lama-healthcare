"use client";

import { useState } from "react";
import {
  ChevronDown,
  Mail,
  MessageSquare,
  Phone,
  User,
  Building2,
  DollarSign,
  Stethoscope,
  Clock,
} from "lucide-react";

const practiceCounts = [
  "1 practice",
  "2–3 practices",
  "4–10 practices",
  "11–25 practices",
  "25+ practices",
];

const specialties = [
  "Primary Care",
  "Mental / Behavioral Health",
  "Dental",
  "Cardiology",
  "Orthopedics",
  "Dermatology",
  "Internal Medicine",
  "Family Medicine",
  "Pediatrics",
  "Other",
];

const billingSetups = [
  "We handle billing internally",
  "We use an external billing company",
  "We use a combination of both",
  "We're not currently sure",
];

const collectionRanges = [
  "Under $50K / month",
  "$50K–$100K / month",
  "$100K–$250K / month",
  "$250K–$500K / month",
  "$500K+ / month",
  "I'm not sure",
];

const timelines = [
  "Immediately",
  "Within 30 days",
  "Within 1–3 months",
  "Just exploring options",
];

export default function GetAuditForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [practiceCount, setPracticeCount] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [billingSetup, setBillingSetup] = useState("");
  const [monthlyCollections, setMonthlyCollections] = useState("");
  const [timeline, setTimeline] = useState("");

  const [problem, setProblem] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus({
      type: null,
      message: "",
    });

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          practiceCount,
          specialty,
          billingSetup,
          monthlyCollections,
          timeline,
          problem,
          additionalDetails,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit your audit request.");
      }

      setStatus({
        type: "success",
        message:
          "Your audit request has been received. Our team will be in touch shortly.",
      });

      setFullName("");
      setEmail("");
      setPhone("");
      setPracticeCount("");
      setSpecialty("");
      setBillingSetup("");
      setMonthlyCollections("");
      setTimeline("");
      setProblem("");
      setAdditionalDetails("");
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-2">
      <div className="mx-auto max-w-4xl rounded-[28px] bg-white p-6 lg:p-8">
        {/* Header */}
        <div className="mb-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C6944A]">
            Free Practice Audit
          </p>

          <h2 className="mt-2 font-serif text-2xl leading-tight text-[#2F2F2F]">
            Let&apos;s find where your practice is losing revenue.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            Tell us a little about your practice and the challenges you&apos;re
            facing. We&apos;ll use this information to understand where we can
            help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* -------------------------------- */}
          {/* Contact Information */}
          {/* -------------------------------- */}

          <div>
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
              Full Name
            </label>

            <div className="relative">
              <User
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
              />

              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Smith"
                className="h-12 w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#456B7C]"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
                Work Email
              </label>

              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@practice.com"
                  className="h-12 w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#456B7C]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                />

                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(702) XXX XXXX"
                  className="h-12 w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#456B7C]"
                />
              </div>
            </div>
          </div>

          {/* -------------------------------- */}
          {/* Practice Information */}
          {/* -------------------------------- */}

          <div className="border-t border-gray-100 pt-5">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C6944A]">
              About Your Practice
            </p>

            {/* Practice Count + Specialty */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* Number of practices */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
                  Number of Practices
                </label>

                <div className="relative">
                  <Building2
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                  />

                  <select
                    required
                    value={practiceCount}
                    onChange={(e) => setPracticeCount(e.target.value)}
                    className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pl-11 pr-10 text-sm outline-none transition focus:border-[#456B7C]"
                  >
                    <option value="">Select</option>

                    {practiceCounts.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                  />
                </div>
              </div>

              {/* Specialty */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
                  Practice Specialty
                </label>

                <div className="relative">
                  <Stethoscope
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                  />

                  <select
                    required
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pl-11 pr-10 text-sm outline-none transition focus:border-[#456B7C]"
                  >
                    <option value="">Select</option>

                    {specialties.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                  />
                </div>
              </div>
            </div>

            {/* Billing + Collections */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {/* Billing Setup */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
                  Current Billing Setup
                </label>

                <div className="relative">
                  <DollarSign
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                  />

                  <select
                    required
                    value={billingSetup}
                    onChange={(e) => setBillingSetup(e.target.value)}
                    className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pl-11 pr-10 text-sm outline-none transition focus:border-[#456B7C]"
                  >
                    <option value="">Select</option>

                    {billingSetups.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                  />
                </div>
              </div>

              {/* Monthly Collections */}
              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
                  Approx. Monthly Collections
                </label>

                <div className="relative">
                  <DollarSign
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                  />

                  <select
                    required
                    value={monthlyCollections}
                    onChange={(e) => setMonthlyCollections(e.target.value)}
                    className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pl-11 pr-10 text-sm outline-none transition focus:border-[#456B7C]"
                  >
                    <option value="">Select</option>

                    {collectionRanges.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------- */}
          {/* Problem */}
          {/* -------------------------------- */}

          <div className="border-t border-gray-100 pt-5">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C6944A]">
              What&apos;s Going Wrong?
            </p>

            <div>
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
                What&apos;s the biggest challenge you&apos;re facing?
              </label>

              <div className="relative">
                <MessageSquare
                  size={16}
                  className="absolute left-4 top-4 text-[#456B7C]"
                />

                <textarea
                  required
                  rows={4}
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="For example: we're seeing a high number of denied claims, slow payments, or we're unsure where revenue is being lost..."
                  className="w-full resize-none rounded-xl border border-gray-200 py-4 pl-11 pr-4 text-sm leading-6 outline-none transition focus:border-[#456B7C]"
                />
              </div>
            </div>

            {/* Additional Details */}
            <div className="mt-4">
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
                Anything else we should know?
                <span className="ml-1 font-normal normal-case text-gray-400">
                  Optional
                </span>
              </label>

              <textarea
                rows={3}
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                placeholder="Share any additional context about your practice or goals..."
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#456B7C]"
              />
            </div>
          </div>

          {/* -------------------------------- */}
          {/* Timeline */}
          {/* -------------------------------- */}

          <div className="border-t border-gray-100 pt-5">
            <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[#2F2F2F]">
              How soon are you looking for help?
            </label>

            <div className="relative">
              <Clock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
              />

              <select
                required
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pl-11 pr-10 text-sm outline-none transition focus:border-[#456B7C]"
              >
                <option value="">Select</option>

                {timelines.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#456B7C]"
              />
            </div>
          </div>

          {/* -------------------------------- */}
          {/* Status */}
          {/* -------------------------------- */}

          {status.type && (
            <div
              className={`rounded-xl px-4 py-3 text-sm ${
                status.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* -------------------------------- */}
          {/* Submit */}
          {/* -------------------------------- */}

          <div className="pt-1">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#C6944A] px-8 text-sm font-medium text-white transition hover:bg-[#B4833E] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Request My Free Audit"}
            </button>

            <p className="mt-3 text-[11px] leading-5 text-gray-500">
              We&apos;ll review your information and contact you to discuss the
              next steps. Please do not submit patient-identifiable information
              through this form.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
