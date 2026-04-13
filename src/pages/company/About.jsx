import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '@/components/home/About';
import Hero from '../../components/About/Hero';
import About from '../../components/About/About';
import GrowthJourney from '../../components/About/GrowthJourney';
import EmpoweringGrowth from '../../components/About/EmpoweringGrowth';
import MovingStats from '../../components/About/MovingStats';
import VisionMission from '../../components/About/VisionMission';
import AwardsRecognition from '../../components/About/AwardsRecognition';
// import LeadershipInsights from '../../components/About/LeadershipInsights';
import Commitment from '../../components/About/Commitment';
import AwardRecognition from '../../components/About/AwardRecognition';
import Contact from '../../components/About/Contact';
import NewsletterSection from '../../components/About/NewsletterSection';
import TeamMoments from '../../components/About/TeamMoments';


const AboutPage = () => {
    return (
        // <div>
        //     <Helmet>
        //         <title>About Us | KryossWork</title>
        //     </Helmet>
        //     <div className="py-10">
        //         <AboutSection />
        //     </div>
        // </div>

        <>
            <Hero />
            <About />
            <GrowthJourney />
            <EmpoweringGrowth />
            <MovingStats />
            <VisionMission />
            <AwardsRecognition />
            {/* <LeadershipInsights/> */}
            <Commitment />
            <AwardRecognition />
            <Contact />
            <NewsletterSection />
            <TeamMoments />

        </>
    );
};

export default AboutPage;
