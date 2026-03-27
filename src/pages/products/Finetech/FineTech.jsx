import React from 'react'
import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs'
import Features from './sections/Features'
import WhyChooseUS from './sections/WhyChooseUS'
import TechStack from '../../../components/PestControl/PestTech'
import GallerySection from './sections/GallerySection'
import FinalCta from './sections/FinalCta'

const FineTech = () => {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <Features/>
    <WhyChooseUS/>
    <TechStack/>
    <GallerySection/>
    <FinalCta/>
    </>
  )
}

export default FineTech