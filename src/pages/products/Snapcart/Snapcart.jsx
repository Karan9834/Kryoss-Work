import React from "react";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Features from "./sections/FeaturesSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import GallerySection from "./sections/GallerySection";
import TechStack from "../../../components/Common/TechStack";
import FinalCTA from "./sections/FinalCTA";

const Snapcart = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Features />
      <WhyChooseUs />
      <TechStack
        techs={[
          "javascript",
          "json",
          "css",
          "sass",
          "php",
          "sql",
          "html",
          "bootstrap",
          "tailwind",
        ]}
        title="Technology Stack"
        description="Powering our Inventory Management System with modern technologies"
        badgeText="Tech Stack"
        variant="default"
      />
      <GallerySection />
      <FinalCTA/>
    </div>
  );
};

export default Snapcart;
