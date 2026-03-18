import React from 'react'
import CRMHero from '../../../components/Enterprise-Product/CRM/CRMHero'
import CRMAbout from '../../../components/Enterprise-Product/CRM/CRMAbout'
import CRMFeatures from '../../../components/Enterprise-Product/CRM/CRMFeatures'
import CRMCTA from '../../../components/Enterprise-Product/CRM/CRMCTA'
import CRMDashboard from '../../../components/Enterprise-Product/CRM/CRMDashboard'
import CRMLaunchWhy from '../../../components/Enterprise-Product/CRM/CRMLaunchWhy'
import CRMFinalCTA from '../../../components/Enterprise-Product/CRM/CRMFinalCTA'
import TechStack from '../../../components/PestControl/PestTech'
import Contact from '../../../components/Massage Therapy/Contact'
import CRMNewsletter from '../../../components/Enterprise-Product/CRM/CRMNewsletter'

const CRM = () => {
  return (
    <>
    <CRMHero/>
    <CRMAbout/>
    <CRMFeatures/>
    <CRMCTA/>
    <CRMDashboard/>
    <CRMLaunchWhy/>
    <CRMFinalCTA/>
    <TechStack/>
    <Contact/>
    <CRMNewsletter/>
    </>
  )
}

export default CRM