import { FaStar } from "react-icons/fa";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full rounded-3xl border-zinc-200 bg-white p-0 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex h-full min-h-90 flex-col p-7 sm:p-8">
        <div className="flex items-center justify-between">
          <div
            className="flex gap-1 text-amber-500"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} className="size-4" aria-hidden="true" />
            ))}
          </div>

          <HiOutlineChatBubbleBottomCenterText
            className="size-9 text-gruneGreen/20"
            aria-hidden="true"
          />
        </div>

        <blockquote className="mt-7 flex-1">
          <p className="text-base leading-7 text-zinc-700">
            “{testimonial.quote}”
          </p>
        </blockquote>

        <div className="mt-8 flex items-center gap-4 border-t border-zinc-100 pt-6">
          <div
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gruneGreen text-sm font-bold text-white"
            aria-hidden="true"
          >
            {testimonial.initials}
          </div>

          <div>
            <p className="font-bold text-zinc-950">{testimonial.name}</p>

            <p className="mt-0.5 text-sm text-zinc-500">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
