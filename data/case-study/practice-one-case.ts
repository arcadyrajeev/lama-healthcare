import { CaseStudy } from "@/types/case-study";

export const practiceOneCaseStudy: CaseStudy = {
  slug: "practice-one-case",

  hero: {
    eyebrow: "Case Study",
    title: "Credentialing Didn't Get Faster.",
    subtitle:
      "The practice simply stopped losing weeks before the payer ever touched the application.",
    category: "Practice One",
    tags: ["Provider Credentialing", "Practice Operations", "Automation"],
    location: "Multi Provider Medical Practice",
    readTime: "6 min",
    publishedBy: "Lama Healthcare",
    heroImage: "/images/case-study/practice-one-dashboard.webp",
  },

  overview: {
    situation:
      "A fast growing medical practice was onboarding providers quickly to keep up with patient demand, but every new provider waited three to four months before becoming billable.",

    problem:
      "Most of the delay happened before payer review. Staff spent weeks chasing documents, manually entering provider information, monitoring payer portals, and answering constant status requests.",

    solution:
      "Practice One automated document collection, extracted provider data from uploaded documents, monitored payer communications automatically, and gave providers and clients complete visibility throughout the credentialing process.",

    outcome:
      "Credentialing time dropped from 90 to 120 days down to just 30 to 45 days by eliminating unnecessary operational delays while keeping every stakeholder informed.",
  },

  challenge: {
    eyebrow: "The Challenge",

    title: "The payer wasn't the biggest delay.",

    description: [
      "The practice assumed credentialing simply took months because that's how long payers worked.",

      "In reality, weeks disappeared before applications even reached the payer because of manual administrative work.",

      "Every missing document, overlooked email and manual status update quietly extended the timeline.",
    ],
  },

  timeline: [
    {
      step: "01",
      title: "Rapid Hiring",
      description:
        "The practice expanded quickly and needed providers billing as soon as possible.",
    },
    {
      step: "02",
      title: "Operational Bottlenecks",
      description:
        "Credentialers spent most of their time collecting paperwork, entering data and tracking payer updates manually.",
    },
    {
      step: "03",
      title: "Practice One Deployed",
      description:
        "Document collection, provider onboarding and payer monitoring became automated.",
    },
    {
      step: "04",
      title: "Workflow Visibility",
      description:
        "Providers and practice managers could track progress without requesting manual updates.",
    },
    {
      step: "05",
      title: "Administrative Delays Removed",
      description:
        "Applications reached payers faster because preparation work no longer stalled the process.",
    },
    {
      step: "06",
      title: "Outcome",
      description:
        "Credentialing timelines improved from 90 to 120 days down to 30 to 45 days.",
    },
  ],

  findings: {
    eyebrow: "What We Found",

    title: "Credentialing wasn't slow.",

    subtitle: "The administrative work around it was.",

    cards: [
      {
        title: "Document Collection",
        description:
          "Credentialers repeatedly chased providers for the same paperwork before applications could even begin.",
      },
      {
        title: "Manual Data Entry",
        description:
          "Provider information was typed manually from uploaded documents, creating delays and avoidable errors.",
      },
      {
        title: "Hidden Payer Updates",
        description:
          "Important emails and portal changes were buried inside inboxes, delaying responses to payer requests.",
      },
      {
        title: "Limited Visibility",
        description:
          "Providers and practice managers had no clear view of credentialing progress, generating constant follow up requests.",
      },
    ],
  },

  solution: {
    eyebrow: "How We Fixed It",

    title: "We automated the work surrounding credentialing.",

    steps: [
      {
        title: "One Time Document Collection",
        description:
          "Providers upload every required document once through a single secure link from any device.",
      },
      {
        title: "Automatic Data Extraction",
        description:
          "Practice One reads provider documents and populates application information automatically.",
      },
      {
        title: "Continuous Payer Monitoring",
        description:
          "Incoming payer correspondence is monitored automatically so every enrollment advances as soon as something changes.",
      },
      {
        title: "Complete Process Visibility",
        description:
          "Providers, credentialers and clients all see accurate real time status updates without manual reporting.",
      },
    ],
  },

  results: {
    eyebrow: "Results",

    title: "The process changed. So did the timeline.",

    cards: [
      {
        value: "30 to 45",
        label: "Days to Credential",
      },
      {
        value: "75%",
        label: "Faster Provider Onboarding",
      },
      {
        value: "100%",
        label: "Credentialing Visibility",
      },
      {
        value: "0",
        label: "Manual Status Boards",
      },
    ],
  },

  lessons: {
    eyebrow: "Key Takeaways",

    title: "What growing practices should learn",

    items: [
      "Most credentialing delays happen before payer review begins.",
      "Document collection is often the biggest operational bottleneck.",
      "Manual data entry creates both delays and avoidable errors.",
      "Providers lose confidence when they cannot see progress.",
      "Automation should remove administrative work, not replace operational judgment.",
      "Visibility reduces status calls because everyone already knows what is happening.",
    ],
  },

  quote: {
    text: "Credentialing takes as long as it takes. This practice simply stopped adding weeks that never belonged there in the first place.",
  },

  cta: {
    eyebrow: "Ready to Remove the Bottlenecks?",

    title:
      "See what Practice One could remove from your credentialing process.",

    description:
      "We'll walk through your current onboarding workflow, identify where time is being lost, and show you how Practice One automates the repetitive work without sacrificing visibility or compliance.",

    button: "Schedule Discovery Call",
  },

  featuredService: {
    slug: "practice-one",

    title: "Practice One Credentialing Platform",

    description:
      "Automate provider onboarding, monitor payer activity, eliminate manual status tracking, and give every stakeholder complete visibility throughout credentialing.",

    href: "/practice-one",

    cta: "Explore Practice One",
  },

  relatedBlogs: [
    {
      slug: "credentialing-approval-wasnt",
      title: "The Credentialing Approval That Wasn't",
    },
    {
      slug: "launching-medical-practice",
      title: "What Nobody Tells You About Launching a Medical Practice",
    },
    {
      slug: "medical-billing-turnaround",
      title: "What Your Billing Vendor Isn't Telling You",
    },
  ],
};

export default practiceOneCaseStudy;
