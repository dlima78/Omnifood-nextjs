import styled from 'styled-components'

const Link = styled.a``

const LogoImage = styled.img`
  height: 2.2rem;
`

function Logo() {
  return (
    <Link href="#">
      <LogoImage src="/images/omnifood-logo.png" alt="Logo" />
    </Link>
  )
}

export default Logo
