import styled, { css } from 'styled-components'

export const Wrapper = styled.section.attrs({ id: 'cta' })`
  ${({ theme }) => css`
    padding: ${theme.spacings.spacing08} 0 ${theme.spacings.spacing12} 0;
  `}
`

export const HeadingStyled = styled.h2`
  ${({ theme }) => css`
    font-weight: 700;
    color: inherit;
    letter-spacing: -0.5px;
    font-size: ${theme.font.sizes.xxlarge};
    line-height: 1.2;
    margin-bottom: ${theme.spacings.spacing07};
  `}
`

export const CtaContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 2fr 1fr;
    box-shadow: 0 ${theme.spacings.spacing06} ${theme.spacings.spacing08}
      rgba(0, 0, 0, 0.15);
    border-radius: 11px;

    background-image: linear-gradient(
      to right bottom,
      ${theme.colors.primaryLight},
      ${theme.colors.primary}
    );
    overflow: hidden;

    & *:focus {
      outline: none;
      box-shadow: 0 0 0 0.8rem rgba(253, 242, 233, 0.5);
    }

    @media (max-width: ${theme.media.tablet}) {
      grid-template-columns: 3fr 2fr;
    }

    @media (max-width: ${theme.media.smallPhone}) {
      grid-template-columns: 1fr;
    }
  `}
`

export const CtaTextBox = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.spacing08} ${theme.spacings.spacing09}
      ${theme.spacings.spacing09} ${theme.spacings.spacing09};
    color: ${theme.colors.shadeDark};

    @media (max-width: ${theme.media.tablet}) {
      padding: ${theme.spacings.spacing07};
    }
  `}
`

export const CtaText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.line.large};
    margin-bottom: ${theme.spacings.spacing08};
  `}
`

export const CtaForm = styled.form`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${theme.spacings.spacing07};
    row-gap: ${theme.spacings.spacing06};

    & label {
      display: block;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      margin-bottom: ${theme.spacings.spacing04};
    }

    & input,
    select {
      width: 100%;
      padding: ${theme.spacings.spacing04};
      font-size: ${theme.font.sizes.large};
      font-family: inherit;
      color: inherit;
      border: none;
      background-color: ${theme.colors.colorBackground};
      border-radius: 9px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    & input::placeholder {
      color: #aaa;
    }

    @media (max-width: ${theme.media.tablet}) {
      grid-template-columns: 1fr;
    }
  `}
`

export const CtaImageBox = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(235, 151, 78, 0.35),
      rgba(230, 125, 34, 0.35)
    ),
    url('images/eating.jpg');
  background-size: cover;
  background-position: center;

  ${({ theme }) => css`
    @media (max-width: ${theme.media.smallPhone}) {
      grid-row: 1;
      height: 36rem;
    }
  `}


  }
`
