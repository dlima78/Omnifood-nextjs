import styled, { css } from 'styled-components'

export const Wrapper = styled.section.attrs({ id: 'testimonials' })`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorBackground};
    display: grid;
    grid-template-columns: 55fr 45fr;
    align-items: center;

    @media (max-width: ${theme.media.tablet}) {
      grid-template-columns: 1fr;
    }
  `}
`

export const TestimonialsContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.spacing11};

    @media (max-width: ${theme.media.desktop}) {
      padding: ${theme.spacings.spacing11} ${theme.spacings.spacing07};
    }
  `}
`

export const SubHeading = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.shade};
    text-transform: uppercase;
    margin-bottom: ${theme.spacings.spacing05};
    letter-spacing: 0.75px;
  `}
`

export const Testimonials = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: ${theme.spacings.spacing08};
    column-gap: ${theme.spacings.spacing10};

    @media (max-width: ${theme.media.smallPhone}) {
      grid-template-columns: 1fr;
    }
  `}
`

export const Testimonial = styled.figure`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: ${theme.spacings.spacing04};
  `}
`

export const TestimonialImage = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.spacing09};
    border-radius: 50%;
    margin-bottom: ${theme.spacings.spacing04};
  `}
`

export const TestimonialText = styled.blockquote`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.line.large};
    margin-bottom: ${theme.spacings.spacing05};
  `}
`

export const TestimonialName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: #6f6f6f;
  `}
`

export const Gallery = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacings.spacing05};
    padding: ${theme.spacings.spacing05};

    @media (max-width: ${theme.media.desktop}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${theme.media.tablet}) {
      grid-template-columns: repeat(6, 1fr);
    }

    @media (max-width: ${theme.media.smallPhone}) {
      grid-template-columns: repeat(4, 1fr);
      gap: ${theme.spacings.spacing04};
    }
  `}
`

export const GalleryItem = styled.figure`
  overflow: hidden;
`

export const GalleryImage = styled.img`
  display: block;
  width: 100%;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`
