import Image from "next/image";

import dailyMomentsImage from "../../../public/asset/GRUNE-ASSET-PT-13.webp";

export function DailyMomentsSection() {
  return (
    <section
      aria-labelledby="daily-moments-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="text-sm font-bold tracking-[0.2em] text-gruneGreen uppercase">
            Your Everyday Coffee
          </p>

          <h2
            id="daily-moments-heading"
            className="mt-3 text-3xl leading-tight font-black tracking-tight text-gruneGreen sm:text-4xl lg:text-5xl"
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

        <div className="group overflow-hidden rounded-3xl bg-stone-100 shadow-sm">
          <Image
            src={dailyMomentsImage}
            alt="A freshly prepared beverage served at Grüne"
            placeholder="blur"
            sizes="(max-width: 1024px) calc(100vw - 2rem), 50vw"
            className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}