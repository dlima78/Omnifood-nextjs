import * as S from './styles'

export type GridProps = {
  children: React.ReactNode
  $centered?: boolean
  $columns?: 1 | 2 | 3 | 4 | 5 | 6
}

function Grid({ children, $centered = false, $columns = 1 }: GridProps) {
  return (
    <S.Wrapper $centered={$centered} $columns={$columns}>
      {children}
    </S.Wrapper>
  )
}

export default Grid
