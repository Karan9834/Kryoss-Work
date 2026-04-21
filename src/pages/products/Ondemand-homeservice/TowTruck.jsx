import React from 'react'
import { Helmet } from 'react-helmet-async';
import TowTruckHero from '@/components/homeservice-towtruck/TowTruckHero';
import TowTruckAbout from '@/components/homeservice-towtruck/TowTruckAbout';
import TowTruckHowItWorks from '@/components/homeservice-towtruck/TowTruckHowItWorks';
import TowTruckAppWalkThrough from '@/components/homeservice-towtruck/TowTruckAppWalkThrough';
import TowTruckCTA1 from '@/components/homeservice-towtruck/TowTruckCTA1';
import TowTruckCustomerFeatures from '@/components/homeservice-towtruck/TowTruckCustomerFeatures';
import TowTruckDriverFeatures from '@/components/homeservice-towtruck/TowTruckDriverFeatures';
import TowTruckAdminPanel from '@/components/homeservice-towtruck/TowTruckAdminPanel';
import TowTruckWhatWeProvide from '@/components/homeservice-towtruck/TowTruckWhatWeProvide';
import TowTruckCTA2 from '@/components/homeservice-towtruck/TowTruckCTA2';
import TowTruckBenifits from '@/components/homeservice-towtruck/TowTruckBenifits';
import TowTruckDigitalFootprints from '@/components/homeservice-towtruck/TowTruckDigitalFootprints';
import TowTruckWhyUs from '@/components/homeservice-towtruck/TowTruckWhyUs';
import TowTruckDevelopment from '@/components/homeservice-towtruck/TowTruckDevelopment';
import TowTruckCTA3 from '@/components/homeservice-towtruck/TowTruckCTA3';
import TowTruckBusinessWeSupport from '@/components/homeservice-towtruck/TowTruckBusinessWeSupport';
// import TowTruckClientFeedback from '@/components/homeservice-towtruck/TowTruckClientFeedback';
import TowTruckProductShowcase from '@/components/homeservice-towtruck/TowTruckProductShowcase';
import TowTruckAwards from '@/components/homeservice-towtruck/TowTruckAwards';
import TowTruckFAQ from '@/components/homeservice-towtruck/TowTruckFAQ';
import TowTruckTechStack from '@/components/homeservice-towtruck/TowTruckTechStack';
import ContactUs from '../../../components/Common/ContactUs';
import TowTruckBlogs from '@/components/homeservice-towtruck/TowTruckBlogs';
import TowTruckGetUpdates from '@/components/homeservice-towtruck/TowTruckGetUpdates';
const TowTruck = () => {
    return (
        <>
            <TowTruckHero />
            <TowTruckAbout />
            <TowTruckHowItWorks />
            <TowTruckAppWalkThrough />
            <TowTruckCTA1 />
            <TowTruckCustomerFeatures />
            <TowTruckDriverFeatures />
            <TowTruckAdminPanel />
            <TowTruckWhatWeProvide />
            <TowTruckCTA2 />
            <TowTruckBenifits />
            <TowTruckDigitalFootprints />
            <TowTruckWhyUs />
            <TowTruckDevelopment />
            <TowTruckCTA3 />
            <TowTruckBusinessWeSupport />
            {/* <TowTruckClientFeedback /> */}
            <TowTruckProductShowcase />
            <TowTruckAwards />
            <TowTruckFAQ />
            <TowTruckTechStack />
            <ContactUs
                theme="purple"
                productName="Tow Truck"
                bgGradient="from-purple-50 via-white to-pink-50"
                accentGradient="from-purple-500 via-pink-500 to-indigo-500"
                buttonGradient="from-purple-600 via-pink-600 to-indigo-600"
                showImage={true}
            />
            <TowTruckBlogs />
            <TowTruckGetUpdates />







        </>
    );
};

export default TowTruck;