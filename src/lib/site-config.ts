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
      href: "/#contact",
    },
  ],

  contact: {
    email: "hello@grune.example",
    phoneDisplay: "+62 812-0000-0000",
    phoneHref: "tel:+6281200000000",
    address: "Outlet address — replace with the confirmed address",
    operatingHours: "Operating hours — replace with the confirmed schedule",
  },

  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
    },
  ],
} as const;
