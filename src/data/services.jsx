import { v4 as uuidv4 } from "uuid";
import { BiCog, BiLaptop, BiPen, BiTv } from "react-icons/bi";

export const services = [
  {
    id: uuidv4(),
    logo: <BiLaptop />,
    title: "Social Media Management",
    bg: "#377DFF",
  },
  {
    id: uuidv4(),
    logo: <BiCog />,
    title: "Search Engine Opimization",
    bg: "#FF2D2D",
  },
  {
    id: uuidv4(),
    logo: <BiPen />,
    title: "Design",
    bg: "#7CE761",
  },
  {
    id: uuidv4(),
    logo: <BiTv />,
    title: "Ads",
    bg: "#FFA800",
  },
];

console.table(<BiCog />);
