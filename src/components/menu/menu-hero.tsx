import { menuCategories } from "@/data/menu-items";

export function MenuHero() {
  return (
    <header className="relative overflow-hidden bg-gruneGreen text-white">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-72 rounded-full bg-white/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 size-80 rounded-full bg-[#d7c49e]/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-[#e5d7b9] uppercase">
            Grüne Beverage Collection
          </p>

          <h1 className="mt-4 text-4xl leading-tight font-black tracking-tight sm:text-5xl lg:text-6xl">
            Find Your New Favorite Drink.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            From timeless coffee classics to creamy matcha and refreshing fizzy
            creations, every Grüne drink is made to fit your kind of moment.
          </p>
        </div>

        <ul
          aria-label="Available beverage categories"
          className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {menuCategories.map((category) => (
            <li
              key={category}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
