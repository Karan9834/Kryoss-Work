import React from 'react'
import FoodHero from '../../../components/Food_delivery/FoodHero'
import AboutSection from '../../../components/Food_delivery/AboutSection'
import FeaturesSection from '../../../components/Food_delivery/FeaturesSection'
import ProductSection from '../../../components/Food_delivery/ProductSection'
import SolutionSection from '../../../components/Food_delivery/SolutionSection'
import WhyChooseU from '../../../components/Food_delivery/WhyChooseU'
import Testimonial from '../../../components/Common/Testimonial'
import OurWork from '../../../components/Common/OurWork'
import ContactUs from '../../../components/Common/ContactUs'
import Industries from '../../../components/Common/Industries'
import TeamMoments from '../../../components/Common/TeamMoments'
import PopularBlogs from '../../../components/Blog/PopularBlogs'

const FoodDeliveryPage = () => {
  return (
    <>
    <FoodHero/>
    <AboutSection/>
    <FeaturesSection/>
    <ProductSection/>
    <SolutionSection/>
    <WhyChooseU/>
    <Testimonial
  theme="orange"
  bgGradient="from-orange-50 to-white"
  cardGradient="from-orange-500 "
  headingText="What Our Customers Say"
  subheadingText="Loved by thousands of food lovers across cities"
/>

{/* Industries (Food / Services) */}
<Industries
  theme={{
    bg: "bg-gradient-to-b from-orange-50 to-white",
    primary: "text-orange-600",
    iconBg: "bg-white shadow-md",
    iconColor: "text-orange-600",
  }}
/>

{/* Our Work */}
<OurWork
  theme={{
    primary: "text-orange-600",
    accent: "bg-orange-600",
  }}
/>
<PopularBlogs/>

{/* Contact Section */}
<ContactUs
  theme="orange"
  productName="Food Delivery"
  bgGradient="from-orange-50 to-white"
  accentGradient="from-orange-500 to-amber-500"
  buttonGradient="from-orange-600 to-orange-700"
  showImage={true}
/>
<TeamMoments/>
    </>
  )
}

export default FoodDeliveryPage