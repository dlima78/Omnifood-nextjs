import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

type tags = 'h1' | 'h2' | 'h3'

const tagTypes: Record<HeadingProps['type'], tags> = {
  primary: 'h1',
  secondary: 'h2',
  tertiary: 'h3'
}

const wrapperModifiers = {
  primary: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
    line-height: 1.05;
    margin-bottom: ${theme.spacings.spacing07};

    @media (max-width: ${theme.media.desktop}) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 1.2;
    margin-bottom: ${theme.spacings.spacing11};

    @media (max-width: ${theme.media.laptop}) {
      font-size: 3.6rem;
    }

    @media (max-width: ${theme.media.phone}) {
      margin-bottom: ${theme.spacings.spacing08};
    }
  `,
  tertiary: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: 1.2;
    margin-bottom: ${theme.spacings.spacing07};

    @media (max-width: ${theme.media.laptop}) {
      font-size: 2.4rem;
    }
  `
}

export const Wrapper = styled.h1.attrs<HeadingProps>((props) => ({
  as: tagTypes[props.type]
}))`
  ${({ theme, type }) => css`
    font-weight: ${theme.font.extraBold};
    color: ${theme.colors.greyVeryDark};
    letter-spacing: -0.5px;

    ${!!type && wrapperModifiers[type](theme)};
  `}
`
