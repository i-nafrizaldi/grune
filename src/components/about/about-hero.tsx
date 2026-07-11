import Image from "next/image";

import aboutHeroImage from "../../../public/asset/GRUNE-ASSET-PT-11.webp";

export function AboutHero() {
  return (
    <header className="overflow-hidden bg-gruneGreen text-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-white/70 uppercase">
            About Grüne
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl leading-tight font-black tracking-tight sm:text-5xl lg:text-6xl">
            Good Coffee, Good Energy, and Space to Be Yourself.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Grüne is a modern coffee place created for everyday life. Come for a
            carefully made cup, stay for the relaxed atmosphere, and enjoy a
            space that feels easy, welcoming, and naturally yours.
          </p>
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-white/5 shadow-xl">
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
  );
}
