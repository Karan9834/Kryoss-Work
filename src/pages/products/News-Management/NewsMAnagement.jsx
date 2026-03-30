import React from 'react'
import NewsManagementHero from '../../../components/New-Management/NewsManagementHero'
import AboutSection from '../../../components/New-Management/AboutSection'
import FeaturesSection from '../../../components/New-Management/FeaturesSection'
import ProductsSection from '../../../components/New-Management/ProductsSection'
import SolutionsSection from '../../../components/New-Management/SolutionsSection'
import WhyChooseUs from '../../../components/New-Management/WhyChooseUs'
import Testimonial from '../../../components/Common/Testimonial'
import Industries from '../../../components/Common/Industries'
import OurWork from '../../../components/Common/OurWork'
import ContactUs from '../../../components/Common/ContactUs'


const NewsMAnagement = () => {
  return (
    <>
    <NewsManagementHero/>
    <AboutSection/>
    <FeaturesSection/>
    <ProductsSection/>
    <SolutionsSection/>
    <WhyChooseUs/>
    <Testimonial 
    theme="orange"
    bgGradient="from-[#FFF7ED] to-white"
    cardGradient="from-orange-500 to-amber-500"
/>

<Industries 
    theme={{
        bg: "bg-[#FFF7ED]",
        primary: "text-orange-600",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600",
    }}
/>

<OurWork 
    theme={{
        primary: "text-orange-600",
        accent: "bg-orange-600",
    }}
/>

<ContactUs 
    theme="orange"
    productName="News Management"
    bgGradient="from-[#FFF7ED] to-white"
    accentGradient="from-orange-500 to-amber-500"
    buttonGradient="from-orange-500 to-orange-600"
    showImage={true}
/>
    </>
  )
}

export default NewsMAnagement