import React, { useEffect } from "react";
import CorpHero from "./sections/CorpHero";
import CorpAbout from "./sections/CorpAbout";
import CorpFeatures from "./sections/CorpFeatures";
import CorpHowItWorks from "./sections/CorpHowItWorks";
import CorpTechStack from "./sections/CorpTechStack";
import CorpGallery from "./sections/CorpGallery";
import CorpCTA from "./sections/CorpCTA";

const CorporateEventsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <CorpHero />
            <CorpAbout />
            <CorpFeatures />
            <CorpHowItWorks />
            <CorpTechStack />
            <CorpGallery />
            <CorpCTA />
        </div>
    );
};

export default CorporateEventsPage;
