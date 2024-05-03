import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = Pick<ButtonProps, '$buttonType'>

const wrapperModifiers = {
  full: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: #fff;

    @media (max-width: ${theme.media.smallPhone}) {
      padding: ${theme.spacings.spacing06} ${theme.spacings.spacing05};
    }
  `,
  outline: (theme: DefaultTheme) => css`
    background-color: #fff;
    color: ${theme.colors.greyMediumDark};

    @media (max-width: ${theme.media.smallPhone}) {
      padding: ${theme.spacings.spacing06} ${theme.spacings.spacing05};
    }

    &:hover,
    &:active {
      background-color: ${theme.colors.colorBackground};
      color: ${theme.colors.greyMediumDark};
      box-shadow: inset 0 0 0 3px #fff;
    }
  `,
  cta: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.spacing04} ${theme.spacings.spacing06};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};

    @media (max-width: ${theme.media.tablet}) {
      font-size: 3rem;
    }

    @media (max-width: ${theme.media.tablet}) {
      margin-top: ${theme.spacings.spacing04};
    }
  `,
  form: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.shadeDark};
    color: ${theme.colors.colorBackground};
    align-self: end;
    padding: ${theme.spacings.spacing04};

    &:hover {
      background-color: #fff;
      color: ${theme.colors.greyMediumDark};
    }

    @media (max-width: ${theme.media.tablet}) {
      margin-top: ${theme.spacings.spacing04};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, $buttonType }) => css`
    font-family: inherit;
    padding: ${theme.spacings.spacing05} ${theme.spacings.spacing07};
    border: none;
    border-radius: 9px;
    background-color: ${theme.colors.primary};
    color: #fff;
    font-size: 2rem;
    font-weight: ${theme.font.bold};
    transition: all 0.3s;
    cursor: pointer;

    &:hover,
    &:active {
      background-color: ${theme.colors.shade};
    }

    ${!!$buttonType && wrapperModifiers[$buttonType](theme)};
  `}
`
