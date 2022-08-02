import styled from "styled-components";

export const AboutStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 64rem) {
    & {
      flex-wrap: wrap;
      flex-direction: row-reverse;
      gap: 0 4rem;
      justify-content: center;
    }

    & .img-container {
      width: 40%;
      flex-basis: 40%;
    }
  }
`;
export const AboutHeader = styled.header`
  margin-block-end: 2.375rem;
  text-align: center;

  @media screen and (min-width: 64rem) {
    & {
      width: 100%;
      flex-basis: 100%;
    }
  }
`;
export const AboutContent = styled.div`
  margin-block-end: 3.125rem;
  white-space: pre-wrap;

  & .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 1rem;

    @media screen and (min-width: 64rem) {
      & {
        justify-content: flex-start;
        margin-top: 1.5rem;
      }
    }
  }

  & p {
    width: 90%;
    margin: 0 0 1.25rem 0.5rem;
  }

  & .btns .outlined_about-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.625rem;
  }

  @media screen and (min-width: 64rem) {
    & {
      margin: 0;
      width: 50%;
      flex-basis: 50%;
    }
  }
`;
