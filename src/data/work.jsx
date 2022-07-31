import { v4 as uuid } from "uuid";
import project1 from "/images/portfolio_bg_1.jpg";
import project2 from "/images/portfolio_bg_2.jpg";
import project3 from "/images/portfolio_bg_3.jpg";

export const work = [
  {
    id: uuid(),
    img: project1,
    title: "Design Furniture App",
  },
  {
    id: uuid(),
    img: project2,
    title: "Cloud App",
  },
  {
    id: uuid(),
    img: project3,
    title: "Design Byte App",
  },
];
