import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Variables */
    --primary: #377dff;
    --secondary: #1d1d1d;
    --tertiary: #383638;
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
    cursor: pointer;
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
    padding-block-end: 4rem;
    margin-block-end: 9.375rem;
  }

  h1 {
    max-width: 46.8125rem;
    font-size: 1.75em;
    font-weight: 800;
   
  }

  h2 {
    font-size: 1.5em;
  }
  
  h3 {
    font-size: 1em;
  }

  h4 {
    font-size: 1.125em;
  }

  p {
    max-width: 57ch;
    font-size: 0.875em;
    color: var(--text);
    margin: 1.25rem auto;
  }

  svg {
    display: block;
  }

  .img-container {
    width: 100%;
    object-fit: cover;
    overflow: hidden
  }

  @media screen and (min-width: 45rem) {
    h1 {
      font-size: 4em
    }
    h2 {
      font-size: 3.4375em;
    }
    h3 {
      font-size: 1.5em;
    }
    h4 {
      font-size: 1.375em;
    }
    p {
      width: 47.9375rem;
      font-size: 1.25em
    }
  }

`;

export default GlobalStyles;
