import React from 'react'
import Hero from './sections/Hero'
import RestaurantSection from './sections/RestaurantSection'
import HospitalManagementSoftwareSection from './sections/HospitalManagementSoftwareSection '
import DoctorPortal from './sections/DoctorPortal'
import PatientPortal from './sections/PatientPortal'
import RadiologyManagement from './sections/RadiologyManagement'
import PathologyManagement from './sections/PathologyManagement'
import AccountManagement from './sections/AccountManagement'
import ReceptionPortal from './sections/ReceptionPortal'
import PharmacyManagement from './sections/PharmacyManagement'
import AdminPanel from './sections/AdminPanel'
import SuperAdmin from './sections/SuperAdmin'
import HealthcareCTA from './sections/HealthcareCTA'
import Industries from '../../../../components/Common/Industries'
import OurWork from '../../../../components/Common/OurWork'
import Testimonial from '../../../../components/Common/Testimonial'
import ContactUs from '../../../../components/Common/ContactUs'
import HMSCardSection from '../../../../components/HMS-Hospital-Mgmt/HMSCardSection'


const HospitalManagement = () => {
  return (
    <div>
        <Hero/>
        <RestaurantSection/>
        <HospitalManagementSoftwareSection/>
        <HMSCardSection/>
        <DoctorPortal/>
        <PatientPortal/>
        <RadiologyManagement/>
        <PathologyManagement/>
        <AccountManagement/>
        <ReceptionPortal/>
        <PharmacyManagement/>
        <AdminPanel/>
        <SuperAdmin/>
        <div id="product-section">
    <HealthcareCTA/>
</div>
        <OurWork
  theme={{
    primary: "text-blue-600",
    accent: "bg-gradient-to-r from-blue-500 to-purple-500",
  }}
/>

<Industries
  theme={{
    bg: "bg-gradient-to-b from-blue-50 via-white to-purple-50",
    primary: "text-blue-600",
    iconBg: "bg-white shadow-md",
    iconColor: "text-blue-600",
  }}
/>

<Testimonial
  theme="blue"
  bgGradient="from-blue-50 via-white to-purple-50"
  cardGradient="from-blue-500 to-purple-500"
  headingText="What Our Customers Say"
  subheadingText="Trusted by thousands of businesses worldwide"
/>

<ContactUs
  theme="blue"
  productName="ERP Software"
  bgGradient="from-blue-50 via-white to-purple-50"
  accentGradient="from-blue-500 to-purple-500"
  buttonGradient="from-blue-600 to-purple-600"
  showImage={true}
/>
    </div>
  )
}

export default HospitalManagement