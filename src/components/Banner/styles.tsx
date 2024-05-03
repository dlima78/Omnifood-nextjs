import styled, { DefaultTheme, css } from 'styled-components'
import { Checkmark } from '@styled-icons/ionicons-outline'
import { BannerProps } from '.'

export type WrapperProps = Pick<BannerProps, 'type'>

const wrapperModifiers = {
  starter: (theme: DefaultTheme) => css`
    border: 2px solid ${theme.colors.colorBackground};
    justify-self: end;
    padding: 4.6rem;
  `,
  complete: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.spacing08};
    background-color: ${theme.colors.colorBackground};
    overflow: hidden;

    &::after {
      position: absolute;
      content: 'Best Value';
      top: 6%;
      right: -18%;

      text-transform: uppercase;
      font-size: 1.4rem;
      font-weight: 700;
      padding: 0.8rem 8rem;
      background-color: #ffd43b;
      color: #333;
      transform: rotate(45deg);
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ type, theme }) => css`
    position: relative;
    border-radius: 11px;
    width: 75%;

    @media (max-width: ${theme.media.phone}) {
      width: 100%;
    }

    ${!!type && wrapperModifiers[type](theme)}
  `}
`

export const PlanHeader = styled.header`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.spacings.spacing08};
  `}
`

export const PlanName = styled.p`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.shade};
    text-transform: uppercase;
    letter-spacing: 0.75;
    margin-bottom: ${theme.spacings.spacing07};
  `}
`
export const PlanPrice = styled.p`
  ${({ theme }) => css`
    font-size: 6.2rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.greyVeryDark};
    margin-bottom: ${theme.spacings.spacing05};

    & > span {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.normal};
      margin-right: 0.8rem;
    }
  `}
`

export const PlanText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.greyMedium};
    line-height: ${theme.line.medium};
  `}
`
export const List = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.spacing05};
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    display: flex;
    align-items: center;
    gap: ${theme.spacings.spacing05};
    line-height: ${theme.line.xsmall};
  `}
`

export const CheckmarkIcon = styled(Checkmark)`
  ${({ theme }) => css`
    height: 3rem;
    width: 3rem;
    color: ${theme.colors.primary};
  `}
`
export const PlanSignUp = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-top: ${theme.spacings.spacing08};
  `}
`
