import { v4 as uuid } from "uuid";
import { BiCog, BiLaptop, BiPen, BiTv } from "react-icons/bi";

export const services = [
  {
    id: uuid(),
    logo: <BiLaptop />,
    title: "Social Media Management",
    bg: "#377DFF",
  },
  {
    id: uuid(),
    logo: <BiCog />,
    title: "Search Engine Opimization",
    bg: "#FF2D2D",
  },
  {
    id: uuid(),
    logo: <BiPen />,
    title: "Design",
    bg: "#7CE761",
  },
  {
    id: uuid(),
    logo: <BiTv />,
    title: "Ads",
    bg: "#FFA800",
  },
];
