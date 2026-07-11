"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import hero3 from "../../../public/asset/GRUNE-HERO-CAROUSEL-1.webp";
import hero2 from "../../../public/asset/GRUNE-HERO-CAROUSEL-2.webp";
import hero1 from "../../../public/asset/GRUNE-HERO-CAROUSEL-3.webp";
import hero4 from "../../../public/asset/GRUNE-HERO-CAROUSEL-4.webp";

const heroSlides = [
  {
    src: hero1,
    alt: "Interior view of a modern Grüne coffee outlet",
  },
  {
    src: hero2,
    alt: "Grüne coffee presented in a modern café setting",
  },
  {
    src: hero3,
    alt: "Welcoming café atmosphere at Grüne",
  },
  {
    src: hero4,
    alt: "Welcoming café atmosphere at Grüne",
  },
] as const;

export function HeroCarousel() {
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const fadePlugin = useRef(Fade());
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      autoplayPlugin.current.stop();
      setAutoplayEnabled(false);
    }
  }, []);

  function toggleAutoplay() {
    if (autoplayEnabled) {
      autoplayPlugin.current.stop();
      setAutoplayEnabled(false);
      return;
    }

    autoplayPlugin.current.play();
    setAutoplayEnabled(true);
  }

  return (
    <div className="relative">
      <Carousel
        aria-label="Featured Grüne café images"
        aria-live="off"
        opts={{
          loop: true,
          duration: 35,
        }}
        plugins={[fadePlugin.current, autoplayPlugin.current]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.src.src} className="pl-0">
              <Card className="gap-0 overflow-hidden rounded-2xl border-0 bg-transparent p-0 shadow-sm">
                <CardContent className="relative aspect-4/3 p-0 sm:aspect-video">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    placeholder="blur"
                    sizes="(max-width: 1280px) calc(100vw - 2rem), 1280px"
                    className="object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-3 z-20 border-white/60 bg-white/90 text-gruneGreen shadow-sm hover:bg-white focus-visible:ring-2 focus-visible:ring-white" />

        <CarouselNext className="right-3 z-20 border-white/60 bg-white/90 text-gruneGreen shadow-sm hover:bg-white focus-visible:ring-2 focus-visible:ring-white" />
      </Carousel>

      <button
        type="button"
        onClick={toggleAutoplay}
        aria-label={
          autoplayEnabled
            ? "Pause automatic slide rotation"
            : "Play automatic slide rotation"
        }
        aria-pressed={!autoplayEnabled}
        className="absolute right-3 bottom-3 z-20 inline-flex size-10 items-center justify-center rounded-full border border-white/60 bg-white/90 text-gruneGreen shadow-sm transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {autoplayEnabled ? (
          <Pause className="size-4" aria-hidden="true" />
        ) : (
          <Play className="size-4" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
