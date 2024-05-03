import styled, { css } from 'styled-components'
import {
  Close,
  Checkmark,
  Infinite,
  Nutrition,
  Leaf,
  Pause
} from '@styled-icons/ionicons-outline'

export const Wrapper = styled.section.attrs({ id: 'pricing' })`
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

export const CloseIcon = styled(Close)`
  ${({ theme }) => css`
    height: ${theme.spacings.spacing06};
    width: ${theme.spacings.spacing06};
    color: ${theme.colors.primary};
  `}
`

export const CheckmarkIcon = styled(Checkmark)`
  ${({ theme }) => css`
    height: 3rem;
    width: 3rem;
    color: ${theme.colors.primary};
  `}
`

export const ContainerPricing = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    display: grid;
    column-gap: ${theme.spacings.spacing09};
    row-gap: ${theme.spacings.spacing11};
    padding: 0 ${theme.spacings.spacing07};
    margin: 0 auto;
  `}
`

export const PlanDetails = styled.aside`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.line.medium};
    text-align: center;
  `}
`

export const MarginBottom = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.spacing08};
  `}
`

export const Feature = styled.div``

export const FeatureTitle = styled.p`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-weight: ${theme.font.extraBold};
    color: ${theme.colors.greyVeryDark};
    margin-bottom: ${theme.spacings.spacing05};
  `}
`

export const FeatureDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.line.large};
  `}
`

export const IconContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.spacing05};
    display: inline-flex;
    margin-bottom: ${theme.spacings.spacing07};
    background-color: ${theme.colors.colorBackground};
    border-radius: 50%;
  `}
`
export const NutritionIcon = styled(Nutrition)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    height: ${theme.spacings.spacing07};
    width: ${theme.spacings.spacing07};
  `}
`

export const LeafIcon = styled(Leaf)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    height: ${theme.spacings.spacing07};
    width: ${theme.spacings.spacing07};
  `}
`

export const PauseIcon = styled(Pause)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    height: ${theme.spacings.spacing07};
    width: ${theme.spacings.spacing07};
  `}
`

export const InfiniteIcon = styled(Infinite)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    height: ${theme.spacings.spacing07};
    width: ${theme.spacings.spacing07};
  `}
`
