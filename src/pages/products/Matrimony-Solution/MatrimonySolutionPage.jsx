import React, { useEffect } from "react";
import MatrimonyHero from "./sections/MatrimonyHero";
import MatrimonyAbout from "./sections/MatrimonyAbout";
import MatrimonyFeatures from "./sections/MatrimonyFeatures";
import MatrimonyHowItWorks from "./sections/MatrimonyHowItWorks";
import MatrimonyTechStack from "./sections/MatrimonyTechStack";
import MatrimonyGallery from "./sections/MatrimonyGallery";
import MatrimonyCTA from "./sections/MatrimonyCTA";

const MatrimonySolutionPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <MatrimonyHero />
            <MatrimonyAbout />
            <MatrimonyFeatures />
            <MatrimonyHowItWorks />
            <MatrimonyTechStack />
            <MatrimonyGallery />
            <MatrimonyCTA />
        </div>
    );
};

export default MatrimonySolutionPage;
