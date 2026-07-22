"use client";

import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative z-10">
            <Image
              src="/lama-icon.svg"
              alt="Lama"
              width={42}
              height={42}
              className="mb-4"
            />

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C08D49]">
              About Lama
            </p>

            <p className="max-w-xl text-lg leading-10 text-[#555] md:text-xl">
              <span className="font-serif text-5xl italic leading-none text-[#1F5D80]">
                Lama Healthcare
              </span>{" "}
              was built inside independent medical practices, not a boardroom.
              We experienced the same operational chaos, vendor fatigue, and
              revenue leakage that practice owners face every day.
              <br />
              <br />
              That&apos;s why we created a different model, one accountable team
              that takes ownership of your operations so you can focus on
              patient care.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="relative h-[320px] w-full max-w-[560px] overflow-hidden rounded-[32px] bg-[#EEF1F3] shadow-sm md:h-[420px]">
              <Image
                src="/about-image.jpg"
                alt="About Lama"
                fill
                className="object-cover"
              />
            </div>

            {/* Gold Ring */}
            <div className="absolute -bottom-10 right-6 h-32 w-32 rounded-full border-4 border-[#C08D49]" />

            {/* Blue Circle */}
            <div className="absolute -bottom-28 -right-24 h-56 w-56 rounded-full bg-[#446B80]" />
          </div>
        </div>
      </div>

      {/* Bottom Left Outline Lama */}
      <Image
        src="/lama-outline.svg"
        alt="Lama Outline"
        width={220}
        height={320}
        className="pointer-events-none absolute bottom-0 left-0 opacity-10"
      />
    </section>
  );
}
