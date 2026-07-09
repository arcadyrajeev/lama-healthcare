import HomeHero from "@/app/components/HomeHero";
import ProblemSection from "./components/ProblemSection";
import ExperienceSection from "./components/ExperienceSection";
import SolutionSection from "./components/SolutionSection";
import ServicesSection from "./components/ServiceSection";
import ProcessSection from "./components/ProcessSection";
import FaqSection from "./components/FaqSection";

export default function HomePage() {
  return (
    <main className="min-h-[200vh] overflow-x-hidden bg-white ">
      <HomeHero />
      <ProblemSection />
      <ExperienceSection />
      <SolutionSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />

      {/* Upcoming Sections */}

      {/* <StatsSection /> */}

      {/* <TestimonialsSection /> */}

      {/* <CTASection /> */}

      {/* <Footer /> */}
    </main>
  );
}
