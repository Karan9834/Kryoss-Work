import React from 'react'
import WealthHero from './sections/WealthHero'
import AboutUs from './sections/AboutUs'
import Features from './sections/Features'
import WhyChooseUs from './sections/WhyChooseUs'
import TechStack from '../../../components/PestControl/PestTech'
import GallerySection from './sections/GallerySection'
import FinalCta from './sections/FinalCta'

const WealthPage = () => {
  return (
    <>
    <WealthHero/>
    <AboutUs/>
    <Features/>
    <WhyChooseUs/>
    <TechStack/>
    <GallerySection/>
    <FinalCta/>
    </>
  )
}

export default WealthPage