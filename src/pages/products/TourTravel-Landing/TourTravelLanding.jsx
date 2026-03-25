import React, { useEffect } from 'react';
import TourTravelHero from '../../../components/TourTravel-Landing/TourTravelHero';
import TourTravelAbout from '../../../components/TourTravel-Landing/TourTravelAbout';
import TourTravelFeatures from '../../../components/TourTravel-Landing/TourTravelFeatures';
import TourTravelCardSection from '../../../components/TourTravel-Landing/TourTravelCardSection';
import TourTravelWhyUs from '../../../components/TourTravel-Landing/TourTravelWhyUs';

// Common Sections
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const TourTravelLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#EFF6FF]">
            {/* 1. Hero Section */}
            <TourTravelHero />

            {/* 2. About Section */}
            <div className="bg-white">
                <TourTravelAbout />
            </div>

            {/* 3. Features Section */}
            <div style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F0FDFA 50%, #FFFBEB 100%)' }}>
                <TourTravelFeatures />
            </div>

            {/* 4. Card Section (Products) */}
            <div className="bg-white">
                <TourTravelCardSection />
            </div>

            {/* 5. Why Us Section */}
            <TourTravelWhyUs />

            {/* 6. Testimonial Section (Common) */}
            <div className="bg-white">
                <Testimonial
                    theme="yellow"
                    bgGradient="from-white to-sky-50"
                    cardGradient="from-sky-600 to-cyan-500"
                    headingText="What Our Travel Clients Say"
                    subheadingText="Trusted by travel agencies and tour operators worldwide."
                />
            </div>

            {/* 7. Industries Section (Common) */}
            <div className="bg-sky-50">
                <Industries
                    theme={{
                        bg: "bg-transparent",
                        primary: "text-[#1E293B]",
                        iconBg: "bg-sky-100",
                        iconColor: "text-sky-600"
                    }}
                />
            </div>

            {/* 8. Our Work Section (Common) */}
            <div className="bg-white">
                <OurWork
                    theme={{
                        primary: "text-[#1E293B]",
                        accent: "bg-sky-500",
                        bg: "bg-transparent"
                    }}
                />
            </div>

            {/* 9. Contact Us Section (Common) */}
            <div className="bg-[#EFF6FF]">
                <ContactUs
                    theme="yellow"
                    productName="Tour & Travel"
                    bgGradient="from-sky-50 to-amber-50"
                    cardBg="bg-white"
                />
            </div>
        </div>
    );
};

export default TourTravelLanding;
