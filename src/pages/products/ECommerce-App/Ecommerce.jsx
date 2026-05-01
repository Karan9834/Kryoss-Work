import React from "react";
import ECommercehero from "../../../components/E-Commerce-App/ECommercehero";
import AboutUs from "../../../components/E-Commerce-App/ECommerceAboutUS";
import Features from "../../../components/E-Commerce-App/Features";
import Products from "../../../components/E-Commerce-App/Products";
import Solutions from "../../../components/E-Commerce-App/Solutions";
import WhyChooseUs from "../../../components/E-Commerce-App/WhyChooseUs";
import Testimonial from "../../../components/Common/Testimonial";
import Industries from "../../../components/Common/Industries";
import OurWork from "../../../components/Common/OurWork";
import ContactUs from "../../../components/Common/ContactUs";
import TeamMoments from "../../../components/Common/TeamMoments"
import PopularBlogs from "../../../components/Blog/PopularBlogs";


const Ecommerce = () => {
  return (
    <>
      <ECommercehero />
      <AboutUs />
      <Features />
      <Products />
      <Solutions />
      <WhyChooseUs />
      <Testimonial />
      <Industries
        theme={{
          bg: "bg-[#f5f3ff]",
          primary: "text-purple-600",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
        }}
      />
      <OurWork/>
      <PopularBlogs/>
      <ContactUs
      theme="purple"
        productName="E-Commerce"
        bgGradient="from-purple-50 to-white"
        accentGradient="from-purple-500 to-pink-500"
        buttonGradient="from-purple-600 to-pink-600"
        showImage={true}
        />
       <TeamMoments/>
    </>
  );
};

export default Ecommerce;
