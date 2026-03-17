import React from 'react'
import ElearningHero from './sections/ElearningHero'
import ElearningAbout from './sections/ElearningAbout'
import ElearningFeatures from './sections/ElearningFeatures'
import ElearningWorkflow from './sections/ElearningWorkflow'
import TechStack from '../../../components/PestControl/PestTech'
import ElearningGallery from './sections/ElearningGallery'
import ElearningCta from './sections/ElearningCta'

const ELearningPage = () => {
  return (
    <>
    <ElearningHero/>
    <ElearningAbout/>
    <ElearningFeatures/>
    <ElearningWorkflow/>
    <TechStack/>
    <ElearningGallery/>
    <ElearningCta/>
    </>
  )
}

export default ELearningPage