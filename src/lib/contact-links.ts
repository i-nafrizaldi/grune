import { siteConfig } from "@/lib/site-config";

const reservationMessage = encodeURIComponent(
  siteConfig.contact.reservationMessage,
);

const mapQuery = encodeURIComponent(siteConfig.contact.address);

export const contactLinks = {
  whatsappReservation: `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${reservationMessage}`,

  mapsEmbed: `https://www.google.com/maps?q=${mapQuery}&output=embed`,

  mapsDirections: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
} as const;
