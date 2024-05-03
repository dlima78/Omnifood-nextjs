import styled, { css } from 'styled-components'

type MarginBottomProps = {
  size: string
}

const MarginBottom = styled.div<MarginBottomProps>`
  ${({ size }) => css`
    margin-bottom: ${size};
  `}
`

export default MarginBottom
