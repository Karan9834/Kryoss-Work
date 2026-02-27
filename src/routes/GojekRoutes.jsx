import React from 'react';
import { Route } from 'react-router-dom';
import GojekOverview from '../pages/gojek-clone/Overview';
import GojekFeatures from '../pages/gojek-clone/Features';
import GojekLiveDemo from '../pages/gojek-clone/LiveDemo';
import GojekPricing from '../pages/gojek-clone/Pricing';

export const GojekRoutes = [
    <Route key="gojek-overview" path="gojek-clone/overview" element={<GojekOverview />} />,
    <Route key="gojek-features" path="gojek-clone/features" element={<GojekFeatures />} />,
    <Route key="gojek-demo" path="gojek-clone/live-demo" element={<GojekLiveDemo />} />,
    <Route key="gojek-pricing" path="gojek-clone/pricing" element={<GojekPricing />} />,
    <Route key="gojek-root" path="gojek-clone" element={<GojekOverview />} />,
];
