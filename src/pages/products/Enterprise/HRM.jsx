import React from 'react'
import HrmHero from '../../../components/Enterprise-Product/HRM/HrmHero'
import HRMAbout from '../../../components/Enterprise-Product/HRM/HRMAbout'
import HRMFeatures from '../../../components/Enterprise-Product/HRM/HRMFeatures'
import HRMCTA1 from '../../../components/Enterprise-Product/HRM/HRMCTA1'
import StickyFeatures from '../../../components/Enterprise-Product/HRM/StickyFeatures'
import HowItWorks from '../../../components/Enterprise-Product/HRM/HowItWorks'
import DashboardPreview from '../../../components/Enterprise-Product/HRM/DashboardPreview'
import LaunchAndWhySection from '../../../components/Handyman-service/LaunchAndWhySection'
import HRMLaunchWhy from '../../../components/Enterprise-Product/HRM/HRMLaunchWhy'
import TechStack from '../../../components/PestControl/PestTech'
import ContactUs from '@/components/Common/ContactUs'
import HRMNewsletter from '../../../components/Enterprise-Product/HRM/HRMNewsletter'
import ProductsSection from '../../../components/Enterprise-Product/HRM/ProductsSection'


const HRM = () => {
  return (
    <>
    <HrmHero/>
    <HRMAbout/>
    <HRMFeatures/>
    <ProductsSection/>
    <HRMCTA1/>
    <StickyFeatures/>
    <HowItWorks/>
    <DashboardPreview/>
    <HRMLaunchWhy/>
    <TechStack/>
    <ContactUs theme="purple" productName="HRM" />
    <HRMNewsletter/>
    </>

  )
}

export default HRM