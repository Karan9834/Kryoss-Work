import React from 'react'
import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs'
import FeaturesSection from './sections/FeaturesSection'
import WhyChooseUs from './sections/WhyChooseUs'
import GallerySection from './sections/GallerySection'
import FinalCTA from './sections/FinalCTA'
import TechStack from '../Bike-Taxi/sections/TechStackSection'

const BdTask = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <FeaturesSection/>
        <WhyChooseUs/>
        <TechStack/>
        <GallerySection/>
        <FinalCTA/>

    </div>
  )
}

export default BdTask