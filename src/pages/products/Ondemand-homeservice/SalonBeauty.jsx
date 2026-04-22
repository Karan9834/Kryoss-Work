import React from "react";
import Hero from "../../../components/Salon & Beauty/Hero";
import About from "../../../components/Salon & Beauty/About";
import HowitWorks from "../../../components/Salon & Beauty/HowitWorks";
import AppGlance from "../../../components/Salon & Beauty/AppGlance";
import CTA from "../../../components/Salon & Beauty/CTA";
import Features from "../../../components/Salon & Beauty/Features";
import WebAdminPanel from "../../../components/Salon & Beauty/WebAdminPanel";
import TestinomialsSection from "../../../components/Salon & Beauty/TestinomialsSection";
import ProductShowcase from "../../../components/Salon & Beauty/ProductShowcase";
import AwardRecognition from "../../../components/Salon & Beauty/AwardRecognition";
import FAQ from "../../../components/Salon & Beauty/FAQ";
import TechStack from "../../../components/Salon & Beauty/TechStack";
import ContactUs from "../../../components/Common/ContactUs";
import BlogsSection from "../../../components/Salon & Beauty/BlogsSection";
import NewsletterSection from "../../../components/Salon & Beauty/NewsletterSection";
import DigitalFootprint from "../../../components/Salon & Beauty/DigitalFootprint";
import WhyChooseUs from "../../../components/Salon & Beauty/WhyChooseUs";
import CTA2 from "../../../components/Salon & Beauty/CTA2";
import BusinessSupport from "../../../components/Salon & Beauty/BusinessSupport";
import WhatWeProvide from "../../../components/Salon & Beauty/WhatWeProvide";
import DevelopmentProcess from "../../../components/Salon & Beauty/DevelopmentProcess";
import TeamMoments from "../../../components/Common/TeamMoments";
import Testimonial from "../../../components/Common/Testimonial";

const SalonBeauty = ()=>{
    return <>
        <Hero/>
        <About/>
        <HowitWorks/>
        <AppGlance/>
        <CTA/>
        <Features/>
        <WebAdminPanel/>
        <WhatWeProvide/>
        <CTA2/>
        <DevelopmentProcess/>
        <DigitalFootprint/>
        <WhyChooseUs/>
        <BusinessSupport/>
        <Testimonial/>
        <FAQ/>
        <TechStack/>
        <ContactUs theme="purple" productName="Vyom Beauty" />
        <BlogsSection/>
        <NewsletterSection/>
        <TeamMoments/>
        
</>
}
export default SalonBeauty