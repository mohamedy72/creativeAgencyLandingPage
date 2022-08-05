import styled from "styled-components";

export const ServiceCard = styled.div`
  max-width: 18rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 30px;
  padding: 3rem 5rem;
  text-align: center;

  @media (prefers-color-scheme: dark) {
    background-color: var(--dark);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;
