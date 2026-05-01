import React from 'react'
import TutoeHero from './sections/TutoeHero'
import TutorAbout from './sections/TutorAbout'
import TutorBookingFeatures from './sections/TutorBookingFeatures'
import TutorBookingWorkflow from './sections/TutorBookingWorkflow'
import TechStack from '../../../components/PestControl/PestTech'
import TutorBookingGallery from './sections/TutorBookingGallery'
import TutorBookingCta from './sections/TutorBookingCta'

const TutorBookingPage = () => {
  return (
    <>
    <TutoeHero/>
    <TutorAbout/>
    <TutorBookingFeatures/>
    <TutorBookingWorkflow/>
    <TechStack/>
    <TutorBookingGallery/>
    <TutorBookingCta/>
    </>
  )
}

export default TutorBookingPage