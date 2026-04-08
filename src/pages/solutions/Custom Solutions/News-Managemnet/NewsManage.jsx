import React from "react";
import Hero from "./sections/Hero";
import NewsManagementSoftware from "./sections/NewsManagementSoftware";
import WhyChooseKryoss from "./sections/WhyChooseKryoss";
import FeatureExpertise from "./sections/FeatureExpertise ";
import KeyFeaturesOfNewsPortal from "./sections/KeyFeaturesOfNewsPortal";
import WhyChooseNewsPortal from "./sections/WhyChooseNewsPortal";
import PremiumServices from "./sections/PremiumServices";
import ProductsSection from "./sections/ProductsSection";

import Industries from "../../../../components/Common/Industries";
import Testimonial from "../../../../components/Common/Testimonial";
import OurWork from "../../../../components/Common/OurWork";
import ContactUs from "../../../../components/Common/ContactUs";
const NewsManage = () => {
  return (
    <div>
      <Hero />
      <NewsManagementSoftware />
      <WhyChooseKryoss />
      <FeatureExpertise />
      <ProductsSection />
      <div id="product-section">
    <KeyFeaturesOfNewsPortal />
</div>
      <OurWork
        theme={{
          primary: "text-red-600",
          accent: "bg-red-600",
        }}
      />
      <WhyChooseNewsPortal />
      <PremiumServices />

      <Testimonial
        theme="red"
        bgGradient="from-red-50 to-rose-50"
        cardGradient="from-red-600 to-rose-600"
        headingText="What Our Customers Say"
        subheadingText="Trusted by thousands of job seekers and recruiters"
      />

      <Industries
        theme={{
          bg: "bg-gradient-to-b from-red-50 to-rose-50",
          primary: "text-red-600",
          iconBg: "bg-white shadow-md",
          iconColor: "text-red-600",
        }}
      />

      <ContactUs
        theme="red"
        productName="JobPortal"
        bgGradient="from-red-50 to-rose-50"
        accentGradient="from-red-600 to-rose-600"
        buttonGradient="from-red-600 to-red-700"
        showImage={true}
      />
    </div>
  );
};

export default NewsManage;
