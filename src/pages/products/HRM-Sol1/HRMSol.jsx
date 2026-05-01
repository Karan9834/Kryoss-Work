import React from 'react'
import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs'
import FeaturesSection from './sections/FeaturesSection'
import WhyChooseUs from './sections/WhyChooseUs'
import GallerySection from './sections/GallerySection'
import FinalCta from './sections/FinalCta'
import TechStack from '../Uber-Clone/sections/TechStackSection'

const HRMSol = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <FeaturesSection/>
        <WhyChooseUs/>
        <TechStack/>
        <GallerySection/>
        <FinalCta/>
    </div>
  )
}

export default HRMSol