import styled from "styled-components";
import { OutlinedButton } from "../components/Button.styled";
import {
  PortfolioCard,
  PortfolioCardLabel,
} from "../components/PortfolioCard.styled";
import { work } from "../data/work";

const PortfolioLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & h2 {
    margin-block-end: 2.1875rem;
  }
`;
const PortfolioContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PortfolioWork = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem 0;
  margin-block: 2.1875rem;
`;

const Portfolio = () => {
  return (
    <PortfolioLayout id="portfolio">
      <PortfolioContent>
        <small>Our Portfolio</small>
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
