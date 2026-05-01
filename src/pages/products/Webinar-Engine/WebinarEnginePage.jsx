import React, { useEffect } from "react";
import WebinarHero from "./sections/WebinarHero";
import WebinarAbout from "./sections/WebinarAbout";
import WebinarFeatures from "./sections/WebinarFeatures";
import WebinarHowItWorks from "./sections/WebinarHowItWorks";
import WebinarTechStack from "./sections/WebinarTechStack";
import WebinarGallery from "./sections/WebinarGallery";
import WebinarCTA from "./sections/WebinarCTA";

const WebinarEnginePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <WebinarHero />
            <WebinarAbout />
            <WebinarFeatures />
            <WebinarHowItWorks />
            <WebinarTechStack />
            <WebinarGallery />
            <WebinarCTA />
        </div>
    );
};

export default WebinarEnginePage;
