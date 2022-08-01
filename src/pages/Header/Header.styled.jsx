import styled from "styled-components";

export const HeaderStyles = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.5rem;
  margin-block-end: 4rem;

  & > div {
    padding: 0;
  }
  & svg {
    width: 1.5625rem;
    height: 1.5625rem;
    cursor: pointer;
  }

  & .header_btn {
    display: none;
  }

  @media screen and (min-width: 50rem) {
    & svg {
      display: none;
    }

    & .header_btn {
      display: block;
    }
  }
`;
