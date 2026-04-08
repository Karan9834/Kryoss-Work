import React from 'react'
import Hero from './sections/Hero'
import CustomLMSSection from './sections/CustomLMSSection'
import LookingForLMS from './sections/LookingForLMS'
import CustomFeatureUpgrades from './sections/CustomFeatureUpgrades'
import LMSServices from './sections/LMSServices'
import FeaturesGrid from './sections/FeaturesGrid'
import CustomLMSDevelopment from './sections/CustomLMSDevelopment'
import LmsCardSection from './sections/LmsCardSection'
import Industries from '../../../../components/Common/Industries'
import Testimonial from '../../../../components/Common/Testimonial'
import ContactUs from '../../../../components/Common/ContactUs'

const Learning = () => {
  return (
    <div>
        <Hero/>
        <CustomLMSSection/>
        <LookingForLMS/>
        <CustomFeatureUpgrades/>
        <LmsCardSection/>
        <LMSServices/>
        <FeaturesGrid/>
        <div id="product-section">
    <CustomLMSDevelopment/>
</div>
        <Industries
  theme={{
    bg: "bg-gradient-to-b from-blue-50 via-white to-indigo-50",
    primary: "text-blue-600",
    iconBg: "bg-white shadow-md",
    iconColor: "text-blue-600",
  }}
/>


<Testimonial
  theme="blue"
  bgGradient="from-blue-50 via-white to-indigo-50"
  cardGradient="from-blue-600 to-indigo-600"
  headingText="What Our Customers Say"
  subheadingText="Trusted by institutions worldwide"
/>

<ContactUs
  theme="blue"
  productName="School Management Software"
  bgGradient="from-blue-50 via-white to-indigo-50"
  accentGradient="from-blue-600 to-indigo-600"
  buttonGradient="from-blue-700 to-indigo-700"
  showImage={true}
/>
    </div>
  )
}

export default Learning