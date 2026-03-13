import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import KeyFeaturesSection from "./sections/KeyFeaturesSection";
import HowItWorksSection from "./sections/HowItworksSection";
import TechStack from "./sections/TechStackSection";
import GallerySection from "./sections/GallerySection";
import CTASection from "./sections/CTASection";


const BikeTaxiPage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection/>
      <KeyFeaturesSection/>
      <HowItWorksSection/>
      <TechStack/>
      <GallerySection/>
      <CTASection/>
    </main>
  );
};

export default BikeTaxiPage;