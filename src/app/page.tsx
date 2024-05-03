'use client'

import Menu from '@/components/Menu'
import Cta from '@/components/Sections/Cta'
import Featured from '@/components/Sections/Featured'
import Footer from '@/components/Sections/Footer'
import Hero from '@/components/Sections/Hero'
import How from '@/components/Sections/How'
import Meals from '@/components/Sections/Meals'
import Pricing from '@/components/Sections/Pricing'
import Testimonials from '@/components/Sections/Testimonials'

export default function Home() {
  return (
    <>
      <Menu />
      <Hero />
      <Featured />
      <How />
      <Meals />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </>
  )
}
