import CaseCard from "@/app/components/CaseCard";

import { caseStudyCards } from "@/data/case-study";

export default function PracticeOneCaseStudy() {
  const casestudy = caseStudyCards.find(
    (item) => item.slug === "practice-one-case",
  );

  if (!casestudy) return null;

  return (
    <section className="bg-neutral-50 py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.25em] text-accent">
            Real Results
          </span>

          <h2 className="mt-4 font-serif text-5xl text-[#2E2E2E]">
            Practice One in action.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            See how a rapidly growing medical practice reduced credentialing
            delays by eliminating manual work at the front of the process.
          </p>
        </div>

        <CaseCard data={casestudy} />
      </div>
    </section>
  );
}
