import Heading from '@/components/Heading'
import * as S from './styles'

export type TestimonialsProps = {
  title: string
  description: string
}

function Testimonials() {
  return (
    <S.Wrapper>
      <S.TestimonialsContainer>
        <S.SubHeading>Testimonials</S.SubHeading>
        <Heading type="secondary">
          Once you try it, you can&apos;t go back.
        </Heading>
        <S.Testimonials>
          <S.Testimonial>
            <S.TestimonialImage
              src="images/customers/dave.jpg"
              alt="Photo of customer Dave Bryson"
            />
            <S.TestimonialText>
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </S.TestimonialText>
            <S.TestimonialName>&mdash; Dave Bryson</S.TestimonialName>
          </S.Testimonial>
          <S.Testimonial>
            <S.TestimonialImage
              src="images/customers/ben.jpg"
              alt="Photo of customer Ben Hadley"
            />
            <S.TestimonialText>
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It&apos;s amazing not to worry about food anymore!
            </S.TestimonialText>
            <S.TestimonialName>&mdash; Ben Hadley</S.TestimonialName>
          </S.Testimonial>
          <S.Testimonial>
            <S.TestimonialImage
              src="images/customers/steve.jpg"
              alt="Photo of customer Steve Miller"
            />
            <S.TestimonialText>
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </S.TestimonialText>
            <S.TestimonialName>&mdash; Steve Miller</S.TestimonialName>
          </S.Testimonial>
          <S.Testimonial>
            <S.TestimonialImage
              src="images/customers/hannah.jpg"
              alt="Photo of customer Hannah Smith"
            />
            <S.TestimonialText>
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </S.TestimonialText>
            <S.TestimonialName>&mdash; Hannah Smith</S.TestimonialName>
          </S.Testimonial>
        </S.Testimonials>
      </S.TestimonialsContainer>
      <S.Gallery>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-1.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-2.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-3.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-4.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-5.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-6.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-7.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-8.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-9.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-10.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-11.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
        <S.GalleryItem>
          <S.GalleryImage
            src="images/gallery/gallery-12.jpg"
            alt="Photo of beautifully arranged food"
          />
        </S.GalleryItem>
      </S.Gallery>
    </S.Wrapper>
  )
}

export default Testimonials
