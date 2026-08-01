"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;

      const height = document.documentElement.scrollHeight - window.innerHeight;

      setProgress((scrollTop / height) * 100);
    };

    update();

    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent">
      <div
        className="h-full bg-teal-400 transition-all"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
