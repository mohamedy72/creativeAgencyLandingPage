import styled from "styled-components";
import { PrimaryButton } from "../components/Button.styled";
import img1Big from "/images/contact_1.jpg";
import img1Small from "/images/contact_1_small.jpg";
import img2Big from "/images/contact_2.jpg";
import img2Small from "/images/contact_2_small.jpg";

const ContactLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
`;
const ContactBackground = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  & .img-container:first-child,
  & .img-container:last-child {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  & .img-container:last-child {
    position: relative;
    left: 9.9375rem;
    top: -6rem;
    z-index: -2;
  }
`;
const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contactus = () => {
  return (
    <ContactLayout>
      <ContactBackground>
        <div className="img-container">
          <picture>
            <source srcset={img1Small} media="(max-width: 719px)" />
            <source srcset={img1Big} media="(min-width: 720px)" />
            <img src={img1Small} alt="people" />
          </picture>
        </div>
        <div className="img-container">
          <picture>
            <source srcset={img2Small} media="(max-width: 729px)" />
            <source srcset={img2Big} media="(min-width: 720px)" />
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
