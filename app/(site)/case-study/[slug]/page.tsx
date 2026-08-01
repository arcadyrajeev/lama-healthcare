import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Hero from "../components/Hero";
import Overview from "../components/Overview";
import Challenge from "../components/Challenge";
import Timeline from "../components/Timeline";
import Findings from "../components/Findings";
import Solution from "../components/Solution";
import Results from "../components/Results";
import Lessons from "../components/Lessons";
import Quote from "../components/Quote";
import FeaturedService from "../components/FeaturedService";
import CTA from "../components/CTA";
import RelatedBlogs from "../components/RelatedBlogs";

import { caseStudies, getCaseStudy } from "../../../../data/case-study";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Lama Healthcare",
    };
  }

  return {
    title: `${study.hero.title} | Lama Healthcare`,

    description: study.hero.subtitle,

    openGraph: {
      title: study.hero.title,

      description: study.hero.subtitle,

      images: study.hero.heroImage ? [study.hero.heroImage] : [],

      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Hero hero={study.hero} />

      <Overview overview={study.overview} />

      <Challenge challenge={study.challenge} />

      <Timeline timeline={study.timeline} />

      <Findings findings={study.findings} />

      <Solution solution={study.solution} />

      <Results results={study.results} />

      <Lessons lessons={study.lessons} />

      <Quote quote={study.quote} />

      <FeaturedService service={study.featuredService} />

      <CTA cta={study.cta} />

      <RelatedBlogs blogs={study.relatedBlogs} />
    </>
  );
}
