import React, { useEffect } from "react";
import SpotHero from "./sections/SpotHero";
import SpotAbout from "./sections/SpotAbout";
import SpotFeatures from "./sections/SpotFeatures";
import SpotHowItWorks from "./sections/SpotHowItWorks";
import SpotTechStack from "./sections/SpotTechStack";
import SpotGallery from "./sections/SpotGallery";
import SpotCTA from "./sections/SpotCTA";

const CryptoSpotExchangePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <SpotHero />
            <SpotAbout />
            <SpotFeatures />
            <SpotHowItWorks />
            <SpotTechStack />
            <SpotGallery />
            <SpotCTA />
        </div>
    );
};

export default CryptoSpotExchangePage;
