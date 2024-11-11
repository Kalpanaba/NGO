import React from 'react';
import { FaHandHoldingHeart, FaGraduationCap, FaTint, FaHeartbeat } from 'react-icons/fa';

const categories = [
  { title: "No Poverty", icon: <FaHandHoldingHeart size={60} color="#F59E0B" />, description: "Support initiatives to eradicate poverty." },
  { title: "Best Education", icon: <FaGraduationCap size={60} color="#F59E0B" />, description: "Promote quality education for all." },
  { title: "Clean Water", icon: <FaTint size={60} color="#F59E0B" />, description: "Provide access to clean drinking water." },
  { title: "Good Health & Nutrition", icon: <FaHeartbeat size={60} color="#F59E0B" />, description: "Enhance health and nutrition for communities." },
];

const Categories = () => (
  <section className="p-6 md:p-10 flex flex-wrap justify-center gap-6 lg:gap-8">
    {categories.map((category) => (
      <div 
        key={category.title} 
        className="flex flex-col items-center text-center max-w-xs w-full bg-gradient-to-t from-blue-500 via-blue-500 to-blue-600 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
      >
        <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md mb-4">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
        <p className="text-md lg:text-lg text-white">{category.description}</p>
      </div>
    ))}
  </section>
);

export default Categories;
