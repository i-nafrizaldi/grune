export const menuCategories = [
  "Coffee",
  "Signature",
  "Matcha",
  "Fizzy Coffee",
] as const;

export type MenuCategory = (typeof menuCategories)[number];

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  image: string;
  description: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "americano",
    name: "Americano",
    category: "Coffee",
    image: "/asset/menu/grune-americano.webp",
    description:
      "A clean and bold espresso-based coffee with a smooth finish, made for a simple and refreshing daily boost.",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "Coffee",
    image: "/asset/menu/grune-cappuccino.webp",
    description:
      "A balanced combination of espresso, warm milk, and soft milk foam with a rich yet comforting character.",
  },
  {
    id: "caramel-macchiato",
    name: "Caramel Macchiato",
    category: "Signature",
    image: "/asset/menu/grune-caramel-macchiato.webp",
    description:
      "Smooth espresso and creamy milk finished with a sweet caramel touch for an indulgent but balanced drink.",
  },
  {
    id: "creamy-dreamy-latte",
    name: "Creamy Dreamy Latte",
    category: "Signature",
    image: "/asset/menu/grune-creamy-dreamy-latte.webp",
    description:
      "An extra-smooth and creamy latte created for slow moments, easy conversations, and a little everyday comfort.",
  },
  {
    id: "flat-white",
    name: "Flat White",
    category: "Coffee",
    image: "/asset/menu/grune-flat-white.webp",
    description:
      "A stronger espresso flavor paired with silky microfoam, creating a smooth texture and a well-rounded taste.",
  },
  {
    id: "grape-fizzy-americano",
    name: "Grape Fizzy Americano",
    category: "Fizzy Coffee",
    image: "/asset/menu/grune-grape-fizzy-americano.webp",
    description:
      "A playful mix of bold americano, refreshing fizz, and fruity grape notes for a bright and modern coffee experience.",
  },
  {
    id: "latte",
    name: "Latte",
    category: "Coffee",
    image: "/asset/menu/grune-latte.webp",
    description:
      "Classic espresso blended with creamy steamed milk for a mellow, smooth, and easy-to-enjoy coffee.",
  },
  {
    id: "matcha-frappe",
    name: "Matcha Frappe",
    category: "Matcha",
    image: "/asset/menu/grune-matcha-frappe.webp",
    description:
      "A chilled and creamy matcha blend with a refreshing texture, perfect for warm days and relaxed afternoons.",
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    category: "Matcha",
    image: "/asset/menu/grune-matcha-latte.webp",
    description:
      "Earthy matcha combined with smooth milk for a calming, creamy, and naturally vibrant drink.",
  },
  {
    id: "orange-americano",
    name: "Orange Americano",
    category: "Fizzy Coffee",
    image: "/asset/menu/grune-orange-americano.webp",
    description:
      "Bold americano with fresh citrus notes, creating a bright and refreshing drink with a lively finish.",
  },
];
