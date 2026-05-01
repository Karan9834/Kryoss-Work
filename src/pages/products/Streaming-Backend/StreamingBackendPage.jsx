import React, { useEffect } from "react";
import StreamingHero from "./sections/StreamingHero";
import StreamingAbout from "./sections/StreamingAbout";
import StreamingFeatures from "./sections/StreamingFeatures";
import StreamingHowItWorks from "./sections/StreamingHowItWorks";
import StreamingTechStack from "./sections/StreamingTechStack";
import StreamingGallery from "./sections/StreamingGallery";
import StreamingCTA from "./sections/StreamingCTA";

const StreamingBackendPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <StreamingHero />
            <StreamingAbout />
            <StreamingFeatures />
            <StreamingHowItWorks />
            <StreamingTechStack />
            <StreamingGallery />
            <StreamingCTA />
        </div>
    );
};

export default StreamingBackendPage;
