import CTASection from './OurProducts/sections/Cta';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import React from 'react';
import Hero from './PrimeProducts/sections/Hero';
import ServicesSection from './PrimeProducts/sections/ServicesSection';
import OverviewSection from './PrimeProducts/sections/OverviewSection';

const PrimeProducts = () => {
  return (
    <div className="">
      <Hero />
      <ServicesSection />
      <OverviewSection />
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

      <Industries
        theme={{
          bg: "bg-gradient-to-b from-orange-50 to-amber-50",
          primary: "text-orange-600",
          iconBg: "bg-white shadow-md",
          iconColor: "text-orange-600",
        }}
      />

      <OurWork
        theme={{
          primary: "text-orange-600",
          accent: "bg-orange-600",
        }}
      />

      <ContactUs
        theme="orange"
        productName="Custom Software"
        bgGradient="from-orange-50 to-amber-50"
        accentGradient="from-orange-500 to-amber-600"
        buttonGradient="from-orange-500 to-amber-600"
        showImage={true}
      />
    </div>
  );
};
export default PrimeProducts;
