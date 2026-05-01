import React from "react";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import FeaturesSection from "./sections/FeaturesSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import TechStack from "../../../../../components/Common/TechStack";
import GallerySection from "./sections/GallerySection";
import FinalCTA from "./sections/FinalCTA";

const BetPro = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <WhyChooseUs />
      <TechStack
        techs={[
          "react",
          "nodejs",
          "mongodb",
          "typescript",
          "tailwind",
          "aws",
          "docker",
          "python",
          "postgresql",
          "redis",
          "graphql",
          "firebase",
          "kubernetes",
        ]}
        title="Our Technology Stack"
        description="Built with modern, scalable technologies for high-performance platforms"
        badgeText="Tech Stack"
        variant="linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fff7ed 100%)"
      />
      <GallerySection/>
      <FinalCTA/>

    </div>
  );
};

export default BetPro;
