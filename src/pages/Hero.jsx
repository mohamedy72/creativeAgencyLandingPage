import styled from "styled-components";
import { PrimaryButton } from "../components/Button.styled";
import heroImgSmall from "/images/hero_bg.jpg";
import heroImgBig from "/images/hero_bg_big.jpg";

const HeroStyles = styled.section`
  display: flex;
  gap: 3.125rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Hero = () => {
  return (
    <HeroStyles id="home">
      <div>
        <h1>Make your dream business goal come true</h1>
        <p>
          when you need us for improve your business, then come with us to help
          your business have reach it, you just sit and feel that goal.
        </p>
        <PrimaryButton>Start Project</PrimaryButton>
      </div>
      <div>
        <picture>
          <source srcset={heroImgSmall} media="(max-width: 719px)" />
          <source srcset={heroImgBig} media="(min-width: 720px)" />
          <img
            src={heroImgSmall}
            alt="Hero image of people working and laughing"
          />
        </picture>
      </div>
    </HeroStyles>
  );
};

export default Hero;
