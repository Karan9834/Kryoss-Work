import React from "react";
import { Helmet } from "react-helmet-async";

import LaundryHero from "@/components/homeservice-laundry/LaundryHero";
import LaundryAbout from "@/components/homeservice-laundry/LaundryAbout";
import LaundryAppWorkflow from "@/components/homeservice-laundry/LaundryAppWorkflow";
import LaundryAppDevelopment from "@/components/homeservice-laundry/LaundryAppDevelopment";
import LaundryCTA1 from "@/components/homeservice-laundry/LaundryCTA1";
import LaundryFeatures from "@/components/homeservice-laundry/LaundryFeatures";
import LaundryAdminPanel from "@/components/homeservice-laundry/LaundryAdminPanel";
import LaundryWhatWeProvide from "@/components/homeservice-laundry/LaundryWhatWeProvide";
import LaundryAppWorkflowOverview from "@/components/homeservice-laundry/LaundryAppWorkflowOverview";
import LaundryCTA2 from "@/components/homeservice-laundry/LaundryCTA2";
import LaundryBenifits from "@/components/homeservice-laundry/LaundryBenifits";
import LaundryDevelopmentProcess from "@/components/homeservice-laundry/LaundryDevelopmentProcess";
import LaundryDigitalFootprints from "@/components/homeservice-laundry/LaundryDigitalFootprints";
import LaundryWhyUs from "@/components/homeservice-laundry/LaundryWhyUs";
import LaundryBusinessWeSupport from "@/components/homeservice-laundry/LaundryBusinessWeSupport";
// import LaundryClientFeedback from '@/components/homeservice-laundry/LaundryClientFeedback';
import LaundryProductShowcase from "@/components/homeservice-laundry/LaundryProductShowcase";
import LaundryFAQ from "@/components/homeservice-laundry/LaundryFAQ";
import LaundryTechStack from "@/components/homeservice-laundry/LaundryTechStack";
import PopularBlogs from "../../../components/Blog/PopularBlogs";
import LaundryGetUpdates from "@/components/homeservice-laundry/LaundryGetUpdates";

import ContactUs from "../../../components/Common/ContactUs";
import Testimonial from "../../../components/Common/Testimonial";
import TeamMoments from "../../../components/Common/TeamMoments";

const LaundryService = () => {
  return (
    <>
      <LaundryHero />
      <LaundryAbout />
      <LaundryAppWorkflow />
      <LaundryAppDevelopment />
      <LaundryCTA1 />
      <LaundryFeatures />
      <LaundryAdminPanel />
      <LaundryWhatWeProvide />
      <LaundryAppWorkflowOverview />
      <LaundryCTA2 />
      <LaundryBenifits />
      <LaundryDevelopmentProcess />
      <LaundryDigitalFootprints />
      <LaundryWhyUs />
      <LaundryBusinessWeSupport />

      {/* <LaundryClientFeedback /> */}
      <LaundryProductShowcase />

      {/* ✅ Added Testimonial (your pattern) */}
      <Testimonial
        theme="orange"
        bgGradient="from-orange-50 via-white to-orange-50"
        cardGradient="from-orange-500 to-amber-500"
        headingText="What Our Clients Say"
        subheadingText="Trusted by 500+ businesses worldwide"
      />

      <LaundryFAQ />
      <LaundryTechStack />

      {/* ✅ Orange Contact */}
      <ContactUs
        theme="orange"
        productName="Laundry Service"
        bgGradient="from-orange-50 via-white to-orange-50"
        accentGradient="from-orange-500 to-amber-500"
        buttonGradient="from-orange-600 to-amber-600"
        showImage={true}
      />

      <PopularBlogs />
      <LaundryGetUpdates />
      <TeamMoments />
    </>
  );
};

export default LaundryService;