export type Testimonial = {
  id: string;
  name: string;
  role: string;
  initials: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "amanda-putri",
    name: "Amanda Putri",
    role: "Creative Designer",
    initials: "AP",
    quote:
      "Grüne has the kind of atmosphere that makes me want to stay a little longer. The coffee is comforting, the space feels fresh, and it is perfect for getting creative work done.",
  },
  {
    id: "rizky-mahendra",
    name: "Rizky Mahendra",
    role: "Marketing Executive",
    initials: "RM",
    quote:
      "It is one of my favorite places for a quick meeting or a quiet coffee break. The space feels modern without being too formal, and the service always feels warm.",
  },
  {
    id: "nadia-kusuma",
    name: "Nadia Kusuma",
    role: "Content Creator",
    initials: "NK",
    quote:
      "I love how every corner feels clean, natural, and thoughtfully designed. Grüne is easy to enjoy whether I come with friends or spend some time by myself.",
  },
  {
    id: "dimas-pratama",
    name: "Dimas Pratama",
    role: "Product Manager",
    initials: "DP",
    quote:
      "Good coffee and a comfortable environment make Grüne a great place to work between meetings. It feels relaxed but still professional.",
  },
  {
    id: "sarah-wijaya",
    name: "Sarah Wijaya",
    role: "Entrepreneur",
    initials: "SW",
    quote:
      "Grüne fits naturally into my daily routine. I can start the morning with coffee, meet a client, or simply take a moment to recharge.",
  },
  {
    id: "kevin-jonathan",
    name: "Kevin Jonathan",
    role: "Architect",
    initials: "KJ",
    quote:
      "The combination of thoughtful design, welcoming service, and carefully prepared coffee makes every visit feel simple and enjoyable.",
  },
];
