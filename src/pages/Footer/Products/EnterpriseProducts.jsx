import CTASection from './OurProducts/sections/Cta';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import React from 'react';
import Hero from './EnterpriseProducts/sections/Hero';
import ServicesSection from './EnterpriseProducts/sections/ServicesSection';
import OverviewSection from './EnterpriseProducts/sections/OverviewSection';

const EnterpriseProducts = () => {
  return (
    <div className="">
      <Hero />
      <ServicesSection />
      <OverviewSection />
      <CTASection 
        bgGradient="bg-white"
        cardGradient="bg-gradient-to-br from-blue-50 to-indigo-50"
        textColor="text-blue-900"
        subtextColor="text-blue-700"
        buttonBg="bg-blue-600"
        hoverButtonBg="hover:bg-blue-700"
        outlineButtonBorder="border-blue-200"
        outlineButtonText="text-blue-700"
        outlineButtonHover="hover:bg-blue-100"
      />
      <Testimonial
        theme="blue"
        bgGradient="from-blue-50 to-indigo-50"
        cardGradient="from-blue-500 to-indigo-600"
        headingText="What Our Clients Say"
        subheadingText="Join 1000+ businesses that trust our solutions"
      />

      <Industries
        theme={{
          bg: "bg-gradient-to-b from-blue-50 to-indigo-50",
          primary: "text-blue-600",
          iconBg: "bg-white shadow-md",
          iconColor: "text-blue-600",
        }}
      />

      <OurWork
        theme={{
          primary: "text-blue-600",
          accent: "bg-blue-600",
        }}
      />

      <ContactUs
        theme="blue"
        productName="Custom Software"
        bgGradient="from-blue-50 to-indigo-50"
        accentGradient="from-blue-500 to-indigo-600"
        buttonGradient="from-blue-500 to-indigo-600"
        showImage={true}
      />
    </div>
  );
};
export default EnterpriseProducts;
