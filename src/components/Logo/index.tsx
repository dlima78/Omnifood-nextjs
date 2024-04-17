import styled from 'styled-components'
import Link from 'next/link'

const StyledLink = styled(Link)``

const LogoImage = styled.img`
  height: 2.2rem;
`

function Logo() {
  return (
    <StyledLink href="#">
      <LogoImage src="/images/omnifood-logo.png" alt="Logo" />
    </StyledLink>
  )
}

export default Logo
