import React from "react";
import DoctorHealthHero from "../../../components/Doctor-Health-App/DoctorHealthHero";
import AboutUs from "../../../components/Doctor-Health-App/AboutUs";
import Features from "../../../components/Doctor-Health-App/Features";
import Solutions from "../../../components/Doctor-Health-App/Solutions";
import Testimonial from "../../../components/Common/Testimonial";
import WhyChooseUs from "../../../components/Doctor-Health-App/WhyChooseUs";
import Products from "../../../components/Doctor-Health-App/Products";
import Industries from "../../../components/Common/Industries";
import OurWork from "../../../components/Common/OurWork";
import ContactUs from "../../../components/Common/ContactUs"; 

const DoctorHealthPage = () => {
  return (
    <>
      <DoctorHealthHero />
      <AboutUs />
      <Features />
      <Products />
      <WhyChooseUs />
      <Solutions />
      
      {/* Testimonial with Green Theme */}
      <Testimonial
        theme="green"
        bgGradient="from-green-50 to-white"
        cardGradient="from-green-500 to-emerald-500"
        headingText="What Healthcare Providers Say"
        subheadingText="Join 500+ clinics and hospitals that trust our platform"
      />
      
      {/* Industries with Green Theme */}
      <Industries
        theme={{
          bg: "bg-gradient-to-b from-green-50 to-white",
          primary: "text-green-600",
          iconBg: "bg-white shadow-md",
          iconColor: "text-green-600",
        }}
      />
      
      {/* Our Work with Green Theme */}
      <OurWork
        theme={{
          primary: "text-green-600",
          accent: "bg-green-600",
        }}
      />
      
      {/* Contact Us with Green Theme */}
      <ContactUs
        theme="green"
        productName="Healthcare"
        bgGradient="from-green-50 to-white"
        accentGradient="from-green-500 to-emerald-500"
        buttonGradient="from-green-600 to-emerald-600"
        showImage={true}
      />
    </>
  );
};

export default DoctorHealthPage;