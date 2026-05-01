import React, { useEffect } from 'react';
import FantasySportsHero from '../../../components/FantasySports-Landing/FantasySportsHero';
import FantasySportsAbout from '../../../components/FantasySports-Landing/FantasySportsAbout';
import FantasySportsFeatures from '../../../components/FantasySports-Landing/FantasySportsFeatures';
import FantasySportsCardSection from '../../../components/FantasySports-Landing/FantasySportsCardSection';
import FantasySportsWhyUs from '../../../components/FantasySports-Landing/FantasySportsWhyUs';
import FantasySportsGallery from '../../../components/FantasySports-Landing/FantasySportsGallery';

// Common Sections
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import TeamMoments from '../../../components/Common/TeamMoments';
import PopularBlogs from '../../../components/Blog/PopularBlogs';

const FantasySports = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToProducts = () => {
        const productsSection = document.getElementById('fantasy-products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#F0FDF4]">
            {/* 1. Hero Section */}
            <FantasySportsHero onExplore={scrollToProducts} />

            {/* 2. About Section */}
            <div className="bg-white">
                <FantasySportsAbout />
            </div>

            {/* 3. Features Section */}
            <div style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 50%, #DCFCE7 100%)' }}>
                <FantasySportsFeatures />
            </div>

            {/* 4. Card Section (Products) */}
            <div className="bg-white">
                <FantasySportsCardSection />
            </div>

            {/* 5. Why Us Section */}
            <FantasySportsWhyUs />

            {/* 5.5 Gallery Section - Added from assets */}
            <FantasySportsGallery />

            {/* 6. Testimonial Section (Common) */}
            <div className="bg-white">
                <Testimonial
                    theme="green"
                    bgGradient="from-white to-green-50"
                    cardGradient="from-green-600 to-emerald-500"
                    headingText="What Our Fantasy Sports Clients Say"
                    subheadingText="Trusted by fantasy leagues and sports tech startups worldwide."
                />
            </div>

            {/* 7. Industries Section (Common) */}
            <div className="bg-green-50">
                <Industries
                    theme={{
                        bg: "bg-transparent",
                        primary: "text-[#1E293B]",
                        iconBg: "bg-green-100",
                        iconColor: "text-green-600"
                    }}
                />
            </div>

            {/* 8. Our Work Section (Common) */}
            <div className="bg-white">
                <OurWork
                    theme={{
                        primary: "text-[#1E293B]",
                        accent: "bg-green-500",
                        bg: "bg-transparent"
                    }}
                />
            </div>
            <PopularBlogs/>

            {/* 9. Contact Us Section (Common) */}
            <div className="bg-[#F0FDF4]">
                <ContactUs
                    theme="green"
                    productName="Fantasy Sports"
                    bgGradient="from-green-50 to-emerald-50"
                    cardBg="bg-white"
                />
            </div>
            <TeamMoments/>
        </div>
    );
};

export default FantasySports;
