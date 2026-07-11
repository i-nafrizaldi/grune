import { SocialCard } from "@/components/contact/social-card";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "../shared/section-heading";

export function SocialSection() {
  return (
    <section
      aria-labelledby="social-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Stay Connected"
          title="Find Grüne Online"
          description="Follow our latest stories, discover new drinks, or contact our team through your preferred platform."
          headingId="social-heading"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {siteConfig.socialLinks.map((social) => (
            <SocialCard key={social.label} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
}
