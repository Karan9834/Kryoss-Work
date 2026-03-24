import React, { useEffect } from 'react';
import TaxiHero from '../../../components/Taxi-Landing/TaxiHero';
import TaxiAbout from '../../../components/Taxi-Landing/TaxiAbout';
import TaxiFeatures from '../../../components/Taxi-Landing/TaxiFeatures';
import TaxiCardSection from '../../../components/Taxi-Landing/TaxiCardSection';
import TaxiWhyUs from '../../../components/Taxi-Landing/TaxiWhyUs';

// Common Sections
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const TaxiLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#F8FAFC]">
            {/* 1. Hero Section */}
            <TaxiHero />

            {/* 2. About Section */}
            <div className="bg-white">
                <TaxiAbout />
            </div>

            {/* 3. Features Section */}
            <div className="bg-slate-50">
                <TaxiFeatures />
            </div>

            {/* 4. Card Section (Products) */}
            <div className="bg-white">
                <TaxiCardSection />
            </div>

            {/* 5. Why Us Section */}
            <TaxiWhyUs />

            {/* 6. Testimonial Section (Common) */}
            <div className="bg-white">
                <Testimonial
                    theme="yellow"
                    bgGradient="from-white to-slate-50"
                    cardGradient="from-yellow-500 to-orange-500"
                    headingText="What Our Mobility Partners Say"
                    subheadingText="Trusted by leading fleet owners and transport startups worldwide."
                />
            </div>

            {/* 7. Industries Section (Common) */}
            <div className="bg-slate-50">
                <Industries
                    theme={{
                        bg: "bg-transparent",
                        primary: "text-[#1E293B]",
                        iconBg: "bg-yellow-100",
                        iconColor: "text-yellow-600"
                    }}
                />
            </div>

            {/* 8. Our Work Section (Common) */}
            <div className="bg-white">
                <OurWork
                    theme={{
                        primary: "text-[#1E293B]",
                        accent: "bg-yellow-500",
                        bg: "bg-transparent"
                    }}
                />
            </div>

            {/* 9. Contact Us Section (Common) */}
            <div className="bg-slate-50">
                <ContactUs
                    theme="yellow"
                    productName="Taxi & Ride Hailing"
                    bgGradient="from-slate-100 to-white"
                    cardBg="bg-white"
                />
            </div>
        </div>
    );
};

export default TaxiLanding;
