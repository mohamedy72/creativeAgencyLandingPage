import { useState } from "react";
import { HeaderStyles } from "./Header.styled";
import { OutlinedButton } from "../../components/Button.styled";
import { GiHamburgerMenu } from "react-icons/gi";

import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo.styled";

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
