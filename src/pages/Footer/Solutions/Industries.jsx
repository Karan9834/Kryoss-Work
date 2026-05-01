import CTASection from '../Products/OurProducts/sections/Cta';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Industries/Hero';
import IndustriesSection from './Industries/IndustriesSection';
import WhatIsIndustrySolution from './Industries/WhatIsIndustrySolution';
import Testimonial from '../../../components/Common/Testimonial';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const Industries = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <IndustriesSection />
      <WhatIsIndustrySolution />
      {/* Testimonial with Light Ember Theme */}
      <CTASection 
        bgGradient="bg-white"
        cardGradient="bg-gradient-to-br from-orange-50 to-amber-50"
        textColor="text-orange-900"
        subtextColor="text-orange-700"
        buttonBg="bg-orange-600"
        hoverButtonBg="hover:bg-orange-700"
        outlineButtonBorder="border-orange-200"
        outlineButtonText="text-orange-700"
        outlineButtonHover="hover:bg-orange-100"
      />
      <Testimonial
        theme="orange"
        bgGradient="from-orange-50 to-amber-50"
        cardGradient="from-orange-500 to-amber-600"
        headingText="What Our Clients Say"
        subheadingText="Join 1000+ businesses that trust our solutions"
      />

      {/* Industries with Light Ember Theme
<Industries
  theme={{
    bg: "bg-gradient-to-b from-orange-50 to-amber-50",
    primary: "text-orange-600",
    iconBg: "bg-white shadow-md",
    iconColor: "text-orange-600",
  }}
/> */}

      {/* Our Work with Light Ember Theme */}
      <OurWork
        theme={{
          primary: "text-orange-600",
          accent: "bg-orange-600",
        }}
      />

      {/* Contact Us with Light Ember Theme */}
      <ContactUs
        theme="orange"
        productName="Custom Software"
        bgGradient="from-orange-50 to-amber-50"
        accentGradient="from-orange-500 to-amber-600"
        buttonGradient="from-orange-600 to-amber-600"
        showImage={true}
      />
    </>
  );
};

export default Industries;
