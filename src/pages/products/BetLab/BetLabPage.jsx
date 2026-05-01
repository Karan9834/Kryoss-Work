import React, { useEffect } from "react";

import BetLabHero from "./sections/BetLabHero";
import BetLabAboutUs from "./sections/BetLabAboutUs";
import BetLabFeatures from "./sections/BetLabFeatures";
import BetLabHowItWorks from "./sections/BetLabHowItWorks";
import BetLabTechStack from "./sections/BetLabTechStack";
import BetLabGallery from "./sections/BetLabGallery";
import BetLabCTA from "./sections/BetLabCTA";

const BetLabPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans">
            <BetLabHero />
            <BetLabAboutUs />
            <BetLabFeatures />
            <BetLabHowItWorks />
            <BetLabTechStack />
            <BetLabGallery />
            <BetLabCTA />
        </div>
    );
};

export default BetLabPage;
