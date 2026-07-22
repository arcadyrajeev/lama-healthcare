import type { CaseStudyCard } from "./case-study";
import type { BlogCard } from "./blog";

export interface RelatedBlogs {
  eyebrow: string;
  title: string;
  description?: string;

  blogs: BlogCard[];
}

export interface Service {
  id: string;
  slug: string;

  seo: ServiceSEO;

  hero: ServiceHero;

  problem?: ServiceProblem;

  caseStudy?: CaseStudyCard;

  features?: ServiceFeatures;

  difference?: ServiceDifference;

  audience?: ServiceAudience;

  process?: ServiceProcess;

  stats?: ServiceStats;

  faq?: ServiceFAQ;

  cta: ServiceCTA;

  relatedBlogs?: RelatedBlogs;
}

export interface ServiceSEO {
  title: string;
  description: string;
  keywords?: string[];
}

export interface ServiceHero {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;

  image: string;

  ctaText: string;
  ctaLink: string;
}

export interface ServiceProblem {
  eyebrow: string;

  title: string;

  highlight?: string;

  description: string;

  image: string;

  ctaText?: string;

  ctaLink?: string;
}

export interface ServiceFeatures {
  eyebrow: string;

  title: string;

  description?: string;

  items: FeatureItem[];
}

export interface FeatureItem {
  title: string;

  description: string;

  icon?: string;
}

export interface ServiceBenefits {
  eyebrow: string;

  title: string;

  description?: string;

  items: BenefitItem[];
}

export interface BenefitItem {
  title: string;

  description: string;

  icon?: string;
}

export interface ServiceProcess {
  eyebrow: string;

  title: string;

  description?: string;

  steps: ProcessStep[];
}

export interface ProcessStep {
  title: string;

  description: string;
}

export interface ServiceFAQ {
  eyebrow: string;

  title: string;

  description?: string;

  items: FAQItem[];
}

export interface FAQItem {
  question: string;

  answer: string;
}

export interface ServiceCTA {
  eyebrow: string;
  title: string;
  description?: string;

  primaryButton: CTAButton;
  secondaryButton: CTAButton;
}

export interface CTAButton {
  label: string;
  href: string;
}

export interface ServiceDifference {
  eyebrow: string;
  title: string;
  description?: string;
  highlight?: string;
  items: DifferenceItem[];
}

export interface DifferenceItem {
  title: string;
  description: string;
}

export interface ServiceAudience {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  audiences: AudienceItem[];
}

export interface AudienceItem {
  title: string;
  description: string;
}

export interface ServiceStats {
  eyebrow: string;
  title: string;
  description?: string;
  stats: StatItem[];
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}
