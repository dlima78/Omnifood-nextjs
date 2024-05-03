import * as S from './styles'

export type BannerProps = {
  type: 'starter' | 'complete'
  name: string
  price: number
  description: string
  list: {
    icon?: JSX.Element
    item?: string
  }[]

  button?: JSX.Element
}

function Banner({ type, name, price, description, list, button }: BannerProps) {
  return (
    <S.Wrapper type={type}>
      <S.PlanHeader>
        <S.PlanName>{name}</S.PlanName>
        <S.PlanPrice>
          <span>$</span>
          {price}
        </S.PlanPrice>
        <S.PlanText>{description}</S.PlanText>
      </S.PlanHeader>
      <S.List>
        {list.map(({ icon, item }, index) => (
          <S.ListItem key={index}>
            {!!icon && icon}
            {!!item && <span>{item}</span>}
          </S.ListItem>
        ))}
      </S.List>
      <S.PlanSignUp>{!!button && button}</S.PlanSignUp>
    </S.Wrapper>
  )
}

export default Banner
