import React from "react";
import DummySection from "./sections/DummySection";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import KeyFeaturesSection from "./sections/KeyFeaturesSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import TechStack from "./sections/TechStackSection";
import CTASection from "./sections/CTASection";
import GallerySection from "./sections/GallerySection";

const UberClonePage = () => {
  return (
    <main>
      {/* <DummySection /> */}
      <HeroSection/>
      <AboutSection/>
      <KeyFeaturesSection/>
      <HowItWorksSection/>
      <TechStack/>
      <GallerySection/>
      <CTASection/>
    </main>
  );
};

export default UberClonePage;