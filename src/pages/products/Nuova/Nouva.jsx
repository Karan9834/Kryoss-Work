import React from 'react'
import Hero from './sections/Hero'
import Features from './sections/Features'
import WhyChooseUs from './sections/WhyChooseUs'
import TechStack from './sections/TechStack'
import GallerySection from './sections/GallerySection'
import FinalCTA from './sections/FinalCTA'
import About from './sections/About'

const Nouva = () => {
  return (
    <div>
    <Hero/>
    <About/>
    <Features/>
    <WhyChooseUs/>
    <TechStack/>
    <GallerySection/>
    <FinalCTA/>
    </div>
  )
}

export default Nouva