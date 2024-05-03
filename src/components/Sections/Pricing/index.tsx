import { Container } from '@/components/Container'
import * as S from './styles'
import Heading from '@/components/Heading'
import Banner from '@/components/Banner'
import Grid from '@/components/Grid'
import Button from '@/components/Button'
import MarginBottom from '@/components/Helpers/MarginBottom'

function Pricing() {
  return (
    <S.Wrapper>
      <Container>
        <S.SubHeading>Pricing</S.SubHeading>
        <Heading type="secondary">
          Eating well without breaking the bank
        </Heading>
      </Container>
      <Container>
        <Grid $columns={2}>
          <Banner
            type="starter"
            name="Starter"
            price={399}
            description="per month. That's just $13 per meal"
            list={[
              { icon: <S.CheckmarkIcon />, item: '1 meal per day' },
              { icon: <S.CheckmarkIcon />, item: 'Order from 11am to 9pm' },
              { icon: <S.CheckmarkIcon />, item: 'Delivery is free' },
              { icon: <S.CloseIcon /> }
            ]}
            button={<Button as="a">Start eating well</Button>}
          />
          <Banner
            type="complete"
            name="Complete"
            price={649}
            description="per month. That's just $11 per meal"
            list={[
              { icon: <S.CheckmarkIcon />, item: '2 meals  per day' },
              { icon: <S.CheckmarkIcon />, item: 'Order 24/7' },
              { icon: <S.CheckmarkIcon />, item: 'Delivery is free' },
              { icon: <S.CloseIcon />, item: 'Get access to latest recipes' }
            ]}
            button={<Button as="a">Start eating well</Button>}
          />
        </Grid>
        <MarginBottom size="4.8rem" />
      </Container>
      <Container>
        <Grid>
          <S.PlanDetails>
            Prices include all applicable taxes. Users can cancel at any time.
            Both plans include the follwing:
          </S.PlanDetails>
        </Grid>
        <MarginBottom size="9.6rem" />
      </Container>
      <Container>
        <Grid $columns={4}>
          <S.Feature>
            <S.IconContainer>
              <S.InfiniteIcon />
            </S.IconContainer>
            <S.FeatureTitle>Never cook again!</S.FeatureTitle>
            <S.FeatureDescription>
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </S.FeatureDescription>
          </S.Feature>
          <S.Feature>
            <S.IconContainer>
              <S.NutritionIcon />
            </S.IconContainer>
            <S.FeatureTitle>Local and organic</S.FeatureTitle>
            <S.FeatureDescription>
              Our cooks only use local, fresh, and organic products to prepare
              your meals.
            </S.FeatureDescription>
          </S.Feature>
          <S.Feature>
            <S.IconContainer>
              <S.LeafIcon />
            </S.IconContainer>
            <S.FeatureTitle>No waste</S.FeatureTitle>
            <S.FeatureDescription>
              All our partners only use reusable containers to package all your
              meals.
            </S.FeatureDescription>
          </S.Feature>
          <S.Feature>
            <S.IconContainer>
              <S.PauseIcon />
            </S.IconContainer>
            <S.FeatureTitle>Pause anytime</S.FeatureTitle>
            <S.FeatureDescription>
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </S.FeatureDescription>
          </S.Feature>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default Pricing
