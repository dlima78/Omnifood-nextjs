import styled, { css } from 'styled-components'

export const Wrapper = styled.section.attrs({ id: 'how' })`
  ${({ theme }) => css`
    padding: ${theme.spacings.spacing11} 0;
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

export const StepTextBox = styled.div``

export const StepNumber = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.greyLight};
    margin-bottom: 1.24rem;

    @media (max-width: ${theme.media.tablet}) {
      font-size: 7.4rem;
    }
  `}
`

export const StepDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.line.large};
  `}
`

export const StepImageBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    width: 60%;
    background-color: #fdf2e9;
    padding-bottom: 60%;
    z-index: -2;
  }

  &::after {
    width: 45%;
    padding-bottom: 45%;
    background-color: #fae5d3;
    z-index: -1;
  }

  ${({ theme }) => css`
    @media (max-width: ${theme.media.smallPhone}) {
      transform: translateY(${theme.spacings.spacing06});
      &:nth-child(2) {
        grid-row: 1;
      }
      &:nth-child(6) {
        grid-row: 5;
      }
    }
  `}
`

export const StepImg = styled.img`
  width: 35%;
`
