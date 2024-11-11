import React from 'react';
import { FaHandHoldingHeart, FaGraduationCap, FaTint, FaHeartbeat } from 'react-icons/fa';

const categories = [
  { title: "No Poverty", icon: <FaHandHoldingHeart size={80} color="#F59E0B" />, description: "Support initiatives to eradicate poverty." },
  { title: "Best Education", icon: <FaGraduationCap size={80} color="#F59E0B" />, description: "Promote quality education for all." },
  { title: "Clean Water", icon: <FaTint size={80} color="#F59E0B" />, description: "Provide access to clean drinking water." },
  { title: "Good Health & Nutrition", icon: <FaHeartbeat size={80} color="#F59E0B" />, description: "Enhance health and nutrition for communities." },
];

const Categories = () => (
  <section className="p-10 flex flex-wrap justify-center gap-8">
    {categories.map((category) => (
      <div 
        key={category.title} 
        className="flex flex-col items-center text-center max-w-xs w-full bg-gradient-to-t from-blue-500 via-blue-500 to-blue-600 p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
      >
        <div className="w-28 h-28 flex items-center justify-center bg-white rounded-full shadow-md mb-4 transform transition duration-300 hover:scale-110">
          {category.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
        <p className="text-lg lg:text-xl text-white">{category.description}</p>
      </div>
    ))}
  </section>
);

export default Categories;
