import Logo from "../../components/Logo.styled";
import {
  FooterItemTitle,
  FooterItemLink,
} from "../../components/FooterItem.styled";
import { footer } from "../../data/footer";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FooterBody, FooterLinks, FooterSocials } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterBody>
      <FooterLinks>
        <Logo inFooter />
        {footer.map((item) => (
          <ul key={item.id}>
            <li key={item.title}>
              <FooterItemTitle>{item.title}</FooterItemTitle>
            </li>
            {item.body.map((link) => (
              <li key={link}>
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
