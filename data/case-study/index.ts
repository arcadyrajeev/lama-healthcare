import { CaseStudy, CaseStudyCard } from "@/types/case-study";

import credentialingCaseStudy from "./the-credentialing-approval-that-wasnt";
import medicalBillingCaseStudy from "./medical-billing-turnaround";
import hipaaAndCybersecurityCaseStudy from "./how-a-phishing-attack-was-contained";
import newPracticeLaunchCaseStudy from "./what-nobody-tells-you-about-launching-a-medical-practice";
import practiceComplianceCaseStudy from "./anonymous-complaint-investigation";

export const caseStudies: CaseStudy[] = [
  credentialingCaseStudy,
  medicalBillingCaseStudy,
  hipaaAndCybersecurityCaseStudy,
  newPracticeLaunchCaseStudy,
  practiceComplianceCaseStudy,
];

export const caseStudyMap: Record<string, CaseStudy> = Object.fromEntries(
  caseStudies.map((study) => [study.slug, study]),
);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudyMap[slug];
}

export const caseStudyCards: CaseStudyCard[] = caseStudies.map((study) => ({
  id: study.slug,

  slug: study.slug,

  eyebrow: study.hero.eyebrow,

  title: study.hero.title,

  description: study.hero.subtitle,

  image: study.hero.heroImage,

  location: study.hero.location,

  result: study.results.cards[0]?.label ?? "",

  buttonText: "Read Full Story",
}));
