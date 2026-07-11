import { CoffeeProcessSection } from "@/components/home/coffee-process-section";
import HeroSection from "@/components/home/hero-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <CoffeeProcessSection />

      <TestimonialsSection />
    </main>
  );
}
