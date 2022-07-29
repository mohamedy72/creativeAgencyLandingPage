import styled from "styled-components";

export const Button = styled.button`
  appearance: unset;
  padding: 0.625rem 2.1875rem;
  background-color: transparent;
  border-radius: 24px;
  outline: none;
  border: none;
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;

  @media screen and (min-width: 45rem) {
    & {
      padding: 0.75rem 3.125rem;
    }
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: var(--primary);
  color: var(--white);
  box-shadow: var(--btn-box-shadow);
`;

export const OutlinedButton = styled(Button)`
  border: 0.7px solid var(--primary);
  color: var(--primary);
`;
