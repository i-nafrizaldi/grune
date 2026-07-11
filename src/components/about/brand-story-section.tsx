export function BrandStorySection() {
  return (
    <section
      aria-labelledby="brand-story-heading"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div>
          <p className="text-sm font-bold tracking-[0.18em] text-gruneGreen uppercase">
            Our Story
          </p>

          <h2
            id="brand-story-heading"
            className="mt-3 text-3xl leading-tight font-black tracking-tight text-zinc-950 sm:text-4xl"
          >
            Made for the Rhythm of Modern Life.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8">
          <p>
            Grüne started with a simple idea: quality coffee should be easy to
            enjoy in a space that never feels too formal or complicated. It
            should fit naturally into your day, whether you are starting early,
            taking a break, or slowing down after a busy afternoon.
          </p>

          <p>
            Our atmosphere brings together clean design, natural character, and
            an easygoing energy. It is modern enough for a work meeting, relaxed
            enough for a catch-up with friends, and comfortable enough for
            spending time on your own.
          </p>
        </div>
      </div>
    </section>
  );
}
