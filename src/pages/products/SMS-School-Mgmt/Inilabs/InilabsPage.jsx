import React, { useEffect } from "react";
import InilabsHero from "./sections/InilabsHero";
import InilabsAbout from "./sections/InilabsAbout";
import InilabsFeatures from "./sections/InilabsFeatures";
import InilabsHowItWorks from "./sections/InilabsHowItWorks";
import InilabsTechStack from "./sections/InilabsTechStack";
import InilabsGallery from "./sections/InilabsGallery";
import InilabsCTA from "./sections/InilabsCTA";

const InilabsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <InilabsHero />
            <InilabsAbout />
            <InilabsFeatures />
            <InilabsHowItWorks />
            <InilabsTechStack />
            <InilabsGallery />
            <InilabsCTA />
        </div>
    );
};

export default InilabsPage;
