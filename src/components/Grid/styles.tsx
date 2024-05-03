import styled, { css } from 'styled-components'

import { GridProps } from '.'

type WrapperProps = Pick<GridProps, '$centered' | '$columns'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $centered, $columns }) => css`
    display: grid;
    aling-items: ${$centered ? 'center' : ''};
    column-gap: ${theme.spacings.spacing09};
    row-gap: ${theme.spacings.spacing11};
    grid-template-columns: repeat(${$columns}, 1fr);

    @media (max-width: ${theme.media.laptop}) {
      column-gap: ${theme.spacings.spacing08};
      row-gap: ${theme.spacings.spacing09};
    }

    @media (max-width: ${theme.media.phone}) {
      grid-template-columns: repeat(
        ${($columns ?? 1) > 2 ? 2 : $columns ?? 1},
        1fr
      );
    }

    @media (max-width: ${theme.media.smallPhone}) {
      row-gap: ${theme.spacings.spacing08};
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`
