import React from "react";
import Hero from "./sections/Hero";
import StakeAbout from "./sections/StakeAbout";
import StakeFeatures from "./sections/StakeFeatures";
import WhyChooseUs from "./sections/WhyChooseUs";
import TechStack from "../../../../components/Common/TechStack";
import GallerySection from "./sections/GallerySection";
import FinalCTA from "./sections/FinalCTA";

const TennPati = () => {
  return (
    <div>
      <Hero />
      <StakeAbout />
      <StakeFeatures />
      <WhyChooseUs />
      <TechStack
        techs={["react", "nodejs", "mongodb", "tailwind", "aws"]}
        title="Our Technology Stack"
        description="Built with modern, scalable technologies"
        badgeText="Tech-Stack"
        variant="linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #e8f5e9 100%)"
      />
      <GallerySection/>
      <FinalCTA/>
    </div>
  );
};

export default TennPati;
