import styled from "styled-components";
import {
  TestimonialCard,
  TestimonialHeader,
  TestimonialQuote,
} from "../components/TestimonalCard.styled";
import { testimonials } from "../data/testimonals";
const TestimonialLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TestimonialHead = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Testimonial = styled.div``;

const Testimonials = () => {
  return (
    <TestimonialLayout>
      <TestimonialHead>
        <small>Testimonial</small>
        <h3>People Talk about us</h3>
      </TestimonialHead>
      <Testimonial>
        {testimonials.map((testmo) => (
          <TestimonialCard key={testmo.id}>
            <TestimonialHeader>
              <div className="img-container">
                <img src={testmo.avatar} alt="Avatar" className="avatar" />
              </div>
              <h3 className="name">
                {testmo.name}
                <span className="role">{testmo.role}</span>
              </h3>
            </TestimonialHeader>
            <TestimonialQuote>"{testmo.text}"</TestimonialQuote>
          </TestimonialCard>
        ))}
      </Testimonial>
    </TestimonialLayout>
  );
};

export default Testimonials;
