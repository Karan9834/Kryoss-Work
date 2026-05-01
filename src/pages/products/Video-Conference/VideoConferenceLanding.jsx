import React, { useEffect } from 'react';
import VideoHero from '../../../components/VideoConference-Landing/VideoHero';
import VideoAbout from '../../../components/VideoConference-Landing/VideoAbout';
import VideoFeatures from '../../../components/VideoConference-Landing/VideoFeatures';
import VideoCardSection from '../../../components/VideoConference-Landing/VideoCardSection';
import VideoWhyUs from '../../../components/VideoConference-Landing/VideoWhyUs';
import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
import TeamMoments from '../../../components/Common/TeamMoments';
import PopularBlogs from '../../../components/Blog/PopularBlogs';

const VideoConferenceLanding = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <VideoHero />
            <VideoAbout />
            <VideoFeatures />
            <VideoCardSection />
            <VideoWhyUs />
            
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

export default VideoConferenceLanding;
