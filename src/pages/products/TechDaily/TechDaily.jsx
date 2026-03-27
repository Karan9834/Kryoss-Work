import React from 'react'
import Hero from './sections/Hero'
import AboutSection from './sections/AboutSection'
import Features from './sections/Features'
import WhyChooseUs from './sections/WhyChooseUs'
import TechStack from '../../../components/PestControl/PestTech'
import GallerySection from './sections/GallerySection'
import FinalCta from './sections/FinalCta'

const TechDaily = () => {
  return (
    <>
    <Hero/>
    <AboutSection/>
    <Features/>
    <WhyChooseUs/>
    <TechStack/>
    <GallerySection/>
    <FinalCta/>
    </>
  )
}

export default TechDaily