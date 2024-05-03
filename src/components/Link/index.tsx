import styled, { css } from 'styled-components'

export const Link = styled.a`
  ${({ theme }) => css`
    &:link,
    &:visited {
      display: inline-block;
      color: ${theme.colors.primary};
      text-decoration: none;
      border-bottom: 1px solid currentColor;
      padding-bottom: 2px;
      transition: all 0.3s;
    }

    &:hover {
      color: ${theme.colors.shade};
      border-bottom: 1px solid transparent;
    }
  `}
`
