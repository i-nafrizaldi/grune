import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

import ctaBackground from "../../../public/asset/GRUNE-ASSET-PT-4.webp";

export function AboutCtaSection() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="relative flex h-svh items-center overflow-hidden text-white"
    >
      <Image
        src={ctaBackground}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35"
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <p className="text-sm font-bold tracking-[0.18em] text-white/75 uppercase">
          Visit Grüne
        </p>

        <h2
          id="about-cta-heading"
          className="mt-3 text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-5xl"
        >
          Come Share a Moment with Us.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          Stop by our outlet for your next coffee break, work session, or
          catch-up. We will have a cup ready for you.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-6 font-bold text-gruneGreen hover:bg-white/90"
          >
            <Link href="/contact">
              View Outlet Details
              <HiArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/60 bg-transparent px-6 font-bold text-white hover:bg-white/10 hover:text-white"
          >
            <a href={`mailto:${siteConfig.contact.email}`}>
              Contact Grüne
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}