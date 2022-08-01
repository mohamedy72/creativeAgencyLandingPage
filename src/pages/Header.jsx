import React, { useState } from "react";
import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../components/Navbar";
import { OutlinedButton } from "../components/Button.styled";
import Logo from "../components/Logo.styled";

// Styles
const HeaderStyles = styled.header`
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

// Component
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <HeaderStyles>
      <Logo />
      <GiHamburgerMenu onClick={() => setNavOpen((prev) => !prev)} />
      {navOpen && <Navbar className="mobile-nav" />}
      <Navbar className="large_screen-nav" />
      <OutlinedButton className="header_btn">Contact us</OutlinedButton>
    </HeaderStyles>
  );
};

export default Header;
