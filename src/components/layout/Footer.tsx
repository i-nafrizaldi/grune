import { Clock3, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

const focusClasses =
  "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-20 bg-gruneGreen text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} homepage`}
              className="relative block w-full h-20 shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gruneGreen"
            >
              <Image
                src="/asset/8-Photoroom.png"
                alt={`${siteConfig.name} logo`}
                fill
                priority
                className="object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold tracking-wider uppercase">
              Explore
            </h2>

            <ul className="mt-5 space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm text-white/75 transition hover:text-white ${focusClasses}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase">
              Contact
            </h2>

            <address className="mt-5 space-y-4 text-sm not-italic text-white/75">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className={`transition hover:text-white ${focusClasses}`}
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

                <a
                  href={siteConfig.contact.phoneHref}
                  className={`transition hover:text-white ${focusClasses}`}
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

                <span>{siteConfig.contact.address}</span>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />

                <span>{siteConfig.contact.operatingHours}</span>
              </div>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase">
              Follow Grüne
            </h2>

            <ul className="mt-5 space-y-3">
              {siteConfig.socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} for ${siteConfig.name}, opens in a new tab`}
                    className={`inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white ${focusClasses}`}
                  >
                    {social.label}

                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6">
          <p className="text-sm text-white/60">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
