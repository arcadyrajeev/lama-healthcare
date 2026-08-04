// types/case-study.ts

export interface CaseStudyCard {
  id: string;

  slug: string;

  eyebrow: string;

  title: string;

  description: string;

  image: string;

  location: string;

  result: string;

  buttonText: string;
}

export interface CaseStudy {
  slug: string;

  hero: HeroSection;

  overview: OverviewSection;

  challenge: ContentSection;

  timeline: TimelineItem[];

  findings: FindingsSection;

  solution: SolutionSection;

  results: ResultsSection;

  lessons: LessonsSection;

  quote: QuoteSection;

  cta: CTASection;

  featuredService: RelatedService;

  relatedBlogs: RelatedBlog[];
}

export interface HeroSection {
  eyebrow: string;
  title: string;
  subtitle: string;

  category: string;

  tags: string[];

  location: string;

  readTime: string;

  publishedBy: string;

  heroImage: string;
}

export interface OverviewSection {
  situation: string;

  problem: string;

  solution: string;

  outcome: string;
}

export interface ContentSection {
  eyebrow: string;

  title: string;

  subtitle?: string;

  image?: string;

  description: string[];
}

export interface TimelineItem {
  step: string;

  title: string;

  description: string;
}

export interface FindingsSection {
  eyebrow: string;

  title: string;

  subtitle?: string;

  cards: FindingCard[];
}

export interface FindingCard {
  title: string;

  description: string;

  icon?: string;
}

export interface SolutionSection {
  eyebrow: string;

  title: string;

  subtitle?: string;

  steps: SolutionStep[];
}

export interface SolutionStep {
  title: string;

  description: string;

  icon?: string;
}

export interface ResultsSection {
  eyebrow: string;

  title: string;

  subtitle?: string;

  cards: ResultCard[];
}

export interface ResultCard {
  value: string;

  label: string;

  description?: string;
}

export interface LessonsSection {
  eyebrow: string;

  title: string;

  items: string[];
}

export interface QuoteSection {
  text: string;

  author?: string;
}

export interface CTASection {
  eyebrow: string;

  title: string;

  description: string;

  button: string;

  href?: string;
}

export interface RelatedService {
  slug: string;
  title: string;
  description: string;
  href?: string;
  image?: string;
  cta?: string;
}
export interface RelatedBlog {
  slug: string;

  title: string;

  image?: string;
}
