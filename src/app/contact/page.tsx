import type { Metadata } from "next";

import { ContactCtaSection } from "@/components/contact/contact-cta-section";
import { ContactHero } from "@/components/contact/contact-hero";
import { LocationSection } from "@/components/contact/location-section";
import { ReservationSection } from "@/components/contact/reservation-section";
import { SocialSection } from "@/components/contact/social-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Grüne for reservations, outlet information, collaborations, and other inquiries.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#f8f5ee]">
      <ContactHero />
      <ReservationSection />
      <SocialSection />
      <LocationSection />
      <ContactCtaSection />
    </main>
  );
}
