import { CaseStudy } from "@/types/case-study";

export const practiceComplianceCaseStudy: CaseStudy = {
  slug: "practice-compliance",

  hero: {
    eyebrow: "Case Study",

    title: "The Anonymous Complaint That Turned Into a Full Investigation",

    subtitle:
      "Someone filed a false complaint against a medical practice. Investigators showed up anyway. What protected the practice wasn't an explanation. It was documentation.",

    category: "Practice Compliance & Operations",

    tags: [
      "Practice Operations",
      "Compliance",
      "Policies & Procedures",
      "Regulatory Investigation",
    ],

    location: "Las Vegas, Nevada",

    readTime: "6 min",

    publishedBy: "Lama Healthcare",

    heroImage: "/images/case-study/investigation.webp",
  },

  overview: {
    situation:
      "An independent medical practice received an anonymous complaint alleging improper reuse of disposable medical equipment. Although the allegation was completely false, it automatically triggered a formal regulatory investigation.",

    problem:
      "Investigators weren't interested in whether the complaint sounded believable. They wanted proof that the practice operated according to documented policies and procedures. Without that documentation, even a false complaint could have resulted in findings and corrective action.",

    solution:
      "Lama Healthcare had previously developed a customized policies and procedures manual that accurately reflected the practice's daily operations, documentation standards and compliance workflows.",

    outcome:
      "The investigation concluded with no findings because the written documentation matched the practice's actual operations, allowing investigators to verify compliance quickly and confidently.",
  },

  challenge: {
    eyebrow: "The Challenge",

    title: "Doing the right thing isn't enough if you can't prove it.",

    subtitle:
      "Regulatory investigations evaluate documentation as much as day-to-day operations.",

    image: "/images/case-study/investigation-challenge.webp",

    description: [
      "The complaint accused the practice of reusing single-use disposable equipment, something that had never occurred.",

      "Despite the allegation being false, the licensing board initiated a complete operational review because every complaint must be investigated.",

      "The practice's ability to demonstrate compliance depended entirely on whether its written documentation accurately reflected its real-world operations.",
    ],
  },

  timeline: [
    {
      step: "01",

      title: "Anonymous Complaint Filed",

      description:
        "A regulatory agency received an anonymous complaint alleging unsafe clinical practices.",
    },

    {
      step: "02",

      title: "Investigation Opened",

      description:
        "The complaint immediately triggered a formal inspection regardless of whether the allegation appeared credible.",
    },

    {
      step: "03",

      title: "Documentation Requested",

      description:
        "Investigators reviewed policies, procedures, staff documentation and operational workflows instead of relying solely on verbal explanations.",
    },

    {
      step: "04",

      title: "Operational Review",

      description:
        "The practice demonstrated that every procedure involving disposable equipment was fully documented and consistently followed.",
    },

    {
      step: "05",

      title: "Compliance Verified",

      description:
        "Staff interviews, operational observations and written procedures aligned perfectly with one another.",
    },

    {
      step: "06",

      title: "Investigation Closed",

      description:
        "The practice passed the investigation with no findings because its documentation accurately reflected how it operated every day.",
    },
  ],

  findings: {
    eyebrow: "What We Found",

    title: "The complaint wasn't the real test.",

    subtitle: "The documentation was.",

    cards: [
      {
        title: "False Allegation",

        description:
          "The complaint itself had no factual basis, but that alone couldn't stop the investigation from moving forward.",
      },

      {
        title: "Documentation Protected the Practice",

        description:
          "The customized policies and procedures manual clearly documented equipment handling, disposal procedures and staff responsibilities.",
      },

      {
        title: "Operations Matched Policy",

        description:
          "Investigators confirmed that staff followed the exact procedures documented within the manual, eliminating uncertainty during the inspection.",
      },

      {
        title: "Prepared Before the Investigation",

        description:
          "The documentation already existed before investigators arrived, removing the need for reactive explanations or last-minute corrections.",
      },
    ],
  },

  solution: {
    eyebrow: "How We Responded",

    title:
      "We didn't defend the practice with opinions. We proved it with documentation.",

    subtitle:
      "The investigation succeeded because every operational process had already been documented before anyone arrived.",

    steps: [
      {
        title: "Operational Documentation Review",

        description:
          "Reviewed the complete policies and procedures manual to confirm every workflow accurately reflected how the practice actually operated.",
      },

      {
        title: "Policy Verification",

        description:
          "Verified that equipment handling, storage, disposal procedures and staff responsibilities were clearly documented and aligned with regulatory expectations.",
      },

      {
        title: "Staff & Workflow Validation",

        description:
          "Confirmed that day-to-day clinical operations matched the documented procedures through staff interviews and operational review.",
      },

      {
        title: "Regulatory Support",

        description:
          "Provided investigators with organized documentation that demonstrated compliance quickly, eliminating uncertainty throughout the inspection.",
      },
    ],
  },

  results: {
    eyebrow: "Results",

    title:
      "Preparation turned a potentially stressful investigation into a routine review.",

    subtitle:
      "Because documentation already existed, the investigation ended without findings or corrective action.",

    cards: [
      {
        value: "0",

        label: "Regulatory Findings",
      },

      {
        value: "100%",

        label: "Policies Verified",
      },

      {
        value: "Complete",

        label: "Operational Documentation",
      },

      {
        value: "Passed",

        label: "Regulatory Inspection",
      },
    ],
  },

  lessons: {
    eyebrow: "Lessons Learned",

    title: "Compliance is demonstrated through documentation, not intentions.",

    items: [
      "False complaints can still trigger full regulatory investigations.",
      "Investigators evaluate documented procedures before accepting verbal explanations.",
      "Policies and procedures should reflect how the practice actually operates, not generic templates.",
      "Staff training records are just as important as the training itself.",
      "Operational documentation should evolve as the practice grows and changes.",
      "The best time to prepare for an investigation is long before one ever happens.",
    ],
  },

  quote: {
    text: "The complaint was false. The investigation was real. What protected the practice was the documentation that already existed.",
  },

  featuredService: {
    slug: "practice-operations-compliance",

    title: "Practice Operations & Compliance",

    description:
      "Build operational systems, customized policies, compliance programs and documentation that protect your practice before regulators ever walk through the door.",

    href: "/services/practice-operations-compliance",

    cta: "Explore Service",
  },

  cta: {
    eyebrow: "Protect Your Practice",

    title: "Know what investigators would find before they ever arrive.",

    description:
      "We'll review your operations, policies and compliance documentation to identify gaps before they become findings during an inspection or investigation.",

    button: "Schedule Discovery Call",
  },

  relatedBlogs: [
    {
      slug: "hipaa-and-cybersecurity",

      title: "The Email Looked Exactly Like Their Vendor. It Wasn't.",
    },
    {
      slug: "new-practice-launch",

      title: "What Nobody Tells You About Launching a Medical Practice",
    },
    {
      slug: "medical-billing",

      title: "What Your Billing Vendor Isn't Telling You",
    },
  ],
};

export default practiceComplianceCaseStudy;
