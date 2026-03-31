import React, { useEffect } from "react";

import RevPTCHero from "./sections/RevPTCHero";
import RevPTCAboutUs from "./sections/RevPTCAboutUs";
import RevPTCFeatures from "./sections/RevPTCFeatures";
import RevPTCHowItWorks from "./sections/RevPTCHowItWorks";
import RevPTCTechStack from "./sections/RevPTCTechStack";
import RevPTCGallery from "./sections/RevPTCGallery";
import RevPTCCTA from "./sections/RevPTCCTA";

const RevPTCPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans">
            <RevPTCHero />
            <RevPTCAboutUs />
            <RevPTCFeatures />
            <RevPTCHowItWorks />
            <RevPTCTechStack />
            <RevPTCGallery />
            <RevPTCCTA />
        </div>
    );
};

export default RevPTCPage;
