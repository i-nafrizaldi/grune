import { AboutCtaSection } from "@/components/about/about-cta-section";
import { AboutHero } from "@/components/about/about-hero";
import { BrandStorySection } from "@/components/about/brand-story-section";
import { ExperienceSection } from "@/components/about/experience.section";
import { ValuesSection } from "@/components/about/values-section";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story, values, and everyday coffee experience behind Grüne.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <BrandStorySection />
      <ValuesSection />
      <ExperienceSection />
      <AboutCtaSection />
    </main>
  );
}
