import React, { useEffect } from "react";
import QsrHero from "./sections/QsrHero";
import QsrAbout from "./sections/QsrAbout";
import QsrFeatures from "./sections/QsrFeatures";
import QsrHowItWorks from "./sections/QsrHowItWorks";
import QsrTechStack from "./sections/QsrTechStack";
import QsrGallery from "./sections/QsrGallery";
import QsrCTA from "./sections/QsrCTA";

const QsrFastCasualPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <QsrHero />
            <QsrAbout />
            <QsrFeatures />
            <QsrHowItWorks />
            <QsrTechStack />
            <QsrGallery />
            <QsrCTA />
        </div>
    );
};

export default QsrFastCasualPage;
