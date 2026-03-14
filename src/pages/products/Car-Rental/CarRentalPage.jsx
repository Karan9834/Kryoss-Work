import react from 'react';
import CarRentalHero from './sections/CarRentalHero';
import CarRentalAboutUs from './sections/CarRentalAboutUs';
import CarRentalFeatures from './sections/CarRentalFeatures';
import CarRentalHowItWorks from './sections/CarRentalHowItWorks';
import CarRentalTechStack from './sections/CarRentalTechStack';
import CarRentalGallery from './sections/CarRentalGallery';
import CarRentalCTA from './sections/CarRentalCTA';

const CarRentalPage = () => {
    return (
        <main>
            <CarRentalHero />
            <CarRentalAboutUs />
            <CarRentalFeatures />
            <CarRentalHowItWorks />
            <CarRentalTechStack />
            <CarRentalGallery />
            <CarRentalCTA />
        </main>
    );
};

export default CarRentalPage;
