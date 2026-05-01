import React from 'react'
import Hero from './sections/Hero'
import TechStack from '../../../components/Common/TechStack'
import AboutUs from './sections/AboutUs'
import FeaturesSection from './sections/FeaturesSection'
import WhyChooseUs from './sections/WhyChooseUs'
import GallerySection from './sections/GallerySection'
import FinalCTA from './sections/FinalCTA'

const Posly = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <FeaturesSection/>
        <WhyChooseUs/>
        <TechStack
          techs={['react', 'javascript', 'nodejs', 'mongodb', 'redis', 'aws', 'graphql']}
          title="IMS Technology Stack"
          description="Powering our Inventory Management System with modern technologies"
          badgeText="IMS Tech Stack"
          variant="default"
        />
        <GallerySection/>
        <FinalCTA/>
    </div>
  )
}

export default Posly