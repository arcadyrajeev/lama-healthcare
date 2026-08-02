import CaseCard from "@/app/components/CaseCard";

import CaseStudyHero from "./components/CaseStudyHero";
import CaseStudyCTA from "./components/CaseStudyCTA";
import { caseStudyCards } from "@/data/case-study";
import FaqSection from "@/app/components/FaqSection";

export default function CaseStudyPage() {
  return (
    <>
      <CaseStudyHero />

      <section className="bg-white py-24">
        <div className="container mx-auto  px-2">
          {/* Heading */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Real Practice Stories
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#2E2E2E]">
              Operational problems.
              <br />
              Practical solutions.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Every case study highlights a real operational challenge faced by
              an independent healthcare practice and how systematic thinking
              transformed it into a measurable outcome.
            </p>
          </div>

          {/* Cards */}

          <div className="mt-20 space-y-12">
            {caseStudyCards.map((study) => (
              <CaseCard key={study.id} data={study} />
            ))}
          </div>
        </div>
      </section>

      <CaseStudyCTA />
      <FaqSection />
    </>
  );
}
