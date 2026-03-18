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
import Contact from '../../../components/Salon & Beauty/Contact'
import HRMNewsletter from '../../../components/Enterprise-Product/HRM/HRMNewsletter'


const HRM = () => {
  return (
    <>
    <HrmHero/>
    <HRMAbout/>
    <HRMFeatures/>
    <HRMCTA1/>
    <StickyFeatures/>
    <HowItWorks/>
    <DashboardPreview/>
    <HRMLaunchWhy/>
    <TechStack/>
    <Contact/>
    <HRMNewsletter/>
    </>

  )
}

export default HRM