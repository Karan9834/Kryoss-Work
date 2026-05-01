import React from 'react'
import HotelHero from './section/HotelHero'
import AboutSection from './section/AboutSection'
import FeatureSection from './section/FeatureSection'
import HowItWork from './section/HowItWork'
import TechStack from '../../../components/PestControl/PestTech'
import GallerySection from './section/GallerySection'
import FinalCTA from './section/FinalCTA'

const HotelManagement = () => {
  return (
    <>
    <HotelHero/>
    <AboutSection/>
    <FeatureSection/>
    <HowItWork/>
    <TechStack/>
    <GallerySection/>
    <FinalCTA/>
    </>
  )
}

export default HotelManagement