import React from "react";
import Hero from "./sections/Hero";
import ERPDevelopment from "./sections/ERPDevelopment";
import ERPSolutions from "./sections/ERPSolutions";
import CustomizedERP from "./sections/CustomizedERP";
import Features from "./sections/Features";
import Industries from "../../../../components/Common/Industries";
import Testimonial from "../../../../components/Common/Testimonial";
import OurWork from "../../../../components/Common/OurWork";
import ContactUs from "../../../../components/Common/ContactUs";
import BusinessBenefits from "./sections/BusinessBenefits";

const Enterprise = () => {
  return (
    <div>
      <Hero />
      <ERPDevelopment />
      <ERPSolutions />
      <CustomizedERP />
      <Features />
      <OurWork
        theme={{
          primary: "text-violet-600",
          accent: "bg-gradient-to-r from-violet-500 to-purple-500",
        }}
      />
      <Industries
        theme={{
          bg: "bg-gradient-to-b from-violet-50 via-white to-purple-50",
          primary: "text-violet-600",
          iconBg: "bg-white shadow-md",
          iconColor: "text-violet-600",
        }}
      />
      <BusinessBenefits/>
      <Testimonial
        theme="violet"
        bgGradient="from-violet-50 via-white to-purple-50"
        cardGradient="from-violet-500 to-purple-500"
        headingText="What Our Customers Say"
        subheadingText="Trusted by thousands of businesses worldwide"
      />

      

      <ContactUs
        theme="violet"
        productName="ERP Software"
        bgGradient="from-violet-50 via-white to-purple-50"
        accentGradient="from-violet-500 to-purple-500"
        buttonGradient="from-violet-600 to-purple-600"
        showImage={true}
      />
    </div>
  );
};

export default Enterprise;
