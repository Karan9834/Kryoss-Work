import React from "react";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Features from "./sections/Features";
import WhyChooseUs from "./sections/WhyChooseUs";
import TechStack from "../../../components/Common/TechStack";
import GallerySection from "./sections/GallerySection";
import FinalCTA from "./sections/FinalCTA";

const Omni = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Features />
      <WhyChooseUs />
      <TechStack
        techs={[
          "javascript",
          "react",
          "nodejs",
          "php",
          "mysql",
          "redis",
          "aws",
          "graphql",
        ]}
        title="OmniMart Technology Stack"
        description="Powering a scalable multi-vendor e-commerce platform with modern technologies"
        badgeText="E-commerce Tech Stack"
        variant="default"
      />
      <GallerySection/>
      <FinalCTA/>
    </div>
  );
};

export default Omni;
