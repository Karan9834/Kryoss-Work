import React from 'react'
import HeroSection from './sections/HeroSection'
import FoodAboutSection from './sections/AboutSection'
import FoodFeaturesSection from './sections/FoodFeaturesSection'
import FoodHowItWorksSection from './sections/FoodHowItWorksSection'
import FoodTechStackSection from './sections/FoodTechStackSection'
import FoodGallerySection from './sections/FoodGallerySection'
import FoodCTASection from './sections/FoodCTA'


const FoodDeliveryPage = () => {
  return (
    <>
    <HeroSection/>
    <FoodAboutSection/>
    <FoodFeaturesSection/>
    <FoodHowItWorksSection/>
    <FoodTechStackSection/>
    <FoodGallerySection/>
    <FoodCTASection/>
    </>
  )
}

export default FoodDeliveryPage