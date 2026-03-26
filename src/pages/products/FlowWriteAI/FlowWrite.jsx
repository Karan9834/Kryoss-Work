import React from 'react'
import Hero from './sections/Hero'
import AboutSection from './sections/AboutSection'
import FeatureSection from './sections/FeatureSection'
import WhyChooseUsSection from './sections/WhyChooseUsSection'
import TechStack from '../../../components/PestControl/PestTech'
import GallerySection from './sections/GallerySection'
import FinalCTA from './sections/FinalCTA'

const FlowWrite = () => {
  return (
    <>
    <Hero/>
    <AboutSection/>
    <FeatureSection/>
    <WhyChooseUsSection/>
    <TechStack/>
    <GallerySection/>
    <FinalCTA/>
    </>
  )
}

export default FlowWrite