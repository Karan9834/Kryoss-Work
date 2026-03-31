import React, { useEffect } from "react";

import HyipInvestProHero from "./sections/HyipInvestProHero";
import HyipInvestProAboutUs from "./sections/HyipInvestProAboutUs";
import HyipInvestProFeatures from "./sections/HyipInvestProFeatures";
import HyipInvestProHowItWorks from "./sections/HyipInvestProHowItWorks";
import HyipInvestProTechStack from "./sections/HyipInvestProTechStack";
import HyipInvestProGallery from "./sections/HyipInvestProGallery";
import HyipInvestProCTA from "./sections/HyipInvestProCTA";

const HyipInvestProPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans">
            <HyipInvestProHero />
            <HyipInvestProAboutUs />
            <HyipInvestProFeatures />
            <HyipInvestProHowItWorks />
            <HyipInvestProTechStack />
            <HyipInvestProGallery />
            <HyipInvestProCTA />
        </div>
    );
};

export default HyipInvestProPage;
