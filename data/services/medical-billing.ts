// data/services/medical-billing.ts

import { Service } from "@/types/service";

const medicalBilling: Service = {
  id: "medical-billing",

  slug: "medical-billing",

  seo: {
    title: "Medical Billing & Revenue Cycle Management | Lama Healthcare",

    description:
      "Take control of your revenue cycle with proactive medical billing management and operational oversight from Lama Healthcare.",

    keywords: [
      "Medical Billing",
      "Revenue Cycle Management",
      "RCM",
      "Healthcare Billing",
      "Medical Claims",
      "Lama Healthcare",
    ],
  },

  hero: {
    eyebrow: "Medical Billing & Revenue Cycle",

    title: "Your biller works",

    highlight: "for their business. We work for yours.",

    description:
      "Most practices outsource billing and hope everything is handled correctly. We become your operational partner, providing oversight, accountability, and strategic direction to maximize collections.",

    image: "/services/medical-billing/hero.jpg",

    ctaText: "Book Discovery Call",

    ctaLink: "/contact",
  },

  problem: {
    eyebrow: "The Problem",

    title: "Billing isn't broken.",

    highlight: "Visibility is.",

    description:
      "Most practices don't know where revenue is leaking because vendors work independently and no one owns the complete process. Without transparency, denied claims, delayed reimbursements, and operational inefficiencies become normal.",

    image: "/services/medical-billing/problem.jpg",

    ctaText: "Get Your Free Audit",

    ctaLink: "/contact",
  },

  caseStudy: {
    id: "billing-case-study",

    slug: "medical-billing-turnaround",

    eyebrow: "Case Study",

    title: "Revenue recovered after fixing billing workflows.",

    description:
      "By improving communication between billing, credentialing, and practice staff, the client significantly reduced denials and accelerated reimbursements.",

    image: "/case-studies/billing.jpg",

    location: "Las Vegas, Nevada",

    result: "35% increase in collections",

    buttonText: "Read Case Study",
  },

  features: {
    eyebrow: "What's Included",

    title: "Everything your practice needs.",

    description:
      "Our team works alongside your existing staff and billing vendors to strengthen every part of your revenue cycle.",

    items: [
      {
        title: "Claims Monitoring",
        description:
          "Track submitted claims from submission to reimbursement and identify issues before they impact cash flow.",
      },
      {
        title: "Denial Management",
        description:
          "Reduce recurring denials through proactive analysis and corrective action.",
      },
      {
        title: "Revenue Reporting",
        description:
          "Receive clear monthly reports with meaningful business insights.",
      },
      {
        title: "Vendor Oversight",
        description:
          "We coordinate directly with your billing partners and hold them accountable.",
      },
    ],
  },

  difference: {
    eyebrow: "The Lama Difference",

    title: "We're not another billing company.",

    description:
      "Most billing vendors execute tasks. We provide leadership, oversight, and accountability across your entire revenue cycle.",

    items: [
      {
        title: "Strategic Oversight",
        description:
          "We manage the entire billing process instead of simply processing claims.",
      },
      {
        title: "Vendor Accountability",
        description:
          "Your existing billing company becomes accountable to measurable KPIs.",
      },
      {
        title: "Business Reporting",
        description:
          "Understand exactly where revenue is leaking and what needs improvement.",
      },
      {
        title: "Operational Leadership",
        description:
          "We become an extension of your practice and guide long-term operational success.",
      },
    ],
  },

  audience: {
    eyebrow: "Who It's For",

    title: "Built for practices that need operational clarity.",

    description:
      "Whether you're a solo provider or a growing healthcare organization, our process adapts to your workflow.",

    image: "/services/medical-billing/audience.jpg",

    audiences: [
      {
        title: "Independent Practices",
        description:
          "Gain experienced operational support without hiring an in-house revenue cycle manager.",
      },
      {
        title: "Multi-Provider Clinics",
        description:
          "Improve communication between billing, credentialing, and front-office teams.",
      },
      {
        title: "Growing Healthcare Groups",
        description:
          "Build scalable revenue cycle processes that support sustainable growth.",
      },
      {
        title: "Practices Changing Vendors",
        description:
          "Maintain continuity while improving accountability and financial performance.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",

    title: "A simple process with measurable outcomes.",

    description:
      "Every engagement follows a structured framework designed to improve operational efficiency and financial performance.",

    steps: [
      {
        title: "Discovery & Assessment",
        description:
          "We review your current workflows, reports, vendors, and operational challenges.",
      },
      {
        title: "Strategic Planning",
        description:
          "Develop a customized roadmap aligned with your practice goals.",
      },
      {
        title: "Implementation",
        description:
          "Coordinate improvements with your team and existing vendors.",
      },
      {
        title: "Ongoing Optimization",
        description:
          "Continuous reporting, monitoring, and recommendations ensure long-term success.",
      },
    ],
  },

  stats: {
    eyebrow: "By The Numbers",

    title: "Helping practices achieve measurable outcomes.",

    description:
      "We focus on improving operational efficiency while creating sustainable financial growth.",

    stats: [
      {
        value: "98%",
        label: "Clean Claim Rate",
        description:
          "Accurate claim submissions improve reimbursement timelines.",
      },
      {
        value: "30%",
        label: "Reduction in Denials",
        description: "Identify recurring issues before they impact revenue.",
      },
      {
        value: "15+",
        label: "Years of Experience",
        description:
          "Supporting healthcare providers across multiple specialties.",
      },
      {
        value: "24/7",
        label: "Dedicated Support",
        description: "Strategic guidance whenever your practice needs it.",
      },
    ],
  },

  faq: {
    eyebrow: "Frequently Asked Questions",

    title: "Everything you need to know.",

    description:
      "Answers to common questions about our medical billing and revenue cycle services.",

    items: [
      {
        question: "Do you replace our existing billing company?",
        answer:
          "No. We work alongside your existing billing partner, providing oversight, accountability, and strategic guidance.",
      },
      {
        question: "Can you work with any EHR system?",
        answer:
          "Yes. Our process is platform-agnostic and integrates with your existing technology stack.",
      },
      {
        question: "How long does onboarding take?",
        answer:
          "Most practices are fully onboarded within two to four weeks depending on workflow complexity.",
      },
      {
        question: "Will we receive monthly reports?",
        answer:
          "Absolutely. We provide transparent reporting with actionable operational insights.",
      },
    ],
  },

  cta: {
    eyebrow: "Let's Talk",

    title: "Ready to strengthen your revenue cycle?",

    description:
      "Discover how Lama Healthcare can improve visibility, accountability, and financial performance for your practice.",

    primaryButton: {
      label: "Schedule a Consultation",
      href: "/contact",
    },

    secondaryButton: {
      label: "Call Our Team",
      href: "tel:+19002116900",
    },
  },

  relatedBlogs: {
    eyebrow: "Resources",

    title: "Continue Learning",

    description:
      "Explore more insights on revenue cycle management, medical billing, and healthcare operations.",

    blogs: [
      {
        id: "billing-best-practices",
        slug: "medical-billing-best-practices",
        title:
          "5 Medical Billing Practices That Improve Revenue Cycle Performance",
        excerpt:
          "Discover practical strategies healthcare organizations can implement to reduce claim denials and improve cash flow.",
        image: "/blogs/billing-practices.jpg",
        category: "Medical Billing",
        publishedAt: "July 22, 2026",
        readTime: "6 min read",
        author: "Lama Healthcare",
      },
      {
        id: "reduce-denials",
        slug: "reduce-medical-claim-denials",
        title: "How to Reduce Medical Claim Denials Before They Happen",
        excerpt:
          "Learn how proactive monitoring and operational oversight can significantly reduce denials.",
        image: "/blogs/claim-denials.jpg",
        category: "Revenue Cycle",
        publishedAt: "July 15, 2026",
        readTime: "5 min read",
        author: "Lama Healthcare",
      },
      {
        id: "rcm-guide",
        slug: "complete-revenue-cycle-management-guide",
        title: "The Complete Guide to Revenue Cycle Management",
        excerpt:
          "A comprehensive overview of revenue cycle management and how it impacts healthcare profitability.",
        image: "/blogs/rcm-guide.jpg",
        category: "Healthcare Operations",
        publishedAt: "July 8, 2026",
        readTime: "8 min read",
        author: "Lama Healthcare",
      },
    ],
  },
};

export default medicalBilling;
