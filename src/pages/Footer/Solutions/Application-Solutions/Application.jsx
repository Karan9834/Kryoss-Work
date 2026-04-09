import React from 'react'
import Hero from './sections/Hero'
import FeaturesSection from './sections/FeaturesSection'
import ServicesSection from './sections/ServicesSection'
import OverviewSection from './sections/OverviewSection'
import ProsConsSection from './sections/ProsConsSection'

const Application = () => {
  return (
    <div>
        <Hero/>
        <FeaturesSection/>
        <ServicesSection/>
        <OverviewSection/>
        <ProsConsSection/>
    </div>
  )
}

export default Application