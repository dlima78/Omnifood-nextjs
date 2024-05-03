import Heading from '@/components/Heading'
import * as S from './styles'
import { Container } from '@/components/Container'
import Grid from '@/components/Grid'

function How() {
  return (
    <S.Wrapper>
      <Container>
        <S.SubHeading>How it works</S.SubHeading>
        <Heading type="secondary">
          Your daily dose of health in 3 simple steps
        </Heading>
      </Container>
      <Container>
        <Grid $columns={2} $centered>
          <S.StepTextBox>
            <S.StepNumber>01</S.StepNumber>
            <Heading type="tertiary">
              Tell us what you like (and what not)
            </Heading>
            <S.StepDescription>
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </S.StepDescription>
          </S.StepTextBox>
          <S.StepImageBox>
            <S.StepImg
              src="images/app/app-screen-1.png"
              alt="IPhone app references selection screen"
            />
          </S.StepImageBox>

          <S.StepImageBox>
            <S.StepImg
              src="images/app/app-screen-2.png"
              alt="IPhone app meal approving plan"
            />
          </S.StepImageBox>
          <S.StepTextBox>
            <S.StepNumber>02</S.StepNumber>
            <Heading type="tertiary">Approve your weekly meal plan</Heading>
            <S.StepDescription>
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </S.StepDescription>
          </S.StepTextBox>
          <S.StepTextBox>
            <S.StepNumber>03</S.StepNumber>
            <Heading type="tertiary">Receive meals at convenient time</Heading>
            <S.StepDescription>
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </S.StepDescription>
          </S.StepTextBox>
          <S.StepImageBox>
            <S.StepImg
              src="images/app/app-screen-3.png"
              alt="IPhone app delivery screen"
            />
          </S.StepImageBox>
        </Grid>
      </Container>
    </S.Wrapper>
  )
}

export default How
