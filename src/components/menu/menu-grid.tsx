import { MenuCard } from "@/components/menu/menu-card";
import { menuItems } from "@/data/menu-items";

export function MenuGrid() {
  return (
    <section
      aria-labelledby="drinks-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold tracking-widest text-gruneGreen uppercase">
              Our Menu
            </p>

            <h2
              id="drinks-heading"
              className="mt-3 text-3xl leading-tight font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl"
            >
              Drinks Made for Every Mood
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
            Choose something bold, creamy, earthy, or refreshing. Each drink
            brings its own personality while staying true to the Grüne
            experience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
