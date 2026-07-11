import type { ReactNode } from "react";
import type { IconType } from "react-icons";

type ContactInfoItemProps = {
  icon: IconType;
  title: string;
  children: ReactNode;
};

export function ContactInfoItem({
  icon: Icon,
  title,
  children,
}: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gruneGreen/10 text-gruneGreen">
        <Icon className="size-5" aria-hidden="true" />
      </div>

      <div>
        <p className="font-bold text-zinc-950">{title}</p>

        <div className="mt-1 max-w-md text-sm leading-6 text-zinc-600">
          {children}
        </div>
      </div>
    </div>
  );
}
