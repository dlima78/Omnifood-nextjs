import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    padding: 0 ${theme.spacings.spacing07};
    margin: 0 auto;
  `}
`
