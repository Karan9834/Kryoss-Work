import React, { useEffect } from "react";
import RetailHero from "./sections/RetailHero";
import RetailAbout from "./sections/RetailAbout";
import RetailFeatures from "./sections/RetailFeatures";
import RetailHowItWorks from "./sections/RetailHowItWorks";
import RetailTechStack from "./sections/RetailTechStack";
import RetailGallery from "./sections/RetailGallery";
import RetailCTA from "./sections/RetailCTA";

const RetailPOSPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <RetailHero />
            <RetailAbout />
            <RetailFeatures />
            <RetailHowItWorks />
            <RetailTechStack />
            <RetailGallery />
            <RetailCTA />
        </div>
    );
};

export default RetailPOSPage;
