'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
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
      color: ${theme.colors.greyMediumDark};
    }
  `}

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.media.laptop}) {
      html {
        font-size: 56.25%;
      }

      body {
        position: relative;
      }
    }
  `}

  ${({ theme }) => css`
    @media (max-width: ${theme.media.tablet}) {
      html {
        font-size: 50%;
      }
    }
  `}


`

export default GlobalStyles
