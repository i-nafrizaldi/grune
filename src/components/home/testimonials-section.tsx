"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./testimonial-card";


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
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-10 flex items-center justify-center gap-3">
            <CarouselPrevious className="static translate-y-0 border-zinc-300 bg-white text-gruneGreen hover:bg-gruneGreen hover:text-white" />

            <CarouselNext className="static translate-y-0 border-zinc-300 bg-white text-gruneGreen hover:bg-gruneGreen hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
