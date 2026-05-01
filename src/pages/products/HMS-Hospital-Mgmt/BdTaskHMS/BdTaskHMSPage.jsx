import React, { useEffect } from "react";
import BdTaskHMSHero from "./sections/BdTaskHMSHero";
import BdTaskHMSAbout from "./sections/BdTaskHMSAbout";
import BdTaskHMSFeatures from "./sections/BdTaskHMSFeatures";
import BdTaskHMSHowItWork from "./sections/BdTaskHMSHowItWork";
import BdTaskHMSTechStack from "./sections/BdTaskHMSTechStack";
import BdTaskHMSGallery from "./sections/BdTaskHMSGallery";
import BdTaskHMSCTA from "./sections/BdTaskHMSCTA";

const BdTaskHMSPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <BdTaskHMSHero />
            <BdTaskHMSAbout />
            <BdTaskHMSFeatures />
            <BdTaskHMSHowItWork />
            <BdTaskHMSTechStack />
            <BdTaskHMSGallery />
            <BdTaskHMSCTA />
        </div>
    );
};

export default BdTaskHMSPage;
