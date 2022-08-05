import styled from "styled-components";

export const ServicesLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .service_logo {
    padding: 1.8125rem;
    border-radius: 50%;
    margin-block-end: 1.6875rem;
  }

  & .service_logo svg {
    width: 2.625rem;
    height: 2.625rem;
    fill: var(--white);
  }
  & h2 {
    margin-block-end: 2.1875rem;
  }

  // Media Queries
  @media screen and (min-width: 90rem) {
    flex-direction: row;
  }
`;
export const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-block-end: 1.4375rem;

  & p {
    // margin: 0 auto 1rem;
    margin-block-end: 1rem;
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  }

  @media screen and (min-width: 45rem) {
    & p {
      margin-inline: auto;
    }
  }

  @media screen and (min-width: 90rem) {
    width: 50%;
    flex-basis: 50%;
    align-items: flex-start;
    text-align: left;

    & p {
      margin: 0 0 1rem;
    }
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 2.1875rem;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 45rem) {
    grid-template-columns: repeat(2, 1fr);
    // width: 100%%;
    // flex-basis: 50%;
  }
`;
