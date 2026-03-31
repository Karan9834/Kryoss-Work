import React, { useEffect } from "react";
import GlobalHero from "./sections/GlobalHero";
import GlobalAbout from "./sections/GlobalAbout";
import GlobalFeatures from "./sections/GlobalFeatures";
import GlobalHowItWorks from "./sections/GlobalHowItWorks";
import GlobalTechStack from "./sections/GlobalTechStack";
import GlobalGallery from "./sections/GlobalGallery";
import GlobalCTA from "./sections/GlobalCTA";

const GlobalPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <GlobalHero />
            <GlobalAbout />
            <GlobalFeatures />
            <GlobalHowItWorks />
            <GlobalTechStack />
            <GlobalGallery />
            <GlobalCTA />
        </div>
    );
};

export default GlobalPage;
