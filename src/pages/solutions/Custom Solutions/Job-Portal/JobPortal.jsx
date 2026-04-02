import React from 'react'
import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs'
import FeatureSection from './sections/FeatureSection'
import ProductSection from './sections/ProductSection'
import Testimonial from '../../../../components/Common/Testimonial'
import Industries from '../../../../components/Common/Industries'
import OurWork from '../../../../components/Common/OurWork'
import ContactUs from '../../../../components/Common/ContactUs'
import UserFeatures from './sections/UserFeatures'



const JobPortal = () => {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <FeatureSection/>
    <ProductSection/>
    <OurWork
  theme={{
    primary: "text-blue-600",
    accent: "bg-blue-600",
  }}
/>
<UserFeatures/>
    <Testimonial
  theme="blue"
  bgGradient="from-blue-50 to-indigo-50"
  cardGradient="from-blue-600 to-indigo-600"
  headingText="What Our Customers Say"
  subheadingText="Trusted by thousands of job seekers and recruiters"
/>

<Industries
  theme={{
    bg: "bg-gradient-to-b from-blue-50 to-indigo-50",
    primary: "text-blue-600",
    iconBg: "bg-white shadow-md",
    iconColor: "text-blue-600",
  }}
/>



<ContactUs
  theme="blue"
  productName="JobPortal"
  bgGradient="from-blue-50 to-indigo-50"
  accentGradient="from-blue-600 to-indigo-600"
  buttonGradient="from-blue-600 to-blue-700"
  showImage={true}
/>
    </>
  )
}

export default JobPortal