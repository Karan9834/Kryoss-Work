import React from 'react';
import { Helmet } from 'react-helmet-async';

const ClassifiedApp = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <Helmet>
                <title>Classified App | KryossWork</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-6">Classified App</h1>
            <p className="text-gray-600">Placeholder for Classified App solution.</p>
        </div>
    );
};

export default ClassifiedApp;
