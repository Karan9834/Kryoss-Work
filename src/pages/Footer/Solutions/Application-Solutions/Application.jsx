import React from 'react'
import Hero from './sections/Hero'
import FeaturesSection from './sections/FeaturesSection'
import ServicesSection from './sections/ServicesSection'
import OverviewSection from './sections/OverviewSection'
import ProsConsSection from './sections/ProsConsSection'
import Testimonial from '../../../../components/Common/Testimonial'
import Industries from '../../../../components/Common/Industries'
import OurWork from '../../../../components/Common/OurWork'
import ContactUs from '../../../../components/Common/ContactUs'


const Application = () => {
  return (
    <div>
        <Hero/>
        <FeaturesSection/>
        <ServicesSection/>
        <OverviewSection/>
        <ProsConsSection/>
        {/* Testimonial with Light Purple Theme */}
<Testimonial
  theme="purple"
  bgGradient="from-purple-50 to-indigo-50"
  cardGradient="from-purple-500 to-indigo-600"
  headingText="What Our Clients Say"
  subheadingText="Join 1000+ businesses that trust our solutions"
/>

{/* Industries with Light Purple Theme */}
<Industries
  theme={{
    bg: "bg-gradient-to-b from-purple-50 to-indigo-50",
    primary: "text-purple-600",
    iconBg: "bg-white shadow-md",
    iconColor: "text-purple-600",
  }}
/>

{/* Our Work with Light Purple Theme */}
<OurWork
  theme={{
    primary: "text-purple-600",
    accent: "bg-purple-600",
  }}
/>

{/* Contact Us with Light Purple Theme */}
<ContactUs
  theme="purple"
  productName="Custom Software"
  bgGradient="from-purple-50 to-indigo-50"
  accentGradient="from-purple-500 to-indigo-600"
  buttonGradient="from-purple-600 to-indigo-600"
  showImage={true}
/>
    </div>
  )
}

export default Application