import React from 'react'
import AIContentGeneratorHero from './sections/AIContentGeneratorHero';
import AIContentGeneratorAboutUs from './sections/AIContentGeneratorAboutUs';
import AIContentGeneratorFeatures from './sections/AIContentGeneratorFeatures';
import AIContentGeneratorHowItWorks from './sections/AIContentGeneratorHowItWorks';
import AIContentGeneratorTechStack from './sections/AIContentGeneratorTechStack';
import AIContentGeneratorGallery from './sections/AIContentGeneratorGallery';
import AIContentGeneratorCTA from './sections/AIContentGeneratorCTA';

const AiContentGeneratorPage = () => {
    return (
        <>
            <AIContentGeneratorHero />
            <AIContentGeneratorAboutUs />
            <AIContentGeneratorFeatures />
            <AIContentGeneratorHowItWorks />
            <AIContentGeneratorTechStack />
            <AIContentGeneratorGallery />
            <AIContentGeneratorCTA />
        </>
    )
}

export default AiContentGeneratorPage;