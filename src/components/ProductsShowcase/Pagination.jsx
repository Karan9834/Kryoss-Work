import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) pages.push('...');
        pages.push(totalPages);
    }

    return (
        <div className="flex items-center justify-center gap-2 mt-12 mb-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous page"
            >
                <ChevronLeft size={20} />
            </button>

            {pages.map((page, idx) => (
                typeof page === 'number' ? (
                    <button
                        key={idx}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${currentPage === page
                                ? 'bg-primary text-white shadow-md shadow-orange-500/20'
                                : 'border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                            }`}
                    >
                        {page}
                    </button>
                ) : (
                    <span key={idx} className="w-10 h-10 flex items-center justify-center text-gray-400">
                        {page}
                    </span>
                )
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Next page"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

export default Pagination;
