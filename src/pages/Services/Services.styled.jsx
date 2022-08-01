import styled from "styled-components";

export const ServicesLayout = styled.section`
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
`;
export const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-block-end: 1.4375rem;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.1875rem;
  justify-items: center;
  align-items: center;
`;
