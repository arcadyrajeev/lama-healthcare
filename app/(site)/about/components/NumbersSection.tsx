"use client";

const stats = [
  {
    value: "10K+",
    title: "Claims Managed",
    description: "Across specialties and payer types, every month.",
  },
  {
    value: "15+",
    title: "Years Combined Experience",
    description:
      "Deep operations expertise across healthcare and practice management.",
  },
  {
    value: "6+",
    title: "Operational Functions",
    description:
      "All the moving parts of your practice managed under one accountable team.",
  },
];

export default function NumbersSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C69247]">
            The Numbers
          </p>

          <h2 className="mt-5 text-4xl leading-tight text-[#2D2D2D] md:text-6xl">
            <span className="font-serif">Real experience and real Results</span>

            <br />

            <span className="font-serif italic text-[#456B7C]">
              Proven through our numbers.
            </span>
          </h2>
        </div>

        {/* Stats Card */}
        <div className="relative mt-16 overflow-hidden rounded-[40px] bg-[#2F5564]">
          {/* Decorative Shapes */}
          <div className="absolute -left-24 top-12 h-52 w-52 rounded-full bg-[#6E8C99]/40" />

          <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full border-4 border-[#D5A253]" />

          <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="flex flex-col items-center px-8 py-14 text-center lg:px-12"
              >
                <h3 className="font-serif text-6xl text-white lg:text-7xl">
                  {stat.value}
                </h3>

                <h4 className="mt-8 text-2xl font-semibold text-white">
                  {stat.title}
                </h4>

                <p className="mt-5 max-w-xs text-base leading-8 text-white/80">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
