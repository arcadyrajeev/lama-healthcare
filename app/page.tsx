import HomeHero from "@/app/components/HomeHero";
import ProblemSection from "./components/ProblemSection";
import ExperienceSection from "./components/ExperienceSection";
import SolutionSection from "./components/SolutionSection";
import ServicesSection from "./components/ServiceSection";

export default function HomePage() {
  return (
    <main className="min-h-[200vh] overflow-x-hidden bg-white ">
      <HomeHero />
      <ProblemSection />
      <ExperienceSection />
      <SolutionSection />
      <ServicesSection />

      {/* Upcoming Sections */}

      {/* <StatsSection /> */}

      {/* <ProcessSection /> */}

      {/* <TestimonialsSection /> */}

      {/* <FAQSection /> */}

      {/* <CTASection /> */}

      {/* <Footer /> */}
    </main>
  );
}
