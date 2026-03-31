import React from 'react';
import { Route } from 'react-router-dom';
import AboutPage from '../pages/company/About';
import ContactPage from '../pages/company/Contact';
import TestimonialPage from '../pages/company/Testimonial';
import LifeAtKryossWorkPage from '../pages/company/LifeArKryossWork';
import TeamPage from '../pages/company/Team';
import PoliciesPage from '../pages/company/Policies';
import SiteMapPage from '../pages/company/SiteMap';

import CareerPage from '../pages/company/Careers';
export const CompanyRoutes = [
    <Route key="company-about" path="company/about" element={<AboutPage />} />,
    <Route key="company-contact" path="company/contact" element={<ContactPage />} />,
    <Route key="company-testimonial" path="company/testimonials" element={<TestimonialPage />} />,
        <Route key="company-life" path="company/life-at-kryosswork" element={<LifeAtKryossWorkPage />} />,
         <Route key="company-team" path="company/team" element={<TeamPage />} />,

         <Route key="company-sitemap" path="company/sitemap" element={<SiteMapPage />} />,
         <Route key="company-policies" path="company/policies" element={<PoliciesPage />} />,
    // Add other company/solution routes here
    <Route key="company-career" path="company/careers" element={<CareerPage />} />
];
