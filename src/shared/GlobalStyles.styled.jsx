import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color Variables */
    --primary: #377dff;
    --secondary: #1d1d1d;
    --tertiary: #383638;
    --text: #464646;
    --text-light: #E2E2E2;

    --white: #fff;
    --dark: #0E0E0E;

    /* Effects */
    --btn-box-shadow: 0px 4px 8px rgba(55, 125, 255, 0.5);

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
    background-color: var(--white);
    color: var(--white);
    font-family: Nunito, sans-serif;
    font-weight: 300;
    font-size: 1rem;
    scroll-behavior: smooth;
    overflow-x: hidden;


    @media (prefers-color-scheme: dark) {
      background-color: var(--dark);
      
      & > * {
        color: var(--white)
      }
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: var(--text);

    @media (prefers-color-scheme: dark)  {
      color: var(--text-light)
    }
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
    width: min(50ch, 90%, 60ch);
    font-size: 0.875em;
    color: var(--text);
    
    @media (prefers-color-scheme: dark)  {
      color: var(--text-light);
      opacity: 0.6;
    }
  }

  svg {
    display: block;
  }

  .img-container {
    width: 100%;
    object-fit: cover;
    overflow: hidden;

    & img {
      border-radius: 12px
    }
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
      font-size: 1.25em
    }
  }


  // Utility Classes
  .section_intro-title {
    color: var(--primary);
    font-size: 1.5rem;
    font-weight: 600;    
  }


  @media (prefers-color-scheme: dark) {
    .section_intro-title {
      color: var(--text-light)

    }
  }
`;

export default GlobalStyles;
