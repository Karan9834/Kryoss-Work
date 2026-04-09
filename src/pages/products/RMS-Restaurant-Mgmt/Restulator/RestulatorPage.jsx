import React, { useEffect } from "react";
import RestulatorHero from "./sections/RestulatorHero";
import RestulatorAbout from "./sections/RestulatorAbout";
import RestulatorFeatures from "./sections/RestulatorFeatures";
import RestulatorHowItWorks from "./sections/RestulatorHowItWorks";
import RestulatorTechStack from "./sections/RestulatorTechStack";
import RestulatorGallery from "./sections/RestulatorGallery";
import RestulatorCTA from "./sections/RestulatorCTA";

const RestulatorPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <RestulatorHero />
            <RestulatorAbout />
            <RestulatorFeatures />
            <RestulatorHowItWorks />
            <RestulatorTechStack />
            <RestulatorGallery />
            <RestulatorCTA />
        </div>
    );
};

export default RestulatorPage;
