import React, { useEffect } from "react";
import ZoomHero from "./sections/ZoomHero";
import ZoomAbout from "./sections/ZoomAbout";
import ZoomFeatures from "./sections/ZoomFeatures";
import ZoomHowItWorks from "./sections/ZoomHowItWorks";
import ZoomTechStack from "./sections/ZoomTechStack";
import ZoomGallery from "./sections/ZoomGallery";
import ZoomCTA from "./sections/ZoomCTA";

const ZoomClonePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <ZoomHero />
            <ZoomAbout />
            <ZoomFeatures />
            <ZoomHowItWorks />
            <ZoomTechStack />
            <ZoomGallery />
            <ZoomCTA />
        </div>
    );
};

export default ZoomClonePage;
