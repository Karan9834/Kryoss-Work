import React from "react";
import Hero from "../../../components/BFSI-Finance/Hero";
import AboutUs from "../../../components/BFSI-Finance/AboutUs";
import Features from "../../../components/BFSI-Finance/Features";
import Products from "../../../components/BFSI-Finance/Products";
import SolutionsSection from "../../../components/BFSI-Finance/SolutionsSection";
import WhyChooseUs from "../../../components/BFSI-Finance/WhyChooseUs";
import Testimonial from "../../../components/Common/Testimonial";
import Industries from "../../../components/Common/Industries";
import OurWork from "../../../components/Common/OurWork";
import ContactUs from "../../../components/Common/ContactUs";
import TeamMoments from "../../../components/Common/TeamMoments";
import PopularBlogs from "../../../components/Blog/PopularBlogs";

const BFSIFinance = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <Products />
      <SolutionsSection />
      <WhyChooseUs />
      <Testimonial
        theme="orange"
        bgGradient="from-white via-orange-50/30 to-amber-50/30"
        cardGradient="from-amber-500 via-orange-500 to-rose-500"
      />

      <Industries
        theme={{
          bg: "bg-gradient-to-br from-white via-orange-50/20 to-amber-50/30",
          primary: "text-orange-600",
          iconBg: "bg-orange-100",
          iconColor: "text-orange-600",
          border: "border-orange-100",
          hoverBg: "hover:bg-orange-50",
          gradient: "from-orange-600 to-amber-600",
        }}
      />

      <OurWork
        theme={{
          primary: "text-orange-600",
          accent: "bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500",
          cardHover: "hover:border-orange-200 hover:shadow-orange-100",
          button: "from-orange-600 to-amber-600",
        }}
      />
      <PopularBlogs/>
      <ContactUs
        theme="orange"
        productName="Financial Intelligence Platform"
        bgGradient="from-white via-orange-50/30 to-amber-50/30"
        accentGradient="from-amber-500 via-orange-500 to-rose-500"
        buttonGradient="from-orange-600 via-amber-600 to-rose-600"
        showImage={true}
      />
      <TeamMoments/>
    </>
  );
};

export default BFSIFinance;
