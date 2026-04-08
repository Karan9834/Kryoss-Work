import React from 'react'
import Hero from './sections/Hero'
import HotelManagementServices from './sections/HotelManagementServices'
import HotelManagementModules from './sections/HotelManagementModules'
import HotelProducts from './sections/HotelProducts'
import HotelModuleHighlight from './sections/HotelModuleHighligh'
import HousekeepingModule from './sections/HousekeepingModule'
import MembershipModule from './sections/MembershipModule'
import BanquetModule from './sections/BanquetModule'
import AccountingModule from './sections/AccountingModule'
import InventoryModule from './sections/InventoryModule'
import PayrollModule from './sections/PayrollModule'
import ReservationModule from './sections/ReservationModule'
import Industries from '../../../../components/Common/Industries'
import Testimonial from '../../../../components/Common/Testimonial'
import OurWork from '../../../../components/Common/OurWork'
import ContactUs from '../../../../components/Common/ContactUs'


const Hotel = () => {
  return (
    <div>
        <Hero/>
        <HotelManagementServices/>
        <HotelManagementModules/>
        <HotelProducts/>
        <HotelModuleHighlight/>
        <HousekeepingModule/>
        <MembershipModule/>
        <BanquetModule/>
        <AccountingModule/>
        <InventoryModule/>
        <PayrollModule/>
        <div id="product-section">
    <ReservationModule/>
</div>
       <OurWork
  theme={{
    primary: "text-cyan-600",
    accent: "bg-gradient-to-r from-cyan-500 to-blue-500",
  }}
/>


<Testimonial
  theme="light"
  bgGradient="from-white via-cyan-50 to-indigo-50"
  cardGradient="from-cyan-500 to-blue-500"
  headingText="What Our Customers Say"
  subheadingText="Trusted by thousands of job seekers and recruiters"
/>

<Industries
  theme={{
    bg: "bg-gradient-to-b from-white via-cyan-50 to-indigo-50",
    primary: "text-cyan-600",
    iconBg: "bg-white shadow-md",
    iconColor: "text-cyan-600",
  }}
/>

<ContactUs
  theme="light"
  productName="JobPortal"
  bgGradient="from-white via-cyan-50 to-indigo-50"
  accentGradient="from-cyan-500 to-blue-500"
  buttonGradient="from-cyan-500 to-blue-600"
  showImage={true}
/>
    </div>
  )
}

export default Hotel