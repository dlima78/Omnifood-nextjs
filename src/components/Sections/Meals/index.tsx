import Heading from '@/components/Heading'
import * as S from './styles'
import { Container } from '@/components/Container'
import Grid from '@/components/Grid'
import Tag from '@/components/Tag'
import { Link } from '@/components/Link'
import MarginBottom from '@/components/Helpers/MarginBottom'

function Meals() {
  return (
    <S.Wrapper>
      <S.SyledContainer>
        <S.SubHeading>Meals</S.SubHeading>
        <Heading type="secondary">
          Omnifood AI chooses from 5,000+ recipes
        </Heading>
      </S.SyledContainer>
      <Container>
        <Grid $columns={3}>
          <S.Meal>
            <S.MealImage src="images/meals/meal-1.jpg" alt="Japanese Gyozas" />
            <S.MealContent>
              <S.MealTags>
                <Tag $type="vegetarian">Vegetarian</Tag>
              </S.MealTags>
              <S.MealTitle>Japanese Gyozas</S.MealTitle>
              <S.MealAtributes>
                <S.MealAtribute>
                  <S.FlameIcon />
                  <span>
                    <strong>650</strong> calories
                  </span>
                </S.MealAtribute>
                <S.MealAtribute>
                  <S.RestaurantIcon />
                  <span>
                    Nutriscore &reg;<strong>74</strong>
                  </span>
                </S.MealAtribute>
                <S.MealAtribute>
                  <S.StarIcon />
                  <span>
                    4.9 rating <strong>(537)</strong>
                  </span>
                </S.MealAtribute>
              </S.MealAtributes>
            </S.MealContent>
          </S.Meal>
          <S.Meal>
            <S.MealImage src="images/meals/meal-2.jpg" alt="Japanese Gyozas" />
            <S.MealContent>
              <S.MealTags>
                <Tag $type="vegetarian">Vegan</Tag>
                <Tag $type="paleo">Paleo</Tag>
              </S.MealTags>
              <S.MealTitle>Avocado Salad</S.MealTitle>
              <S.MealAtributes>
                <S.MealAtribute>
                  <S.FlameIcon />
                  <span>
                    <strong>400</strong> calories
                  </span>
                </S.MealAtribute>
                <S.MealAtribute>
                  <S.RestaurantIcon />
                  <span>
                    Nutriscore &reg;<strong>92</strong>
                  </span>
                </S.MealAtribute>
                <S.MealAtribute>
                  <S.StarIcon />
                  <span>
                    4.8 rating <strong>(441)</strong>
                  </span>
                </S.MealAtribute>
              </S.MealAtributes>
            </S.MealContent>
          </S.Meal>
          <S.Diets>
            <Heading type="tertiary">Works with any diet:</Heading>
            <S.List>
              <S.ListItem>
                <S.CheckmarkIcon />
                <span>Vegetarian</span>
              </S.ListItem>
              <S.ListItem>
                <S.CheckmarkIcon />
                <span>Vegan</span>
              </S.ListItem>
              <S.ListItem>
                <S.CheckmarkIcon />
                <span>Pescatarian</span>
              </S.ListItem>
              <S.ListItem>
                <S.CheckmarkIcon />
                <span>Gluten-free</span>
              </S.ListItem>
              <S.ListItem>
                <S.CheckmarkIcon />
                <span>Lactose-free</span>
              </S.ListItem>
              <S.ListItem>
                <S.CheckmarkIcon />
                <span>Keto</span>
              </S.ListItem>
              <S.ListItem>
                <S.CheckmarkIcon />
                <span>Paleo</span>
              </S.ListItem>
              <S.ListItem>
                <S.CheckmarkIcon />
                <span>Low FODMAP</span>
              </S.ListItem>
              <S.ListItem>
                <S.CheckmarkIcon />
                <span>Kid-friendly</span>
              </S.ListItem>
            </S.List>
          </S.Diets>
        </Grid>
      </Container>
      <MarginBottom size="4.8rem" />
      <Container>
        <S.AllRecipes>
          <Link href="#">See all recipes &rarr;</Link>
        </S.AllRecipes>
      </Container>
    </S.Wrapper>
  )
}

export default Meals
