import React from "react";
import Hero from "./sections/Hero";
import SchoolManagementSystem from "./sections/SchoolManagementSystem";
import DevelopmentProcess from "./sections/DevelopmentProcess";
import Industries from "../../../../components/Common/Industries";
import OurWork from "../../../../components/Common/OurWork";
import Testimonial from "../../../../components/Common/Testimonial";
import ContactUs from "../../../../components/Common/ContactUs";
import ModulesSection from "./sections/ModulesSection";
import FeaturesSection from "./sections/FeaturesSection";
import AdvantagesSection from "./sections/AdvantagesSection";
import SMSCardSection from "../../../../components/SMS-School-Mgmt/SMSCardSection";
import TeamMoments from "../../../../components/Common/TeamMoments";
import PopularBlogs from "../../../../components/Blog/PopularBlogs";

const School = () => {
  return (
    <div>
      <Hero />
      <SchoolManagementSystem />
      <DevelopmentProcess />
      <div id="product-section">
        <SMSCardSection />
      </div>
      <OurWork
        theme={{
          primary: "text-orange-600",
          accent: "bg-gradient-to-r from-orange-500 to-cyan-500",
        }}
      />

      <Industries
        theme={{
          bg: "bg-gradient-to-b from-orange-50 via-white to-cyan-50",
          primary: "text-orange-600",
          iconBg: "bg-white shadow-md",
          iconColor: "text-orange-600",
        }}
      />

      <ModulesSection />
      <FeaturesSection />
      <AdvantagesSection />

      <Testimonial
        theme="orange"
        bgGradient="from-orange-50 via-white to-cyan-50"
        cardGradient="from-orange-500 to-cyan-500"
        headingText="What Our Customers Say"
        subheadingText="Trusted by institutions worldwide"
      />
      <PopularBlogs />
      <ContactUs
        theme="orange"
        productName="School Management Software"
        bgGradient="from-orange-50 via-white to-cyan-50"
        accentGradient="from-orange-500 to-cyan-500"
        buttonGradient="from-orange-600 to-cyan-600"
        showImage={true}
      />
      <TeamMoments />
    </div>
  );
};

export default School;
