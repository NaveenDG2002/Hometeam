import Seo from '../components/layout/Seo'
import Hero from '../components/sections/Hero'
import Introduction from '../components/sections/Introduction'
import ServicesOverview from '../components/sections/ServicesOverview'
import BusinessEcosystem from '../components/sections/BusinessEcosystem'
import WhyHometeam from '../components/sections/WhyHometeam'
import OurWork from '../components/sections/OurWork'
import ContactCta from '../components/sections/ContactCta'

export function Component() {
  return (
    <>
      <Seo
        title="Hometeam | IT Consultancy and Digital Solutions"
        description="Hometeam is an IT consultancy and digital solutions company helping businesses with business analysis, technology consulting and web solutions."
        path="/"
      />
      <Hero />
      <Introduction />
      <ServicesOverview />
      <BusinessEcosystem />
      <WhyHometeam />
      <OurWork />
      <ContactCta />
    </>
  )
}
