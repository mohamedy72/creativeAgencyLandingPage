import styled from "styled-components";

export const PortfolioLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & h2 {
    margin-block-end: 2.1875rem;
  }
`;
export const PortfolioContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PortfolioWork = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-block: 4rem;

  @media screen and (min-width: 64rem) {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    flex: 1;
  }
`;
