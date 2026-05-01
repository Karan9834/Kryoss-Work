import React from 'react'
import MvpHero from '../../components/services-app/mvp-app/MvpHero'
import MvpServices from '../../components/services-app/mvp-app/MvpServices'
import WorkflowSection from '../../components/services-app/mvp-app/WorkflowSection'
import BenefitsSection from '../../components/services-app/mvp-app/BenefitsSection'
import TechStackSection from '../../components/services-app/mvp-app/TechStackSection'
import CTASection from '../../components/services-app/mvp-app/CTASection'
import FAQSection from '../../components/services-app/mvp-app/FAQSection'
import WhyPartner from '../../components/services-app/mvp-app/WhyPartner'
import IndustrySection from '../../components/services-app/mvp-app/IndustrySection'
import FinalCTA from '../../components/services-app/mvp-app/FinalCTA'
import ContactSection from '../../components/services-app/ios-app/ContactSection'
import BlogSection from '../../components/services-app/ios-app/Blogsection'
import Newsletter from '../../components/services-app/mvp-app/Newsletter'

const MvpAppDevelopment = () => {
  return (
    <>
    <MvpHero/>
    <MvpServices/>
    <WorkflowSection/>
    <BenefitsSection/>
    <TechStackSection/>
    <CTASection/>
    <FAQSection/>
    <WhyPartner/>
    <IndustrySection/>
    {/* <FinalCTA/> */}
    <ContactSection/>
    <BlogSection/>
    <Newsletter/>
    </>
  )
}

export default MvpAppDevelopment