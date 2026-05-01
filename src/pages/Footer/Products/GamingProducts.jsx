import CTASection from './OurProducts/sections/Cta';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import React from 'react';
import Hero from './GamingProducts/sections/Hero';
import ServicesSection from './GamingProducts/sections/ServicesSection';
import OverviewSection from './GamingProducts/sections/OverviewSection';

const GamingProducts = () => {
  return (
    <div className="">
      <Hero />
      <ServicesSection />
      <OverviewSection />
      <CTASection 
        bgGradient="bg-white"
        cardGradient="bg-gradient-to-br from-red-50 to-rose-50"
        textColor="text-red-900"
        subtextColor="text-red-700"
        buttonBg="bg-red-600"
        hoverButtonBg="hover:bg-red-700"
        outlineButtonBorder="border-red-200"
        outlineButtonText="text-red-700"
        outlineButtonHover="hover:bg-red-100"
      />
      <Testimonial
        theme="red"
        bgGradient="from-red-50 to-rose-50"
        cardGradient="from-red-500 to-rose-600"
        headingText="What Our Clients Say"
        subheadingText="Join 1000+ businesses that trust our solutions"
      />

      <Industries
        theme={{
          bg: "bg-gradient-to-b from-red-50 to-rose-50",
          primary: "text-red-600",
          iconBg: "bg-white shadow-md",
          iconColor: "text-red-600",
        }}
      />

      <OurWork
        theme={{
          primary: "text-red-600",
          accent: "bg-red-600",
        }}
      />

      <ContactUs
        theme="red"
        productName="Custom Software"
        bgGradient="from-red-50 to-rose-50"
        accentGradient="from-red-500 to-rose-600"
        buttonGradient="from-red-500 to-rose-600"
        showImage={true}
      />
    </div>
  );
};
export default GamingProducts;
