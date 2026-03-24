import React, { useEffect } from 'react';
import DatingHero from '../../../components/Dating-Matrimony-Landing/DatingHero';
import DatingAbout from '../../../components/Dating-Matrimony-Landing/DatingAbout';
import DatingFeatures from '../../../components/Dating-Matrimony-Landing/DatingFeatures';
import DatingCardSection from '../../../components/Dating-Matrimony-Landing/DatingCardSection';
import DatingWhyUs from '../../../components/Dating-Matrimony-Landing/DatingWhyUs';

// Common Sections
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const MatrimonyLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Hero Section */}
            <DatingHero />

            {/* 2. About Section */}
            <DatingAbout />

            {/* 3. Features Section */}
            <DatingFeatures />

            {/* 4. Product Cards Section */}
            <div id="dating-products">
                <DatingCardSection />
            </div>

            {/* 5. Why Choose Us Section */}
            <DatingWhyUs />

            {/* 6. Testimonials Section (Common) */}
            <div className="bg-white">
                <Testimonial 
                    theme="rose" 
                    title="Success Stories" 
                    subtitle="What our partners say about our matchmaking tech."
                />
            </div>

            {/* 7. Industries Section (Common) */}
            <div className="bg-rose-50/30">
                <Industries 
                    title="Where Love Connects"
                    subtitle="Our tech powers matchmaking across diverse niches."
                />
            </div>

            {/* 8. Our Work Section (Common) */}
            <div className="bg-white">
                <OurWork 
                    title="Our Portfolio"
                    subtitle="Explore our successful social and matchmaking deployments."
                />
            </div>

            {/* 9. Contact Us Section (Common) */}
            <div className="bg-slate-50">
                <ContactUs
                    theme="rose"
                    productName="Matrimony & Dating"
                    bgGradient="from-rose-50 to-white"
                    cardBg="bg-white"
                />
            </div>
        </div>
    );
};

export default MatrimonyLanding;
