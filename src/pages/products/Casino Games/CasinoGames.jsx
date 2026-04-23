import React, { useEffect } from 'react';
import CasinoHero from '../../../components/Casino-Landing/CasinoHero';
import CasinoAbout from '../../../components/Casino-Landing/CasinoAbout';
import CasinoFeatures from '../../../components/Casino-Landing/CasinoFeatures';
import CasinoCardSection from '../../../components/Casino-Landing/CasinoCardSection';
import CasinoWhyUs from '../../../components/Casino-Landing/CasinoWhyUs';

// Common Sections
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import TeamMoments from '../../../components/Common/TeamMoments';
import PopularBlogs from '../../../components/Blog/PopularBlogs';

const CasinoGames = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToProducts = () => {
        const productsSection = document.getElementById('casino-products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#FFF7ED]">
            {/* 1. Hero Section */}
            <CasinoHero onExplore={scrollToProducts} />

            {/* 2. About Section */}
            <div className="bg-white">
                <CasinoAbout />
            </div>

            {/* 3. Features Section */}
            <div style={{ background: 'linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 50%, #FFFBEB 100%)' }}>
                <CasinoFeatures />
            </div>

            {/* 4. Card Section (Products) */}
            <div className="bg-white">
                <CasinoCardSection />
            </div>

            {/* 5. Why Us Section */}
            <CasinoWhyUs />

            {/* 6. Testimonial Section (Common) */}
            <div className="bg-white">
                <Testimonial
                    theme="yellow"
                    bgGradient="from-white to-amber-50"
                    cardGradient="from-orange-600 to-amber-500"
                    headingText="What Our Casino Clients Say"
                    subheadingText="Trusted by casino operators and gaming startups worldwide."
                />
            </div>

            {/* 7. Industries Section (Common) */}
            <div className="bg-amber-50">
                <Industries
                    theme={{
                        bg: "bg-transparent",
                        primary: "text-[#1E293B]",
                        iconBg: "bg-amber-100",
                        iconColor: "text-orange-600"
                    }}
                />
            </div>

            {/* 8. Our Work Section (Common) */}
            <div className="bg-white">
                <OurWork
                    theme={{
                        primary: "text-[#1E293B]",
                        accent: "bg-orange-500",
                        bg: "bg-transparent"
                    }}
                />
            </div>
            <div className="bg-white">
                <PopularBlogs/>
            </div>

            {/* 9. Contact Us Section (Common) */}
            <div className="bg-[#FFF7ED]">
                <ContactUs
                    theme="yellow"
                    productName="Casino Gaming"
                    bgGradient="from-amber-50 to-orange-50"
                    cardBg="bg-white"
                />
            </div>
            <TeamMoments/>
        </div>
    );
};

export default CasinoGames;
