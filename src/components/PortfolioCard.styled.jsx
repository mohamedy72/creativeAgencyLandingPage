import styled from "styled-components";

export const PortfolioCard = styled.div`
  position: relative;
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 30px;
  background-image: url(${(props) => props.img});
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15)
    );
  }
`;

export const PortfolioCardLabel = styled.h3`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
  color: var(--white);
  font-size: 1.5em;
`;
