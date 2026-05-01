import React from 'react'
import GroceryHero from './sections/GroceryHero'
import GroceryAbout from './sections/GroceryAbout'
import GroceryFeatures from './sections/GroceryFeatures'
import GroceryWorkflow from './sections/GroceryWorkflow'
import TechStack from '../../../components/PestControl/PestTech'
import GroceryGallery from './sections/GroceryGallery'
import GroceryCta from './sections/GroceryCta'

const GroceryDeliveryPage = () => {
  return (
    <>
      <GroceryHero />
      <GroceryAbout />
      <GroceryFeatures />
      <GroceryWorkflow />
      <TechStack />
      <GroceryGallery />
      <GroceryCta />
    </>
  )
}

export default GroceryDeliveryPage