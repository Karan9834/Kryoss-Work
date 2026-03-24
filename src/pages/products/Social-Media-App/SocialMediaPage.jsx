import React from 'react'
import SocialHero from '../../../components/Social-Media-App/SocialHero'
import AboutSection from '../../../components/Social-Media-App/AboutSection'
import FeaturesSection from '../../../components/Social-Media-App/FeaturesSection'
import ProductSection from '../../../components/Social-Media-App/ProductSection'
import SolutionsSection from '../../../components/Social-Media-App/SolutionsSection'
import WhyChooseUs from '../../../components/Social-Media-App/WhyChooseUs'
import Industries from '../../../components/Common/Industries'
import Testimonial from '../../../components/Common/Testimonial'
import OurWork from '../../../components/Common/OurWork'
import ContactUs from '../../../components/Common/ContactUs'

const SocialMediaPage = () => {
  return (
<>
<SocialHero/>
<AboutSection/>
<FeaturesSection/>
<ProductSection/>
<SolutionsSection/>
<WhyChooseUs/>
<Testimonial 
    theme="purple"
    bgGradient="from-[#F9F7FF] to-white"
    cardGradient="from-purple-500 via-pink-500 to-indigo-500"
/>

<Industries 
    theme={{
        bg: "bg-[#F9F7FF]",
        primary: "text-purple-600",
        iconBg: "bg-purple-100",
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
    productName="Social Media App"
    bgGradient="from-[#F9F7FF] to-white"
    accentGradient="from-purple-500 via-pink-500 to-indigo-500"
    buttonGradient="from-purple-600 via-pink-500 to-indigo-600"
    showImage={true}
/>
</>
  )
}

export default SocialMediaPage