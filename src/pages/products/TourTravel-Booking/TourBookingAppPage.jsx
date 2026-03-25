import React, { useEffect } from "react";
import TourBookingHero from "./sections/TourBookingHero";
import TourBookingAbout from "./sections/TourBookingAbout";
import TourBookingFeatures from "./sections/TourBookingFeatures";
import TourBookingHowItWorks from "./sections/TourBookingHowItWorks";
import TourBookingTechStack from "./sections/TourBookingTechStack";
import TourBookingGallery from "./sections/TourBookingGallery";
import TourBookingCTA from "./sections/TourBookingCTA";

const TourBookingAppPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <TourBookingHero />
            <TourBookingAbout />
            <TourBookingFeatures />
            <TourBookingHowItWorks />
            <TourBookingTechStack />
            <TourBookingGallery />
            <TourBookingCTA />
        </div>
    );
};

export default TourBookingAppPage;
