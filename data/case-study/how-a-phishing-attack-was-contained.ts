import { CaseStudy } from "@/types/case-study";

export const hipaaAndCybersecurityCaseStudy: CaseStudy = {
  slug: "hipaa-and-cybersecurity",

  hero: {
    eyebrow: "Case Study",

    title: "The Email Looked Exactly Like Their Vendor. It Wasn't.",

    subtitle:
      "How a phishing attack on a Las Vegas medical practice was contained before a single patient record was compromised.",

    category: "HIPAA & Cybersecurity",

    tags: [
      "HIPAA Compliance",
      "Cybersecurity",
      "Phishing",
      "Incident Response",
    ],

    location: "Las Vegas, Nevada",

    readTime: "6 min",

    publishedBy: "Lama Healthcare",

    heroImage: "/images/placeholder.png",
  },

  overview: {
    situation:
      "A medical practice received what appeared to be a routine invoice from one of its long standing medical supply vendors. The branding, sender name and language all appeared legitimate.",

    problem:
      "After clicking the payment link, spyware immediately installed itself and an attacker gained remote control of the computer. Without preparation, the incident could have become a reportable HIPAA breach.",

    solution:
      "Lama Healthcare immediately contained the threat, isolated the affected workstation, performed a forensic investigation and relied on previously implemented security infrastructure to prevent patient data exposure.",

    outcome:
      "No patient information was accessed, no OCR report was required, no patients were notified and the practice avoided what could have become a costly breach.",
  },

  challenge: {
    eyebrow: "The Challenge",

    title: "Modern cyberattacks don't look suspicious anymore.",

    subtitle:
      "They look exactly like the vendors healthcare practices already trust.",

    description: [
      "The phishing email perfectly mimicked an existing medical supply vendor, making it almost impossible to identify as malicious.",

      "Within seconds spyware was installed and remote access was established on the workstation.",

      "Without an existing incident response plan, endpoint protection and documented security procedures, patient data could have been exposed before anyone understood what had happened.",
    ],
  },

  timeline: [
    {
      step: "01",

      title: "Invoice Arrives",

      description:
        "The practice received what appeared to be a routine invoice from a trusted vendor.",
    },

    {
      step: "02",

      title: "Link Clicked",

      description:
        "The QuickBooks payment link installed spyware within seconds.",
    },

    {
      step: "03",

      title: "Attack Detected",

      description:
        "The owner noticed the mouse moving on its own and immediately contacted Lama Healthcare.",
    },

    {
      step: "04",

      title: "Containment",

      description:
        "The affected workstation was physically disconnected from power and the network before data could leave the environment.",
    },

    {
      step: "05",

      title: "Investigation",

      description:
        "A forensic review confirmed the malware, documented every action taken and verified patient records remained protected.",
    },

    {
      step: "06",

      title: "Successful Outcome",

      description:
        "The incident remained contained without becoming a reportable HIPAA breach.",
    },
  ],

  findings: {
    eyebrow: "What We Found",

    title: "Preparation mattered more than reaction.",

    subtitle:
      "The successful outcome was determined weeks before the phishing email arrived.",

    cards: [
      {
        title: "Endpoint Protection",

        description:
          "Every device already had endpoint protection installed, limiting what the attacker could accomplish.",
      },

      {
        title: "Immediate Response",

        description:
          "The practice had direct access to experienced support and responded within seconds instead of hours.",
      },

      {
        title: "Documented Procedures",

        description:
          "Incident response workflows already existed, eliminating guesswork during the emergency.",
      },

      {
        title: "Complete Visibility",

        description:
          "A documented network map made it immediately clear which systems were affected and which remained protected.",
      },
    ],
  },

  solution: {
    eyebrow: "How We Responded",

    title: "The incident was contained because the foundation already existed.",

    subtitle:
      "Preparation made every decision faster, clearer and more effective.",

    steps: [
      {
        title: "Immediate Containment",

        description:
          "The affected workstation was disconnected from power and the network immediately, preventing any opportunity for data to leave the environment.",
      },

      {
        title: "Forensic Investigation",

        description:
          "The device was analyzed offline, the spyware was identified, its behavior traced and the system completely remediated before returning to service.",
      },

      {
        title: "Risk Assessment & Documentation",

        description:
          "Every action was documented, including discovery time, response timeline, remediation steps and breach determination, creating a complete HIPAA compliant incident record.",
      },

      {
        title: "Infrastructure Validation",

        description:
          "Endpoint protection logs, network visibility and existing security controls confirmed that no protected health information had been accessed or transmitted.",
      },
    ],
  },

  results: {
    eyebrow: "Results",

    title: "A security incident never became a data breach.",

    subtitle:
      "Preparation eliminated panic and prevented regulatory consequences.",

    cards: [
      {
        value: "0",

        label: "Patient Records Compromised",
      },

      {
        value: "0",

        label: "OCR Reports Required",
      },

      {
        value: "100%",

        label: "Incident Fully Documented",
      },

      {
        value: "< 24 Hrs",

        label: "Threat Contained & Eliminated",
      },
    ],
  },

  lessons: {
    eyebrow: "Lessons Learned",

    title:
      "Cybersecurity isn't about reacting faster. It's about preparing earlier.",

    items: [
      "Endpoint protection should exist on every device, not only primary workstations.",
      "Every healthcare practice needs a documented incident response plan before an incident occurs.",
      "Network visibility is essential for both HIPAA compliance and incident response.",
      "Security documentation is just as important as technical remediation.",
      "Staff should know exactly who to call during the first sixty seconds of an incident.",
      "Infrastructure, not luck, determines whether a cyberattack becomes a reportable breach.",
    ],
  },

  quote: {
    text: "The protection wasn't vigilance. It was infrastructure that already existed before the email arrived.",
  },

  featuredService: {
    slug: "how-a-phishing-attack-was-contained",

    title: "HIPAA Privacy & Security Compliance",

    description:
      "Protect your practice with proactive HIPAA compliance, cybersecurity safeguards, incident response planning and continuous operational support.",

    href: "/services/hipaa-privacy-security-compliance",

    cta: "Explore Service",
  },

  cta: {
    eyebrow: "Protect Your Practice",

    title:
      "Know where your biggest security gaps are before someone else finds them.",

    description:
      "Our HIPAA compliance assessments identify operational, technical and documentation gaps before they become reportable incidents.",

    button: "Schedule Discovery Call",
  },

  relatedBlogs: [
    {
      slug: "medical-billing",

      title: "What Your Billing Vendor Isn't Telling You",
    },
    {
      slug: "new-practice-launch",

      title: "What Nobody Tells You About Launching a Medical Practice",
    },
    {
      slug: "credentialing-approval",

      title: "The Credentialing Approval That Wasn't",
    },
  ],
};

export default hipaaAndCybersecurityCaseStudy;
