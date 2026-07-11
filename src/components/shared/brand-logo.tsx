import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "primary" | "light";
  priority?: boolean;
  className?: string;
};

const logoSources = {
  primary: "/asset/6-Photoroom.png",
  light: "/asset/8-Photoroom.png",
} as const;

export function BrandLogo({
  variant = "primary",
  priority = false,
  className,
}: BrandLogoProps) {
  return (
    <span className={cn("relative block h-10 w-32 shrink-0", className)}>
      <Image
        src={logoSources[variant]}
        alt="Grüne logo"
        fill
        priority={priority}
        sizes="160px"
        className="object-contain object-left"
      />
    </span>
  );
}
