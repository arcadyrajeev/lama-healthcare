import FaqSection from "@/app/components/FaqSection";
import ContactHero from "./components/ContactHero";
import ContactTopics from "./components/ContactTopics";
import ContactSupport from "./components/ContactSupport";
import ContactCTA from "./components/ContactCTA";

export default function CaseStudyPage() {
  return (
    <>
      <ContactHero />
      <ContactTopics />
      <ContactSupport />

      <FaqSection />
      <ContactCTA />
    </>
  );
}
