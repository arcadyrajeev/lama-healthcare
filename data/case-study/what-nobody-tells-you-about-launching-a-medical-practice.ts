import { CaseStudy } from "@/types/case-study";

export const newPracticeLaunchCaseStudy: CaseStudy = {
  slug: "what-nobody-tells-you-about-launching-a-medical-practice",

  hero: {
    eyebrow: "Case Study",

    title: "What Nobody Tells You About Launching a Medical Practice",

    subtitle:
      "A nurse practitioner did everything right as a clinician. The business nearly broke her before it had a chance.",

    category: "New Practice Consulting",

    tags: [
      "Practice Operations",
      "Credentialing",
      "Practice Launch",
      "Compliance",
    ],

    location: "Las Vegas, Nevada",

    readTime: "6 min",

    publishedBy: "Lama Healthcare",

    heroImage: "/images/case-study/practice-launch-story.webp",
  },

  overview: {
    situation:
      "After spending a decade inside a successful physician group, a nurse practitioner decided to launch her own independent medical practice. Clinically she was fully prepared, but operationally she had no roadmap for everything required before opening.",

    problem:
      "Within three months the practice was experiencing delayed credentialing, incomplete OSHA documentation, billing failures and compliance gaps that were silently costing revenue.",

    solution:
      "Lama Healthcare audited every operational system, corrected credentialing, rebuilt compliance programs, fixed the billing workflow and established the infrastructure needed for long term growth.",

    outcome:
      "Within weeks the practice regained operational control, billing stabilized, credentialing approvals moved forward and the foundation was finally built correctly.",
  },

  challenge: {
    eyebrow: "The Challenge",

    title:
      "An excellent clinician doesn't automatically become an operational expert.",

    subtitle:
      "Launching a medical practice requires hundreds of operational decisions before the first patient arrives.",

    image: "/images/case-study/practice-launch-challenge.webp",

    description: [
      "The provider had everything needed to deliver exceptional patient care but no clear roadmap for building the business behind it.",

      "Credentialing applications, payer enrollment, OSHA documentation, HIPAA policies, billing systems and operational workflows were all being built simultaneously with little visibility.",

      "By the time problems became obvious, patients were already scheduled and rebuilding the foundation became significantly more difficult.",
    ],
  },

  timeline: [
    {
      step: "01",

      title: "Practice Launch",

      description:
        "A nurse practitioner opened an independent medical practice after years inside a physician group.",
    },

    {
      step: "02",

      title: "Early Operations",

      description:
        "Patients arrived while credentialing, compliance and billing systems were still incomplete.",
    },

    {
      step: "03",

      title: "Problems Surface",

      description:
        "Only two insurance payers had approved enrollment while revenue continued falling behind expectations.",
    },

    {
      step: "04",

      title: "Operational Audit",

      description:
        "Lama Healthcare reviewed credentialing, billing, HIPAA, OSHA and operational workflows together.",
    },

    {
      step: "05",

      title: "Foundation Rebuilt",

      description:
        "Credentialing, compliance documentation, clearinghouse configuration and workflow systems were corrected.",
    },

    {
      step: "06",

      title: "Sustainable Growth",

      description:
        "Revenue stabilized, approvals continued arriving and the practice gained a reliable operational foundation.",
    },
  ],

  findings: {
    eyebrow: "What We Found",

    title: "The business wasn't failing.",

    subtitle: "The infrastructure was missing.",

    cards: [
      {
        title: "Credentialing Delays",

        description:
          "Only two of eight commercial insurance payers had completed enrollment, delaying significant revenue.",
      },

      {
        title: "Compliance Gaps",

        description:
          "Critical OSHA documentation and staff compliance programs had never been created.",
      },

      {
        title: "Billing Workflow Failure",

        description:
          "An improperly configured clearinghouse caused claims to fail before reaching payers.",
      },

      {
        title: "No Operational Roadmap",

        description:
          "Every major business system was being created independently without sequencing or oversight.",
      },
    ],
  },

  solution: {
    eyebrow: "How We Fixed It",

    title: "We rebuilt the foundation before scaling the practice.",

    subtitle:
      "Instead of treating individual symptoms, we rebuilt the operational infrastructure that supports every part of the business.",

    steps: [
      {
        title: "Complete Practice Audit",

        description:
          "Reviewed credentialing status, billing workflows, HIPAA documentation, OSHA compliance, operational procedures and staff readiness to identify every missing component.",
      },

      {
        title: "Credentialing Recovery",

        description:
          "Submitted outstanding payer applications with the correct taxonomy codes and created a tracking system so every enrollment remained visible until approval.",
      },

      {
        title: "Billing Infrastructure",

        description:
          "Corrected the clearinghouse configuration, validated the billing workflow and ensured claims successfully reached every payer.",
      },

      {
        title: "Compliance & Operations",

        description:
          "Built OSHA documentation, rewrote HIPAA policies and established operational systems before the practice continued growing.",
      },
    ],
  },

  results: {
    eyebrow: "Results",

    title: "The practice stopped reacting and started operating.",

    subtitle:
      "Once the infrastructure was corrected, every major operational system began working together.",

    cards: [
      {
        value: "60 Days",

        label: "Credentialing Approvals Continued",
      },

      {
        value: "100%",

        label: "Billing Workflow Restored",
      },

      {
        value: "Complete",

        label: "OSHA & HIPAA Documentation",
      },

      {
        value: "1",

        label: "Unified Operational Foundation",
      },
    ],
  },

  lessons: {
    eyebrow: "Lessons Learned",

    title: "Launching successfully starts long before opening day.",

    items: [
      "Clinical expertise alone doesn't build a successful medical practice.",
      "Credentialing should begin months before seeing the first patient.",
      "Compliance programs must exist before staff are hired.",
      "Billing infrastructure should be tested before claims are submitted.",
      "Operational systems must be built in the correct sequence.",
      "Fixing a broken foundation after opening is significantly more expensive than building it correctly from the beginning.",
    ],
  },

  quote: {
    text: "A practice launch isn't a checklist. It's a sequence of interdependent decisions where one mistake early creates problems months later.",
  },

  cta: {
    eyebrow: "Ready to Launch?",

    title: "Build the foundation before you open the doors.",

    description:
      "Whether you're planning a new practice or already experiencing operational challenges, we'll show you exactly what's missing and help you build it correctly the first time.",

    button: "Schedule Discovery Call",

    href: "/contact",
  },

  featuredService: {
    slug: "new-practice-consulting",

    title: "New Medical Practice Consulting",

    description:
      "Build your medical practice on the right foundation with credentialing, compliance, billing, and operational systems completed before opening day.",

    href: "/services/new-practice-consulting",

    cta: "Explore Service",
  },

  relatedBlogs: [
    {
      slug: "medical-billing",

      title: "What Your Billing Vendor Isn't Telling You",
    },

    {
      slug: "credentialing-approval",

      title: "The Credentialing Approval That Wasn't",
    },

    {
      slug: "hipaa-phishing",

      title: "The Email Looked Exactly Like Their Vendor. It Wasn't.",
    },
  ],
};

export default newPracticeLaunchCaseStudy;
