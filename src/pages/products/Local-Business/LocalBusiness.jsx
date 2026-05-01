import React from 'react'
import Hero from './sections/Hero'
import AboutSection from './sections/AboutSection'
import FeaturesSection from './sections/FeaturesSection'
import WhyChooseUs from './sections/WhyChooseUs'
import TechStack from '../../../components/PestControl/PestTech'
import GallerySection from './sections/GallerySection'
import FinalCTA from './sections/FinalCTA'

const LocalBusiness = () => {
  return (
   <>
   <Hero/>
   <AboutSection/>
   <FeaturesSection/>
   <WhyChooseUs/>
   <TechStack/>
   <GallerySection/>
   <FinalCTA/>
   </>
  )
}

export default LocalBusiness