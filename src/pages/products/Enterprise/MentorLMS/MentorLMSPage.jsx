import React, { useEffect } from "react";
import MentorLMSHero from "./sections/MentorLMSHero";
import MentorLMSAbout from "./sections/MentorLMSAbout";
import MentorLMSFeatures from "./sections/MentorLMSFeatures";
import MentorLMSHowItWorks from "./sections/MentorLMSHowItWorks";
import MentorLMSTechStack from "./sections/MentorLMSTechStack";
import MentorLMSGallery from "./sections/MentorLMSGallery";
import MentorLMSCTA from "./sections/MentorLMSCTA";

const MentorLMSPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <MentorLMSHero />
            <MentorLMSAbout />
            <MentorLMSFeatures />
            <MentorLMSHowItWorks />
            <MentorLMSTechStack />
            <MentorLMSGallery />
            <MentorLMSCTA />
        </div>
    );
};

export default MentorLMSPage;
