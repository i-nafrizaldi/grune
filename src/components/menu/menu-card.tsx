import Image from "next/image";
import type { IconType } from "react-icons";
import { FaCoffee } from "react-icons/fa";
import { GiHerbsBundle } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { MdOutlineLocalDrink } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card";
import type { MenuCategory, MenuItem } from "@/data/menu-items";

type MenuCardProps = {
  item: MenuItem;
};

const categoryIcons: Record<MenuCategory, IconType> = {
  Coffee: FaCoffee,
  Signature: HiOutlineSparkles,
  Matcha: GiHerbsBundle,
  "Fizzy Coffee": MdOutlineLocalDrink,
};

export function MenuCard({ item }: MenuCardProps) {
  const CategoryIcon = categoryIcons[item.category];

  return (
    <article className="h-full">
      <Card className="group h-full overflow-hidden rounded-3xl border-gruneGreen/10 bg-white p-0 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gruneGreen/25 hover:shadow-xl">
        <div className="relative aspect-square overflow-hidden bg-[#eee8dc]">
          <Image
            src={item.image}
            alt={`${item.name} beverage by Grüne`}
            fill
            sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/25 to-transparent"
          />

          <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-xs font-bold text-gruneGreen shadow-sm backdrop-blur">
            <CategoryIcon className="size-3.5" aria-hidden="true" />

            {item.category}
          </div>
        </div>

        <CardContent className="flex flex-col p-6 sm:p-7">
          <h3 className="text-xl font-black tracking-tight text-zinc-950 sm:text-2xl">
            {item.name}
          </h3>

          <div
            aria-hidden="true"
            className="mt-3 h-1 w-12 rounded-full bg-gruneGreen"
          />

          <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
            {item.description}
          </p>
        </CardContent>
      </Card>
    </article>
  );
}
