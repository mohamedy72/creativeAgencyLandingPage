import { testimonials } from "../../data/testimonals";
import {
  TestimonialCard,
  TestimonialHeader,
  TestimonialQuote,
} from "../../components/TestimonalCard.styled";
import {
  Testimonial,
  TestimonialHead,
  TestimonialLayout,
} from "./Testimonials.styled";

const Testimonials = () => {
  return (
    <TestimonialLayout id="testmonial">
      <TestimonialHead>
        <small>Testimonial</small>
        <h2>People Talk about us</h2>
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
