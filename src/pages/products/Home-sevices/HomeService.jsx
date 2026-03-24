import React from 'react'
import HomeHero from '../../../components/Home-Services/HomeHero'
import AboutSection from '../../../components/Home-Services/AboutSection'
import FeaturesSection from '../../../components/Home-Services/FeaturesSection'
import ProductSection from '../../../components/Home-Services/ProductSection'
import SolutionsSection from '../../../components/Home-Services/SolutionsSection'
import WhyChooseUs from '../../../components/Home-Services/WhyChooseUs'
import Industries from '../../../components/Common/Industries'
import OurWork from '../../../components/Common/OurWork'
import Testimonial from '../../../components/Common/Testimonial'
import ContactUs from '../../../components/Common/ContactUs'


const HomeService = () => {
  return (
    <>
    <HomeHero/>
    <AboutSection/>
    <FeaturesSection/>
    <ProductSection/>
    <SolutionsSection/>
    <WhyChooseUs/>
    <Testimonial
  theme="purple"
  bgGradient="from-purple-50 via-white to-pink-50"
  cardGradient="from-purple-500 via-pink-500 to-indigo-500"
  headingText="What Our Customers Say"
  subheadingText="Trusted by thousands for reliable home services"
 />

<Industries
  theme={{
    bg: "bg-gradient-to-b from-purple-50 via-white to-pink-50",
    primary: "text-purple-600",
    iconBg: "bg-white shadow-md",
    iconColor: "text-purple-600",
  }}
/>

<OurWork
  theme={{
    primary: "text-purple-600",
    accent: "bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500",
  }}
/>

<ContactUs
  theme="purple"
  productName="Home Services"
  bgGradient="from-purple-50 via-white to-pink-50"
  accentGradient="from-purple-500 via-pink-500 to-indigo-500"
  buttonGradient="from-purple-600 via-pink-600 to-indigo-600"
  showImage={true}
/>
    </>
  )
}

export default HomeService