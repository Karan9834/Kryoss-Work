import React from "react";
import JobPortal from "../../../components/Job-Portals/JobPortal";
import AboutSection from "../../../components/Job-Portals/AboutSection";
import FeaturesSection from "../../../components/Job-Portals/FeaturesSection";
import ProductsSection from "../../../components/Job-Portals/ProductsSection";
import SolutionsSection from "../../../components/Job-Portals/SolutionsSection";
import WhyChooseUs from "../../../components/Job-Portals/WhyChooseUs";
import Industries from "../../../components/Common/Industries";
import OurWork from "../../../components/Common/OurWork";
import ContactUs from "../../../components/Common/ContactUs";
import Testimonial from "../../../components/Common/Testimonial";
import TeamMoments from "../../../components/Common/TeamMoments";
import PopularBlogs from "../../../components/Blog/PopularBlogs";

const JobPortalPage = () => {
  return (
    <>
      <JobPortal />
      <AboutSection />
      <FeaturesSection />
      <ProductsSection />
      <SolutionsSection />
      <WhyChooseUs />
      <Testimonial
        theme="blue"
        bgGradient="from-[#F0F7FF] to-white"
        cardGradient="from-blue-500 via-indigo-500 to-cyan-500"
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
          accent: "bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500",
        }}
      />
      <PopularBlogs />

      <ContactUs
        theme="blue"
        productName="Job Portal"
        bgGradient="from-[#F0F7FF] to-white"
        accentGradient="from-blue-500 via-indigo-500 to-cyan-500"
        buttonGradient="from-blue-600 via-indigo-500 to-cyan-600"
        showImage={true}
      />
      <TeamMoments />
    </>
  );
};

export default JobPortalPage;
