import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './On-Demand/Hero';
import WhyChooseUs from './On-Demand/WhyChooseUs';
import ServicesSection from './On-Demand/ServicesSection';
import WhatIsOnDemand from './On-Demand/WhatIsOnDemand';
import ProsConsSection from './On-Demand/ProsConsSection';
import Industries from '../../../components/Common/Industries';
import Testimonial from '../../../components/Common/Testimonial';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const OnDemandSolutions = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <ServicesSection />
      <WhatIsOnDemand />
      <ProsConsSection />
      
      {/* Testimonial with Light Blue Theme */}
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