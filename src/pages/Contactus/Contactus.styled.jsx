import styled from "styled-components";

export const ContactLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  @media screen and (min-width: 64rem) {
    flex-direction: row-reverse;
    text-align: left;
    justify-content: flex-start;
  }
`;

export const ContactBackground = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  margin-block-end: 2.8125rem;

  & .img-container:first-child,
  & .img-container:last-child {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  & .img-container:last-child {
    position: relative;
    left: 9rem;
    top: -6rem;
    z-index: -2;
  }

  & .img-container > img {
    border-radius: 10px;
  }

  @media screen and (min-width: 45rem) and (max-width: 63rem) {
    & .img-container:last-child {
      left: 18rem;
      top: -7rem;
    }
  }

  @media screen and (min-width: 90rem) {
    width: 80%;
    flex-basis: 80%;
    & .img-container:last-child {
      left: 19rem;
    }
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    margin-block: 1.25rem;
  }

  @media screen and (min-width: 64rem) {
    align-items: flex-start;
  }
`;
