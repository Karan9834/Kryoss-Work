import react from 'react';
import CarPoolingHero from './sections/CarPoolingHero';
import CarPoolingAboutUs from './sections/CarPoolingAboutUs';
import CarPoolingFeatures from './sections/CarPoolingFeatures';
import CarPoolingHowItWorks from './sections/CarPoolingHowItWorks';
import CarPoolingTechStack from './sections/CarPoolingTechStack';
import CarPoolingGallery from './sections/CarPoolingGallery';
import CarPoolingCTA from './sections/CarPoolingCTA';

const CarPoolingPage = () => {
    return (
        <main>
            <CarPoolingHero />
            <CarPoolingAboutUs />
            <CarPoolingFeatures />
            <CarPoolingHowItWorks />
            <CarPoolingTechStack />
            <CarPoolingGallery />
            <CarPoolingCTA />
        </main>
    );
};

export default CarPoolingPage;