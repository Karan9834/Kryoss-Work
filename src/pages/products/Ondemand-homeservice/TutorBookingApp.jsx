import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "@/components/homeservice-tutorbooking/hero";
import AboutUs from "@/components/homeservice-tutorbooking/aboutus";
import Howitworks from "@/components/homeservice-tutorbooking/howitworks";
import AppPreview from "@/components/homeservice-tutorbooking/apppreview";
import CTA1 from "@/components/homeservice-tutorbooking/cta1";
import UserAppFeatures from "@/components/homeservice-tutorbooking/userfeatures";
import ProviderAppFeatures from "@/components/homeservice-tutorbooking/providerfeatures";
import AdminPanel from "@/components/homeservice-tutorbooking/adminpanel";
import Platforms from "@/components/homeservice-tutorbooking/platforms";
import CTA2 from "@/components/homeservice-tutorbooking/cta2";
import Benifits from "@/components/homeservice-tutorbooking/benifits";
import Development from "@/components/homeservice-tutorbooking/development";
import DigitalFootprints from "@/components/homeservice-tutorbooking/digitalfootprints";
import WhyUs from "@/components/homeservice-tutorbooking/whyus";
import CTA3 from "@/components/homeservice-tutorbooking/cta3";
// import ClientsFeedback from '@/components/homeservice-tutorbooking/clientsfeedback';
import ProductShowcase from "@/components/homeservice-tutorbooking/productshowcase";
import FAQs from "@/components/homeservice-tutorbooking/faqs";
import TechStack from "@/components/homeservice-tutorbooking/techstack";
import ContactUs from "@/components/Common/ContactUs";
import Blogs from "@/components/homeservice-tutorbooking/blogs";
import GetUpdate from "@/components/homeservice-tutorbooking/getupdate";
import TeamMoments from "@/components/Common/TeamMoments";
import Testimonial from "@/components/Common/Testimonial";

const TutorBookingApp = () => {
  return (
    <div>
      <Helmet>
        <title>Tutor Booking App - Vyom Tutor | Home Service Platform</title>
        <meta name="description" content="Professional tutor booking and home service platform - Connect with qualified tutors easily" />
        <meta name="keywords" content="tutor booking, home service, education, tutoring platform, vyom tutor" />
      </Helmet>

      <Hero />
      <AboutUs />
      <Howitworks />
      <AppPreview />
      <CTA1 />
      <UserAppFeatures />
      <ProviderAppFeatures />
      <AdminPanel />
      <Platforms />
      <CTA2 />
      <Benifits />
      <Development />
      <DigitalFootprints />
      <WhyUs />
      <CTA3 />

      {/* Your Testimonial */}
      <Testimonial
        theme="orange"
        bgGradient="from-orange-50 via-white to-orange-50"
        cardGradient="from-orange-500 to-amber-500"
        headingText="What Our Clients Say"
        subheadingText="Trusted by 500+ businesses worldwide"
      />

      <FAQs />
      <TechStack />

      {/* Your Contact */}
      <ContactUs
        theme="orange"
        productName="Vyom Tutor"
        bgGradient="from-orange-50 via-white to-orange-50"
        accentGradient="from-orange-500 to-amber-500"
        buttonGradient="from-orange-600 to-amber-600"
        showImage={true}
      />

      {/* <Blogs /> */}
      <GetUpdate />
      <TeamMoments />
    </div>
  );
};

export default TutorBookingApp;