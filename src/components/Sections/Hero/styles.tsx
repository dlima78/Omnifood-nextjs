import styled, { css } from 'styled-components'
import Button from '@/components/Button'

export const Wrapper = styled.section.attrs({ className: 'hero' })`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorBackground};
    padding: ${theme.spacings.spacing11} 0;

    @media (max-width: ${theme.media.tablet}) {
      grid-template-columns: 1fr;
      padding: 0 8rem;
      gap: ${theme.spacings.spacing09};
    }

    @media (max-width: ${theme.media.smallPhone}) {
      padding: ${theme.spacings.spacing06} 0 ${theme.spacings.spacing09} 0;
    }
  `}

  .sticky & {
    margin-top: 9.6rem;
  }
`

export const ButtonStyled = styled(Button)`
  margin-right: 1.6rem !important;
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: 130rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacings.spacing11};
    align-items: center;

    @media(max-width: ${theme.media.desktop}) {
      max-width: 120rem;
      padding: 0 ${theme.spacings.spacing07};
      margin: 0 auto;
    }

    @media(max-width: ${theme.media.laptop}) {
      gap: ${theme.spacings.spacing08};
    }

    @media(max-width: ${theme.media.tablet}) {
      grid-template-columns: 1fr;
      padding: 0 8rem;
      gap: ${theme.spacings.spacing09};
    }

    @media(max-width: ${theme.media.smallPhone}) {
      padding: 0 ${theme.spacings.spacing07}
    }

  }
  `}
`
export const HeroTextBox = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.media.tablet}) {
      text-align: center;
    }
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    line-height: ${theme.line.xxsmall};
    margin-bottom: ${theme.spacings.spacing07};
  `}
`

export const HeroDescription = styled.p`
  ${({ theme }) => css`
    font-size: 2rem;
    line-height: ${theme.line.small};
    margin-bottom: ${theme.spacings.spacing08};
  `}
`
export const DeliveredMeals = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.spacing05};
    margin-top: ${theme.spacings.spacing10};

    @media (max-width: ${theme.media.tablet}) {
      justify-content: center;
      margin-top: ${theme.spacings.spacing07};
    }
  `}
`
export const DeliveredImages = styled.div`
  display: flex;
`
export const DeliveredImage = styled.img`
  ${({ theme }) => css`
    height: ${theme.spacings.spacing08};
    width: ${theme.spacings.spacing08};
    border-radius: 50%;
    margin-right: -1.6rem;
    border: 3px solid ${theme.colors.colorBackground};
    &:last-child {
      margin: 0;
    }

    @media (max-width: 59em) {
      width: 60%;
    }
  `}
`

export const DeliveredText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.shade};
    font-weight: ${theme.font.extraBold};
  `}
`

export const HeroImgBox = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.media.tablet}) {
      text-align: center;
    }
  `}
`

export const Picture = styled.picture``

export const SourcePicture = styled.source``

export const HeroImg = styled.img`
  width: 100%;

  ${({ theme }) => css`
    @media (max-width: ${theme.media.tablet}) {
      width: 60%;
    }

    @media (max-width: ${theme.media.smallPhone}) {
      width: 80%;
    }
  `}
`
