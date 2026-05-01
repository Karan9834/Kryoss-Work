import React from 'react';
import { ChevronRight } from 'lucide-react';

const CategoryCard = ({ category, isSelected, onClick }) => {
    const Icon = category.icon;

    return (
        <div
            onClick={onClick}
            style={isSelected ? { backgroundColor: category.bgTint, borderColor: category.color, boxShadow: `0 0 0 1px ${category.color}33` } : {}}
            className={`group cursor-pointer rounded-[14px] p-6 transition-all duration-300 border backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${!isSelected ? 'bg-white border-transparent hover:border-orange-100' : ''}`}
        >
            <div className="flex items-start justify-between">
                <div
                    style={isSelected ? { backgroundColor: category.color, color: 'white' } : {}}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${!isSelected ? 'bg-gray-50 text-gray-500 group-hover:bg-orange-100 group-hover:text-primary' : ''}`}
                >
                    <Icon size={24} strokeWidth={isSelected ? 2 : 1.5} />
                </div>
                <div
                    style={isSelected ? { backgroundColor: 'transparent', color: category.color } : {}}
                    className={`p-1.5 rounded-full transition-colors ${!isSelected ? 'bg-gray-50 text-gray-400 group-hover:bg-orange-50 group-hover:text-primary' : ''}`}
                >
                    <ChevronRight size={16} />
                </div>
            </div>

            <div className="mt-5">
                <h3
                    style={isSelected ? { color: category.color } : {}}
                    className={`font-bold text-lg leading-tight transition-colors ${!isSelected ? 'text-gray-800 group-hover:text-primary' : ''}`}
                >
                    {category.name} <span className={`text-sm ml-1 font-medium ${isSelected ? 'opacity-70' : 'text-gray-400'}`}>({category.count})</span>
                </h3>
            </div>
        </div>
    );
};

export default CategoryCard;
