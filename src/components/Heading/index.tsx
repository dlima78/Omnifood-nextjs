import * as S from './styles'

export type HeadingProps = {
  type: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
}

const Heading = ({ type, children }: HeadingProps) => {
  return <S.Wrapper type={type}>{children}</S.Wrapper>
}

export default Heading
