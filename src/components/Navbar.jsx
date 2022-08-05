import styled from "styled-components";

const NavStyles = styled.nav`
  & ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  &.mobile-nav {
    display: block;
    position: absolute;
    top: 120%;
    background-color: var(--white);
    width: 100%;
    padding-block: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 10px;

    & ul {
      flex-direction: column;
    }
  }

  &.large_screen-nav {
    display: none;
  }

  @media screen and (min-width: 50rem) {
    &.mobile-nav {
      display: none;
    }
    &.large_screen-nav {
      display: block;
    }
  }
`;

const Navbar = ({ className }) => {
  return (
    <NavStyles className={className}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Navbar;
