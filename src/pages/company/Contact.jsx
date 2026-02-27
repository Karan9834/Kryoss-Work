import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '@/components/home/Contact';

const ContactPage = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Us | KryossWork</title>
            </Helmet>
            <div className="py-10">
                <ContactSection />
            </div>
        </div>
    );
};

export default ContactPage;
