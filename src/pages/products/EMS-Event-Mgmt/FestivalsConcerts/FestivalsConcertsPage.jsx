import React, { useEffect } from "react";
import FestHero from "./sections/FestHero";
import FestAbout from "./sections/FestAbout";
import FestFeatures from "./sections/FestFeatures";
import FestHowItWorks from "./sections/FestHowItWorks";
import FestTechStack from "./sections/FestTechStack";
import FestGallery from "./sections/FestGallery";
import FestCTA from "./sections/FestCTA";

const FestivalsConcertsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <FestHero />
            <FestAbout />
            <FestFeatures />
            <FestHowItWorks />
            <FestTechStack />
            <FestGallery />
            <FestCTA />
        </div>
    );
};

export default FestivalsConcertsPage;
