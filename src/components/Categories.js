import React from 'react';
import PublicHealthImage from '../Asserts/PublicHealthImage.jpg';
import EducationImage from '../Asserts/EducationImage.jpg';
import CommunityImage from '../Asserts/CommunityImage.jpg';
import nutrition from '../Asserts/nutrition.jpg';

const categories = [
  { title: "Public Health", image: PublicHealthImage },
  { title: "Education", image: EducationImage },
  { title: "Community", image: CommunityImage },
  { title: "Nutrition", image: nutrition },
];

const Categories = () => (
  <section className="p-10 flex flex-wrap justify-center gap-10 lg:gap-12 xl:gap-14">
    {categories.map((category) => (
      <div 
        key={category.title} 
        className="relative w-full sm:w-80 lg:w-96 xl:w-100 h-72 sm:h-96 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
      >
        <img 
          src={category.image} 
          alt={category.title} 
          className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">{category.title}</h3>
        </div>
      </div>
    ))}
  </section>
);

export default Categories;
