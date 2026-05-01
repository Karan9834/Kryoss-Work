import React from 'react'
import { Helmet } from 'react-helmet-async';
import ErpHero from '@/components/enterprise-erp/ErpHero';
import ErpAbout from '@/components/enterprise-erp/ErpAbout';
import ErpAppWorkflow from '@/components/enterprise-erp/ErpAppWorkflow';
import ErpCardSection from '@/components/enterprise-erp/ErpCardSection';
import ErpAppDevelopment from '@/components/enterprise-erp/ErpAppDevelopment';
import ErpCTA1 from '@/components/enterprise-erp/ErpCTA1';
import ErpFeatures from '@/components/enterprise-erp/ErpFeatures';
import ErpAdminPanel from '@/components/enterprise-erp/ErpAdminPanel';
import ErpWhatWeProvide from '@/components/enterprise-erp/ErpWhatWeProvide';
import ErpAppWorkflowOverview from '@/components/enterprise-erp/ErpAppWorkflowOverview';
import ErpCTA2 from '@/components/enterprise-erp/ErpCTA2';
import ErpBenifits from '@/components/enterprise-erp/ErpBenifits';
import ErpDevelopmentProcess from '@/components/enterprise-erp/ErpDevelopmentProcess';
import ErpDigitalFootprints from '@/components/enterprise-erp/ErpDigitalFootprints';
import ErpWhyUs from '@/components/enterprise-erp/ErpWhyUs';
import ErpBusinessWeSupport from '@/components/enterprise-erp/ErpBusinessWeSupport';
import ErpProductShowcase from '@/components/enterprise-erp/ErpProductShowcase';
import ErpAwards from '@/components/enterprise-erp/ErpAwards';
import ErpFAQ from '@/components/enterprise-erp/ErpFAQ';
import ErpTechStack from '@/components/enterprise-erp/ErpTechStack';
import ContactUs from '@/components/Common/ContactUs';
import ErpBlogs from '@/components/enterprise-erp/ErpBlogs';
import ErpGetUpdates from '@/components/enterprise-erp/ErpGetUpdates';


const ErpPage = () => {
    return (
        <>

            <ErpHero />
            <ErpAbout />
            <ErpAppWorkflow />
            <ErpCardSection />
            <ErpAppDevelopment />
            <ErpCTA1 />
            <ErpFeatures />
            <ErpAdminPanel />
            <ErpWhatWeProvide />
            <ErpAppWorkflowOverview />
            <ErpCTA2 />
            <ErpBenifits />
            <ErpDevelopmentProcess />
            <ErpDigitalFootprints />
            <ErpWhyUs />
            <ErpBusinessWeSupport />
            <ErpProductShowcase />
            <ErpAwards />
            <ErpFAQ />
            <ErpTechStack />
            <ContactUs theme="blue" productName="ERP" />
            <ErpBlogs />
            <ErpGetUpdates />

        </>
    )
}

export default ErpPage;