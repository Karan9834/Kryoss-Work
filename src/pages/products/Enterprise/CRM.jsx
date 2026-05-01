import React from 'react'
import CRMHero from '../../../components/Enterprise-Product/CRM/CRMHero'
import CRMAbout from '../../../components/Enterprise-Product/CRM/CRMAbout'
import CRMFeatures from '../../../components/Enterprise-Product/CRM/CRMFeatures'
import CRMCardSection from '../../../components/Enterprise-Product/CRM/CRMCardSection'
import CRMCTA from '../../../components/Enterprise-Product/CRM/CRMCTA'
import CRMDashboard from '../../../components/Enterprise-Product/CRM/CRMDashboard'
import CRMLaunchWhy from '../../../components/Enterprise-Product/CRM/CRMLaunchWhy'
import CRMFinalCTA from '../../../components/Enterprise-Product/CRM/CRMFinalCTA'
import TechStack from '../../../components/PestControl/PestTech'
import ContactUs from '@/components/Common/ContactUs'
import CRMNewsletter from '../../../components/Enterprise-Product/CRM/CRMNewsletter'
import TeamMoments from '../../../components/Common/TeamMoments'
import Testimonial from '../../../components/Common/Testimonial'
import OurWork from '../../../components/Common/OurWork'
import PopularBlogs from '../../../components/Blog/PopularBlogs'

const CRM = () => {
  return (
    <>
    <CRMHero/>
    <CRMAbout/>
    <CRMFeatures/>
    <CRMCardSection/>
    <CRMCTA/>
    <CRMDashboard/>
    <CRMLaunchWhy/>
    <CRMFinalCTA/>
    <Testimonial/>
    <TechStack/>
    <OurWork/>
    <PopularBlogs/>
    <ContactUs theme="blue" productName="CRM" />
    <CRMNewsletter/>
    <TeamMoments/>
    </>
  )
}

export default CRM