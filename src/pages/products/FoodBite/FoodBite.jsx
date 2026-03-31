import React from "react";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Features from "./sections/Features";
import WhyChooseUs from "./sections/WhyChooseUs";
import TechStack from "../../../components/Common/TechStack";
import GallerySection from "./sections/GallerySection";
import FinalCTA from "./sections/FinalCTA";

const FoodBite = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Features />
      <WhyChooseUs />
      <TechStack
        techs={[
          "Dart",
          "YAML",
          "JavaScript JSON",
          "Kotlin",
          ".plist",
          "Swift",
          "JavaScript JS",
          "HTML",
        ]}
        title="IMS Technology Stack"
        description="Powering our Inventory Management System with modern technologies"
        badgeText="IMS Tech Stack"
        variant="default"
      />
      <GallerySection/>
      <FinalCTA/>
    </div>
  );
};

export default FoodBite;
