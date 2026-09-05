import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Stats from '../components/Stats.jsx'
import About from '../components/About.jsx'
import Facilities from '../components/Facilities.jsx'
import Classes from '../components/Classes.jsx'
import Gallery from '../components/Gallery.jsx'
import Reviews from '../components/Reviews.jsx'
import Visit from '../components/Visit.jsx'
import CTA from '../components/CTA.jsx'
import Layout from '../components/Layout.jsx'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <Stats />
      <About />
      <Facilities />
      <Classes />
      <Gallery />
      <Reviews />
      <Visit />
      <CTA />
    </Layout>
  )
}
