import type { Service } from "@/types/service";

export const credentialing: Service = {
  id: "credentialling",

  slug: "credentialing",

  seo: {
    title:
      "Medical Credentialing & Payer Contracting Services | Lama Healthcare",

    description:
      "Provider credentialing, payer enrollment, Medicare, Medicaid, CAQH management, recredentialing, and payer contract negotiation. We ensure providers can bill correctly from day one.",

    keywords: [
      "Medical Credentialing",
      "Provider Enrollment",
      "Payer Contracting",
      "CAQH",
      "PECOS",
      "Medicare Enrollment",
      "Medicaid Enrollment",
      "Credentialing Services",
      "Healthcare Revenue Cycle",
      "Practice Credentialing",
    ],
  },

  hero: {
    eyebrow: "Credentialing & Payer Contracting",

    title: "Your provider is seeing patients.",

    highlight: "Are they getting paid?",

    description:
      "Credentialing errors lead to denied claims, delayed reimbursements, and lost revenue. We ensure every provider is properly enrolled before the first claim is submitted.",

    image: "/images/services/credentialing-hero.webp",

    ctaText: "Book a Discovery Call",

    ctaLink: "/contact",
  },

  problem: {
    eyebrow: "The Reality",

    title:
      "Adding a provider is one of the highest risk moments in your revenue cycle.",

    highlight: "Highest Risk",

    description:
      "Every payer has different enrollment requirements and approval timelines. A single enrollment mistake can delay reimbursement for weeks, leaving providers seeing patients without getting paid. Most practices discover the issue only after claim denials begin to accumulate.",

    image: "/images/services/credentialing-image2.webp",

    ctaText: "Talk With Our Team",

    ctaLink: "/contact",
  },

  caseStudy: {
    id: "credentialing-taxonomy-case-study",

    slug: "the-credentialing-approval-that-wasnt",

    eyebrow: "Real Incident",

    title: "The provider was credentialed. The taxonomy code was wrong.",

    description:
      "A newly hired provider was successfully credentialed and immediately began seeing patients. Weeks later, claim denials started piling up because the provider had been enrolled under the wrong specialty taxonomy code. We identified the issue, corrected the enrollments, coordinated with payers, and helped recover as much revenue as possible.",

    image: "/images/case-study/credentialing-taxonomy.webp",

    location: "Las Vegas Medical Practice",

    result: "Weeks of future claim denials prevented",

    buttonText: "Read Full Story",
  },

  features: {
    eyebrow: "Our Services",

    title:
      "Every application tracked. Every enrollment verified. Every step visible.",

    description:
      "From first enrollment to ongoing maintenance, we manage every stage of provider credentialing with complete visibility and accountability.",

    items: [
      {
        title: "New Provider Credentialing & Enrollment",

        description:
          "Complete provider enrollment across Medicare, Medicaid, and commercial payers, tracked from submission to approval.",

        icon: "UserPlus",
      },

      {
        title: "CAQH Setup & Maintenance",

        description:
          "Keep CAQH profiles accurate, up to date, and fully compliant to prevent enrollment delays.",

        icon: "Database",
      },

      {
        title: "Medicare & Medicaid Enrollment",

        description:
          "Manage PECOS, Medicaid, and NPI enrollment to ensure providers are ready to bill.",

        icon: "ShieldCheck",
      },

      {
        title: "Recredentialing & Deadline Management",

        description:
          "Monitor renewals, submit applications early, and prevent credentialing lapses.",

        icon: "CalendarClock",
      },

      {
        title: "Payer Contract Review & Negotiation",

        description:
          "Review payer agreements, identify opportunities, and support stronger reimbursement rates.",

        icon: "Handshake",
      },

      {
        title: "Credentialing Denial Resolution",

        description:
          "Resolve enrollment denials with documentation, appeals, and direct payer follow-up.",

        icon: "FileWarning",
      },

      {
        title: "Credentialing Status Tracking",

        description:
          "Track every application, milestone, and approval with real-time visibility through Practice One.",

        icon: "Activity",
      },

      {
        title: "Credentialing Vendor Oversight",

        description:
          "Oversee external vendors, monitor timelines, and ensure every enrollment stays on track.",

        icon: "Users",
      },
    ],
  },

  difference: {
    eyebrow: "Why Choose Lama Healthcare",

    title:
      "We connect credentialing with billing so revenue isn't lost between the two.",

    highlight: "Connected",

    description:
      "Most practices use separate vendors for credentialing and billing. We bridge that gap by ensuring every enrollment milestone is communicated to billing before claims are submitted, eliminating the disconnect that causes preventable denials.",

    items: [
      {
        title: "Credentialing & Billing Stay Connected",

        description:
          "Every enrollment approval, taxonomy code, effective date, and payer confirmation is shared with your billing team before claims are submitted.",
      },

      {
        title: "Complete Visibility",

        description:
          "Track every provider, payer, application status, approval, and renewal deadline through Practice One without chasing vendors for updates.",
      },

      {
        title: "One Dedicated Partner",

        description:
          "Instead of coordinating multiple vendors, you work with one team that manages credentialing, follows up with payers, resolves delays, and keeps your practice informed.",
      },
    ],
  },

  audience: {
    eyebrow: "Who We Serve",

    title:
      "Built for practices where enrollment delays directly impact revenue.",

    description:
      "Whether you're onboarding new providers, expanding locations, or managing multiple specialties, we ensure your providers are credentialed correctly and ready to bill.",

    image: "/images/services/credentialing-image4.webp",

    audiences: [
      {
        title: "Independent Physician Practices",

        description:
          "Credentialing support for single and multi-provider physician groups.",
      },

      {
        title: "Nurse Practitioner Practices",

        description:
          "Provider enrollment and payer contracting for growing NP practices.",
      },

      {
        title: "Behavioral Health Clinics",

        description:
          "Credentialing management for therapists, psychiatrists, psychologists, and counselors.",
      },

      {
        title: "Specialty Medical Clinics",

        description:
          "End-to-end enrollment for specialty providers with complex payer requirements.",
      },

      {
        title: "Ambulatory Surgery Centers",

        description:
          "Provider credentialing and payer enrollment for outpatient surgical facilities.",
      },

      {
        title: "Home Health & Therapy Providers",

        description:
          "Enrollment management for home health agencies, physical therapy, and rehabilitation practices.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",

    title:
      "A structured credentialing workflow that keeps providers billing on time.",

    description:
      "Every provider follows the same standardized process, ensuring nothing is missed before the first claim is submitted.",

    steps: [
      {
        title: "Practice & Provider Assessment",

        description:
          "We review your providers, specialties, payer mix, existing enrollments, and documentation requirements.",
      },

      {
        title: "Application Preparation",

        description:
          "Our team prepares CAQH, Medicare, Medicaid, commercial payer applications, taxonomy information, and supporting documents.",
      },

      {
        title: "Submission & Follow-Up",

        description:
          "Applications are submitted, tracked continuously, and followed up with payers until approval is received.",
      },

      {
        title: "Billing Coordination",

        description:
          "Enrollment details, payer approvals, taxonomy codes, and effective dates are verified with your billing team before claims begin.",
      },

      {
        title: "Ongoing Monitoring",

        description:
          "We continue tracking recredentialing deadlines, enrollment updates, payer changes, and contract renewals throughout the provider lifecycle.",
      },
    ],
  },

  stats: {
    eyebrow: "What You Gain",

    title: "Credentialing that supports a healthier revenue cycle.",

    description:
      "Our focus is reducing administrative delays and ensuring providers can begin billing with confidence.",

    stats: [
      {
        value: "100%",

        label: "Application Visibility",

        description:
          "Track every provider, payer, and credentialing milestone from one dashboard.",
      },

      {
        value: "1",

        label: "Single Point of Contact",

        description:
          "One team manages applications, follow-ups, escalations, and communication.",
      },

      {
        value: "24/7",

        label: "Enrollment Tracking",

        description:
          "Know exactly where every application stands without contacting multiple vendors.",
      },

      {
        value: "0",

        label: "Missed Renewal Targets",

        description:
          "Proactive monitoring helps prevent avoidable credentialing lapses.",
      },
    ],
  },

  faq: {
    eyebrow: "Frequently Asked Questions",

    title: "Answers to common credentialing questions.",

    description:
      "Everything you need to know about provider credentialing, payer enrollment, and contract management.",

    items: [
      {
        question: "How long does provider credentialing usually take?",

        answer:
          "The timeline depends on each payer. Medicare, Medicaid, and commercial insurers all have different processing times. We track every application proactively and follow up regularly to minimize delays.",
      },

      {
        question:
          "Can providers start seeing patients before credentialing is complete?",

        answer:
          "Providers may begin seeing patients, but claims often cannot be reimbursed until enrollment is approved with the appropriate payer. We help coordinate approvals so billing begins at the right time.",
      },

      {
        question: "What is CAQH and why is it important?",

        answer:
          "CAQH is a centralized provider database used by many insurance companies during credentialing. Keeping provider profiles accurate and regularly attested prevents unnecessary enrollment delays.",
      },

      {
        question: "Do you handle Medicare and Medicaid enrollment?",

        answer:
          "Yes. We manage Medicare enrollment through PECOS, Medicaid enrollment, NPI registration, and ongoing provider maintenance for government payers.",
      },

      {
        question: "Can you review our existing payer contracts?",

        answer:
          "Absolutely. We evaluate reimbursement rates, identify underperforming contracts, compare them against current benchmarks, and support negotiations for stronger payer agreements.",
      },

      {
        question: "What happens if a credentialing application is denied?",

        answer:
          "We identify the reason for the denial, prepare supporting documentation, submit reconsiderations, and work directly with the payer until the issue is resolved whenever possible.",
      },

      {
        question: "How do you prevent credentialing lapses?",

        answer:
          "We continuously monitor renewal deadlines, manage recredentialing submissions in advance, and notify your team before credentials expire so providers maintain uninterrupted billing privileges.",
      },

      {
        question: "How do you keep billing informed?",

        answer:
          "Every enrollment milestone, including payer approval, effective dates, taxonomy verification, and payer participation, is communicated to the billing team before claims are submitted.",
      },
    ],
  },

  cta: {
    eyebrow: "Get Started",

    title: "Let's find out where your credentialing really stands.",

    description:
      "Most practices have at least one enrollment gap they aren't aware of. We'll review your provider enrollments, credentialing timelines, and payer participation to identify potential risks before they become lost revenue.",

    primaryButton: {
      label: "Schedule a Free Discovery Call",

      href: "/contact",
    },

    secondaryButton: {
      label: "Explore Practice One",

      href: "/practice-one",
    },
  },

  relatedBlogs: {
    eyebrow: "Related Insights",

    title: "Learn more about provider enrollment and revenue protection.",

    description:
      "Explore expert resources on credentialing, payer contracting, and revenue cycle management.",

    blogs: [],
  },
};

export default credentialing;
