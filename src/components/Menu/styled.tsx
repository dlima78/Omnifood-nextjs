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
  `}
`

type MenuProps = {
  $isOpen: boolean
}

export const MenuNav = styled.nav<MenuProps>`
  display: flex;

  @media (max-width: 59em) {
    ${({ $isOpen }) => css`
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
    `}
  }
`

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacings.spacing08};
  `}

  @media (max-width: 59em) {
    ${({ theme }) => css`
      flex-direction: column;
      gap: ${theme.spacings.spacing08};
    `}
  }
`

export const Item = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`

export const StyledLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: 500;
    color: ${theme.colors.greyVeryDark};
    transition: all 0.3s;
    &:hover {
      color: ${theme.colors.shade};
    }
  `}

  @media (max-width: 59em) {
    font-size: 3rem;
  }
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
  `}

  @media (max-width: 59em) {
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.xlarge};
    `}
  }
`

export const IconWrapper = styled.div`
  display: none;
  @media (max-width: 59em) {
    ${({ theme }) => css`
      width: 4.8rem;
      height: 4.8rem;
      z-index: ${theme.layers.alwaysOnTop};
      display: block;
    `}
  }
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
