import React from "react";
import HotelHero from "../../../components/HMS-Hotel/HotelHero";
import AboutUs from "../../../components/HMS-Hotel/AboutUs";
import FeaturesSection from "../../../components/HMS-Hotel/FeaturesSection";
import HotelProducts from "../../../components/HMS-Hotel/HotelProducts";
import SolutionsSection from "../../../components/HMS-Hotel/SolutionsSection";
import WhyChooseUs from "../../../components/HMS-Hotel/WhyChooseUs";
import Testimonial from "../../../components/Common/Testimonial";
import Industries from "../../../components/Common/Industries";
import OurWork from "../../../components/Common/OurWork";
import ContactUs from "../../../components/Common/ContactUs";

const HSMHotel = () => {
  return (
    <>
      <HotelHero />
      <AboutUs />
      <FeaturesSection />
      <HotelProducts />
      <SolutionsSection />
      <WhyChooseUs />
      <Testimonial 
    theme="orange-teal"
    bgGradient="from-[#FFF7ED] to-white"
    cardGradient="from-orange-500 to-teal-500"
/>

<Industries 
    theme={{
        bg: "bg-[#FFF7ED]",
        primary: "text-orange-600",
        iconBg: "bg-orange-100",
        iconColor: "text-teal-600",
    }}
/>

<OurWork 
    theme={{
        primary: "text-orange-600",
        accent: "bg-teal-600",
    }}
/>

<ContactUs 
    theme="orange-teal"
    productName="Hotel Management"
    bgGradient="from-[#FFF7ED] to-white"
    accentGradient="from-orange-500 to-teal-500"
    buttonGradient="from-orange-500 to-orange-600"
    showImage={true}
/>
</>
  );
};

export default HSMHotel;
