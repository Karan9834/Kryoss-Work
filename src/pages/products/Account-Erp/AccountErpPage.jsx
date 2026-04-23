import React from 'react'
import Hero from '../../../components/Account-Erp/Hero'
import AboutSection from '../../../components/Account-Erp/AboutSection'
import FeaturesSection from '../../../components/Account-Erp/FeaturesSection'
import ProductSection from '../../../components/Account-Erp/ProductSection'
import SolutionsSection from '../../../components/Account-Erp/SolutionsSection'
import WhyChooseUS from '../../../components/Account-Erp/WhyChooseUS'
import Industries from '../../../components/Common/Industries'
import Testimonial from '../../../components/Common/Testimonial'
import OurWork from '../../../components/Common/OurWork'
import ContactUs from '../../../components/Common/ContactUs'
import TeamMoments from '../../../components/Common/TeamMoments'
import PopularBlogs from '../../../components/Blog/PopularBlogs'

const AccountErpPage = () => {
  return (
    <>
    <Hero/>
    <AboutSection/>
    <FeaturesSection/>
    <ProductSection/>
    <SolutionsSection/>
    <WhyChooseUS/>
    <Testimonial
        theme="blue"
        bgGradient="from-blue-50 via-white to-blue-50"
        cardGradient="from-blue-500 to-indigo-500"
        headingText="Trusted by Businesses Worldwide"
        subheadingText="See how companies are transforming their operations with our ERP platform"
      />

      {/* 8️⃣ INDUSTRIES */}
      <Industries
        theme={{
          bg: "bg-gradient-to-b from-blue-50 via-white to-blue-50",
          primary: "text-blue-600",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
        }}
      />

      {/* 9️⃣ OUR WORK / USE CASES */}
      <OurWork
        theme={{
          primary: "text-blue-600",
          accent: "bg-gradient-to-r from-blue-500 to-indigo-500",
        }}
      />
      <PopularBlogs/>

      {/* 🔟 CONTACT */}
      <ContactUs
        theme="blue"
        productName="ERP & Accounting Platform"
        bgGradient="from-blue-50 via-white to-blue-50"
        accentGradient="from-blue-500 to-indigo-500"
        buttonGradient="from-blue-600 to-indigo-600"
        showImage={true}
      />
      <TeamMoments/>
    </>
  )
}

export default AccountErpPage