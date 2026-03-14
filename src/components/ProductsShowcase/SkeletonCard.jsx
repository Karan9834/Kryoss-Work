import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm h-full animate-pulse">
            {/* Image Container Skeleton */}
            <div className="aspect-[4/3] w-full bg-gray-200" />

            {/* Content Container Skeleton */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title Skeleton */}
                <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-4" />

                {/* Description Skeleton */}
                <div className="space-y-2 mb-6">
                    <div className="h-4 bg-gray-200 rounded-md w-full" />
                    <div className="h-4 bg-gray-200 rounded-md w-5/6" />
                </div>

                {/* Features List Skeleton */}
                <div className="space-y-3 mb-6 mt-auto">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-200 rounded-full" />
                        <div className="h-3 bg-gray-200 rounded-md w-1/2" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-200 rounded-full" />
                        <div className="h-3 bg-gray-200 rounded-md w-2/3" />
                    </div>
                </div>

                {/* Action Buttons Skeleton */}
                <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-50">
                    <div className="h-10 bg-gray-200 rounded-xl w-full" />
                    <div className="h-10 bg-gray-200 rounded-xl w-full" />
                </div>
            </div>
        </div>
    );
};

export default SkeletonCard;
