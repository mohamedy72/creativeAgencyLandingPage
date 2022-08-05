import styled from "styled-components";
import logoMobile from "/images/logo_mobile.png";
import logo from "/images/logo.png";

const LogoContainer = styled.div`
  max-width: 12.5rem;

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  padding: ${(props) => props.inFooter && "1.1875rem 1.5625rem"};
  border-radius: ${(props) => props.inFooter && "20px"};

  & img {
    width: 3.125rem;
    height: 3.125rem;
  }

  & .bold {
    font-size: 1.5em;
    font-weight: 700;
    display: block;
  }

  & > small {
    font-size: 1em;
  }

  @media screen and (min-width: 45rem) {
    & .bold {
      font-size: 0.875rem;
    }

    & > small {
      font-size: 0.7em;
    }
  }
  @media (prefers-color-scheme: dark) {
    background-color: var(--dark);
    color: var(--text-light);
  }
`;

const Logo = ({ inFooter }) => {
  return (
    <LogoContainer inFooter>
      <picture>
        <source srcSet={logoMobile} media="(max-width: 512px)" />
        <source srcSet={logo} media="(min-width: 720px)" />
        <img src={logoMobile} alt="Logo" />
      </picture>
      <small>
        <span className="bold">Agency</span>
        Creative
      </small>
    </LogoContainer>
  );
};

export default Logo;
