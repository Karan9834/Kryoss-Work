import React from 'react';
import { Helmet } from 'react-helmet-async';

const NewsManagement = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <Helmet>
                <title>News Management | KryossWork</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-6">News Management</h1>
            <p className="text-gray-600">Placeholder for News Management solution.</p>
        </div>
    );
};

export default NewsManagement;
