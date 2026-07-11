export const siteConfig = {
  name: "Grüne",

  description:
    "Modern coffee, welcoming spaces, and thoughtful everyday moments.",

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Menu",
      href: "/menu",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "News Room",
      href: "/news",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  contact: {
    outletName: "Grüne Coffee",

    email: "hello@grune.example",

    phoneDisplay: "+62 812-0000-0000",
    phoneHref: "tel:+6281200000000",

    whatsappNumber: "6281200000000",
    whatsappDisplay: "+62 812-0000-0000",

    reservationMessage:
      "Hello Grüne, I would like to make a reservation. Could you please help me with the available schedule?",

    address: "-10.171674,123.611596",

    operatingHours: "Monday–Sunday, 08.00–22.00 — replace with confirmed hours",
  },

  socialLinks: [
    {
      label: "Instagram",
      handle: "@grune.example",
      href: "https://www.instagram.com/",
      description: "Follow our latest drinks, café moments, and Grüne updates.",
    },
    {
      label: "TikTok",
      handle: "@grune.example",
      href: "https://www.tiktok.com/",
      description:
        "Discover quick stories, behind-the-scenes moments, and new releases.",
    },
    {
      label: "WhatsApp",
      handle: "+62 812-0000-0000",
      href: "https://wa.me/6281200000000",
      description:
        "Chat with our team for reservations and outlet information.",
    },
    {
      label: "Email",
      handle: "hello@grune.example",
      href: "mailto:hello@grune.example",
      description:
        "Contact us for partnerships, collaborations, and general inquiries.",
    },
  ],
} as const;
export type SocialLink = (typeof siteConfig.socialLinks)[number];
