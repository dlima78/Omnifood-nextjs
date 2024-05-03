import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  $buttonType?: 'full' | 'outline' | 'cta' | 'form'
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = ({
  children,
  $buttonType = 'full',
  ...props
}) => {
  return (
    <S.Wrapper $buttonType={$buttonType} {...props}>
      {!!children && children}
    </S.Wrapper>
  )
}

export default Button
