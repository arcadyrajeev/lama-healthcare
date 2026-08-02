import HomeHero from "@/app/components/HomeHero";
import ProblemSection from "./components/ProblemSection";
import ExperienceSection from "./components/ExperienceSection";
import SolutionSection from "./components/SolutionSection";
import ServicesSection from "./components/ServiceSection";
import ProcessSection from "./components/ProcessSection";
import FaqSection from "./components/FaqSection";
import VideoSection from "./components/VideoSection";
import FinalCTA from "./components/FinalCTA";

export default function HomePage() {
  return (
    <main className="min-h-[200vh] overflow-x-hidden bg-white ">
      <HomeHero />
      <ProblemSection />
      <VideoSection />
      <ExperienceSection />
      <SolutionSection />
      <ServicesSection />
      <ProcessSection />
      <FaqSection />
      <FinalCTA />
    </main>
  );
}
