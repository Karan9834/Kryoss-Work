import React from "react";
import KasinoHero from "./sections/KasinoHero";
import KasinoAbout from "./sections/KasinoAbout";
import KasinoFeatures from "./sections/KasinoFeatures";
import KasinoWhyChoose from "./sections/KasinoWhyChoose";
import TechStack from "../../../../../components/Common/TechStack";
import GallerySection from "../sections/GallerySection";
import KasinoCTA from "./sections/KasinoCTA";

const Kasino = () => {
  return (
    <div>
      <KasinoHero />
      <KasinoAbout />
      <KasinoFeatures />
      <KasinoWhyChoose />
      <TechStack
        techs={[
          "react",
          "nodejs",
          "mongodb",
          "tailwind",
          "aws",
          "typescript",
          "python",
          "postgresql",
          "redis",
          "graphql",
          "firebase",
          "docker",
          "kubernetes",
        ]}
        title="Our Technology Stack"
        description="Built with modern, scalable technologies"
        badgeText="Tech-Stack"
        variant="linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #e8f5e9 100%)"
      />
      <GallerySection/>
      <KasinoCTA/>
    </div>
  );
};

export default Kasino;
