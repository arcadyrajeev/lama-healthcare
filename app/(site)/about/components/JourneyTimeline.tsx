"use client";

const journey = [
  {
    number: "01",
    title: "Running Practices",
    description: "We've lived the chaos of independent practice operations.",
    side: "left",
  },
  {
    number: "02",
    title: "Managing six vendors",
    description: "We've lived the chaos of independent practice operations.",
    side: "right",
  },
  {
    number: "03",
    title: "Watching revenue disappear",
    description: "Denials, delays and missed opportunities became our normal.",
    side: "left",
  },
  {
    number: "04",
    title: "Building internal systems",
    description:
      "We built frameworks, dashboards and processes we couldn't find.",
    side: "right",
  },
  {
    number: "05",
    title: "Helping other practices",
    description:
      "Now we use what we built to bring credibility and accountability to practices.",
    side: "left",
  },
];

export default function JourneyTimeline() {
  return (
    <div className="relative w-full py-8">
      {/* Vertical Timeline */}
      <div className="absolute left-1/2 top-20 hidden h-[78%] w-[2px] -translate-x-1/2 bg-[#C89A5A] lg:block" />

      <div className="space-y-10 lg:space-y-16">
        {journey.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              item.side === "left" ? "lg:justify-start" : "lg:justify-end"
            } justify-center`}
          >
            {/* Connector */}
            <div className="absolute left-1/2 hidden h-[2px] w-16 -translate-x-1/2 bg-[#C89A5A] lg:block" />

            {/* Dot */}
            <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#C89A5A] bg-white lg:block" />

            {/* Card */}
            <div className="w-full max-w-sm rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-md">
              <div className="flex gap-5">
                <div className="h-16 w-16 flex-shrink-0 rounded-full bg-[#DCE8EE]" />

                <div>
                  <p className="text-sm font-semibold text-[#C89A5A]">
                    {item.number}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold leading-tight text-[#222]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
