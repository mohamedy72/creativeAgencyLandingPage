import { OutlinedButton } from "../../components/Button.styled";
import {
  PortfolioCard,
  PortfolioCardLabel,
} from "../../components/PortfolioCard.styled";
import {
  PortfolioContent,
  PortfolioLayout,
  PortfolioWork,
} from "./Portfolio.styled";
import { work } from "../../data/work";

const Portfolio = () => {
  return (
    <PortfolioLayout id="portfolio">
      <PortfolioContent>
        <small className="section_intro-title">Our Portfolio</small>
        <h2>What do we do</h2>
        <p>
          all projects that we have already done , proven can help to use more
          comfortable, then can used by client from our business
        </p>
      </PortfolioContent>
      <PortfolioWork>
        {work.map((item) => (
          <PortfolioCard key={item.id} img={item.img}>
            <PortfolioCardLabel>{item.title}</PortfolioCardLabel>
          </PortfolioCard>
        ))}
      </PortfolioWork>
      <OutlinedButton>See All Portfolio</OutlinedButton>
    </PortfolioLayout>
  );
};

export default Portfolio;
