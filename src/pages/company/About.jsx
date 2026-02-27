import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '@/components/home/About';

const AboutPage = () => {
    return (
        <div>
            <Helmet>
                <title>About Us | KryossWork</title>
            </Helmet>
            <div className="py-10">
                <AboutSection />
            </div>
        </div>
    );
};

export default AboutPage;
