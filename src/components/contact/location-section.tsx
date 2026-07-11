import {
  HiArrowUpRight,
  HiOutlineClock,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { MdOutlineNavigation } from "react-icons/md";

import { ContactInfoItem } from "@/components/contact/contact-info-item";
import { Button } from "@/components/ui/button";
import { contactLinks } from "@/lib/contact-links";
import { siteConfig } from "@/lib/site-config";

const contactLinkClasses =
  "rounded-sm transition hover:text-gruneGreen focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gruneGreen";

export function LocationSection() {
  return (
    <section
      aria-labelledby="location-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:gap-12 lg:px-8">
        <div className="flex flex-col">
          <p className="text-sm font-bold tracking-widest text-gruneGreen uppercase">
            Visit Our Outlet
          </p>

          <h2
            id="location-heading"
            className="mt-3 text-3xl leading-tight font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"
          >
            Coffee and Good Moments Are Waiting.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600">
            Visit our outlet for a coffee break, a meeting, or a quiet moment of
            your own. Check our address and opening hours before your visit.
          </p>

          <address className="mt-10 space-y-6 not-italic">
            <ContactInfoItem icon={HiOutlineMapPin} title="Outlet Address">
              <p>{siteConfig.contact.address}</p>
            </ContactInfoItem>

            <ContactInfoItem icon={HiOutlineClock} title="Operating Hours">
              <p>{siteConfig.contact.operatingHours}</p>
            </ContactInfoItem>

            <ContactInfoItem icon={HiOutlinePhone} title="Contact Number">
              <a
                href={siteConfig.contact.phoneHref}
                className={contactLinkClasses}
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </ContactInfoItem>

            <ContactInfoItem icon={HiOutlineEnvelope} title="Email">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className={contactLinkClasses}
              >
                {siteConfig.contact.email}
              </a>
            </ContactInfoItem>
          </address>

          <Button
            asChild
            className="mt-10 w-fit rounded-full bg-gruneGreen px-6 font-bold text-white hover:bg-[#1d5218]"
          >
            <a
              href={contactLinks.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Grüne outlet directions in Google Maps, opens in a new tab"
            >
              <MdOutlineNavigation className="size-4" aria-hidden="true" />
              Get Directions
              <HiArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <div className="min-h-100 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm lg:min-h-140">
          <iframe
            src={contactLinks.mapsEmbed}
            title={`Google Maps location for ${siteConfig.contact.outletName}`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-100 w-full border-0 lg:min-h-140"
          />
        </div>
      </div>
    </section>
  );
}
