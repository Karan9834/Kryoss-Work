import React from "react";
import News from "../../../components/News/NewsHero";
import AboutUs from "../../../components/News/AboutUs";
import Features from "../../../components/News/Features";
import Products from "../../../components/News/Products";
import Solutions from "../../../components/News/Solutions";
import WhyChooseUs from "../../../components/News/WhyChooseUs";
import Industries from "../../../components/Common/Industries";
import ContactUs from "../../../components/Common/ContactUs";
import Testimonial from "../../../components/Common/Testimonial";
import OurWork from "../../../components/Common/OurWork";

const NewsPage = () => {
  return (
    <>
      <News />
      <AboutUs />
      <Features />
      <Products />
      <Solutions />
      <WhyChooseUs />
      <Testimonial
        theme="blue"
        bgGradient="from-gray-50 via-white to-blue-50/30"
        cardGradient="from-blue-500 via-indigo-500 to-cyan-500"
      />
      <Industries
        theme={{
          bg: "bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
          primary: "text-blue-600",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          border: "border-blue-100",
          hoverBg: "hover:bg-blue-50",
          gradient: "from-blue-600 to-indigo-600",
        }}
      />
      <OurWork
        theme={{
          primary: "text-blue-600",
          accent: "bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500",
          cardHover: "hover:border-blue-200 hover:shadow-blue-100",
          button: "from-blue-600 to-indigo-600",
        }}
      />
      <ContactUs
        theme="blue"
        productName="News Platform"
        bgGradient="from-gray-50 via-white to-blue-50/30"
        accentGradient="from-blue-500 via-indigo-500 to-cyan-500"
        buttonGradient="from-blue-600 via-indigo-600 to-cyan-600"
        showImage={true}
      />
    </>
  );
};

export default NewsPage;
