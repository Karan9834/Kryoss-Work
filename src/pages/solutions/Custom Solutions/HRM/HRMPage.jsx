import React from 'react'
import Hero from './sections/Hero'
import HRMDevelopment from './sections/HRMDevelopment'
import HRModules from './sections/HRModules'
import HRISServices from './sections/HRISServices'
import EmployeeManagement from './sections/EmployeeManagement'
import HiringOnboarding from './sections/HiringOnboarding'
import PayrollBenefits from './sections/PayrollBenefits'
import EmployeePerformance from './sections/EmployeePerformance'
import Industries from '../../../../components/Common/Industries'
import Testimonial from '../../../../components/Common/Testimonial'
import OurWork from '../../../../components/Common/OurWork'
import ContactUs from '../../../../components/Common/ContactUs'

const HRMPage = () => {
  return (
    <>
    <Hero/>
    <HRMDevelopment/>
    <HRModules/>
    <HRISServices/>
    <EmployeeManagement/>
    <HiringOnboarding/>
    <PayrollBenefits/>
    <EmployeePerformance/>

    <Industries
  theme={{
    bg: "bg-gradient-to-b from-orange-50 via-white to-amber-50",
    primary: "text-orange-600",
    iconBg: "bg-white shadow-md",
    iconColor: "text-orange-600",
  }}
/>
    <Testimonial
  theme="orange"
  bgGradient="from-orange-50 via-white to-amber-50"
  cardGradient="from-orange-500 to-amber-500"
  headingText="What Our Customers Say"
  subheadingText="Trusted by thousands of job seekers and recruiters"
/>



<OurWork
  theme={{
    primary: "text-orange-600",
    accent: "bg-gradient-to-r from-orange-500 to-amber-500",
  }}
/>

<ContactUs
  theme="orange"
  productName="JobPortal"
  bgGradient="from-orange-50 via-white to-amber-50"
  accentGradient="from-orange-500 to-amber-500"
  buttonGradient="from-orange-600 to-amber-600"
  showImage={true}
/>
    </>
  )
}

export default HRMPage