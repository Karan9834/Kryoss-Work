import React, { useEffect } from "react";
import CRMProHero from "./sections/CRMProHero";
import CRMProAbout from "./sections/CRMProAbout";
import CRMProFeatures from "./sections/CRMProFeatures";
import CRMProHowItWorks from "./sections/CRMProHowItWorks";
import CRMProTechStack from "./sections/CRMProTechStack";
import CRMProGallery from "./sections/CRMProGallery";
import CRMProCTA from "./sections/CRMProCTA";

const CRMProPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <CRMProHero />
            <CRMProAbout />
            <CRMProFeatures />
            <CRMProHowItWorks />
            <CRMProTechStack />
            <CRMProGallery />
            <CRMProCTA />
        </div>
    );
};

export default CRMProPage;
