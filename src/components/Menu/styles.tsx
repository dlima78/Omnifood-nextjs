import styled, { css } from 'styled-components'
import { Menu } from '@styled-icons/ionicons-outline/Menu'
import { Close } from '@styled-icons/ionicons-outline/Close'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorBackground};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: ${theme.spacings.spacing11};
    padding: 0 ${theme.spacings.spacing08};

    @media (max-width: ${theme.media.laptop}) {
      padding: 0 ${theme.spacings.spacing07};
    }
  `}

  .sticky & {
    position: fixed;
    top: 0;
    left: 0;
    height: 8rem;
    padding-top: 0;
    padding-bottom: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.97);
    z-index: 9999;
    box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
  }
`

type MenuProps = {
  $isOpen: boolean
}

export const MenuNav = styled.nav<MenuProps>`
  display: flex;
  ${({ theme, $isOpen }) => css`
    @media (max-width: ${theme.media.tablet}) {
      background-color: rgba(255, 255, 255, 0.9);
      opacity: ${$isOpen ? 1 : 0};
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      transform: ${$isOpen ? 'translateX(0)' : 'translateX(100%)'};
      transition: all 0.5s ease-in;
      pointer-events: ${$isOpen ? 'all' : 'none'};
      visibility: ${$isOpen ? 'visible' : 'hidden'};
    }
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacings.spacing08};

    @media (max-width: ${theme.media.laptop}) {
      gap: ${theme.spacings.spacing07};
    }

    @media (max-width: ${theme.media.tablet}) {
      flex-direction: column;
      gap: ${theme.spacings.spacing08};
    }
  `}
`

export const Item = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`

export const StyledLink = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.font.sizes.large};
    font-weight: 500;
    color: ${theme.colors.greyVeryDark};
    transition: all 0.3s;
    &:hover {
      color: ${theme.colors.shade};
    }

    @media (max-width: ${theme.media.tablet}) {
      font-size: 3rem;
    }
  `}
`

export const LinkCta = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.spacing04} ${theme.spacings.spacing06};
    border-radius: 9px;
    background-color: ${theme.colors.primary};
    color: #fff;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    transition: all 0.3s;
    height: 0;

    &:hover,
    &:active {
      background-color: ${theme.colors.shade};
    }

    @media (max-width: ${theme.media.tablet}) {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}

  }
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (max-width: ${theme.media.tablet}) {
      width: 4.8rem;
      height: 4.8rem;
      z-index: ${theme.layers.alwaysOnTop};
      display: block;
    }
  `}
`

export const MenuIcon = styled(Menu)<MenuProps>`
  ${({ $isOpen }) => css`
    display: ${$isOpen ? 'none' : 'block'};
    cursor: pointer;
  `}
`
export const CloseIcon = styled(Close)<MenuProps>`
  ${({ $isOpen }) => css`
    display: ${$isOpen ? 'block' : 'none'};
    cursor: pointer;
  `}
`
