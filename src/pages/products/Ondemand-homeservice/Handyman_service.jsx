import React from 'react'
import HandymanHero from '../../../components/Handyman-service/HandymanHero'
import HandymanAbout from '../../../components/Handyman-service/HandymanAbout'
import HandymanWorkflow from '../../../components/Handyman-service/HandymanWorkflow'
import PhoneShowCase from '../../../components/Handyman-service/PhoneShowCase'
import HndymanCta1 from '../../../components/Handyman-service/HndymanCta1'
import HandymanFeature from '../../../components/Handyman-service/HandymanFeature'
import HandymanProviderFeature from '../../../components/Handyman-service/HandymanProviderFeature'
import HandymanAdmin from '../../../components/Handyman-service/HandymanAdmin'
import HandymanProviderPannel from '../../../components/Handyman-service/HandymanProviderPannel'
import HandymanProcessFlow from '../../../components/Handyman-service/HandymanProcessFlow'
import HandymanProcessSelection from '../../../components/Handyman-service/HandymanProcessSelection'
import LaunchAndWhySection from '../../../components/Handyman-service/LaunchAndWhySection'
import HandymanExplore from '../../../components/Handyman-service/HandymanExplore'
import HandymanFeedback from '../../../components/Handyman-service/HandymanFeedback'
import ProductShowcase from '../../../components/Handyman-service/ProductShowcase'
import Handmanyfaqs from '../../../components/Handyman-service/Handmanyfaqs'
import ContactUs from '../../../components/Common/ContactUs';
import HandmanyBlog from '../../../components/Handyman-service/HandmanyBlog'
import HandmanyFinalCta from '../../../components/Handyman-service/HandmanyFinalCta'

const Handyman_service = () => {
  return (
    <>
    <HandymanHero/>
    <HandymanAbout/>
    <HandymanWorkflow/>
    <PhoneShowCase/>
    <HndymanCta1/>
    <HandymanFeature/>
    <HandymanProviderFeature/>
    <HandymanAdmin/>
    <HandymanProviderPannel/>
    <HandymanProcessFlow/>
    <HandymanProcessSelection/>
    <LaunchAndWhySection/>
    <HandymanExplore/>
    <HandymanFeedback/>
    <ProductShowcase/>
    <Handmanyfaqs/>
    <ContactUs
      theme="purple"
      productName="Handyman Services"
      bgGradient="from-purple-50 via-white to-pink-50"
      accentGradient="from-purple-500 via-pink-500 to-indigo-500"
      buttonGradient="from-purple-600 via-pink-600 to-indigo-600"
      showImage={true}
    />
    <HandmanyBlog/>
    <HandmanyFinalCta/>
    </>
  )
}

export default Handyman_service