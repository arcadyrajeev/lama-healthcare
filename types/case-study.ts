export interface CaseStudyCard {
  id: string;
  slug: string;

  // Card Content
  eyebrow?: string;
  title: string;
  description: string;
  image: string;

  // Optional Metadata
  location?: string;
  category?: string;
  industry?: string;
  result?: string;

  // CTA
  buttonText?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;

  // SEO
  seoTitle: string;
  seoDescription: string;

  // Hero
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;

  // Metadata
  location?: string;
  industry?: string;
  category?: string;
  publishedAt?: string;
  readTime?: string;

  // Overview
  overview: string;

  // Challenge
  challenge: string;

  // Solution
  solution: string;

  // Results
  results: {
    title: string;
    value: string;
  }[];

  // Timeline (Optional)
  timeline?: {
    title: string;
    description: string;
  }[];

  // Gallery
  gallery?: string[];

  // Testimonial
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };

  // Related Services
  services?: string[];

  // CTA
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}
