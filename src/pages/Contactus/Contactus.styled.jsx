import styled from "styled-components";

export const ContactLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  @media screen and (min-width: 64rem) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 3rem;
    text-align: left;
    justify-content: flex-start;
  }
`;

export const ContactBackground = styled.div`
  display: grid;
  grid-template-columns: repeat(2s, 1fr);
  justify-content: center;
  align-items: center;
  margin-block-end: 2.8125rem;

  & .img-container:first-child,
  & .img-container:last-child {
    justify-self: flex-end;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  & .img-container:last-child {
    position: relative;
    left: .5rem;
    top: -5rem;
    z-index: -2;
  }

  & .img-container > img {
    border-radius: 10px;
  }

  @media screen and (min-width: 45rem) and (max-width: 63rem) {
    & .img-container:last-child {
      left: 3rem;
      top: -7rem;
    }
  }

  @media screen and (min-width: 64rem) {
    margin-block-end: 0;
  }

  @media screen and (min-width: 90rem) {
    width: 80%;
    flex-basis: 80%;
    & .img-container:last-child {
      left: 5rem;
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
