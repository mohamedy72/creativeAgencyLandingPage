import React, { useState } from "react";
import styled from "styled-components";
import logo from "/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../components/Navbar";
import { OutlinedButton } from "../components/Button.styled";

// Styles
const HeaderStyles = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.5rem;

  & svg {
    width: 1.5625rem;
    height: 1.5625rem;
    cursor: pointer;
  }
  & > div {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  & .bold {
    font-size: 0.875rem;
    font-weight: 700;
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
      <div>
        <span>
          <img src={logo} alt="Creative Agency Logo" />
        </span>
        <small>
          <span className="bold">Agency</span>
          Creative
        </small>
      </div>
      <GiHamburgerMenu onClick={() => setNavOpen((prev) => !prev)} />
      {navOpen && <Navbar className="mobile-nav" />}
      <Navbar className="large_screen-nav" />
      <OutlinedButton className="header_btn">Contact us</OutlinedButton>
    </HeaderStyles>
  );
};

export default Header;
