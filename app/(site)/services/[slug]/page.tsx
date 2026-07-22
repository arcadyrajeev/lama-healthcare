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
