import React from 'react';
import { Helmet } from 'react-helmet-async';
import LmsHero from '@/components/enterprise-lms/LmsHero';
import LmsAbout from '@/components/enterprise-lms/LmsAbout';
import LmsAppWorkflow from '@/components/enterprise-lms/LmsAppWorkflow';
import LmsCardSection from '@/components/enterprise-lms/LmsCardSection';
import LmsAppDevelopment from '@/components/enterprise-lms/LmsAppDevelopment';
import LmsCTA1 from '@/components/enterprise-lms/LmsCTA1';
import LmsFeatures from '@/components/enterprise-lms/LmsFeatures';
import LmsAdminPanel from '@/components/enterprise-lms/LmsAdminPanel';
import LmsWhatWeProvide from '@/components/enterprise-lms/LmsWhatWeProvide';
import LmsAppWorkflowOverview from '@/components/enterprise-lms/LmsAppWorkflowOverview';
import LmsCTA2 from '@/components/enterprise-lms/LmsCTA2';
import LmsBenifits from '@/components/enterprise-lms/LmsBenifits';
import LmsDevelopmentProcess from '@/components/enterprise-lms/LmsDevelopmentProcess';
import LmsDigitalFootprints from '@/components/enterprise-lms/LmsDigitalFootprints';
import LmsWhyUs from '@/components/enterprise-lms/LmsWhyUs';
import LmsBusinessWeSupport from '@/components/enterprise-lms/LmsBusinessWeSupport';
import LmsProductShowcase from '@/components/enterprise-lms/LmsProductShowcase';
import LmsAwards from '@/components/enterprise-lms/LmsAwards';
import LmsFAQ from '@/components/enterprise-lms/LmsFAQ';
import LmsTechStack from '@/components/enterprise-lms/LmsTechStack';
import LmsContact from '@/components/enterprise-lms/LmsContact';
import LmsBlogs from '@/components/enterprise-lms/LmsBlogs';
import LmsGetUpdates from '@/components/enterprise-lms/LmsGetUpdates';

const LmsPage = () => {
    return (
        <>
            <Helmet>
                <title>LMS Product Development | Vyom LMS</title>
                <meta name="description" content="Empower your educational institution with our custom LMS solutions. High-performance learning management systems for modern education." />
            </Helmet>

            <LmsHero />
            <LmsAbout />
            <LmsAppWorkflow />
            <LmsCardSection />
            <LmsAppDevelopment />
            <LmsCTA1 />
            <LmsFeatures />
            <LmsAdminPanel />
            <LmsWhatWeProvide />
            <LmsAppWorkflowOverview />
            <LmsCTA2 />
            <LmsBenifits />
            <LmsDevelopmentProcess />
            
            {/* Extended Sections - LMS Prefixed */}
            <LmsDigitalFootprints />
            <LmsWhyUs />
            <LmsBusinessWeSupport />
            <LmsProductShowcase />
            <LmsAwards />
            <LmsFAQ />
            <LmsTechStack />
            <LmsContact />
            <LmsBlogs />
            <LmsGetUpdates />
        </>
    )
}

export default LmsPage;