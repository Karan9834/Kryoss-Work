import React from 'react'
import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs'
import Features from './sections/Features'
import WhyChooseUs from './sections/WhyChooseUs'
import TechStack from './sections/TechStack'
import GallerySection from './sections/GallerySection'
import FinalCTA from './sections/FinalCTA'

const Essential = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Features/>
        <WhyChooseUs/>
        <TechStack/>
        <GallerySection/>
        <FinalCTA/>
    </div>
  )
}

export default Essential