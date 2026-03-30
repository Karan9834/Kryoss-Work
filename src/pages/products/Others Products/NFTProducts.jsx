import React, { useEffect } from 'react';
import NFTHero from '../../../components/NFT-Landing/NFTHero';
import NFTAbout from '../../../components/NFT-Landing/NFTAbout';
import NFTFeatures from '../../../components/NFT-Landing/NFTFeatures';
import NFTCardSection from '../../../components/NFT-Landing/NFTCardSection';
import NFTWhyUs from '../../../components/NFT-Landing/NFTWhyUs';

// Common Sections
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';

const NFTProducts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToProducts = () => {
        const productsSection = document.getElementById('nft-products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#F5F3FF]">
            {/* 1. Hero Section */}
            <NFTHero onExplore={scrollToProducts} />

            {/* 2. About Section */}
            <div className="bg-white">
                <NFTAbout />
            </div>

            {/* 3. Features Section */}
            <NFTFeatures />

            {/* 4. Card Section (Products) */}
            <div className="bg-white">
                <NFTCardSection />
            </div>

            {/* 5. Why Us Section */}
            <NFTWhyUs />

            {/* 6. Testimonial Section (Common) */}
            <div className="bg-white">
                <Testimonial
                    theme="violet"
                    bgGradient="from-white to-violet-50"
                    cardGradient="from-violet-600 to-fuchsia-500"
                    headingText="What Our NFT Clients Say"
                    subheadingText="Trusted by artists, creators, and blockchain entrepreneurs worldwide."
                />
            </div>

            {/* 7. Industries Section (Common) */}
            <div className="bg-violet-50">
                <Industries
                    theme={{
                        bg: "bg-transparent",
                        primary: "text-[#1E293B]",
                        iconBg: "bg-violet-100",
                        iconColor: "text-violet-600"
                    }}
                />
            </div>

            {/* 8. Our Work Section (Common) */}
            <div className="bg-white">
                <OurWork
                    theme={{
                        primary: "text-[#1E293B]",
                        accent: "bg-violet-500",
                        bg: "bg-transparent"
                    }}
                />
            </div>

            {/* 9. Contact Us Section (Common) */}
            <div className="bg-[#F5F3FF]">
                <ContactUs
                    theme="violet"
                    productName="NFT Solutions"
                    bgGradient="from-violet-50 to-fuchsia-50"
                    cardBg="bg-white"
                />
            </div>
        </div>
    );
};

export default NFTProducts;
