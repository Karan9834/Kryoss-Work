import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Industries/Hero';
import WhyChooseUs from './Industries/WhyChooseUs';
import IndustriesSection from './Industries/IndustriesSection';
import WhatIsIndustrySolution from './Industries/WhatIsIndustrySolution';
import ProsConsSection from './Industries/ProsConsSection';
import Testimonial from '../../../components/Common/Testimonial';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const Industries = () => {
  const navigate = useNavigate();

  return (
    <>
    <Hero/>
    <WhyChooseUs/>
    <IndustriesSection/>
    <WhatIsIndustrySolution/>
    <ProsConsSection/>
    {/* Testimonial with Light Ember Theme */}
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
