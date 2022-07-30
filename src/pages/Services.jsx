import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import { ServiceCard } from "../components/ServiceCard.styled";
import { services } from "../data/services";

const ServicesLayout = styled.section`
  & .service_logo {
    padding: 1.8125rem;
    border-radius: 50%;
    margin-block-end: 1.6875rem;
  }

  & .service_logo svg {
    width: 2.625rem;
    height: 2.625rem;
    fill: var(--white);
  }

  & h3 {
    font-size: 1em;
  }
`;
const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-block-end: 1.4375rem;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.1875rem;
  justify-content: center;
  align-items: center;
`;

const Services = () => {
  return (
    <ServicesLayout>
      <ServicesContent>
        <small>Our Services</small>
        <h2>Perfect and Fast Movement</h2>
        <p>
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your content
          look interesting and make people look for your business
        </p>
        <a href="#">
          Read more <BsArrowRight />
        </a>
      </ServicesContent>
      <ServicesGrid>
        {services.map((service) => (
          <ServiceCard key={service.id}>
            <div
              className="service_logo"
              style={{ backgroundColor: `${service.bg}` }}
            >
              {service.logo}
            </div>
            <h3>{service.title}</h3>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesLayout>
  );
};

export default Services;
