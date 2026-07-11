import type { IconType } from "react-icons";
import { FaCoffee } from "react-icons/fa";
import { GiCoffeeBeans } from "react-icons/gi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

type CoffeeProcessItem = {
  title: string;
  description: string;
  icon: IconType;
};

const coffeeProcessItems: CoffeeProcessItem[] = [
  {
    title: "Carefully Selected Coffee Beans",
    description:
      "We carefully select high-quality coffee beans from trusted growing regions, chosen for their distinctive aroma, balanced flavor, and consistent quality.",
    icon: GiCoffeeBeans,
  },
  {
    title: "Crafted with Precision",
    description:
      "From grinding to extraction, every step is handled with care by our baristas to bring out the unique character and natural flavors of each coffee.",
    icon: HiOutlineAdjustmentsHorizontal,
  },
  {
    title: "Freshly Brewed for You",
    description:
      "Every cup is freshly ground and brewed to order, delivering a rich aroma, smooth texture, and satisfying flavor from the first sip to the last.",
    icon: FaCoffee,
  },
];

export function CoffeeProcessSection() {
  return (
    <section
      aria-labelledby="coffee-process-heading"
      className="mt-16 bg-gruneGreen py-16 text-white sm:mt-24 sm:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase">
            Behind Every Cup
          </p>

          <h2
            id="coffee-process-heading"
            className="mt-3 text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-5xl"
          >
            Discover the Story Behind Every Cup
          </h2>

          <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg">
            Thoughtful details, carefully prepared ingredients, and a fresh cup
            made for your everyday moments.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:mt-16 lg:gap-16">
          {coffeeProcessItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="text-center">
                <div className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                  <Icon className="size-8 text-white" aria-hidden="true" />
                </div>

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
  );
}
