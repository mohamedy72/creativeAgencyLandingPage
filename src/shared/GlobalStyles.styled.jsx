import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Variables */
    --primary: #377dff;
    --secondary: #1d1d1d;
    --text: #464646;

    --white: #fff;

    /* Effects */
    --btn-box-shadow: 0px 4px 8px rgba(55, 125, 255, 0.5);
    --card-box-shadow: ;

    /* Gradients */
    --portfolio-grad:  linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15));
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    
  }

  html,
  body {
    font-size: 100%;
  }
  html {
    box-sizing: border-box;
  }

  body {
    font-family: Nunito, sans-serif;
    font-weight: 300;
    font-size: 1rem;
    scroll-behavior: smooth;
    overflow-x: hidden
  }

  a {
    text-decoration: none;
  }
  ul {align-items: center;
    list-style: none;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
  }

  section {
    padding-block: 4rem;
    margin-block-end: 9.375rem;
  }

  h1 {
    max-width: 46.8125rem;
    font-size: 1.75rem;
    font-weight: 800;
   
  }

  p {
    max-width: 47.9375rem;
    font-size: 0.875rem;
    color: var(--text);
    margin: 1.25rem auto;
  }

  svg {
    display: block;
  }

  .img-container {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 32.5rem) {
    h1 {
      font-size: 2.1875rem;
    }
  }
  @media screen and (min-width: 720px) {
    h1 {
      font-size: 4rem
    }
    p {
      width: 47.9375rem;
      font-size: 1.25rem
    }
  }

`;

export default GlobalStyles;
