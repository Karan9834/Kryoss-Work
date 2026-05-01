import React from 'react'
import WhatsAppHero from './sections/WhatsAppHero'
import AboutUs from './sections/AboutUs'
import FeaturesSection from './sections/FeaturesSection'
import WhyChooseUs from './sections/WhyChooseUs'
import TechStack from '../../../components/PestControl/PestTech'
import GallerySection from './sections/GallerySection'
import FinalCTA from './sections/FinalCTA'

const WhatsAppPage = () => {
  return (
   <>
   <WhatsAppHero/>
   <AboutUs/>
   <FeaturesSection/>
   <WhyChooseUs/>
   <TechStack/>
   <GallerySection/>
   <FinalCTA/>
   </>
  )
}

export default WhatsAppPage