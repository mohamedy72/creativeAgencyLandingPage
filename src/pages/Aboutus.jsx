import styled from "styled-components";
import { OutlinedButton, PrimaryButton } from "../components/Button.styled";
import { AiOutlinePlayCircle } from "react-icons/ai";
import aboutImg from "/images/about_us.jpg";

const AboutStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AboutHeader = styled.header`
  margin-block-end: 2.1875rem;
  text-align: center;
`;
const AboutContent = styled.div`
  margin-block-end: 3.125rem;
  white-space: pre-wrap;
  & .btns {
    display: flex;
    justify-content: space-between;
  }

  & .btns .outlined_about-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.625rem;
  }
`;

const Aboutus = () => {
  return (
    <AboutStyles id="about">
      <AboutHeader>
        <small>About Us</small>
        <h2>Our Teammate</h2>
      </AboutHeader>
      <AboutContent>
        <p>
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your content
          look interesting and make people look for your business2
          <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque
          tempor at ut auctor maecenas,Lorem ipsum d
        </p>
        <div className="btns">
          <PrimaryButton>About Us</PrimaryButton>
          <OutlinedButton className="outlined_about-btn">
            <span>
              <AiOutlinePlayCircle />
            </span>
            <span>About us</span>
          </OutlinedButton>
        </div>
      </AboutContent>
      <div className="img-container">
        <img src={aboutImg} alt="Office Meeting" />
      </div>
    </AboutStyles>
  );
};

export default Aboutus;
