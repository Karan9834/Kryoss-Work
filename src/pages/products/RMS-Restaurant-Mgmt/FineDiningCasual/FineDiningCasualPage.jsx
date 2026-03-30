import React, { useEffect } from "react";
import FineDiningHero from "./sections/FineDiningHero";
import FineDiningAbout from "./sections/FineDiningAbout";
import FineDiningFeatures from "./sections/FineDiningFeatures";
import FineDiningHowItWorks from "./sections/FineDiningHowItWorks";
import FineDiningTechStack from "./sections/FineDiningTechStack";
import FineDiningGallery from "./sections/FineDiningGallery";
import FineDiningCTA from "./sections/FineDiningCTA";

const FineDiningCasualPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <FineDiningHero />
            <FineDiningAbout />
            <FineDiningFeatures />
            <FineDiningHowItWorks />
            <FineDiningTechStack />
            <FineDiningGallery />
            <FineDiningCTA />
        </div>
    );
};

export default FineDiningCasualPage;
