import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  headingId?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  headingId,
  align = "left",
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-bold tracking-[0.18em] uppercase",
            inverted ? "text-white/70" : "text-gruneGreen",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        id={headingId}
        className={cn(
          "mt-3 text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-5xl",
          inverted ? "text-white" : "text-zinc-950",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-7 sm:text-lg sm:leading-8",
            inverted ? "text-white/75" : "text-zinc-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
