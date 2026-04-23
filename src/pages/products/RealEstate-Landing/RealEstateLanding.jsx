import React, { useEffect } from 'react';
import RealEstateHero from '../../../components/RealEstate-Landing/RealEstateHero';
import RealEstateAbout from '../../../components/RealEstate-Landing/RealEstateAbout';
import RealEstateFeatures from '../../../components/RealEstate-Landing/RealEstateFeatures';
import RealEstateCardSection from '../../../components/RealEstate-Landing/RealEstateCardSection';
import RealEstateWhyUs from '../../../components/RealEstate-Landing/RealEstateWhyUs';

// Common Sections
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import PopularBlogs from '../../../components/Blog/PopularBlogs';
import TeamMoments from '../../../components/Common/TeamMoments';

const RealEstateLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#F0FDF4]">
            {/* 1. Hero Section */}
            <RealEstateHero />

            {/* 2. About Section */}
            <div className="bg-white">
                <RealEstateAbout />
            </div>

            {/* 3. Features Section */}
            <div className="bg-[#F8FAF9]">
                <RealEstateFeatures />
            </div>

            {/* 4. Card Section (Products) */}
            <div className="bg-white">
                <RealEstateCardSection />
            </div>

            {/* 5. Why Us Section */}
            <RealEstateWhyUs />

            {/* 6. Testimonial Section (Common) */}
            <div className="bg-white">
                <Testimonial
                    theme="green"
                    bgGradient="from-white to-emerald-50"
                    cardGradient="from-emerald-600 to-teal-500"
                    headingText="What Our Real Estate Clients Say"
                    subheadingText="Trusted by property developers and agencies worldwide."
                />
            </div>

            {/* 7. Industries Section (Common) */}
            <div className="bg-[#F0FDF4]">
                <Industries
                    theme={{
                        bg: "bg-transparent",
                        primary: "text-emerald-600",
                        iconBg: "bg-emerald-100",
                        iconColor: "text-emerald-600",
                    }}
                />
            </div>

            {/* 8. Our Work Section (Common) */}
            <div className="bg-white">
                <OurWork
                    theme={{
                        primary: "text-[#1E293B]",
                        accent: "bg-emerald-600",
                        bg: "bg-transparent"
                    }}
                />
            </div>
            <div className="bg-orange-50">
                <PopularBlogs/>
            </div>

            {/* 9. Contact Us Section (Common) */}
            <ContactUs
                theme="green"
                productName="Real Estate"
                bgGradient="from-[#F0FDF4] to-[#FEF3C7]"
                accentGradient="from-emerald-600 to-teal-500"
                buttonGradient="from-emerald-600 to-amber-500"
                showImage={true}
            />
            <TeamMoments/>
        </div>
    );
};

export default RealEstateLanding;
