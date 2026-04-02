import React, { useEffect } from "react";
import RocketLMSHero from "./sections/RocketLMSHero";
import RocketLMSAbout from "./sections/RocketLMSAbout";
import RocketLMSFeatures from "./sections/RocketLMSFeatures";
import RocketLMSHowItWorks from "./sections/RocketLMSHowItWorks";
import RocketLMSTechStack from "./sections/RocketLMSTechStack";
import RocketLMSGallery from "./sections/RocketLMSGallery";
import RocketLMSCTA from "./sections/RocketLMSCTA";

const RocketLMSPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <RocketLMSHero />
            <RocketLMSAbout />
            <RocketLMSFeatures />
            <RocketLMSHowItWorks />
            <RocketLMSTechStack />
            <RocketLMSGallery />
            <RocketLMSCTA />
        </div>
    );
};

export default RocketLMSPage;
