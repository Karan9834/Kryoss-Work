import CTASection from '../Products/OurProducts/sections/Cta';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './On-Demand/Hero';
import ServicesSection from './On-Demand/ServicesSection';
import WhatIsOnDemand from './On-Demand/WhatIsOnDemand';
import Industries from '../../../components/Common/Industries';
import Testimonial from '../../../components/Common/Testimonial';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const OnDemandSolutions = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhatIsOnDemand />

      {/* Testimonial with Light Blue Theme */}
      <CTASection 
        bgGradient="bg-white"
        cardGradient="bg-gradient-to-br from-cyan-50 to-blue-50"
        textColor="text-cyan-900"
        subtextColor="text-cyan-700"
        buttonBg="bg-cyan-600"
        hoverButtonBg="hover:bg-cyan-700"
        outlineButtonBorder="border-cyan-200"
        outlineButtonText="text-cyan-700"
        outlineButtonHover="hover:bg-cyan-100"
      />
      <Testimonial
        theme="blue"
        bgGradient="from-blue-50 to-cyan-50"
        cardGradient="from-blue-500 to-cyan-600"
        headingText="What Our Clients Say"
        subheadingText="Join 1000+ businesses that trust our on-demand solutions"
      />

      {/* Industries with Light Blue Theme */}
      <Industries
        theme={{
          bg: "bg-gradient-to-b from-blue-50 to-cyan-50",
          primary: "text-blue-600",
          iconBg: "bg-white shadow-md",
          iconColor: "text-blue-600",
        }}
      />

      {/* Our Work with Light Blue Theme */}
      <OurWork
        theme={{
          primary: "text-blue-600",
          accent: "bg-blue-600",
        }}
      />

      {/* Contact Us with Light Blue Theme */}
      <ContactUs
        theme="blue"
        productName="On-Demand Solutions"
        bgGradient="from-blue-50 to-cyan-50"
        accentGradient="from-blue-500 to-cyan-600"
        buttonGradient="from-blue-600 to-cyan-600"
        showImage={true}
      />
    </>
  );
};

export default OnDemandSolutions;