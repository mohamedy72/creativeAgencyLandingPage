import styled from "styled-components";

export const PortfolioCard = styled.section`
  position: relative;
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 30px;

  &::before {
    content: "";
    position: absolute;
    unset: 0;
    width: 100%;
    height: 100%;
    background-image: ;
  }
`;

export const PortfolioCardLabel = styled.h3`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
`;
