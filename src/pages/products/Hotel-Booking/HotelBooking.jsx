import React from 'react'
import BookingHero from './sections/BookingHero'
import AboutSection from './sections/AboutSection'
import FeaturesSection from './sections/FeaturesSection'
import HowItWorks from './sections/HowItWorks'
import TechStack from '../../../components/PestControl/PestTech'
import GallerySection from './sections/GallerySection'
import CTA from './sections/CTA'

const HotelBooking = () => {
  return (
    <>
    <BookingHero/>
    <AboutSection/>
    <FeaturesSection/>
    <HowItWorks/>
    <TechStack/>
    <GallerySection/>
    <CTA/>
    </>
  )
}

export default HotelBooking