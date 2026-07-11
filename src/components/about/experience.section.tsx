import Image from "next/image";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

import experienceImage from "../../../public/asset/GRUNE-ASSET-PT-10.webp";

export function ExperienceSection() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-stone-100 shadow-sm">
          <Image
            src={experienceImage}
            alt="A latte representing a relaxed coffee experience at Grüne"
            placeholder="blur"
            sizes="(max-width: 1024px) calc(100vw - 2rem), 50vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div>
          <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gruneGreen/10 text-gruneGreen">
            <HiOutlineChatBubbleLeftRight
              className="size-6"
              aria-hidden="true"
            />
          </div>

          <p className="mt-6 text-sm font-bold tracking-[0.18em] text-gruneGreen uppercase">
            The Grüne Experience
          </p>

          <h2
            id="experience-heading"
            className="mt-3 text-3xl leading-tight font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"
          >
            Your Space, Your Kind of Moment.
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8">
            Open your laptop and get things done, meet friends between busy
            schedules, take a quiet break, or simply enjoy your coffee without
            rushing. Grüne is designed to support different moments without
            telling you how those moments should look.
          </p>
        </div>
      </div>
    </section>
  );
}
