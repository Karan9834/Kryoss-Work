import React from 'react';
import { Helmet } from 'react-helmet-async';

const HomeServiceApp = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <Helmet>
                <title>Home Service App | KryossWork</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-6">Home Service App</h1>
            <p className="text-gray-600">Placeholder for Home Service App solution.</p>
        </div>
    );
};

export default HomeServiceApp;
