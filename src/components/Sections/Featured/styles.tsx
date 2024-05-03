import styled, { css } from 'styled-components'

export const Wrapper = styled.section.attrs({ id: 'featured' })`
  ${({ theme }) => css`
    padding: ${theme.spacings.spacing08} 0 ${theme.spacings.spacing07} 0;
  `}
`

export const Container = styled.div``

export const HeadingFeturing = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: ${theme.font.normal};
    text-align: center;
    margin-bottom: ${theme.spacings.spacing06};
    color: ${theme.colors.greyDark};
  `}
`

export const Logos = styled.div`
  display: flex;
  justify-content: space-around;
`

export const LogoImg = styled.img`
  ${({ theme }) => css`
    height: ${theme.spacings.spacing07};
    filter: brightness(0);
    opacity: 50%;

    @media (max-width: ${theme.media.tablet}) {
      height: ${theme.spacings.spacing06};
    }

    @media (max-width: ${theme.media.smallPhone}) {
      height: ${theme.spacings.spacing04};
    }
  `}
`
