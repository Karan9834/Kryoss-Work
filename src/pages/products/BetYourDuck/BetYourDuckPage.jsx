import React, { useEffect } from "react";

import BetYourDuckHero from "./sections/BetYourDuckHero";
import BetYourDuckAboutUs from "./sections/BetYourDuckAboutUs";
import BetYourDuckFeatures from "./sections/BetYourDuckFeatures";
import BetYourDuckHowItWorks from "./sections/BetYourDuckHowItWorks";
import BetYourDuckTechStack from "./sections/BetYourDuckTechStack";
import BetYourDuckGallery from "./sections/BetYourDuckGallery";
import BetYourDuckCTA from "./sections/BetYourDuckCTA";

const BetYourDuckPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans">
            <BetYourDuckHero />
            <BetYourDuckAboutUs />
            <BetYourDuckFeatures />
            <BetYourDuckHowItWorks />
            <BetYourDuckTechStack />
            <BetYourDuckGallery />
            <BetYourDuckCTA />
        </div>
    );
};

export default BetYourDuckPage;
