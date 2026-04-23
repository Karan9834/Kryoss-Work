import React from 'react'
import HotelHero from '../../../components/Hotel-Management/HotelHero'
import AboutSection from '../../../components/Hotel-Management/AboutSection'
import FeaturesSection from '../../../components/Hotel-Management/FeaturesSection'
import ProductDetail from '../../../components/Hotel-Management/ProductDetail'
import TimelineSection from '../../../components/Hotel-Management/TimelineSection'
import WhyChooseUs from '../../../components/Hotel-Management/WhyChooseUs'
import Industries from '../../../components/Common/Industries'
import Testimonial from '../../../components/Common/Testimonial'
import OurWork from '../../../components/Common/OurWork'
import ContactUs from '../../../components/Common/ContactUs'
import TeamMoments from '../../../components/Common/TeamMoments'
import PopularBlogs from '../../../components/Blog/PopularBlogs'
const HotelManagement = () => {
  return (
    <>
    <HotelHero/>
    <AboutSection/>
    <FeaturesSection/>
    <ProductDetail/>
    <TimelineSection/>
    <WhyChooseUs/>
    <>

  <Testimonial
    theme="teal"
    bgGradient="from-cyan-50 via-white to-emerald-50"
    cardGradient="from-cyan-500 to-teal-500"
    headingText="What Hotel Partners Say"
    subheadingText="Trusted by hotels, resorts, and hospitality brands worldwide"
  />

  <Industries
    theme={{
      bg: "bg-gradient-to-b from-cyan-50 via-white to-emerald-50",
      primary: "text-cyan-600",
      iconBg: "bg-white shadow-md",
      iconColor: "text-cyan-600",
    }}
  />

  <OurWork
    theme={{
      primary: "text-cyan-600",
      accent: "bg-gradient-to-r from-cyan-500 to-emerald-500",
    }}
  />
  <PopularBlogs/>

  <ContactUs
    theme="teal"
    productName="Hotel Management"
    bgGradient="from-cyan-50 via-white to-emerald-50"
    accentGradient="from-cyan-500 to-emerald-500"
    buttonGradient="from-cyan-600 to-teal-600"
    showImage={true}
  />
  <TeamMoments/>
</>
    </>
  )
}

export default HotelManagement