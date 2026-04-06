import React from "react";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import FeaturesSection from "./sections/FeatureSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import TechStack from "../../../../../components/Common/TechStack";
import GallerySection from "./sections/GallerySection";
import FinalCTA from "./sections/FinalCTA";

const BetLab = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <FeaturesSection />
      <WhyChooseUs />
      <TechStack
        techs={[
          "javascript",
          "vue",
          "angular",
          "laravel",
          "php",
          "mysql",
          "flutter",
          "swift",
          "kotlin",
          "java",
          "go",
          "rust",
          "digitalocean",
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

export default BetLab;
