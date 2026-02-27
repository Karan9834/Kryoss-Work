import React from 'react';
import { Helmet } from 'react-helmet-async';

const GojekOverview = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <Helmet>
                <title>Gojek Clone Overview | KryossWork</title>
                <meta name="description" content="Overview of our Multi-Service App solution." />
            </Helmet>
            <h1 className="text-4xl font-bold mb-6">Gojek Clone Overview</h1>
            <p className="text-gray-600 mb-8">This is a placeholder for the Gojek Clone Overview page.</p>
            {/* Hero, Features, etc. will go here */}
        </div>
    );
};

export default GojekOverview;
