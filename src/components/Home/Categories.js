import React from "react";
import PublicHealthImage from "../../Asserts/PublicHealthImage.jpg";
import EducationImage from "../../Asserts/EducationImage.jpg";
import CommunityImage from "../../Asserts/CommunityImage.jpg";
import nutrition from "../../Asserts/nutrition.jpg";

const categories = [
  { title: "Public Health", image: PublicHealthImage },
  { title: "Education", image: EducationImage },
  { title: "Community", image: CommunityImage },
  { title: "Nutrition", image: nutrition },
];

const Categories = () => (
  <section className="p-5  md:px-10 lg:px-36 lg:pt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {categories.map((category) => (
      <div
        key={category.title}
        className="relative h-72 md:h-80 lg:h-96 w-full overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
      >
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h3 className="text-white text-lg md:text-xl font-semibold">
            {category.title}
          </h3>
        </div>
      </div>
    ))}
  </section>
);

export default Categories;
