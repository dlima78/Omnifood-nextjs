import styled, { css } from 'styled-components'
import {
  Instagram,
  FacebookCircle,
  Twitter
} from '@styled-icons/boxicons-logos'

export const Wrapper = styled.section.attrs({ id: 'footer' })`
  ${({ theme }) => css`
    padding: ${theme.spacings.spacing12} 0;
    border-top: 1px solid #eee;
  `}
`

export const GridFooter = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;
  column-gap: 6.4rem;
  row-gap: 9.6rem;

  ${({ theme }) => css`
    @media (max-width: ${theme.media.laptop}) {
      column-gap: ${theme.spacings.spacing08};
      row-gap: ${theme.spacings.spacing09};
    }

    @media (max-width: ${theme.media.phone}) {
      grid-template-columns: repeat(6, 1fr);
    }

    @media (max-width: ${theme.media.smallPhone}) {
      row-gap: ${theme.spacings.spacing08};
    }
  `}
`

export const LogoCol = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    @media (max-width: ${theme.media.phone}) {
      grid-column: span 3;
    }
  `}
`
export const LogoWrapper = styled.div`
  display: block;
  margin-bottom: 2.4rem;
`

export const SocialList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    list-style: none;
    gap: ${theme.spacings.spacing06};
  `}
`

export const SocialItem = styled.li``

export const FooterLink = styled.a`
  ${({ theme }) => css`
    &:link,
    &:visited {
      text-decoration: none;
      color: #767676;
      font-size: ${theme.font.sizes.medium};
      transition: all 0.3s;
    }

    &:hover,
    &:active {
      color: ${theme.colors.greyMediumDark};
    }
  `}
`

export const InstagramIcon = styled(Instagram)`
  ${({ theme }) => css`
    height: ${theme.spacings.spacing06};
    width: ${theme.spacings.spacing06};
  `}
`
export const FacebookIcon = styled(FacebookCircle)`
  ${({ theme }) => css`
    height: ${theme.spacings.spacing06};
    width: ${theme.spacings.spacing06};
  `}
`
export const TwitterIcon = styled(Twitter)`
  ${({ theme }) => css`
    height: ${theme.spacings.spacing06};
    width: ${theme.spacings.spacing06};
  `}
`

export const Copyrigth = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: #767676;
    line-height: ${theme.line.medium};
    margin-top: auto;
  `}
`

export const AddressCol = styled.div`
  ${({ theme }) => css`
    @media (max-width: ${theme.media.phone}) {
      grid-column: span 3;
    }
  `}
`

export const FooterHeading = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    margin-bottom: 4rem;
  `}
`

export const Contacts = styled.address`
  ${({ theme }) => css`
    font-style: normal;
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.line.medium};
  `}
`

export const Address = styled.p`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.spacing06};
  `}
`

export const NavCol = styled.nav`
  ${({ theme }) => css`
    @media (max-width: ${theme.media.phone}) {
      grid-row: 1;
      grid-column: span 2;
      margin-bottom: ${theme.spacings.spacing07};
    }
  `}
`

export const NavList = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.spacing06};
  `}
`

export const NavItem = styled.li``
