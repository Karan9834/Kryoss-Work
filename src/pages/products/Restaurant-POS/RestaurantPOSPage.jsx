import React, { useEffect } from "react";
import RestoHero from "./sections/RestoHero";
import RestoAbout from "./sections/RestoAbout";
import RestoFeatures from "./sections/RestoFeatures";
import RestoHowItWorks from "./sections/RestoHowItWorks";
import RestoTechStack from "./sections/RestoTechStack";
import RestoGallery from "./sections/RestoGallery";
import RestoCTA from "./sections/RestoCTA";

const RestaurantPOSPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <RestoHero />
            <RestoAbout />
            <RestoFeatures />
            <RestoHowItWorks />
            <RestoTechStack />
            <RestoGallery />
            <RestoCTA />
        </div>
    );
};

export default RestaurantPOSPage;
