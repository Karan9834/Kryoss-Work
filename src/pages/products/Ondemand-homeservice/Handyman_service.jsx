import React, { lazy, Suspense } from "react";

import HandymanHero from "../../../components/Handyman-service/HandymanHero";
import HandymanAbout from "../../../components/Handyman-service/HandymanAbout";
import HandymanWorkflow from "../../../components/Handyman-service/HandymanWorkflow";
import PhoneShowCase from "../../../components/Handyman-service/PhoneShowCase";
import HndymanCta1 from "../../../components/Handyman-service/HndymanCta1";
import HandymanFeature from "../../../components/Handyman-service/HandymanFeature";
import HandymanProviderFeature from "../../../components/Handyman-service/HandymanProviderFeature";
import HandymanAdmin from "../../../components/Handyman-service/HandymanAdmin";
import HandymanProviderPannel from "../../../components/Handyman-service/HandymanProviderPannel";
import HandymanProcessFlow from "../../../components/Handyman-service/HandymanProcessFlow";
import HandymanProcessSelection from "../../../components/Handyman-service/HandymanProcessSelection";
import LaunchAndWhySection from "../../../components/Handyman-service/LaunchAndWhySection";
import HandymanExplore from "../../../components/Handyman-service/HandymanExplore";
// import HandymanFeedback from "../../../components/Handyman-service/HandymanFeedback";
import Handmanyfaqs from "../../../components/Handyman-service/Handmanyfaqs";
import PopularBlogs from "../../../components/Blog/PopularBlogs";
import HandmanyFinalCta from "../../../components/Handyman-service/HandmanyFinalCta";
const PortfolioShowcase = lazy(() => import("@/components/home/PortfolioShowcase"));

import ContactUs from "../../../components/Common/ContactUs";
import Testimonial from "../../../components/Common/Testimonial";
import TeamMoments from "../../../components/Common/TeamMoments";

const Handyman_service = () => {
  return (
    <>
      <HandymanHero />
      <HandymanAbout />
      <HandymanWorkflow />
      <PhoneShowCase />
      <HndymanCta1 />
      <HandymanFeature />
      <HandymanProviderFeature />
      <HandymanAdmin />
      <HandymanProviderPannel />
      <HandymanProcessFlow />
      <HandymanProcessSelection />
      <LaunchAndWhySection />
      <HandymanExplore />

      {/* <HandymanFeedback /> */}

      <Suspense fallback={<div className="h-20" />}>
        <PortfolioShowcase />
      </Suspense>

      {/* ✅ Yellow Theme Testimonial */}
      <Testimonial
        theme="yellow"
        bgGradient="from-yellow-50 via-white to-yellow-50"
        cardGradient="from-yellow-400 to-amber-500"
        headingText="What Our Clients Say"
        subheadingText="Trusted by 500+ businesses worldwide"
      />

      <Handmanyfaqs />

      {/* ✅ Yellow Contact */}
      <ContactUs
        theme="yellow"
        productName="Handyman"
        bgGradient="from-yellow-50 via-white to-yellow-50"
        accentGradient="from-yellow-400 to-amber-500"
        buttonGradient="from-yellow-500 to-amber-600"
        showImage={true}
      />

      <PopularBlogs />
      <HandmanyFinalCta />
      <TeamMoments />
    </>
  );
};

export default Handyman_service;