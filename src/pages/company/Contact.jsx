import React from 'react';
import { Helmet } from 'react-helmet-async';
// import ContactSection from '@/components/home/Contact';
import Hero from '../../components/Contact/Hero';
import ContactForm from '../../components/Contact/ContactForm';
import ContactDetails from '../../components/Contact/ContactDetails';
import TeamMoments from '../../components/Contact/TeamMoments';
import NewsletterSection from '../../components/Contact/NewsletterSection';
import ProcessSection from '../../components/Contact/ProcessSection';

const ContactPage = () => {
    return (
        // <div>
        //     <Helmet>
        //         <title>Contact Us | KryossWork</title>
        //     </Helmet>
        //     <div className="py-10">
        //         <ContactSection />
        //     </div>
        // </div>

        <>
        <Hero/>
        <ProcessSection/>
        <NewsletterSection/>
       <TeamMoments/>
        </>
    );
};

export default ContactPage;







