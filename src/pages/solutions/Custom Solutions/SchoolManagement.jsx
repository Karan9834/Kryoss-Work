import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchoolManagement = () => {
    return (
        <div className="container mx-auto py-20 px-4">
            <Helmet>
                <title>School Management | KryossWork</title>
            </Helmet>
            <h1 className="mb-6 text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">School Management</h1>
            <p className="text-gray-600 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem]">Placeholder for School Management solution.</p>
        </div>
    );
};

export default SchoolManagement;
