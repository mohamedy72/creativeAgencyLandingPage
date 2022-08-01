import styled from "styled-components";

export const AboutStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AboutHeader = styled.header`
  margin-block-end: 2.1875rem;
  text-align: center;
`;
export const AboutContent = styled.div`
  margin-block-end: 3.125rem;
  white-space: pre-wrap;
  & .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 1rem;
  }

  & .btns .outlined_about-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.625rem;
  }
`;
