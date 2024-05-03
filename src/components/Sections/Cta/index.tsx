import Button from '@/components/Button'
import { Container } from '@/components/Container'
import * as S from './styles'

function Cta() {
  return (
    <S.Wrapper>
      <Container>
        <S.CtaContainer>
          <S.CtaTextBox>
            <S.HeadingStyled>Get your first meal for free</S.HeadingStyled>
            <S.CtaText>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on u
            </S.CtaText>
            <S.CtaForm>
              <div>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Smith"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="me@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select name="" id="select-where" required>
                  <option value="">Please choose one option</option>
                  <option value="friends">Friends and family</option>
                  <option value="podcast">Podcast</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <Button $buttonType="form">Sign up now</Button>
            </S.CtaForm>
          </S.CtaTextBox>
          <S.CtaImageBox role="img" aria-label="Woman enjoying food" />
        </S.CtaContainer>
      </Container>
    </S.Wrapper>
  )
}

export default Cta
