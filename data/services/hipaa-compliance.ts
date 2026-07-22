import { Service } from "@/types/service";

const hipaaCompliance: Service = {
  id: "hipaa-privacy-security-compliance",

  slug: "hipaa-privacy-security-compliance",

  seo: {
    title: "HIPAA Privacy & Security Compliance | Lama Healthcare",

    description:
      "Protect your medical practice with complete HIPAA Privacy & Security Compliance services including risk assessments, cybersecurity, staff training, documentation, and incident response planning.",

    keywords: [
      "HIPAA Compliance",
      "HIPAA Privacy",
      "HIPAA Security",
      "Healthcare Cybersecurity",
      "Security Risk Assessment",
      "OCR Audit",
      "Medical Compliance",
      "HIPAA Consulting",
      "Medical Practice Security",
      "Lama Healthcare",
    ],
  },

  hero: {
    eyebrow: "HIPAA Privacy & Security Compliance",

    title: "One click.",

    highlight: "That's all it takes.",

    description:
      "Cybersecurity threats don't target hospitals alone. Independent medical practices are increasingly becoming the easiest targets. We help you build the policies, infrastructure, documentation, and security program needed to protect your patients—and your practice—before an incident ever happens.",

    image: "/services/hipaa-compliance/hero.jpg",

    ctaText: "Schedule a Free Discovery Call",

    ctaLink: "/contact",
  },

  problem: {
    eyebrow: "The Reality",

    title: "Independent practices are the most targeted.",

    highlight: "And the least protected.",

    description:
      "Healthcare remains one of the most targeted industries for cyberattacks. Most independent practices have the same sensitive patient information as large hospital systems but only a fraction of the security infrastructure. Missing documentation, outdated policies, weak staff training, and incomplete security programs leave practices vulnerable to HIPAA violations, costly fines, and operational disruption.",

    image: "/services/hipaa-compliance/problem.jpg",

    ctaText: "Request a HIPAA Assessment",

    ctaLink: "/contact",
  },

  caseStudy: {
    id: "hipaa-phishing-case-study",

    slug: "how-a-phishing-attack-was-contained",

    eyebrow: "Real Incident",

    title: "The email looked exactly like their vendor. It wasn't.",

    description:
      "A phishing email installed spyware within seconds of being opened. Because the practice already had endpoint protection, documented response procedures, and immediate expert support, the incident was contained before a single patient record was compromised.",

    image: "/case-studies/phishing-attack.jpg",

    location: "Las Vegas Medical Practice",

    result: "Zero patient records compromised",

    buttonText: "Read Full Story",
  },

  features: {
    eyebrow: "Our Services",

    title: "We don't hand you a policy template.",

    description:
      "HIPAA compliance is much more than documentation. We build a complete compliance and cybersecurity program that protects your practice before, during, and after an incident.",

    items: [
      {
        title: "HIPAA Privacy & Security Compliance",
        description:
          "Build a complete HIPAA compliance program with customized Privacy and Security Policies, Notice of Privacy Practices, Business Associate Agreement guidance, administrative safeguards, technical safeguards, documentation, and staff training tailored specifically to your practice.",
      },

      {
        title: "Device & Network Security Management",
        description:
          "Know exactly what's connected to your network. We document your practice environment, map every connected device, monitor firewall and VPN status, and maintain the network documentation auditors request first.",
      },

      {
        title: "Security Risk Assessments",
        description:
          "Identify vulnerabilities before they become violations through comprehensive HIPAA Security Risk Assessments, gap analysis, corrective action planning, annual reviews, and risk mitigation strategies built around your practice.",
      },

      {
        title: "Policies & Procedures Development",
        description:
          "Receive professionally written policies customized for your organization, including password management, remote access, mobile device usage, email security, data backup, incident response, and records retention procedures.",
      },

      {
        title: "Incident Response & Breach Preparedness",
        description:
          "Prepare before something goes wrong. We develop your incident response playbook, breach notification procedures, reporting workflows, investigation documentation, and audit-ready incident tracking processes.",
      },

      {
        title: "Healthcare Cybersecurity Training",
        description:
          "Train every employee to recognize modern cyber threats including phishing attacks, ransomware, social engineering, safe PHI handling, password security, device protection, and secure communication practices.",
      },

      {
        title: "Vendor & Third-Party Risk Management",
        description:
          "Protect patient information beyond your own walls by evaluating vendors, reviewing Business Associate Agreements, documenting third-party access, and reducing supply-chain security risks throughout your organization.",
      },
    ],
  },

  difference: {
    eyebrow: "Why Lama Healthcare",

    title: "We don't just consult.",

    highlight: "We stay.",

    description:
      "Many compliance vendors deliver a risk assessment, hand over a folder of policies, and disappear. We build your compliance program, remain available when incidents happen, and provide the operational support your practice needs long after implementation.",

    items: [
      {
        title: "One Point of Contact",
        description:
          "No coordinating between separate compliance consultants, IT vendors, trainers, and cybersecurity providers. One experienced partner manages your entire HIPAA compliance program from start to finish.",
      },

      {
        title: "Documentation That Holds Up",
        description:
          "Every policy, procedure, risk assessment, audit trail, and incident log is built to withstand OCR scrutiny—not simply satisfy a compliance checklist.",
      },

      {
        title: "Built From Real Practice Experience",
        description:
          "Our approach comes from supporting independent healthcare practices where HIPAA compliance, cybersecurity, and operational continuity are everyday business requirements—not theoretical exercises.",
      },

      {
        title: "Support When It Matters Most",
        description:
          "If a security incident occurs, you're not left reading a policy manual. We're available to guide your response, contain threats, document the event, and help your practice recover with confidence.",
      },
    ],
  },

  audience: {
    eyebrow: "Who This Is For",

    title:
      "Built for independent healthcare practices that can't afford compliance gaps.",

    description:
      "Whether you're establishing your compliance program for the first time or strengthening an existing one, we help practices build lasting security and regulatory confidence.",

    image: "/services/hipaa-compliance/audience.jpg",

    audiences: [
      {
        title: "Physician Practices",
        description:
          "Protect patient information while maintaining full HIPAA compliance across your clinical and administrative operations.",
      },

      {
        title: "Nurse Practitioner & Independent Provider Clinics",
        description:
          "Implement enterprise-level privacy and security programs without the overhead of a large healthcare system.",
      },

      {
        title: "Behavioral Health & Specialty Practices",
        description:
          "Strengthen documentation, cybersecurity, and patient privacy programs for highly sensitive healthcare environments.",
      },

      {
        title: "Growing Healthcare Organizations",
        description:
          "Standardize compliance, staff training, and security processes as your organization expands across providers and locations.",
      },
    ],
  },

  process: {
    eyebrow: "Our Process",

    title: "Building compliance before problems happen.",

    description:
      "HIPAA compliance isn't a one-time project. It's an ongoing operational program designed to reduce risk, strengthen security, and prepare your practice for audits and real-world incidents.",

    steps: [
      {
        title: "Compliance Assessment",
        description:
          "We evaluate your current documentation, security posture, operational workflows, vendors, and technical safeguards to identify compliance gaps and prioritize corrective actions.",
      },

      {
        title: "Program Development",
        description:
          "Our team develops customized HIPAA policies, security documentation, risk assessments, staff training materials, and incident response procedures tailored to your practice.",
      },

      {
        title: "Implementation & Training",
        description:
          "We help implement your compliance program, educate staff, establish documentation processes, and integrate cybersecurity best practices into your daily operations.",
      },

      {
        title: "Continuous Support",
        description:
          "Compliance doesn't end after implementation. We remain available for annual reviews, documentation updates, incident guidance, and ongoing operational support as your practice evolves.",
      },
    ],
  },

  stats: {
    eyebrow: "Why Preparation Matters",

    title: "Strong compliance starts long before an OCR audit.",

    description:
      "The most resilient practices invest in proactive infrastructure rather than reacting after a breach or compliance investigation begins.",

    stats: [
      {
        value: "$2.19M",
        label: "Maximum HIPAA Penalty",
        description:
          "HIPAA violations can result in significant financial penalties depending on the severity and extent of non-compliance.",
      },

      {
        value: "24/7",
        label: "Cyber Threat Environment",
        description:
          "Healthcare organizations face continuous cybersecurity risks, making proactive preparation essential for protecting patient information.",
      },

      {
        value: "100%",
        label: "Customized Documentation",
        description:
          "Every policy, procedure, and compliance document is developed specifically for your practice—not copied from generic templates.",
      },

      {
        value: "One",
        label: "Dedicated Compliance Partner",
        description:
          "A single trusted team supporting your HIPAA program, documentation, staff training, and ongoing compliance needs.",
      },
    ],
  },

  faq: {
    eyebrow: "Frequently Asked Questions",

    title: "Questions we hear from healthcare providers every day.",

    description:
      "HIPAA compliance isn't just about passing an audit. It's about protecting your patients, your reputation, and your practice. Here are answers to the questions providers ask most often.",

    items: [
      {
        question: "Do I need HIPAA compliance even if I'm a small practice?",

        answer:
          "Yes. HIPAA applies to covered entities regardless of size. Independent practices often become attractive targets because they handle the same protected health information as large health systems but typically have fewer security controls in place.",
      },

      {
        question:
          "What happens if my practice experiences a cybersecurity incident?",

        answer:
          "We help guide your response immediately. Our incident response procedures help contain threats, document every action taken, perform the required risk assessment, and determine whether notification or reporting obligations exist under HIPAA.",
      },

      {
        question: "Can you work with our existing IT provider?",

        answer:
          "Absolutely. We regularly collaborate with internal IT teams and third-party technology providers to ensure your security infrastructure aligns with HIPAA Privacy and Security requirements while maintaining clear documentation and accountability.",
      },

      {
        question: "Do you provide customized policies or generic templates?",

        answer:
          "Every policy we develop is customized to your practice. We build documentation around your workflows, technology, staff responsibilities, and operational environment instead of relying on generic internet templates.",
      },

      {
        question: "Is HIPAA compliance a one-time project?",

        answer:
          "No. HIPAA compliance is an ongoing operational program. Risk assessments, policy reviews, staff training, vendor management, and security monitoring should all be reviewed regularly as your practice evolves.",
      },
    ],
  },

  cta: {
    eyebrow: "Get Started",

    title: "Let's find out where your practice actually stands.",

    description:
      "Every HIPAA engagement begins with an honest conversation—not a sales pitch. We'll identify your biggest compliance gaps, evaluate your current security posture, and show you exactly what needs to happen next.",

    primaryButton: {
      label: "Schedule a Free Discovery Call",
      href: "/contact",
    },

    secondaryButton: {
      label: "Explore Our Services",
      href: "/services",
    },
  },

  relatedBlogs: {
    eyebrow: "Resources",

    title: "Continue Learning",

    description:
      "Explore practical guidance on HIPAA compliance, healthcare cybersecurity, and protecting your medical practice from today's evolving security threats.",

    blogs: [
      {
        id: "phishing-case-study",

        slug: "the-email-looked-exactly-like-their-vendor",

        title: "The Email Looked Exactly Like Their Vendor. It Wasn't.",

        excerpt:
          "Learn how a phishing attack on an independent medical practice was contained before a single patient record was compromised—and why preparation made all the difference.",

        image: "/blogs/phishing-case-study.jpg",

        category: "HIPAA & Cybersecurity",

        publishedAt: "July 2026",

        readTime: "6 min read",

        author: "Lama Healthcare",
      },

      {
        id: "security-risk-assessment",

        slug: "why-every-practice-needs-a-security-risk-assessment",

        title:
          "Why Every Medical Practice Needs a HIPAA Security Risk Assessment",

        excerpt:
          "Understand what a Security Risk Assessment includes, why OCR requires it, and how proactive risk management protects both your patients and your business.",

        image: "/blogs/security-risk-assessment.jpg",

        category: "HIPAA Compliance",

        publishedAt: "July 2026",

        readTime: "7 min read",

        author: "Lama Healthcare",
      },

      {
        id: "healthcare-cybersecurity",

        slug: "healthcare-cybersecurity-for-independent-practices",

        title: "Healthcare Cybersecurity for Independent Medical Practices",

        excerpt:
          "Discover the practical security controls every independent healthcare practice should implement to reduce cyber risk, strengthen HIPAA compliance, and prepare for real-world threats.",

        image: "/blogs/healthcare-cybersecurity.jpg",

        category: "Cybersecurity",

        publishedAt: "July 2026",

        readTime: "8 min read",

        author: "Lama Healthcare",
      },
    ],
  },
};

export default hipaaCompliance;
