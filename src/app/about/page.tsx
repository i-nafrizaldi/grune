import type { LucideIcon } from "lucide-react";
import { Coffee, HeartHandshake, UsersRound } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

import aboutHeroImage from "../../../public/asset/GRUNE-HERO-CAROUSEL-4.webp";
import experienceImage from "../../../public/asset/GRUNE-ASSET-PT-5.webp";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story, values, and everyday coffee experience behind Grüne.",
};

type BrandValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const brandValues: BrandValue[] = [
  {
    title: "Quality in Every Cup",
    description:
      "We pay attention to the details behind each drink, from the beans we choose to the way every cup is prepared.",
    icon: Coffee,
  },
  {
    title: "Thoughtful Hospitality",
    description:
      "Good service should feel warm and natural. We want every visit to feel comfortable, personal, and easy.",
    icon: HeartHandshake,
  },
  {
    title: "Everyday Connection",
    description:
      "Coffee has a way of bringing people together, whether it is for a quick chat, a meeting, or a quiet moment alone.",
    icon: UsersRound,
  },
];

export default function AboutPage() {
  return (
    <main>
      <header className="bg-gruneGreen text-white">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-white/70 uppercase">
              About Grüne
            </p>

            <h1 className="mt-4 max-w-2xl text-4xl leading-tight font-black tracking-tight sm:text-5xl lg:text-6xl">
              Good Coffee, Good Energy, and Space to Be Yourself.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Grüne is a modern coffee place created for everyday life. Come for
              a carefully made cup, stay for the relaxed atmosphere, and enjoy a
              space that feels easy, welcoming, and naturally yours.
            </p>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={aboutHeroImage}
              alt="Modern and welcoming interior of a Grüne coffee outlet"
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 1024px) calc(100vw - 2rem), 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <section
        aria-labelledby="brand-story-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-gruneGreen uppercase">
              Our Story
            </p>

            <h2
              id="brand-story-heading"
              className="mt-3 text-3xl leading-tight font-black tracking-tight text-zinc-950 sm:text-4xl"
            >
              Made for the Rhythm of Modern Life.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8">
            <p>
              Grüne started with a simple idea: quality coffee should be easy to
              enjoy in a space that never feels too formal or complicated. It
              should fit naturally into your day, whether you are starting
              early, taking a break, or slowing down after a busy afternoon.
            </p>

            <p>
              Our atmosphere brings together clean design, natural character,
              and an easygoing energy. It is modern enough for a work meeting,
              relaxed enough for a catch-up with friends, and comfortable enough
              for spending time on your own.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="values-heading"
        className="bg-stone-100 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.18em] text-gruneGreen uppercase">
              What Matters to Us
            </p>

            <h2
              id="values-heading"
              className="mt-3 text-3xl leading-tight font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"
            >
              Simple Values, Thoughtfully Practiced.
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
              These values shape the coffee we serve, the spaces we create, and
              the way we welcome every guest.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16">
            {brandValues.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-8"
                >
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gruneGreen/10 text-gruneGreen">
                    <Icon
                      className="size-6"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-zinc-950">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="experience-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-3xl lg:order-1">
            <Image
              src={experienceImage}
              alt="A latte representing a relaxed coffee experience at Grüne"
              placeholder="blur"
              sizes="(max-width: 1024px) calc(100vw - 2rem), 50vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="lg:order-2">
            <h2
              id="experience-heading"
              className="mt-6 text-3xl leading-tight font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"
            >
              Your Space, Your Kind of Moment.
            </h2>

            <p className="mt-6 text-base leading-7 text-gruneGreen sm:text-lg sm:leading-8">
              Open your laptop and get things done, meet friends between busy
              schedules, take a quiet break, or simply enjoy your coffee without
              rushing. Grüne is designed to support different moments without
              telling you how those moments should look.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-cta-heading"
        className="bg-gruneGreen py-16 text-white sm:py-20"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <h2
            id="about-cta-heading"
            className="text-3xl leading-tight font-black tracking-tight sm:text-4xl"
          >
            Come Share a Moment with Us.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Stop by our outlet for your next coffee break, work session, or
            catch-up. We will have a cup ready for you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-gruneGreen transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              View Outlet Details
            </Link>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Contact Grüne
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
