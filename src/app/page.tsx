// "use client";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Autoplay from "embla-carousel-autoplay";
// import Fade from "embla-carousel-fade";
// import { Bean, Coffee, Target } from "lucide-react";
// import Image from "next/image";
// import { useRef } from "react";
// import heroImg3 from "../../public/asset/LS-HERO-2.png";
// import heroImg4 from "../../public/asset/LS-HERO-3.png";
// import heroImg1 from "../../public/asset/LS-HERO-CR-OUTLET.png";
// import caffelate from "../../public/asset/PT-CAFFELATE.png";

// export default function Home() {
//   const heroImg = [heroImg1, heroImg4, heroImg3];
//   const autoplayPlugin = useRef(
//     Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: false }),
//   );
//   const fadePlugin = useRef(Fade());

//   return (
//     <div className="flex flex-col  md:py-4 gap-32 ">
//       {/* HERO */}
//       <div className="w-full  mx-auto md:px-10 ">
//         <Carousel
//           opts={{
//             loop: true,
//             duration: 100,
//           }}
//           plugins={[fadePlugin.current, autoplayPlugin.current]}
//           className=""
//         >
//           <CarouselContent className="">
//             {heroImg.map((img, index) => (
//               <CarouselItem key={index}>
//                 <div className="p-1">
//                   <Card className="rounded-xl p-0">
//                     <CardContent className="relative  aspect-video flex items-center justify-center ">
//                       <Image
//                         alt="hero"
//                         src={img}
//                         fill
//                         className="object-cover"
//                       />
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div>

//       {/* SECTION1 */}
//       <div className=" bg-gruneGreen text-gruneWhite mx-auto py-20 w-screen">
//         <div className="w-7xl px-4 flex flex-col gap-20 justify-between mx-auto text-center">
//           <div className="font-black text-4xl text-center">
//             Discover the Story Behind Every Cup
//           </div>
//           <div className="flex flex-row justify-between gap-40">
//             <div className="flex flex-col gap-4">
//               <Bean
//                 className="size-10 mx-auto text-gruneWhite"
//                 strokeWidth={1}
//               />
//               <div className="font-bold text-md">
//                 CAREFULLY SELECTED COFFEE BEANS
//               </div>
//               <div className="text-xs">
//                 We carefully select high-quality coffee beans from trusted
//                 growing regions, chosen for their distinctive aroma, balanced
//                 flavor, and consistent quality.
//               </div>
//             </div>
//             <div className="flex flex-col gap-4">
//               <Target
//                 className="size-10 mx-auto text-gruneWhite"
//                 strokeWidth={1}
//               />
//               <div className="font-bold text-md">CRAFTED WITH PRECISION</div>
//               <div className="text-xs">
//                 From grinding to extraction, every step is handled with care by
//                 our baristas to bring out the unique character and natural
//                 flavors of each coffee.
//               </div>
//             </div>
//             <div className="flex flex-col gap-4">
//               <Coffee
//                 className="size-10 mx-auto text-gruneWhite"
//                 strokeWidth={1}
//               />
//               <div className="font-bold text-md">FRESHLY BREWED FOR YOU</div>
//               <div className="text-xs">
//                 Every cup is freshly ground and brewed to order, delivering a
//                 rich aroma, smooth texture, and satisfying flavor from the first
//                 sip to the last.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* SECTION 2 */}
//       <div className="grid grid-cols-2 w-7xl mx-auto px-4 ">
//         <div className="flex flex-col gap-8 text-center justify-center">
//           <h1 className="font-black text-gruneGreen text-5xl">
//             Always Here for Your Daily Moments.
//           </h1>
//           <p className="px-20 text-lg">
//             Whether you're powering through deadlines or taking time to unwind,
//             <span className="font-black text-gruneGreen">Grüne</span> is by your
//             side. We bring you great coffee and a welcoming smile to celebrate
//             the simple joys of every day.
//           </p>
//         </div>
//         <div className="w-full">
//           <Image
//             alt="Cafe latte"
//             src={caffelate}
//             className="h-auto w-full rounded-[50px]"
//             sizes="100vw"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import type { LucideIcon } from "lucide-react";
import { Bean, Coffee, Target } from "lucide-react";
import Image from "next/image";

import { HeroCarousel } from "@/components/home/hero-carousel";

import img13 from "../../public/asset/GRUNE-ASSET-PT-13.webp";
import { TestimonialsSection } from "@/components/home/Testimonial-section";

type CoffeeProcessItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const coffeeProcess: CoffeeProcessItem[] = [
  {
    title: "Carefully Selected Coffee Beans",
    description:
      "We carefully select high-quality coffee beans from trusted growing regions, chosen for their distinctive aroma, balanced flavor, and consistent quality.",
    icon: Bean,
  },
  {
    title: "Crafted with Precision",
    description:
      "From grinding to extraction, every step is handled with care by our baristas to bring out the unique character and natural flavors of each coffee.",
    icon: Target,
  },
  {
    title: "Freshly Brewed for You",
    description:
      "Every cup is freshly ground and brewed to order, delivering a rich aroma, smooth texture, and satisfying flavor from the first sip to the last.",
    icon: Coffee,
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h1 className="sr-only">
            Grüne Coffee — Coffee for Your Everyday Moments
          </h1>

          <HeroCarousel />
        </div>
      </header>

      <section
        aria-labelledby="coffee-process-heading"
        className="mt-16 bg-gruneGreen py-16 text-white sm:mt-24 sm:py-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="coffee-process-heading"
            className="mx-auto max-w-3xl text-center text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-5xl"
          >
            Discover the Story Behind Every Cup
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:mt-16 lg:gap-16">
            {coffeeProcess.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="text-center">
                  <Icon
                    className="mx-auto size-11"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />

                  <h3 className="mt-5 text-base font-bold tracking-wide uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/80">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="daily-moments-heading"
        className="py-16 sm:py-20 lg:py-24 flex flex-col gap-20"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="text-center lg:text-left">
            <h2
              id="daily-moments-heading"
              className="text-3xl leading-tight font-black tracking-tight text-gruneGreen sm:text-4xl lg:text-5xl"
            >
              Always Here for Your Daily Moments.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8 lg:mx-0">
              Whether you&apos;re powering through deadlines or taking time to
              unwind,
              <span className="font-black text-gruneGreen"> Grüne</span> is by
              your side. We bring you great coffee and a welcoming smile to
              celebrate the simple joys of every day.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <Image
              src={img13}
              alt="A freshly prepared café latte served at Grüne"
              placeholder="blur"
              sizes="(max-width: 1024px) calc(100vw - 2rem), 50vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
        <TestimonialsSection />
      </section>
    </main>
  );
}
