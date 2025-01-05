import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { OurValues } from "@/components/about/OurValues";
import { TeamSection } from "@/components/about/TeamSection";

export function About() {
  return (
    <div className="min-h-screen pt-16">
      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
    </div>
  );
}