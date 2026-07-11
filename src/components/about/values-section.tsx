import { BrandValueCard } from "@/components/about/brand-value-card";
import { brandValues } from "@/data/about-values";

export function ValuesSection() {
  return (
    <section
      aria-labelledby="values-heading"
      className="bg-stone-100 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.18em] text-gruneGreen uppercase">
            What Matters to Us
          </p>

          <h2
            id="values-heading"
            className="mt-3 text-3xl leading-tight font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"
          >
            Simple Values, Thoughtfully Practiced.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
            These values shape the coffee we serve, the spaces we create, and
            the way we welcome every guest.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-16">
          {brandValues.map((value) => (
            <BrandValueCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
