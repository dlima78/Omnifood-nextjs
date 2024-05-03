import { Container } from '@/components/Container'
import styled, { css } from 'styled-components'
import {
  Flame,
  Restaurant,
  Star,
  Checkmark
} from '@styled-icons/ionicons-outline'

export const Wrapper = styled.section.attrs({ id: 'meals' })`
  ${({ theme }) => css`
    padding: ${theme.spacings.spacing11} 0;
  `}
`

export const SyledContainer = styled(Container)`
  text-align: center;
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

export const Meal = styled.div`
  ${({ theme }) => css`
    box-shadow: 0 ${theme.spacings.spacing06} ${theme.spacings.spacing08}
      rgba(0, 0, 0, 0.075);
    border-radius: 11px;
    overflow: hidden;
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: translateY(-1.2rem);
    }
  `}
`

export const MealImage = styled.img`
  width: 100%;
`

export const MealContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.spacing07} ${theme.spacings.spacing08}
      ${theme.spacings.spacing08} ${theme.spacings.spacing08};
    box-shadow: 0 ${theme.spacings.spacing07} ${theme.spacings.spacing07}
      rgba(0, 0, 0, 0.06);

    @media (max-width: ${theme.media.tablet}) {
      padding: ${theme.spacings.spacing06} ${theme.spacings.spacing07}
        ${theme.spacings.spacing07} ${theme.spacings.spacing07};
    }
  `}
`

export const MealTags = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.spacing04};
    display: flex;
    gap: 0.4rem;
  `}
`

export const MealTitle = styled.p`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.greyVeryDark};
    margin-bottom: ${theme.spacings.spacing07};
  `}
`

export const MealAtributes = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const MealAtribute = styled.li`
  ${({ theme }) => css`
    border: 3px sold red;
    display: flex;
    align-content: center;
    gap: ${theme.spacings.spacing05};
    font-size: ${theme.font.sizes.large};
  `}
`

export const FlameIcon = styled(Flame)`
  ${({ theme }) => css`
    height: ${theme.spacings.spacing06};
    width: ${theme.spacings.spacing06};
    color: ${theme.colors.primary};
  `}
`
export const RestaurantIcon = styled(Restaurant)`
  ${({ theme }) => css`
    height: ${theme.spacings.spacing06};
    width: ${theme.spacings.spacing06};
    color: ${theme.colors.primary};
  `}
`
export const StarIcon = styled(Star)`
  ${({ theme }) => css`
    height: ${theme.spacings.spacing06};
    width: ${theme.spacings.spacing06};
    color: ${theme.colors.primary};
  `}
`
export const Diets = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.media.phone}) {
      grid-column: 1 / -1;
      justify-self: center;
    }
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
    display: flex;
    align-items: center;
    gap: ${theme.spacings.spacing05};
    font-size: ${theme.font.sizes.large};
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

export const AllRecipes = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.large};
  `}
`
