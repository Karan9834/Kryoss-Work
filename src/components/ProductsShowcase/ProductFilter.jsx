import React from 'react';
import { Check } from 'lucide-react';

const ProductFilter = ({ options, selectedFilter, onSelectFilter }) => {
    return (
        <div className="flex flex-wrap items-center gap-2 mb-8">
            {options.map((option) => {
                const isSelected = selectedFilter === option;
                return (
                    <button
                        key={option}
                        onClick={() => onSelectFilter(option)}
                        className={`flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isSelected
                            ? 'bg-primary text-white shadow-md shadow-orange-500/20 ring-2 ring-primary ring-offset-2'
                            : 'bg-white text-gray-600 border border-gray-200 hover:bg-orange-50 hover:text-primary hover:border-orange-200'
                            }`}
                    >
                        {option}
                        {isSelected && <Check size={14} strokeWidth={3} className="ml-0.5" />}
                    </button>
                );
            })}
        </div>
    );
};

export default ProductFilter;
