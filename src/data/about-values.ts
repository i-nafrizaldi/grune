import type { IconType } from "react-icons";
import { FaCoffee } from "react-icons/fa";
import { HiOutlineHeart, HiOutlineUserGroup } from "react-icons/hi2";

export type BrandValue = {
  id: string;
  title: string;
  description: string;
  icon: IconType;
};

export const brandValues: BrandValue[] = [
  {
    id: "quality",
    title: "Quality in Every Cup",
    description:
      "We pay attention to the details behind each drink, from the beans we choose to the way every cup is prepared.",
    icon: FaCoffee,
  },
  {
    id: "hospitality",
    title: "Thoughtful Hospitality",
    description:
      "Good service should feel warm and natural. We want every visit to feel comfortable, personal, and easy.",
    icon: HiOutlineHeart,
  },
  {
    id: "connection",
    title: "Everyday Connection",
    description:
      "Coffee has a way of bringing people together, whether it is for a quick chat, a meeting, or a quiet moment alone.",
    icon: HiOutlineUserGroup,
  },
];
