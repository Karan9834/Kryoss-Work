import React from "react";
import { Helmet } from "react-helmet-async";

import TowTruckHero from "@/components/homeservice-towtruck/TowTruckHero";
import TowTruckAbout from "@/components/homeservice-towtruck/TowTruckAbout";
import TowTruckHowItWorks from "@/components/homeservice-towtruck/TowTruckHowItWorks";
import TowTruckAppWalkThrough from "@/components/homeservice-towtruck/TowTruckAppWalkThrough";
import TowTruckCTA1 from "@/components/homeservice-towtruck/TowTruckCTA1";
import TowTruckCustomerFeatures from "@/components/homeservice-towtruck/TowTruckCustomerFeatures";
import TowTruckDriverFeatures from "@/components/homeservice-towtruck/TowTruckDriverFeatures";
import TowTruckAdminPanel from "@/components/homeservice-towtruck/TowTruckAdminPanel";
import TowTruckWhatWeProvide from "@/components/homeservice-towtruck/TowTruckWhatWeProvide";
import TowTruckCTA2 from "@/components/homeservice-towtruck/TowTruckCTA2";
import TowTruckBenifits from "@/components/homeservice-towtruck/TowTruckBenifits";
import TowTruckDigitalFootprints from "@/components/homeservice-towtruck/TowTruckDigitalFootprints";
import TowTruckWhyUs from "@/components/homeservice-towtruck/TowTruckWhyUs";
import TowTruckDevelopment from "@/components/homeservice-towtruck/TowTruckDevelopment";
import TowTruckCTA3 from "@/components/homeservice-towtruck/TowTruckCTA3";
import TowTruckBusinessWeSupport from "@/components/homeservice-towtruck/TowTruckBusinessWeSupport";
// import TowTruckClientFeedback from '@/components/homeservice-towtruck/TowTruckClientFeedback';
import TowTruckProductShowcase from "@/components/homeservice-towtruck/TowTruckProductShowcase";
// import TowTruckAwards from "@/components/homeservice-towtruck/TowTruckAwards";
import TowTruckFAQ from "@/components/homeservice-towtruck/TowTruckFAQ";
import TowTruckTechStack from "@/components/homeservice-towtruck/TowTruckTechStack";
import TowTruckBlogs from "@/components/homeservice-towtruck/TowTruckBlogs";
import TowTruckGetUpdates from "@/components/homeservice-towtruck/TowTruckGetUpdates";

import ContactUs from "../../../components/Common/ContactUs";
import Testimonial from "../../../components/Common/Testimonial";
import TeamMoments from "../../../components/Common/TeamMoments";

const TowTruck = () => {
  return (
    <>
      <TowTruckHero />
      <TowTruckAbout />
      <TowTruckHowItWorks />
      <TowTruckAppWalkThrough />
      <TowTruckCTA1 />
      <TowTruckCustomerFeatures />
      <TowTruckDriverFeatures />
      <TowTruckAdminPanel />
      <TowTruckWhatWeProvide />
      <TowTruckCTA2 />
      <TowTruckBenifits />
      <TowTruckDigitalFootprints />
      <TowTruckWhyUs />
      <TowTruckDevelopment />
      <TowTruckCTA3 />
      <TowTruckBusinessWeSupport />

      {/* <TowTruckClientFeedback /> */}

      <TowTruckProductShowcase />

      {/* ✅ Blue Testimonial */}
      <Testimonial
        theme="blue"
        bgGradient="from-blue-50 via-white to-blue-50"
        cardGradient="from-blue-500 to-indigo-500"
        headingText="What Our Clients Say"
        subheadingText="Trusted by 500+ businesses worldwide"
      />

      <TowTruckFAQ />
      <TowTruckTechStack />

      {/* ✅ Blue Contact */}
      <ContactUs
        theme="blue"
        productName="Tow-Truck Service"
        bgGradient="from-blue-50 via-white to-blue-50"
        accentGradient="from-blue-500 to-indigo-500"
        buttonGradient="from-blue-600 to-indigo-600"
        showImage={true}
      />

      <TowTruckBlogs />
      <TowTruckGetUpdates />
      <TeamMoments />
    </>
  );
};

export default TowTruck;