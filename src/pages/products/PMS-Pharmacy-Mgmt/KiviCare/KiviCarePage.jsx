import React, { useEffect } from "react";
import KiviCareHero from "./sections/KiviCareHero";
import KiviCareAbout from "./sections/KiviCareAbout";
import KiviCareFeatures from "./sections/KiviCareFeatures";
import KiviCareHowItWorks from "./sections/KiviCareHowItWorks";
import KiviCareTechStack from "./sections/KiviCareTechStack";
import KiviCareGallery from "./sections/KiviCareGallery";
import KiviCareCTA from "./sections/KiviCareCTA";

const KiviCarePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <KiviCareHero />
            <KiviCareAbout />
            <KiviCareFeatures />
            <KiviCareHowItWorks />
            <KiviCareTechStack />
            <KiviCareGallery />
            <KiviCareCTA />
        </div>
    );
};

export default KiviCarePage;
