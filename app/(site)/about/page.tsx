import FaqSection from "@/app/components/FaqSection";
import AboutHero from "./components/AboutHero";
import AboutStory from "./components/AboutStory";
import LamaJourney from "./components/LamaJourney";
import NumbersSection from "./components/NumbersSection";
import ProblemsSection from "./components/ProblemSection";
import TeamSection from "./components/TeamSection";

export default function HomePage() {
  return (
    <main className="min-h-[200vh] overflow-x-hidden bg-white ">
      <AboutHero />
      <AboutStory />
      <LamaJourney />
      <ProblemsSection />
      <NumbersSection />
      <TeamSection />
      <FaqSection />
    </main>
  );
}
