import React, { useEffect } from "react";
import EventRightHero from "./sections/EventRightHero";
import EventRightAbout from "./sections/EventRightAbout";
import EventRightFeatures from "./sections/EventRightFeatures";
import EventRightHowItWorks from "./sections/EventRightHowItWorks";
import EventRightTechStack from "./sections/EventRightTechStack";
import EventRightGallery from "./sections/EventRightGallery";
import EventRightCTA from "./sections/EventRightCTA";

const EventRightProPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <EventRightHero />
            <EventRightAbout />
            <EventRightFeatures />
            <EventRightHowItWorks />
            <EventRightTechStack />
            <EventRightGallery />
            <EventRightCTA />
        </div>
    );
};

export default EventRightProPage;
