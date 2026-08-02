import { CaseStudy } from "@/types/case-study";

export const medicalBillingCaseStudy: CaseStudy = {
  slug: "medical-billing-turnaround",

  hero: {
    eyebrow: "Case Study",
    title: "What Your Billing Vendor Isn't Telling You",
    subtitle:
      "And why the revenue you're losing isn't showing up on any report they send you.",
    category: "Medical Billing",
    tags: [
      "Revenue Cycle Management",
      "Billing Oversight",
      "Denial Management",
    ],
    location: "Las Vegas, Nevada",
    readTime: "6 min",
    publishedBy: "Lama Healthcare",
    heroImage: "/images/case-study/revenue-report.webp",
  },

  overview: {
    situation:
      "A successful independent medical practice had worked with the same billing vendor for more than two years. Monthly reports appeared healthy, and nothing suggested a major operational issue.",

    problem:
      "Revenue continued to leak through recurring claim denials that no one could explain. The billing vendor treated each denial individually instead of identifying the underlying pattern.",

    solution:
      "Lama Healthcare audited the complete revenue cycle, connected billing with credentialing, corrected provider enrollment discrepancies, and introduced an accountable communication process.",

    outcome:
      "Within ninety days the denial rate dropped significantly because the root cause was removed rather than repeatedly appealed.",
  },

  challenge: {
    eyebrow: "The Challenge",

    title: "The reports looked healthy. The revenue wasn't.",

    description: [
      "Every month the practice received billing reports showing submitted claims, payments received and denials being worked.",

      "Nothing suggested that thousands of dollars were quietly disappearing every month.",

      "The real issue wasn't poor billing. It was that nobody owned the entire revenue cycle.",
    ],
  },

  timeline: [
    {
      step: "01",
      title: "Vendor Relationship",
      description:
        "Practice worked with the same billing vendor for more than two years.",
    },
    {
      step: "02",
      title: "Hidden Revenue Loss",
      description:
        "Denials slowly increased while monthly reports continued looking acceptable.",
    },
    {
      step: "03",
      title: "Investigation",
      description:
        "Lama Healthcare reviewed billing, credentialing and payer enrollments together.",
    },
    {
      step: "04",
      title: "Root Cause",
      description:
        "Providers were enrolled under incorrect taxonomy codes that billing never verified.",
    },
    {
      step: "05",
      title: "Correction",
      description:
        "Enrollments were corrected and communication between vendors was established.",
    },
    {
      step: "06",
      title: "Outcome",
      description:
        "Recurring denials reduced dramatically because the real problem had been fixed.",
    },
  ],

  findings: {
    eyebrow: "What We Found",

    title: "The billing vendor wasn't the problem.",

    subtitle: "The process was.",

    cards: [
      {
        title: "Disconnected Vendors",
        description:
          "Billing and credentialing operated independently without sharing provider information.",
      },
      {
        title: "Incorrect Taxonomy",
        description:
          "Providers had been enrolled under specialty codes that didn't match the services billed.",
      },
      {
        title: "Invisible Patterns",
        description:
          "Recurring denials were treated individually instead of identifying a systemic issue.",
      },
      {
        title: "No Accountability",
        description:
          "Nobody owned the handoff between enrollment and claim submission.",
      },
    ],
  },

  solution: {
    eyebrow: "How We Fixed It",

    title: "We repaired the process, not just the claims.",

    steps: [
      {
        title: "Revenue Cycle Audit",
        description:
          "Reviewed billing workflow, credentialing records and payer enrollments together.",
      },
      {
        title: "Corrected Enrollment",
        description:
          "Updated taxonomy codes so provider enrollments accurately reflected billed specialties.",
      },
      {
        title: "Connected Billing & Credentialing",
        description:
          "Created communication checkpoints before any provider submitted claims.",
      },
      {
        title: "Pattern Monitoring",
        description:
          "Implemented denial reviews that escalate recurring issues instead of repeatedly appealing them.",
      },
    ],
  },

  results: {
    eyebrow: "Results",

    title: "Fixing the gap changed the outcome.",

    cards: [
      {
        value: "90 Days",
        label: "Implementation Period",
      },
      {
        value: "↓",
        label: "Denial Rate Reduced",
      },
      {
        value: "100%",
        label: "Billing & Credentialing Visibility",
      },
      {
        value: "1",
        label: "Accountable Operational Partner",
      },
    ],
  },

  lessons: {
    eyebrow: "Key Takeaways",

    title: "What every independent practice should learn",

    items: [
      "Billing reports only show what happened, not why it happened.",
      "Recurring denials almost always have an operational root cause.",
      "Credentialing and billing cannot operate in isolation.",
      "Someone must own the complete revenue cycle.",
      "Revenue is protected by systems, not assumptions.",
      "The goal is preventing denials, not simply appealing them.",
    ],
  },

  quote: {
    text: "The fix wasn't in the billing workflow. The fix was in the gap between two vendors who had been operating independently in the same practice.",
  },

  cta: {
    eyebrow: "Ready to Find the Gap?",

    title: "Let's find out what your billing is actually doing.",

    description:
      "We'll review your revenue cycle, identify where revenue is being lost, and show you exactly what needs attention before it becomes another month's worth of denials.",

    button: "Schedule Discovery Call",
  },

  featuredService: {
    slug: "medical-billing",

    title: "Medical Billing & Revenue Cycle Management",

    description:
      "Gain complete visibility into your revenue cycle, reduce denials, improve collections, and keep every dollar accountable through one operational partner.",

    href: "/services/billing",

    cta: "Explore Service",
  },

  relatedBlogs: [
    {
      slug: "credentialing-approval-wasnt",
      title: "The Credentialing Approval That Wasn't",
    },
    {
      slug: "phishing-attack-contained",
      title: "The Email Looked Exactly Like Their Vendor. It Wasn't.",
    },
    {
      slug: "launching-medical-practice",
      title: "What Nobody Tells You About Launching a Medical Practice",
    },
  ],
};

export default medicalBillingCaseStudy;
