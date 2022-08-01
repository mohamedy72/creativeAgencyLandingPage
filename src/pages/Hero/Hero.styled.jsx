import styled from "styled-components";

export const HeroStyles = styled.section`
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  & div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem 0s;
  }
`;
