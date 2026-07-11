import type { IconType } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { HiArrowUpRight, HiOutlineEnvelope } from "react-icons/hi2";

import { Card, CardContent } from "@/components/ui/card";
import type { SocialLink } from "@/lib/site-config";

type SocialCardProps = {
  social: SocialLink;
};

const socialIcons: Record<string, IconType> = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  WhatsApp: FaWhatsapp,
  Email: HiOutlineEnvelope,
};

export function SocialCard({ social }: SocialCardProps) {
  const SocialIcon = socialIcons[social.label] ?? HiArrowUpRight;

  const isEmailLink = social.href.startsWith("mailto:");

  return (
    <Card className="group h-full rounded-3xl border-gruneGreen/10 bg-white p-0 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gruneGreen/25 hover:shadow-lg">
      <CardContent className="flex h-full flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gruneGreen/10 text-gruneGreen transition-colors group-hover:bg-gruneGreen group-hover:text-white">
            <SocialIcon className="size-6" aria-hidden="true" />
          </div>

          <HiArrowUpRight
            className="size-5 text-zinc-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gruneGreen"
            aria-hidden="true"
          />
        </div>

        <h3 className="mt-6 text-xl font-black tracking-tight text-zinc-950">
          {social.label}
        </h3>

        <p className="mt-1 text-sm font-semibold text-gruneGreen">
          {social.handle}
        </p>

        <p className="mt-4 flex-1 text-sm leading-6 text-zinc-600">
          {social.description}
        </p>

        <a
          href={social.href}
          target={isEmailLink ? undefined : "_blank"}
          rel={isEmailLink ? undefined : "noopener noreferrer"}
          aria-label={
            isEmailLink
              ? `Contact Grüne through ${social.label}`
              : `Open Grüne ${social.label}, opens in a new tab`
          }
          className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-bold text-gruneGreen focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gruneGreen"
        >
          Connect with us
          <HiArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </CardContent>
    </Card>
  );
}
