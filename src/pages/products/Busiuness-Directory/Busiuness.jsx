import React from "react";
import BusiunessHero from "../../../components/Busiuness-Directory/BusiunessHero";
import AboutSection from "../../../components/Busiuness-Directory/AboutSection";
import FeaturesSection from "../../../components/Busiuness-Directory/FeaturesSection";
import ProductsSection from "../../../components/Busiuness-Directory/ProductsSection";
import SolutionsSection from "../../../components/Busiuness-Directory/SolutionsSection";
import WhyChooseUsSection from "../../../components/Busiuness-Directory/WhyChooseUsSection";
import Testimonial from "../../../components/Common/Testimonial";
import OurWork from "../../../components/Common/OurWork";
import ContactUs from "../../../components/Common/ContactUs";
import Industries from "../../../components/Common/Industries";
import TeamMoments from "../../../components/Common/TeamMoments";
import PopularBlogs from "../../../components/Blog/PopularBlogs";

const Busiuness = () => {
  return (
    <>
      <BusiunessHero />
      <AboutSection />
      <FeaturesSection />
      <ProductsSection />
      <SolutionsSection />
      <WhyChooseUsSection />
      <Testimonial
        theme="blue"
        bgGradient="from-[#F0F7FF] to-white"
        cardGradient="from-blue-500 via-indigo-500 to-blue-600"
      />

      <Industries
        theme={{
          bg: "bg-[#F0F7FF]",
          primary: "text-blue-600",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
        }}
      />

      <OurWork
        theme={{
          primary: "text-blue-600",
          accent: "bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600",
        }}
      />
      <PopularBlogs />

      <ContactUs
        theme="blue"
        productName="Business Directory"
        bgGradient="from-[#F0F7FF] to-white"
        accentGradient="from-blue-500 via-indigo-500 to-blue-600"
        buttonGradient="from-blue-600 via-indigo-500 to-blue-700"
        showImage={true}
      />
      <TeamMoments />
    </>
  );
};

export default Busiuness;
