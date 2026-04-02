import React, { useEffect } from "react";
import MultistoreERPHero from "./sections/MultistoreERPHero";
import MultistoreERPAbout from "./sections/MultistoreERPAbout";
import MultistoreERPFeatures from "./sections/MultistoreERPFeatures";
import MultistoreERPHowItWorks from "./sections/MultistoreERPHowItWorks";
import MultistoreERPTechStack from "./sections/MultistoreERPTechStack";
import MultistoreERPGallery from "./sections/MultistoreERPGallery";
import MultistoreERPCTA from "./sections/MultistoreERPCTA";

const MultistoreERPPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <MultistoreERPHero />
            <MultistoreERPAbout />
            <MultistoreERPFeatures />
            <MultistoreERPHowItWorks />
            <MultistoreERPTechStack />
            <MultistoreERPGallery />
            <MultistoreERPCTA />
        </div>
    );
};

export default MultistoreERPPage;
