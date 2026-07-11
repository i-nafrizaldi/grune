import { FaWhatsapp } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { contactLinks } from "@/lib/contact-links";

export function ContactCtaSection() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-gruneGreen px-6 py-14 text-center text-white sm:px-10 sm:py-16 lg:px-16">
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 size-64 rounded-full bg-white/5 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-16 size-72 rounded-full bg-[#d7c49e]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl">
          <FaWhatsapp
            className="mx-auto size-10 text-[#e5d7b9]"
            aria-hidden="true"
          />

          <h2
            id="contact-cta-heading"
            className="mt-6 text-3xl leading-tight font-black tracking-tight sm:text-4xl"
          >
            Coffee, Conversations, and Good Moments Are Waiting.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Send us a message, reserve your place, and make Grüne part of your
            next everyday moment.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 min-h-12 rounded-full bg-white px-7 font-bold text-gruneGreen hover:bg-white/90"
          >
            <a
              href={contactLinks.whatsappReservation}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Grüne through WhatsApp, opens in a new tab"
            >
              <FaWhatsapp className="size-5" aria-hidden="true" />
              Chat with Grüne
              <HiArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
