'use client'

import { useEffect, useState } from 'react'

import * as S from './styles'
import Logo from '@/components/Logo'
import Button from '@/components/Button'

function Menu() {
  const [$isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    const sectionHeroEl = document.querySelector('.hero')
    if (sectionHeroEl) {
      const observer = new IntersectionObserver(
        function (entries) {
          const ent = entries[0]
          if (!ent.isIntersecting) {
            document.body.classList.add('sticky')
          }
          if (ent.isIntersecting) {
            document.body.classList.remove('sticky')
          }
        },
        {
          root: null,
          threshold: 0,
          rootMargin: '-80px'
        }
      )
      observer.observe(sectionHeroEl)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <S.Wrapper>
      <Logo />
      <S.MenuNav aria-hidden={!$isOpen} $isOpen={$isOpen}>
        <S.List>
          <S.Item>
            <S.StyledLink onClick={() => scrollToSection('how')}>
              How it works
            </S.StyledLink>
          </S.Item>
          <S.Item>
            <S.StyledLink onClick={() => scrollToSection('meals')}>
              Meals
            </S.StyledLink>
          </S.Item>
          <S.Item>
            <S.StyledLink onClick={() => scrollToSection('testimonials')}>
              Testimonials
            </S.StyledLink>
          </S.Item>
          <S.Item>
            <S.StyledLink onClick={() => scrollToSection('pricing')}>
              Pricing
            </S.StyledLink>
          </S.Item>
          <S.Item>
            <Button
              $buttonType="cta"
              as="a"
              onClick={() => scrollToSection('cta')}
            >
              Try for free
            </Button>
          </S.Item>
        </S.List>
      </S.MenuNav>
      <S.IconWrapper
        data-testid="wrapper-menu-icon"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <S.MenuIcon aria-label="Open Menu" $isOpen={$isOpen} />
        <S.CloseIcon aria-label="Close Menu" $isOpen={$isOpen} />
      </S.IconWrapper>
    </S.Wrapper>
  )
}

export default Menu
