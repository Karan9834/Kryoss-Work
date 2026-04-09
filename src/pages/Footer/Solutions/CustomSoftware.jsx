import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Custom-Software/Hero';
import StatsCards from './Custom-Software/StatsCards';
import ServicesSection from './Custom-Software/ServicesSection';
import WhatIsCustomSoftware from './Custom-Software/WhatIsCustomSoftware';
import FeaturesBenefits from './Custom-Software/FeaturesBenefits';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const CustomSoftware = () => {
  const navigate = useNavigate();

  return (
    <>
    <Hero/>
    <StatsCards/>
    <ServicesSection/>
    <WhatIsCustomSoftware/>
    <FeaturesBenefits/>
    {/* Testimonial with Dark Ember Theme */}
{/* Testimonial with Light Ember Theme */}
<Testimonial
  theme="orange"
  bgGradient="from-orange-50 to-amber-50"
  cardGradient="from-orange-500 to-amber-600"
  headingText="What Our Clients Say"
  subheadingText="Join 1000+ businesses that trust our solutions"
/>

{/* Industries with Light Ember Theme */}
<Industries
  theme={{
    bg: "bg-gradient-to-b from-orange-50 to-amber-50",
    primary: "text-orange-600",
    iconBg: "bg-white shadow-md",
    iconColor: "text-orange-600",
  }}
/>

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

export default CustomSoftware;
