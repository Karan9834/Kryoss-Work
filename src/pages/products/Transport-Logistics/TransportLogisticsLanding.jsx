import React, { useEffect } from 'react';
import LogisticsHero from '../../../components/TransportLogistics-Landing/LogisticsHero';
import LogisticsAbout from '../../../components/TransportLogistics-Landing/LogisticsAbout';
import LogisticsFeatures from '../../../components/TransportLogistics-Landing/LogisticsFeatures';
import LogisticsCardSection from '../../../components/TransportLogistics-Landing/LogisticsCardSection';
import LogisticsWhyUs from '../../../components/TransportLogistics-Landing/LogisticsWhyUs';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import TeamMoments from '../../../components/Common/TeamMoments';
import PopularBlogs from '../../../components/Blog/PopularBlogs';

const TransportLogisticsLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <LogisticsHero />
            <LogisticsAbout />
            <LogisticsFeatures />
            <LogisticsCardSection />
            <LogisticsWhyUs />
            
            {/* Common Sections */}
            <Testimonial />
            <Industries />
            <OurWork />
            <PopularBlogs/>
            <ContactUs />
            <TeamMoments/>
        </div>
    );
};

export default TransportLogisticsLanding;
