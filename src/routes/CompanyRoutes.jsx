import React from 'react';
import { Route } from 'react-router-dom';
import AboutPage from '../pages/company/About';
import ContactPage from '../pages/company/Contact';
import TestimonialPage from '../pages/company/Testimonial';
import HealthcareSolution from '../pages/solutions/Healthcare';
import LifeAtKryossWorkPage from '../pages/company/LifeArKryossWork';

export const CompanyRoutes = [
    <Route key="company-about" path="company/about" element={<AboutPage />} />,
    <Route key="company-contact" path="company/contact" element={<ContactPage />} />,
    <Route key="company-testimonial" path="company/testimonials" element={<TestimonialPage />} />,
        <Route key="company-life" path="company/life-at-kryosswork" element={<LifeAtKryossWorkPage />} />,
    <Route key="solutions-healthcare" path="solutions/healthcare" element={<HealthcareSolution />} />,
    // Add other company/solution routes here
];
