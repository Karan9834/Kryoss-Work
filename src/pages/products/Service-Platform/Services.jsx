import React from 'react'
import Hero from './sections/Hero'
import ServiceAbout from './sections/ServiceAbout'
import Features from './sections/Features'
import TechStack from '../../../components/PestControl/PestTech'
import WhyChooseUs from './sections/WhyChooseUs'
import GallerySection from './sections/GallerySection'
import FinalCTA from './sections/FinalCTA'

const Services = () => {
  return (
    <>
    <Hero/>
    <ServiceAbout/>
    <Features/>
    <WhyChooseUs/>
    <TechStack/>
    <GallerySection/>
    <FinalCTA/>
    </>
  )
}

export default Services