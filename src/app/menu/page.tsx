import type { Metadata } from "next";

import { MenuCtaSection } from "@/components/menu/menu-cta-section";
import { MenuGrid } from "@/components/menu/menu-grid";
import { MenuHero } from "@/components/menu/menu-hero";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Grüne beverage menu, from classic coffee to fresh matcha and fizzy americano creations.",
};

export default function MenuPage() {
  return (
    <main className="bg-[#f8f5ee]">
      <MenuHero />
      <MenuGrid />
      <MenuCtaSection />
    </main>
  );
}
