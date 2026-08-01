"use client";

import { useEffect, useRef } from "react";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-8 lg:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-[#C69247]">
            Meet Lama Healthcare
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl lg:rounded-[36px] border border-neutral-200 bg-neutral-100 shadow-xl">
          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            autoPlay
            muted
            loop
            controls
            playsInline
            preload="auto"
            poster="/images/video-poster.jpg"
          >
            <source src="/videos/lama-intro.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mx-auto mt-10 max-w-4xl text-center">
          <h2 className="font-serif text-4xl leading-tight text-[#2E2E2E] lg:text-6xl">
            See who we are,
            <br />
            <span className="italic text-[#456B7C]">
              before we talk about services.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
