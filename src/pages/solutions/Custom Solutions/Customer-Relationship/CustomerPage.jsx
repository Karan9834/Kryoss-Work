import React from 'react'
import Hero from './sections/Hero'
import CRMServices from './sections/CRMServices'
import CRMSoftwareSolutions from './sections/CRMSoftwareSolutions'
import CRMQualityServices from './sections/CRMQualityServices'
import HolisticCRMFeatures from './sections/HolisticCRMFeatures'
import CRMDevelopmentServices from './sections/CRMDevelopmentServices'
import Industries from '../../../../components/Common/Industries'
import Testimonial from '../../../../components/Common/Testimonial'
import OurWork from '../../../../components/Common/OurWork'
import ContactUs from '../../../../components/Common/ContactUs'
import TeamMoments from '../../../../components/Common/TeamMoments'
import PopularBlogs from '../../../../components/Blog/PopularBlogs'


const CustomerPage = () => {
  return (
    <div>
        <Hero/>
        <CRMServices/>
        <CRMSoftwareSolutions/>
        <CRMQualityServices/>
        <HolisticCRMFeatures/>
        <div id="product-section">
    <CRMDevelopmentServices/>
</div>
        <Industries
  theme={{
    bg: "bg-gradient-to-b from-teal-50 via-white to-emerald-50",
    primary: "text-teal-600",
    iconBg: "bg-white shadow-md",
    iconColor: "text-teal-600",
  }}
/>

<Testimonial
  theme="teal"
  bgGradient="from-teal-50 via-white to-emerald-50"
  cardGradient="from-teal-500 to-emerald-500"
  headingText="What Our Customers Say"
  subheadingText="Trusted by thousands of businesses worldwide"
/>

<OurWork
  theme={{
    primary: "text-teal-600",
    accent: "bg-gradient-to-r from-teal-500 to-emerald-500",
  }}
/>
<PopularBlogs/>
<ContactUs
  theme="teal"
  productName="CRM Software"
  bgGradient="from-teal-50 via-white to-emerald-50"
  accentGradient="from-teal-500 to-emerald-500"
  buttonGradient="from-teal-600 to-emerald-600"
  showImage={true}
/>
<TeamMoments/>
    </div>
  )
}

export default CustomerPage