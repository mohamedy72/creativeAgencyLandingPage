import styled from "styled-components";
import Logo from "../components/Logo.styled";
import {
  FooterItemTitle,
  FooterItemLink,
} from "../components/FooterItem.styled";
import { footer } from "../data/footer";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const FooterBody = styled.footer`
  background-color: var(--tertiary);
  padding: 2.8125rem 1.5625rem;
  & > div > div {
    width: 100%;
  }
`;
const FooterLinks = styled.div`
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
`;
const FooterSocials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem 0;
  text-align: center;

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
  }
`;

const Footer = () => {
  return (
    <FooterBody>
      <FooterLinks>
        <Logo inFooter />
        {footer.map((item) => (
          <ul key={item.id}>
            <li>
              <FooterItemTitle>{item.title}</FooterItemTitle>
            </li>
            {item.body.map((link) => (
              <li>
                <FooterItemLink>{link}</FooterItemLink>
              </li>
            ))}
          </ul>
        ))}
      </FooterLinks>
      <FooterSocials>
        <div className="icons">
          <BsFacebook />
          <BsInstagram />
          <BsLinkedin />
          <BsTwitter />
        </div>
        <hr />
        <p className="copyright">
          Copyright &#64; 2022 Agency Creative. All Right Reserved
        </p>
      </FooterSocials>
    </FooterBody>
  );
};

export default Footer;
