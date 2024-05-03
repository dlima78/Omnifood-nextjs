import * as S from './styles'

export type TagProps = {
  children: React.ReactNode
  $type: 'vegetarian' | 'vegan' | 'paleo'
}

function Tag({ children, $type }: TagProps) {
  return <S.Wrapper $type={$type}>{children}</S.Wrapper>
}

export default Tag
