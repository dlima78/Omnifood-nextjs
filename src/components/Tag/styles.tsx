import styled, { css } from 'styled-components'
import { TagProps } from '.'

const wrapperModifiers = {
  vegetarian: () => css`
    background: #51cf66;
  `,
  vegan: () => css`
    background: #94d82d;
  `,
  paleo: () => css`
    background: #ffd43b;
  `
}

export const Wrapper = styled.div<TagProps>`
  ${({ theme, $type }) => css`
    display: inline-block;
    padding: 0.4rem 0.8rem;
    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
    color: ${theme.colors.greyVeryDark};
    border-radius: 100px;
    font-weight: ${theme.font.bold};

    ${!!$type && wrapperModifiers[$type]}
  `}
`
