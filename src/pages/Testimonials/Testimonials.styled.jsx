import styled from "styled-components";

export const TestimonialLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TestimonialHead = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    margin-block-end: 2.1875rem;
  }
`;
export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;

  @media screen and (min-width: 64rem) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;
