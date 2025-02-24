import React from "react";
import heart from "../../Asserts/heart.jpg";


const Blog = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-gray-100">
        {/* Banner Section */}
        <div
          className="w-full h-96 md:h-[500px] bg-cover bg-center flex items-center text-white text-3xl font-bold"
          style={{ backgroundImage: `url(${heart})` }}
        >
          <div className="bg-black mx-10  bg-opacity-50 p-8 md:p-12 lg:p-16 rounded-lg">
            <h1 className="text-4xl md:text-3xl lg:text-5xl mb-4">
              We Care for You
            </h1>
            <button className="text-lg md:text-xl mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 lg:py-3 lg:px-8 rounded-lg">
              Tell Us More
            </button>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Blog;
