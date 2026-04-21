import React from "react";
import PestHome from "../../../components/PestControl/PestHome";
import PestAbout from "../../../components/PestControl/PestAbout";
import PestWork from "../../../components/PestControl/PestWork";
import PestAppFeature from "../../../components/PestControl/PestAppFeature";
import PestCta1 from "../../../components/PestControl/PestCta1";
import PestApp from "../../../components/PestControl/PestApp";
import PestProvider from "../../../components/PestControl/PestProvider";
import WebAdmin from "../../../components/PestControl/WebAdmin";
import PestWeProvide from "../../../components/PestControl/PestWeProvide";
import PestDevelopment from "../../../components/PestControl/PestDevelopment";
import PestWhy from "../../../components/PestControl/PestWhy";
import PestAppSection from "../../../components/PestControl/PestAppSection";
import PestProductShowCase from "../../../components/PestControl/PestProductShowCase";
import PestFaqs from "../../../components/PestControl/PestFaqs";
import PestTech from "../../../components/PestControl/PestTech";
import PestBlog from "../../../components/PestControl/PestBlog";
import PestFinalCta from "../../../components/PestControl/PestFinalCta";

import ContactUs from "../../../components/Common/ContactUs";
import Testimonial from "../../../components/Common/Testimonial";
import TeamMoments from "../../../components/Common/TeamMoments";

const PestControl = () => {
  return (
    <>
      <PestHome />
      <PestAbout />
      <PestWork />
      <PestAppFeature />
      <PestCta1 />
      <PestApp />
      <PestProvider />
      <WebAdmin />
      <PestWeProvide />
      <PestDevelopment />
      {/* <PestLaunch/> */}
      <PestWhy />
      <PestAppSection />

      {/* Your Testimonial */}
      <Testimonial
        theme="orange"
        bgGradient="from-orange-50 via-white to-orange-50"
        cardGradient="from-orange-500 to-amber-500"
        headingText="What Our Clients Say"
        subheadingText="Trusted by 500+ businesses worldwide"
      />

      <PestProductShowCase />
      <PestFaqs />
      <PestTech />

      {/* Orange Contact */}
      <ContactUs
        theme="orange"
        productName="Pest Control Service"
        bgGradient="from-orange-50 via-white to-orange-50"
        accentGradient="from-orange-500 to-amber-500"
        buttonGradient="from-orange-600 to-amber-600"
        showImage={true}
      />

      <PestBlog />
      <PestFinalCta />
      <TeamMoments />
    </>
  );
};

export default PestControl;