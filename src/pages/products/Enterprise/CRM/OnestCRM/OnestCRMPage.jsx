import React, { useEffect } from "react";
import OnestCRMHero from "./sections/OnestCRMHero";
import OnestCRMAbout from "./sections/OnestCRMAbout";
import OnestCRMFeatures from "./sections/OnestCRMFeatures";
import OnestCRMHowItWorks from "./sections/OnestCRMHowItWorks";
import OnestCRMTechStack from "./sections/OnestCRMTechStack";
import OnestCRMGallery from "./sections/OnestCRMGallery";
import OnestCRMCTA from "./sections/OnestCRMCTA";

const OnestCRMPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <OnestCRMHero />
            <OnestCRMAbout />
            <OnestCRMFeatures />
            <OnestCRMHowItWorks />
            <OnestCRMTechStack />
            <OnestCRMGallery />
            <OnestCRMCTA />
        </div>
    );
};

export default OnestCRMPage;
