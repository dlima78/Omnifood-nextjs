'use client'

import * as S from './styles'
import { Container } from '@/components/Container'

function Featured() {
  return (
    <S.Wrapper>
      <Container>
        <S.HeadingFeturing>As featured in</S.HeadingFeturing>
        <S.Logos>
          <S.LogoImg src="images/logos/techcrunch.png" alt="Techcrunch logo" />
          <S.LogoImg
            src="images/logos/business-insider.png"
            alt="Buisines Insider logo"
          />
          <S.LogoImg
            src="images/logos/the-new-york-times.png"
            alt="The New York Times logo"
          />
          <S.LogoImg src="images/logos/forbes.png" alt="Forbes logo" />
          <S.LogoImg src="images/logos/usa-today.png" alt="Usa Today logo" />
        </S.Logos>
      </Container>
    </S.Wrapper>
  )
}

export default Featured
