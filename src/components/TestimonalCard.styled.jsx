import styled from "styled-components";

export const TestimonialCard = styled.div`
  max-width: 23.75rem;
  height: 16.0625rem;
  padding: 2.8125rem 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.1875rem 0;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`;
export const TestimonialHeader = styled.header`
  display: flex;
  align-items: center;

  & .img-container {
    flex: 1;
  }
  & .avatar {
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 50%;
  }

  & .name {
    flex: 2;
    color: var(--primary);
    font-size: 1.25em;
    display: flex;
    flex-direction: column;
    & .role {
      font-weight: 400;
      opacity: 0.5;
      color: var(--text);
      font-size: 0.6875em;
    }
  }
`;
export const TestimonialQuote = styled.blockquote`
  font-size: 0.875em;
  opacity: 0.8;
  color: var(--text);
`;
