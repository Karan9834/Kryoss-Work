import React, { useEffect } from "react";
import EventNextHero from "./sections/EventNextHero";
import EventNextAbout from "./sections/EventNextAbout";
import EventNextFeatures from "./sections/EventNextFeatures";
import EventNextHowItWorks from "./sections/EventNextHowItWorks";
import EventNextTechStack from "./sections/EventNextTechStack";
import EventNextGallery from "./sections/EventNextGallery";
import EventNextCTA from "./sections/EventNextCTA";

const EventNextPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <EventNextHero />
            <EventNextAbout />
            <EventNextFeatures />
            <EventNextHowItWorks />
            <EventNextTechStack />
            <EventNextGallery />
            <EventNextCTA />
        </div>
    );
};

export default EventNextPage;
