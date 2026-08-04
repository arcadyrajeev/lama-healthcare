import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceBySlug } from "@/lib/services";

import ServiceHero from "../components/ServiceHero";
import ServiceProblem from "../components/ServiceProblem";
import ServiceCaseStudy from "../components/ServiceCaseStudy";
import ServiceFeatures from "../components/ServiceFeatures";
import ServiceDifference from "../components/ServiceDifference";
import ServiceAudience from "../components/ServiceAudience";
import ServiceProcess from "../components/ServiceProcess";
import ServiceStats from "../components/ServiceStats";
import ServiceFAQ from "../components/ServiceFAQ";
import ServiceCTA from "../components/ServiceCTA";
import RelatedBlogs from "../components/RelatedBlogs";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const title = `${service.hero.eyebrow} | Lama Healthcare`;

  const description =
    service.hero.description.length > 160
      ? `${service.hero.description.slice(0, 157)}...`
      : service.hero.description;

  return {
    title,

    description,

    keywords: [
      service.hero.eyebrow,
      "Healthcare Operations",
      "Medical Practice Management",
      "Healthcare Consulting",
      "Revenue Cycle Management",
      "Medical Billing",
      "Credentialing",
      "Practice Management",
      "Independent Healthcare Practices",
      "Healthcare Compliance",
      "Healthcare Services",
      "Medical Practice Growth",
      "Practice Operations",
    ],

    alternates: {
      canonical: `/services/${slug}`,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,

      description,

      url: `https://lamahealthcare.com/services/${slug}`,

      siteName: "Lama Healthcare",

      locale: "en_US",

      type: "website",

      images: [
        {
          url: service.hero.image,
          width: 1200,
          height: 630,
          alt: service.hero.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [service.hero.image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero data={service.hero} />

      {service.problem && <ServiceProblem data={service.problem} />}

      {service.caseStudy && <ServiceCaseStudy data={service.caseStudy} />}

      {service.features && <ServiceFeatures data={service.features} />}

      {service.difference && <ServiceDifference data={service.difference} />}

      {service.audience && <ServiceAudience data={service.audience} />}

      {service.process && <ServiceProcess data={service.process} />}

      {service.stats && <ServiceStats data={service.stats} />}

      {service.faq && <ServiceFAQ data={service.faq} />}

      <ServiceCTA data={service.cta} />

      {service.relatedBlogs && <RelatedBlogs data={service.relatedBlogs} />}
    </>
  );
}
