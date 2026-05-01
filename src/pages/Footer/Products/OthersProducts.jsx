import CTASection from './OurProducts/sections/Cta';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import React from 'react';
import Hero from './OthersProducts/sections/Hero';
import ServicesSection from './OthersProducts/sections/ServicesSection';
import OverviewSection from './OthersProducts/sections/OverviewSection';

const OthersProducts = () => {
  return (
    <div className="">
      <Hero />
      <ServicesSection />
      <OverviewSection />
      <CTASection 
        bgGradient="bg-white"
        cardGradient="bg-gradient-to-br from-teal-50 to-emerald-50"
        textColor="text-teal-900"
        subtextColor="text-teal-700"
        buttonBg="bg-teal-600"
        hoverButtonBg="hover:bg-teal-700"
        outlineButtonBorder="border-teal-200"
        outlineButtonText="text-teal-700"
        outlineButtonHover="hover:bg-teal-100"
      />
      <Testimonial
        theme="teal"
        bgGradient="from-teal-50 to-emerald-50"
        cardGradient="from-teal-500 to-emerald-600"
        headingText="What Our Clients Say"
        subheadingText="Join 1000+ businesses that trust our solutions"
      />

      <Industries
        theme={{
          bg: "bg-gradient-to-b from-teal-50 to-emerald-50",
          primary: "text-teal-600",
          iconBg: "bg-white shadow-md",
          iconColor: "text-teal-600",
        }}
      />

      <OurWork
        theme={{
          primary: "text-teal-600",
          accent: "bg-teal-600",
        }}
      />

      <ContactUs
        theme="teal"
        productName="Custom Software"
        bgGradient="from-teal-50 to-emerald-50"
        accentGradient="from-teal-500 to-emerald-600"
        buttonGradient="from-teal-500 to-emerald-600"
        showImage={true}
      />
    </div>
  );
};
export default OthersProducts;
