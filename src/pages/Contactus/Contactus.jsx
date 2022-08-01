import { PrimaryButton } from "../../components/Button.styled";
import {
  ContactBackground,
  ContactContent,
  ContactLayout,
} from "./Contactus.styled";

import img1Big from "/images/contact_1.jpg";
import img1Small from "/images/contact_1_small.jpg";
import img2Big from "/images/contact_2.jpg";
import img2Small from "/images/contact_2_small.jpg";

const Contactus = () => {
  return (
    <ContactLayout id="contact">
      <ContactBackground>
        <div className="img-container">
          <picture>
            <source srcSet={img1Small} media="(max-width: 719px)" />
            <source srcSet={img1Big} media="(min-width: 720px)" />
            <img src={img1Small} alt="people" />
          </picture>
        </div>
        <div className="img-container">
          <picture>
            <source srcSet={img2Small} media="(max-width: 729px)" />
            <source srcSet={img2Big} media="(min-width: 720px)" />
            <img src={img2Small} alt="people" />
          </picture>
        </div>
      </ContactBackground>
      <ContactContent>
        <h2>Interesting Collaboration With Us?</h2>
        <p>Help you to reach your business goal</p>
        <PrimaryButton>Get Started</PrimaryButton>
      </ContactContent>
    </ContactLayout>
  );
};

export default Contactus;
