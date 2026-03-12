import React from 'react'
import FlutterHero from '../../components/services-app/flutter-app/FlutterHero'
import FlutterServices from '../../components/services-app/flutter-app/FlutterServices'
import ProcessSection from '../../components/services-app/flutter-app/ProcessSection'
import FlutterBenefits from '../../components/services-app/flutter-app/FlutterBenefits'
import TechStackSection from '../../components/services-app/flutter-app/TechStackSection'
import FlutterCTA from '../../components/services-app/flutter-app/FlutterCTA'
import FAQSection from '../../components/services-app/flutter-app/FAQSection'
import WhyChooseUs from '../../components/services-app/flutter-app/WhyChooseUs'
import IndustriesSection from '../../components/services-app/flutter-app/IndustriesSection'
import LaunchSection from '../../components/services-app/flutter-app/LaunchSection'
import Contact from '../../components/services-app/flutter-app/Contact'
import BlogSection from '../../components/services-app/flutter-app/BlogSection'
import NewsletterSection from '../../components/services-app/flutter-app/NewsletterSection'

const FlutterAppDevelopment = () => {
  return (
    <>
    <FlutterHero/>
    <FlutterServices/>
    <ProcessSection/>
    <FlutterBenefits/>
    <TechStackSection/>
    <FlutterCTA/>
    <FAQSection/>
    <WhyChooseUs/>
    <IndustriesSection/>
    <LaunchSection/>
    <Contact/>
    <BlogSection/>
    <NewsletterSection/>
    </>
  )
}

export default FlutterAppDevelopment