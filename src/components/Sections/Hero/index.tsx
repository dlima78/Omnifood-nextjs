'use client'

import * as S from './styles'
import Button from '@/components/Button'
import Heading from '@/components/Heading'

function Hero() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.HeroTextBox>
          <Heading type="primary">
            A healthy meal delivered to your door, every single day
          </Heading>
          <S.HeroDescription>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </S.HeroDescription>
          <S.ButtonStyled $buttonType="full">Start eating well</S.ButtonStyled>
          <Button $buttonType="outline">Learn more &darr;</Button>
          <S.DeliveredMeals>
            <S.DeliveredImages>
              <S.DeliveredImage
                src="/images/customers/customer-1.jpg"
                alt="Customer photo"
              />
              <S.DeliveredImage
                src="/images/customers/customer-2.jpg"
                alt="Customer photo"
              />
              <S.DeliveredImage
                src="/images/customers/customer-3.jpg"
                alt="Customer photo"
              />
              <S.DeliveredImage
                src="/images/customers/customer-4.jpg"
                alt="Customer photo"
              />
              <S.DeliveredImage
                src="/images/customers/customer-5.jpg"
                alt="Customer photo"
              />
              <S.DeliveredImage
                src="/images/customers/customer-6.jpg"
                alt="Customer photo"
              />
            </S.DeliveredImages>
            <S.DeliveredText>
              <S.Span>250,000+</S.Span> meals delivered last year!
            </S.DeliveredText>
          </S.DeliveredMeals>
        </S.HeroTextBox>
        <S.HeroImgBox>
          <S.Picture>
            <S.SourcePicture srcSet="/images/hero.webp" type="image/webp" />
            <S.SourcePicture srcSet="/images/hero-min.png" type="image/png" />
            <S.HeroImg
              src="/images/hero-min.png"
              alt="Woman enjoy food, meals in storage container, and food bowls on a table"
            />
          </S.Picture>
        </S.HeroImgBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default Hero
