import React, { useEffect } from "react";
import PharmacyNextAIHero from "./sections/PharmacyNextAIHero";
import PharmacyNextAIAbout from "./sections/PharmacyNextAIAbout";
import PharmacyNextAIFeatures from "./sections/PharmacyNextAIFeatures";
import PharmacyNextAIHowItWorks from "./sections/PharmacyNextAIHowItWorks";
import PharmacyNextAITechStack from "./sections/PharmacyNextAITechStack";
import PharmacyNextAIGallery from "./sections/PharmacyNextAIGallery";
import PharmacyNextAICTA from "./sections/PharmacyNextAICTA";

const PharmacyNextAIPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <PharmacyNextAIHero />
            <PharmacyNextAIAbout />
            <PharmacyNextAIFeatures />
            <PharmacyNextAIHowItWorks />
            <PharmacyNextAITechStack />
            <PharmacyNextAIGallery />
            <PharmacyNextAICTA />
        </div>
    );
};

export default PharmacyNextAIPage;
