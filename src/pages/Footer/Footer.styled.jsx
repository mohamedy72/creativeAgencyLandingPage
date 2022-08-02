import styled from "styled-components";

export const FooterBody = styled.footer`
  background-color: var(--tertiary);
  padding: 8.25rem 1.5625rem 2.0625rem;
  & > div > div {
    width: 100%;
  }
`;
export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 80px;
  margin-block-end: 5.625rem;

  & > ul {
    flex: 1 1 33.3%;
    color: var(--white);
  }

  & > ul > li {
    margin-block-end: 1.3rem;
  }
  @media screen and (min-width: 45rem) and (max-width: 63rem) {
    & > ul {
      flex: 1;
    }
  }
  @media screen and (min-width: 64rem) {
    & > ul {
      flex: 1;
    }
  }
`;
export const FooterSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem 0;

  & hr {
    width: 100%;
  }
  & .icons {
    display: flex;
    justify-content: center;
    gap: 0 1.5625rem;
    font-size: 2.25rem;
    & > svg {
      fill: var(--white);
    }
  }

  & .copyright {
    font-size: 0.875em;
    font-weight: 300;
    color: var(--white);
    margin: 0;
    text-align: center;
  }
`;
