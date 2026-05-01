import React from "react";
import IMSHero from "../../../components/IMS/IMSHero";
import AboutUs from "../../../components/IMS/AboutUs";
import FeaturesSection from "../../../components/IMS/FeaturesSection";
import IMSProductsSection from "../../../components/IMS/Products";
import SolutionsSection from "../../../components/IMS/SolutionsSection ";
import WhyChooseUs from "../../../components/IMS/WhyChooseUs";
import Testimonial from "../../../components/Common/Testimonial";
import Industries from "../../../components/Common/Industries";
import OurWork from "../../../components/Common/OurWork";
import ContactUs from "../../../components/Common/ContactUs";
import TeamMoments from "../../../components/Common/TeamMoments";
import PopularBlogs from "../../../components/Blog/PopularBlogs";

const IMSPager = () => {
  return (
    <div>
      <IMSHero />
      <AboutUs />
      <FeaturesSection />
      <IMSProductsSection />
      <SolutionsSection />
      <WhyChooseUs />
      <Testimonial
        theme="light"
        bgGradient="from-white via-blue-50/40 to-white"
        cardGradient="from-blue-500 to-indigo-500"
      />

      <Industries
        theme={{
          bg: "bg-white",
          primary: "text-blue-600",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          border: "border-gray-200",
          hoverBg: "hover:bg-blue-50/50",
          gradient: "from-blue-600 to-indigo-600",
        }}
      />

      <OurWork
        theme={{
          primary: "text-blue-600",
          accent: "bg-gradient-to-r from-blue-500 to-indigo-500",
          cardHover: "hover:border-blue-200 hover:shadow-md",
          button: "from-blue-600 to-indigo-600",
        }}
      />
      <PopularBlogs />
      <ContactUs
        theme="light"
        productName="Inventory Management System"
        bgGradient="from-white via-blue-50/40 to-white"
        accentGradient="from-blue-500 to-indigo-500"
        buttonGradient="from-blue-600 to-indigo-600"
        showImage={true}
      />
      <TeamMoments />
    </div>
  );
};

export default IMSPager;
