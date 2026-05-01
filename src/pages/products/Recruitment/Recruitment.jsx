import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Features from './sections/Features'
import WhyChooseUs from './sections/WhyChooseUs'
import TechStack from '../../../components/PestControl/PestTech'
import GallerySection from './sections/GallerySection'
import FinalCta from './sections/FinalCta'

const Recruitment = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Features/>
    <WhyChooseUs/>
    <TechStack/>
    <GallerySection/>
    <FinalCta/>
    </>
  )
}

export default Recruitment