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
      <div className="absolute left-1/2 top-28 hidden h-[75%] w-[2px] -translate-x-1/2 bg-[#C89A5A] lg:block" />

      <div className="space-y-8 lg:space-y-0">
        {journey.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              item.side === "left" ? "lg:justify-start" : "lg:justify-end"
            } justify-center`}
          >
            {/* Connector */}
            <div
              className={`absolute z-2 left-1/2 hidden h-[2px] w-8  bg-[#C89A5A] lg:block ${item.side === "left" ? "-translate-x-8" : "translate-x-2"}`}
            />

            {/* Dot */}
            <div className="absolute z-2 left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#C89A5A] bg-white lg:block" />

            {/* Card */}
            <div className="w-full z-10 lg:max-w-[45%] rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:shadow-md">
              <div className="flex gap-3">
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-[#DCE8EE]" />

                <div>
                  <p className="text-sm font-semibold text-[#C89A5A]">
                    {item.number}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold leading-tight text-[#222]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-gray-600">
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
