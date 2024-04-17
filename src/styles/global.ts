'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    src: url('../../public/fonts/rubik-v28-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    src: url('../../public/fonts/rubik-v28-latin-500.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 600;
    src: url('../../public/fonts/rubik-v28-latin-600.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 700;
    src: url('../../public/fonts/rubik-v28-latin-700.woff2') format('woff2');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      overflow: hidden;
    }
  `}

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 75em) {
    html {
      font-size: 56.25%;
    }

    body {
      position: relative;
    }
  }

  @media (max-width: 59em) {
    html {
      font-size: 50%;
    }
  }

`

export default GlobalStyles
