import React from 'react'
import SaasHero from '../../../components/SaasProduct/SaasHero'
import AboutSection from '../../../components/SaasProduct/AboutSection'
import FeaturesSection from '../../../components/SaasProduct/FeaturesSection'
import ProductSection from '../../../components/SaasProduct/ProductSection'
import SolutionSection from '../../../components/SaasProduct/SolutionSection'
import WhyChooseUS from '../../../components/SaasProduct/WhyChooseUS'
import OurWork from '../../../components/Common/OurWork'
import Testimonial from '../../../components/Common/Testimonial'
import Industries from '../../../components/Common/Industries'
import ContactUs from '../../../components/Common/ContactUs'
import TeamMoments from '../../../components/Common/TeamMoments'
import PopularBlogs from '../../../components/Blog/PopularBlogs'

const SaasPage = () => {
  return (
    <>
      <SaasHero />
      <AboutSection />
      <FeaturesSection />
      <ProductSection />
      <SolutionSection />
      <WhyChooseUS />
      {/* Testimonial */}
      <Testimonial
        theme="blue"
        bgGradient="from-blue-50 via-white to-blue-50"
        cardGradient="from-blue-500 to-indigo-500"
        headingText="What Our Clients Say"
        subheadingText="Trusted by 500+ businesses worldwide"
      />

      {/* Industries */}
      <Industries
        theme={{
          bg: "bg-gradient-to-b from-blue-50 via-white to-blue-50",
          primary: "text-blue-600",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
        }}
      />

      {/* Our Work */}
      <OurWork
        theme={{
          primary: "text-blue-600",
          accent: "bg-gradient-to-r from-blue-500 to-indigo-500",
        }}
      />
      <PopularBlogs/>

      {/* Contact */}
      <ContactUs
        theme="blue"
        productName="Your SaaS Product"
        bgGradient="from-blue-50 via-white to-blue-50"
        accentGradient="from-blue-500 to-indigo-500"
        buttonGradient="from-blue-600 to-indigo-600"
        showImage={true}
      />
      <TeamMoments/>
    </>
  )
}

export default SaasPage