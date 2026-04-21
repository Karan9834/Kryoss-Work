import React from 'react'
import PestHome from '../../../components/PestControl/PestHome'
import PestAbout from '../../../components/PestControl/PestAbout'
import PestWork from '../../../components/PestControl/PestWork'
import PestAppFeature from '../../../components/PestControl/PestAppFeature'
import PestCta1 from '../../../components/PestControl/PestCta1'
import PestApp from '../../../components/PestControl/PestApp'
import PestProvider from '../../../components/PestControl/PestProvider'
import WebAdmin from '../../../components/PestControl/WebAdmin'
import PestWeProvide from '../../../components/PestControl/PestWeProvide'
import PestDevelopment from '../../../components/PestControl/PestDevelopment'
import PestLaunch from '../../../components/PestControl/PestLaunch'
import PestWhy from '../../../components/PestControl/PestWhy'
import PestAppSection from '../../../components/PestControl/PestAppSection'
import PestPeopleLove from '../../../components/PestControl/PestPeopleLove'
import PestProductShowCase from '../../../components/PestControl/PestProductShowCase'
import PestFaqs from '../../../components/PestControl/PestFaqs'
import PestTech from '../../../components/PestControl/PestTech'
import ContactUs from '../../../components/Common/ContactUs';
import PestBlog from '../../../components/PestControl/PestBlog'
import PestFinalCta from '../../../components/PestControl/PestFinalCta'


const PestControl = () => {
  return (
    <>
    <PestHome/>
    <PestAbout/>
    <PestWork/>
    <PestAppFeature/>
    <PestCta1/>
    <PestApp/>
    <PestProvider/>
    <WebAdmin/>
    <PestWeProvide/>
    <PestDevelopment/>
    {/* <PestLaunch/> */}
    <PestWhy/>
    <PestAppSection/>
    <PestPeopleLove/>
    <PestProductShowCase/>
    <PestFaqs/>
    <PestTech/>
    <ContactUs
      theme="purple"
      productName="Pest Control"
      bgGradient="from-purple-50 via-white to-pink-50"
      accentGradient="from-purple-500 via-pink-500 to-indigo-500"
      buttonGradient="from-purple-600 via-pink-600 to-indigo-600"
      showImage={true}
    />
    <PestBlog/>
    <PestFinalCta/>
    </>
  )
}

export default PestControl