import React, { useEffect } from "react";
import DerivHero from "./sections/DerivHero";
import DerivAbout from "./sections/DerivAbout";
import DerivFeatures from "./sections/DerivFeatures";
import DerivHowItWorks from "./sections/DerivHowItWorks";
import DerivTechStack from "./sections/DerivTechStack";
import DerivGallery from "./sections/DerivGallery";
import DerivCTA from "./sections/DerivCTA";

const CryptoDerivativesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <DerivHero />
            <DerivAbout />
            <DerivFeatures />
            <DerivHowItWorks />
            <DerivTechStack />
            <DerivGallery />
            <DerivCTA />
        </div>
    );
};

export default CryptoDerivativesPage;
