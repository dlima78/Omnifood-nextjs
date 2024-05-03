import Logo from '@/components/Logo'
import * as S from './styles'
import { Container } from '@/components/Container'

function Footer() {
  return (
    <S.Wrapper>
      <Container>
        <S.GridFooter>
          <S.LogoCol>
            <S.LogoWrapper>
              <Logo />
            </S.LogoWrapper>
            <S.SocialList>
              <S.SocialItem>
                <S.FooterLink href="#">
                  <S.InstagramIcon />
                </S.FooterLink>
              </S.SocialItem>
              <S.SocialItem>
                <S.FooterLink href="#">
                  <S.FacebookIcon />
                </S.FooterLink>
              </S.SocialItem>
              <S.SocialItem>
                <S.FooterLink href="#">
                  <S.TwitterIcon />
                </S.FooterLink>
              </S.SocialItem>
            </S.SocialList>
            <S.Copyrigth>
              Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
            </S.Copyrigth>
          </S.LogoCol>
          <S.AddressCol>
            <S.FooterHeading>Contact us</S.FooterHeading>
            <S.Contacts>
              <S.Address>
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </S.Address>
              <p>
                <S.FooterLink href="tel:415-201-6370">
                  415-201-6370
                </S.FooterLink>
                <br />
                <S.FooterLink href="mailto:hello@omnifood.com">
                  hello@omnifood.com
                </S.FooterLink>
              </p>
            </S.Contacts>
          </S.AddressCol>
          <S.NavCol>
            <S.FooterHeading>Account</S.FooterHeading>
            <S.NavList>
              <S.NavList>
                <S.NavItem>
                  <S.FooterLink href="#">Create Account</S.FooterLink>
                </S.NavItem>
                <S.NavItem>
                  <S.FooterLink href="#">Sign In</S.FooterLink>
                </S.NavItem>
                <S.NavItem>
                  <S.FooterLink href="#">IOS app</S.FooterLink>
                </S.NavItem>
                <S.NavItem>
                  <S.FooterLink href="#">Android app</S.FooterLink>
                </S.NavItem>
              </S.NavList>
            </S.NavList>
          </S.NavCol>
          <S.NavCol>
            <S.FooterHeading>Company</S.FooterHeading>
            <S.NavList>
              <S.NavList>
                <S.NavItem>
                  <S.FooterLink href="#">About Omnifood</S.FooterLink>
                </S.NavItem>
                <S.NavItem>
                  <S.FooterLink href="#">For Business</S.FooterLink>
                </S.NavItem>
                <S.NavItem>
                  <S.FooterLink href="#">Cooking partners</S.FooterLink>
                </S.NavItem>
                <S.NavItem>
                  <S.FooterLink href="#">Careers</S.FooterLink>
                </S.NavItem>
              </S.NavList>
            </S.NavList>
          </S.NavCol>
          <S.NavCol>
            <S.FooterHeading>Resources</S.FooterHeading>
            <S.NavList>
              <S.NavList>
                <S.NavItem>
                  <S.FooterLink href="#">Recipe directory</S.FooterLink>
                </S.NavItem>
                <S.NavItem>
                  <S.FooterLink href="#">Help center</S.FooterLink>
                </S.NavItem>
                <S.NavItem>
                  <S.FooterLink href="#">Privacy & terms</S.FooterLink>
                </S.NavItem>
              </S.NavList>
            </S.NavList>
          </S.NavCol>
        </S.GridFooter>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
