import React from 'react';
import { Helmet } from 'react-helmet-async';

const HotelManagement = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <Helmet>
                <title>Hotel Management | KryossWork</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-6">Hotel Management</h1>
            <p className="text-gray-600">Placeholder for Hotel Management solution.</p>
        </div>
    );
};

export default HotelManagement;
