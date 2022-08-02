import { BsArrowRight } from "react-icons/bs";
import { ServiceCard } from "../../components/ServiceCard.styled";
import { services } from "../../data/services";
import {
  ServicesContent,
  ServicesGrid,
  ServicesLayout,
} from "./Services.styled";

const Services = () => {
  return (
    <ServicesLayout id="services">
      <ServicesContent>
        <small className="section_intro-title">Our Services</small>
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
