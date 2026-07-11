import { HiOutlineSparkles } from "react-icons/hi2";

export function ContactHero() {
  return (
    <header className="relative overflow-hidden bg-gruneGreen text-white">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-24 size-96 rounded-full bg-white/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-36 -left-24 size-96 rounded-full bg-[#d7c49e]/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-20 pb-28 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8 lg:pt-28 lg:pb-36">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur">
            <HiOutlineSparkles className="size-4" aria-hidden="true" />
            Let&apos;s Connect
          </div>

          <h1 className="mt-6 text-4xl leading-tight font-black tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Make Your Next Moment Better.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            Planning a coffee meeting, catching up with friends, or simply
            looking for a comfortable place to unwind? Reach out to us and
            let&apos;s arrange your next Grüne moment.
          </p>
        </div>
      </div>
    </header>
  );
}
