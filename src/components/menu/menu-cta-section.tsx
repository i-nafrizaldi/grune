import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

import { Button } from "@/components/ui/button";

export function MenuCtaSection() {
  return (
    <section
      aria-labelledby="menu-cta-heading"
      className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl bg-[#e8dfcc] px-6 py-10 text-center sm:px-10 lg:flex-row lg:px-14 lg:py-12 lg:text-left">
        <div>
          <p className="text-sm font-bold tracking-widest text-gruneGreen uppercase">
            Your Daily Grüne
          </p>

          <h2
            id="menu-cta-heading"
            className="mt-3 text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl"
          >
            Coffee break or matcha mood?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
            Visit our outlet and discover the drink that feels right for your
            day.
          </p>
        </div>

        <Button
          asChild
          size="lg"
          className="shrink-0 rounded-full bg-gruneGreen px-6 font-bold text-white hover:bg-[#1d5218]"
        >
          <Link href="/contact">
            Visit Grüne
            <HiArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
