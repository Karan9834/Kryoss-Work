import React, { useEffect } from 'react';
import BettingHero from '../../../components/Betting-Landing/BettingHero';
import BettingAbout from '../../../components/Betting-Landing/BettingAbout';
import BettingFeatures from '../../../components/Betting-Landing/BettingFeatures';
import BettingCardSection from '../../../components/Betting-Landing/BettingCardSection';
import BettingWhyUs from '../../../components/Betting-Landing/BettingWhyUs';

// Common Sections
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import TeamMoments from '../../../components/Common/TeamMoments';
import PopularBlogs from '../../../components/Blog/PopularBlogs';

const BettingApps = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToProducts = () => {
        const productsSection = document.getElementById('betting-products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#ECFDF5]">
            {/* 1. Hero Section */}
            <BettingHero onExplore={scrollToProducts} />

            {/* 2. About Section */}
            <div className="bg-white">
                <BettingAbout />
            </div>

            {/* 3. Features Section */}
            <BettingFeatures />

            {/* 4. Card Section (Products) */}
            <div className="bg-white">
                <BettingCardSection />
            </div>

            {/* 5. Why Us Section */}
            <BettingWhyUs />

            {/* 6. Testimonial Section (Common) */}
            <div className="bg-white">
                <Testimonial
                    theme="emerald"
                    bgGradient="from-white to-emerald-50"
                    cardGradient="from-emerald-600 to-teal-500"
                    headingText="What Our Betting Clients Say"
                    subheadingText="Trusted by sportsbooks, gaming startups, and bookmakers worldwide."
                />
            </div>

            {/* 7. Industries Section (Common) */}
            <div className="bg-emerald-50">
                <Industries
                    theme={{
                        bg: "bg-transparent",
                        primary: "text-[#1E293B]",
                        iconBg: "bg-emerald-100",
                        iconColor: "text-emerald-600"
                    }}
                />
            </div>

            {/* 8. Our Work Section (Common) */}
            <div className="bg-white">
                <OurWork
                    theme={{
                        primary: "text-[#1E293B]",
                        accent: "bg-emerald-500",
                        bg: "bg-transparent"
                    }}
                />
            </div>
            <div className="bg-white">
                <PopularBlogs/>
            </div>

            {/* 9. Contact Us Section (Common) */}
            <div className="bg-[#ECFDF5]">
                <ContactUs
                    theme="emerald"
                    productName="Betting Solutions"
                    bgGradient="from-emerald-50 to-teal-50"
                    cardBg="bg-white"
                />
            </div>
            <TeamMoments/>
        </div>
    );
};

export default BettingApps;
