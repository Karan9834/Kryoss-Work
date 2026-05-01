import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const GojekOverview = lazy(() => import('../pages/gojek-clone/Overview'));
const GojekFeatures = lazy(() => import('../pages/gojek-clone/Features'));
const GojekLiveDemo = lazy(() => import('../pages/gojek-clone/LiveDemo'));
const GojekPricing = lazy(() => import('../pages/gojek-clone/Pricing'));

export const GojekRoutes = () => (
    <>
        <Route key="gojek-overview" path="gojek-clone/overview" element={<GojekOverview />} />
        <Route key="gojek-features" path="gojek-clone/features" element={<GojekFeatures />} />
        <Route key="gojek-demo" path="gojek-clone/live-demo" element={<GojekLiveDemo />} />
        <Route key="gojek-pricing" path="gojek-clone/pricing" element={<GojekPricing />} />
        <Route key="gojek-root" path="gojek-clone" element={<GojekOverview />} />
    </>
);
