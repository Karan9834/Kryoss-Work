import React from "react";
import { Helmet } from "react-helmet-async";

import SnowHero from "@/components/homeservice-snowremoval/SnowHero";
import SnowAbout from "@/components/homeservice-snowremoval/SnowAbout";
import SnowHowItWorks from "@/components/homeservice-snowremoval/SnowHowItWorks";
import SnowPlowApp from "@/components/homeservice-snowremoval/SnowPlowApp";
import SnowCTA1 from "@/components/homeservice-snowremoval/SnowCTA1";
import SnowFeatures from "@/components/homeservice-snowremoval/SnowFeatures";
import SnowAdminPanel from "@/components/homeservice-snowremoval/SnowAdminPanel";
import SnowCTA2 from "@/components/homeservice-snowremoval/SnowCTA2";
import SnowWhatWeProvide from "@/components/homeservice-snowremoval/SnowWhatWeProvide";
import SnowDevelopment from "@/components/homeservice-snowremoval/SnowDevelopment";
import SnowDigitalFootprints from "@/components/homeservice-snowremoval/SnowDigitalFootprints";
import SnowWhyUs from "@/components/homeservice-snowremoval/SnowWhyUs";
import SnowBusinessWeSupport from "@/components/homeservice-snowremoval/SnowBusinessWeSupport";
import SnowProductShowCase from "@/components/homeservice-snowremoval/SnowProductShowCase";
// import SnowAwards from "@/components/homeservice-snowremoval/SnowAwards";
import SnowFAQ from "@/components/homeservice-snowremoval/SnowFAQ";
import SnowTechStack from "@/components/homeservice-snowremoval/SnowTechStack";
import PopularBlogs from "../../../components/Blog/PopularBlogs";
import SnowGetUpdates from "@/components/homeservice-snowremoval/SnowGetUpdates";

import ContactUs from "../../../components/Common/ContactUs";
import Testimonial from "../../../components/Common/Testimonial";
import TeamMoments from "../../../components/Common/TeamMoments";

const SnowRemoval = () => {
  return (
    <>
      <SnowHero />
      <SnowAbout />
      <SnowHowItWorks />
      <SnowPlowApp />
      <SnowCTA1 />
      <SnowFeatures />
      <SnowAdminPanel />
      <SnowCTA2 />
      <SnowWhatWeProvide />
      <SnowDevelopment />
      <SnowDigitalFootprints />
      <SnowWhyUs />
      <SnowBusinessWeSupport />

      {/* ✅ Blue Testimonial */}
      <Testimonial
        theme="blue"
        bgGradient="from-blue-50 via-white to-blue-50"
        cardGradient="from-blue-500 to-indigo-500"
        headingText="What Our Clients Say"
        subheadingText="Trusted by 500+ businesses worldwide"
      />

      <SnowFAQ />
      <SnowTechStack />

      {/* ✅ Blue Contact */}
      <ContactUs
        theme="blue"
        productName="Snow Removal Service"
        bgGradient="from-blue-50 via-white to-blue-50"
        accentGradient="from-blue-500 to-indigo-500"
        buttonGradient="from-blue-600 to-indigo-600"
        showImage={true}
      />

      <PopularBlogs />
      <SnowGetUpdates />
      <TeamMoments />
    </>
  );
};

export default SnowRemoval;