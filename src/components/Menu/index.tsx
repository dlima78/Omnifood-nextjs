import { useState } from 'react'

import * as S from './styled'
import Logo from '@/components/Logo'

function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <Logo />
      <S.MenuNav aria-hidden={!isOpen} $isOpen={isOpen}>
        <S.List>
          <S.Item>
            <S.StyledLink href="#how">How it works</S.StyledLink>
          </S.Item>
          <S.Item>
            <S.StyledLink href="#meals">Meals</S.StyledLink>
          </S.Item>
          <S.Item>
            <S.StyledLink href="#testimonials">Testimonials</S.StyledLink>
          </S.Item>
          <S.Item>
            <S.StyledLink href="#pricing">Pricing</S.StyledLink>
          </S.Item>
          <S.Item>
            <S.LinkCta href="#cta">Try for free</S.LinkCta>
          </S.Item>
        </S.List>
      </S.MenuNav>
      <S.IconWrapper
        data-testid="wrapper-menu-icon"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <S.MenuIcon aria-label="Open Menu" $isOpen={isOpen} />
        <S.CloseIcon aria-label="Close Menu" $isOpen={isOpen} />
      </S.IconWrapper>
    </S.Wrapper>
  )
}

export default Menu
