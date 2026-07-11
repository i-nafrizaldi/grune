"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Amanda Putri",
    role: "Creative Designer",
    initials: "AP",
    quote:
      "Grüne has the kind of atmosphere that makes me want to stay a little longer. The coffee is comforting, the space feels fresh, and it is perfect for getting creative work done.",
  },
  {
    id: "testimonial-2",
    name: "Rizky Mahendra",
    role: "Marketing Executive",
    initials: "RM",
    quote:
      "It is one of my favorite places for a quick meeting or a quiet coffee break. The space feels modern without being too formal, and the service always feels warm.",
  },
  {
    id: "testimonial-3",
    name: "Nadia Kusuma",
    role: "Content Creator",
    initials: "NK",
    quote:
      "I love how every corner feels clean, natural, and thoughtfully designed. Grüne is easy to enjoy whether I come with friends or spend some time by myself.",
  },
  {
    id: "testimonial-4",
    name: "Dimas Pratama",
    role: "Product Manager",
    initials: "DP",
    quote:
      "Good coffee, reliable Wi-Fi, and a comfortable environment make Grüne a great place to work between meetings. It feels relaxed but still professional.",
  },
  {
    id: "testimonial-5",
    name: "Sarah Wijaya",
    role: "Entrepreneur",
    initials: "SW",
    quote:
      "Grüne fits naturally into my daily routine. I can start the morning with coffee, meet a client, or simply take a moment to recharge before continuing the day.",
  },
  {
    id: "testimonial-6",
    name: "Kevin Jonathan",
    role: "Architect",
    initials: "KJ",
    quote:
      "The combination of thoughtful design, welcoming service, and carefully prepared coffee makes every visit feel simple, comfortable, and enjoyable.",
  },
] as const;

export function TestimonialsSection() {
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-stone-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-gruneGreen uppercase">
            What People Say
          </p>

          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl leading-tight font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"
          >
            Shared Moments at Grüne
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
            From productive mornings to slow afternoon breaks, here are a few
            stories from people who make Grüne part of their day.
          </p>
        </div>

        <Carousel
          aria-label="Customer testimonials"
          opts={{
            align: "start",
            loop: true,
            duration: 35,
          }}
          plugins={[autoplayPlugin.current]}
          className="mt-12 lg:mt-16"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 xl:basis-1/3"
              >
                <Card className="h-full rounded-3xl border-zinc-200 bg-white p-0 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="flex h-full min-h-[360px] flex-col p-7 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div
                        className="flex gap-1 text-amber-500"
                        aria-label="5 out of 5 stars"
                      >
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            className="size-4 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                      </div>

                      <Quote
                        className="size-9 text-gruneGreen/20"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <blockquote className="mt-7 flex-1">
                      <p className="text-base leading-7 text-zinc-700">
                        “{testimonial.quote}”
                      </p>
                    </blockquote>

                    <div className="mt-8 flex items-center gap-4 border-t border-zinc-100 pt-6">
                      <div
                        className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gruneGreen text-sm font-bold text-white"
                        aria-hidden="true"
                      >
                        {testimonial.initials}
                      </div>

                      <div>
                        <p className="font-bold text-zinc-950">
                          {testimonial.name}
                        </p>

                        <p className="mt-0.5 text-sm text-zinc-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-10 flex items-center justify-center gap-3">
            <CarouselPrevious className="static translate-y-0 border-zinc-300 bg-white text-gruneGreen hover:bg-gruneGreen hover:text-white focus-visible:ring-gruneGreen" />

            <CarouselNext className="static translate-y-0 border-zinc-300 bg-white text-gruneGreen hover:bg-gruneGreen hover:text-white focus-visible:ring-gruneGreen" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}