import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Import modular sections
import UberHero from '@/components/transport-uber/UberHero';
import UberCloneForBusiness from '@/components/transport-uber/UberCloneForBusiness';
import UberRiderFeatures from '@/components/transport-uber/UberRiderFeatures';
import UberDriverFeatures from '@/components/transport-uber/UberDriverFeatures';
import UberAIGrowth from '@/components/transport-uber/UberAIGrowth';
import UberlaunchCTA from '@/components/transport-uber/UberlaunchCTA';
import UberAdminPanel from '@/components/transport-uber/UberAdminPanel';
import UberWhatYouGet from '@/components/transport-uber/UberWhatYouGet';
import UberStrategy from '@/components/transport-uber/UberStrategy';
import UberWhyUs from '@/components/transport-uber/UberWhyUs';
import UberCTA2 from '@/components/transport-uber/UberCTA2';
import UberServices from '@/components/transport-uber/UberServices';
import UberCustomerFeatures from '@/components/transport-uber/UberCustomerFeatures';
import UberTechStack from '@/components/transport-uber/UberTechStack';
import UberContactForm from '@/components/transport-uber/UberContactForm';
import UberFAQ from '@/components/transport-uber/UberFAQ';

const TaxiBookingUber = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="uber-clone-page bg-white">
            <Helmet>
                <title>Uber Clone App | AI-Powered Taxi Booking Script | KryossWork</title>
                <meta name="description" content="Launch your own AI-powered taxi booking platform with our scalable Uber clone script. Features for customers, drivers, and admin panel." />
                <meta name="keywords" content="uber clone, taxi booking app, ride hailing script, taxi app development, uber clone script" />
            </Helmet>

            <main>
                <UberHero />
                <UberCloneForBusiness />
                <UberRiderFeatures />
                <UberDriverFeatures />
                <UberAIGrowth />
                <UberlaunchCTA />
                <UberAdminPanel />
                <UberWhatYouGet />
                <UberStrategy />
                <UberWhyUs />
                <UberCTA2 />

                <UberServices />
                <UberCustomerFeatures />
                <UberTechStack />
                <UberFAQ />
                <UberContactForm />
            </main>
        </div>
    );
};

export default TaxiBookingUber;
