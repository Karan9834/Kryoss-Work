import React, { useEffect } from "react";
import SmartHMSHero from "./sections/SmartHMSHero";
import SmartHMSAbout from "./sections/SmartHMSAbout";
import SmartHMSFeatures from "./sections/SmartHMSFeatures";
import SmartHMSHowItWork from "./sections/SmartHMSHowItWork";
import SmartHMSTechStack from "./sections/SmartHMSTechStack";
import SmartHMSGallery from "./sections/SmartHMSGallery";
import SmartHMSCTA from "./sections/SmartHMSCTA";

const SmartHMSPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <SmartHMSHero />
            <SmartHMSAbout />
            <SmartHMSFeatures />
            <SmartHMSHowItWork />
            <SmartHMSTechStack />
            <SmartHMSGallery />
            <SmartHMSCTA />
        </div>
    );
};

export default SmartHMSPage;
