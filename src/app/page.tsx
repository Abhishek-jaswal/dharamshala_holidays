import type { Metadata } from 'next'
import Hero          from '@/components/Hero'
import Services      from '@/components/Services'
import WhyChooseUs   from '@/components/WhyChooseUs'
import PopularRoutes from '@/components/PopularRoutes'
import Testimonials  from '@/components/Testimonials'
import Gallery       from '@/components/Gallery'

export const metadata: Metadata = {
  title:       'Best Taxi & Bike Rental in Dharamshala | SKD Holidays',
  description: 'Book taxi, scooty, bike & tour packages in Dharamshala at best price. Local taxi, airport pickup, Royal Enfield rental, Triund trek & Manali packages. Call SKD Holidays!',
  alternates:  { canonical: 'https://skdholidays.in' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <PopularRoutes />
      <Testimonials />
      <Gallery />
    </>
  )
}
