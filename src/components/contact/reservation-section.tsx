import { FaWhatsapp } from "react-icons/fa";
import { HiArrowUpRight, HiOutlineCalendarDays } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactLinks } from "@/lib/contact-links";

export function ReservationSection() {
  return (
    <section
      aria-labelledby="reservation-heading"
      className="relative z-10 -mt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Card className="overflow-hidden rounded-3xl border-0 bg-[#e8dfcc] p-0 shadow-xl">
          <CardContent className="grid grid-cols-1 gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14 lg:p-14">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gruneGreen text-white shadow-sm">
                <HiOutlineCalendarDays className="size-7" aria-hidden="true" />
              </div>

              <div>
                <p className="text-sm font-bold tracking-widest text-gruneGreen uppercase">
                  Reservation
                </p>

                <h2
                  id="reservation-heading"
                  className="mt-2 text-3xl leading-tight font-black tracking-tight text-zinc-950 sm:text-4xl"
                >
                  Reserve Your Space at Grüne
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-700">
                  Contact our team through WhatsApp to ask about table
                  availability, group reservations, or your preferred visit
                  time.
                </p>

                <p className="mt-3 text-sm font-medium text-zinc-500">
                  You will be redirected to WhatsApp with a prepared reservation
                  message.
                </p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="min-h-12 rounded-full bg-gruneGreen px-7 font-bold text-white shadow-sm hover:bg-[#1d5218]"
            >
              <a
                href={contactLinks.whatsappReservation}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reserve a table through WhatsApp, opens in a new tab"
              >
                <FaWhatsapp className="size-5" aria-hidden="true" />
                Reserve via WhatsApp
                <HiArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
