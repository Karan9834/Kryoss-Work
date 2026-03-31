import React from 'react';
import { Helmet } from 'react-helmet-async';

const LaundryApp = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <Helmet>
                <title>Laundry App | KryossWork</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-6">Laundry App</h1>
            <p className="text-gray-600">Placeholder for Laundry App solution.</p>
        </div>
    );
};

export default LaundryApp;
