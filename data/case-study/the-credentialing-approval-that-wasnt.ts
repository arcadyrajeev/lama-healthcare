import { CaseStudy } from "@/types/case-study";

export const credentialingCaseStudy: CaseStudy = {
  slug: "the-credentialing-approval-that-wasnt",

  hero: {
    eyebrow: "Case Study",

    title: "The Credentialing Approval That Wasn't",

    subtitle:
      "A new provider was enrolled. Claims were going out. Nobody knew the taxonomy code was wrong until the denials started stacking up.",

    category: "Credentialing & Provider Enrollment",

    tags: [
      "Credentialing",
      "Provider Enrollment",
      "Taxonomy",
      "Payer Contracting",
    ],

    location: "Las Vegas, Nevada",

    readTime: "6 min",

    publishedBy: "Lama Healthcare",

    heroImage: "/images/case-study/credentialing-taxonomy.webp",
  },

  overview: {
    situation:
      "A growing independent practice hired a new provider and completed the credentialing process through its existing vendor. Enrollment approvals arrived on schedule, the provider began seeing patients, and claims started flowing.",

    problem:
      "The provider had been enrolled using the wrong specialty taxonomy code. Although the enrollment was technically approved, claims no longer matched the enrolled specialty and denials quietly accumulated across multiple payers.",

    solution:
      "Lama Healthcare investigated the complete credentialing and billing workflow, corrected the taxonomy code, coordinated updated enrollments with every affected payer, and rebuilt the communication process between credentialing and billing.",

    outcome:
      "Future claims aligned correctly with payer enrollments, denial patterns stopped recurring, and the practice implemented a verification process that prevented the issue from happening again.",
  },

  challenge: {
    eyebrow: "The Challenge",

    title: "An approval letter doesn't guarantee a provider is ready to bill.",

    subtitle:
      "Credentialing succeeds only when enrollment, billing and payer data all match.",

    description: [
      "The provider appeared fully credentialed, allowing patient appointments and claim submission to begin immediately.",

      "Behind the scenes, the enrollment contained an incorrect taxonomy code that no one verified before billing started.",

      "Because credentialing and billing operated independently, the mismatch remained hidden until denial patterns became impossible to ignore.",
    ],
  },

  timeline: [
    {
      step: "01",

      title: "New Provider Joins",

      description:
        "A new provider joined the practice and credentialing applications were submitted through the existing vendor.",
    },

    {
      step: "02",

      title: "Enrollment Approved",

      description:
        "Payers approved the enrollment and the provider began seeing patients as planned.",
    },

    {
      step: "03",

      title: "Claims Submitted",

      description:
        "Billing submitted claims using the approved enrollment without verifying the taxonomy information.",
    },

    {
      step: "04",

      title: "Denials Increase",

      description:
        "Claims began returning with denials while staff assumed they were routine billing issues.",
    },

    {
      step: "05",

      title: "Operational Review",

      description:
        "Lama Healthcare audited credentialing records, billing workflows and payer enrollments together.",
    },

    {
      step: "06",

      title: "Process Corrected",

      description:
        "Taxonomy codes were corrected, affected claims were resubmitted and communication between credentialing and billing was rebuilt.",
    },
  ],

  findings: {
    eyebrow: "What We Found",

    title: "The approval wasn't wrong.",

    subtitle: "The enrollment behind it was.",

    cards: [
      {
        title: "Incorrect Taxonomy",

        description:
          "The provider had been enrolled using a valid but incorrect specialty taxonomy code that didn't match the services being billed.",
      },

      {
        title: "Disconnected Teams",

        description:
          "Credentialing completed its work while billing assumed every enrollment detail had already been verified.",
      },

      {
        title: "Invisible Revenue Loss",

        description:
          "Claims continued flowing for weeks while denials quietly accumulated across multiple payers.",
      },

      {
        title: "No Verification Checkpoint",

        description:
          "No formal review existed between enrollment approval and the provider's first submitted claim.",
      },
    ],
  },

  solution: {
    eyebrow: "How We Fixed It",

    title: "We looked upstream instead of chasing denials.",

    subtitle:
      "The solution wasn't appealing more claims. It was correcting the enrollment process that caused the denials in the first place.",

    steps: [
      {
        title: "Credentialing Audit",

        description:
          "Reviewed provider enrollments, taxonomy codes, payer records and billing workflows to identify where the disconnect originated.",
      },

      {
        title: "Taxonomy Correction",

        description:
          "Updated the provider's taxonomy information with every affected payer and ensured the enrollment accurately reflected the specialty being billed.",
      },

      {
        title: "Claims Recovery",

        description:
          "Reopened eligible denied claims, submitted reconsideration requests where appropriate and recovered as much revenue as possible before appeal windows expired.",
      },

      {
        title: "Credentialing & Billing Alignment",

        description:
          "Introduced verification checkpoints so billing received confirmed taxonomy codes, effective dates and payer approvals before any future claims were submitted.",
      },
    ],
  },

  results: {
    eyebrow: "Results",

    title: "The process became predictable instead of reactive.",

    subtitle:
      "Correcting one enrollment issue prevented countless future billing problems.",

    cards: [
      {
        value: "100%",

        label: "Verified Provider Enrollment",
      },

      {
        value: "0",

        label: "Future Taxonomy Mismatches",
      },

      {
        value: "Real-Time",

        label: "Credentialing Visibility",
      },

      {
        value: "1",

        label: "Unified Accountability",
      },
    ],
  },

  lessons: {
    eyebrow: "Lessons Learned",

    title: "Credentialing doesn't end when the approval letter arrives.",

    items: [
      "An approved enrollment still needs to be verified before billing begins.",
      "Taxonomy codes directly affect claim reimbursement and should never be assumed to be correct.",
      "Credentialing and billing must share information before the first claim is submitted.",
      "Recurring denials usually indicate a process failure, not an isolated billing problem.",
      "Every provider onboarding should include a formal enrollment verification checkpoint.",
      "Someone must own the transition from credentialing to billing to eliminate costly gaps.",
    ],
  },

  quote: {
    text: "The credentialing approval is the beginning of the process, not the end of it.",
  },

  featuredService: {
    slug: "credentialing",

    title: "Credentialing & Payer Contracting",

    description:
      "Manage provider enrollment, payer contracting and taxonomy verification with complete visibility from application through billing readiness.",

    href: "/services/credentialing",

    cta: "Explore Service",
  },

  cta: {
    eyebrow: "Prevent Revenue Loss",

    title:
      "Make sure your next provider is ready to bill before they see their first patient.",

    description:
      "We'll review your credentialing process, verify every enrollment and identify hidden risks before they become costly denials.",

    button: "Schedule Discovery Call",
  },

  relatedBlogs: [
    {
      slug: "medical-billing",
      title: "What Your Billing Vendor Isn't Telling You",
    },
    {
      slug: "hipaa-and-cybersecurity",
      title: "The Email Looked Exactly Like Their Vendor. It Wasn't.",
    },
    {
      slug: "new-practice-launch",
      title: "What Nobody Tells You About Launching a Medical Practice",
    },
  ],
};

export default credentialingCaseStudy;
