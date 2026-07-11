import { Card, CardContent } from "@/components/ui/card";
import type { BrandValue } from "@/data/about-values";

type BrandValueCardProps = {
  value: BrandValue;
};

export function BrandValueCard({ value }: BrandValueCardProps) {
  const Icon = value.icon;

  return (
    <Card className="group h-full rounded-3xl border-zinc-200 bg-white p-0 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gruneGreen/20 hover:shadow-lg">
      <CardContent className="p-7 sm:p-8">
        <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gruneGreen/10 text-gruneGreen transition-colors group-hover:bg-gruneGreen group-hover:text-white">
          <Icon className="size-6" aria-hidden="true" />
        </div>

        <h3 className="mt-6 text-xl font-bold text-zinc-950">{value.title}</h3>

        <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
          {value.description}
        </p>
      </CardContent>
    </Card>
  );
}
