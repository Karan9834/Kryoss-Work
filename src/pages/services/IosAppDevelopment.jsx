import React from 'react'
import IosHero from '../../components/services-app/ios-app/IosHero'
import FirebaseServices from '../../components/services-app/ios-app/FirebaseServices'
import OurProcess from '../../components/services-app/ios-app/OurProcess'
import FirebaseBenefits from '../../components/services-app/ios-app/FirebaseBenefits'
import FirebaseTechStack from '../../components/services-app/ios-app/FirebaseTechStack'
import FirebaseCTA from '../../components/services-app/ios-app/FirebaseCTA'
import FirebaseFAQ from '../../components/services-app/ios-app/FirebaseFAQ'
import FirebaseWhyChooseUs from '../../components/services-app/ios-app/FirebaseWhyChooseUs'
// import IndustriesSection from '../../components/services-app/ios-app/IndustriesSection'
import FirebaseCTA1 from '../../components/services-app/ios-app/FirebaseCTA1'
import IndustriesSection from '../../components/services-app/flutter-app/IndustriesSection'
import ContactSection from '../../components/services-app/ios-app/ContactSection'
import Blogsection from "../../components/services-app/ios-app/Blogsection"
import NewsletterSection from '../../components/services-app/ios-app/NewsletterSection'

const IosAppDevelopment = () => {
  return (
    <>
    <IosHero/>
    <FirebaseServices/>
    <OurProcess/>
    <FirebaseBenefits/>
    <FirebaseTechStack/>
    <FirebaseCTA/>
    <FirebaseFAQ/>
    <FirebaseWhyChooseUs/>
    {/* <IndustriesSection/> */}
    <IndustriesSection/>
    <FirebaseCTA1/>
    <ContactSection/>
    <Blogsection/>
    <NewsletterSection/>
    </>
  )
}

export default IosAppDevelopment