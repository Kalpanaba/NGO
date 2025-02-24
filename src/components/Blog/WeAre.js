import React from "react";
import { FaDonate, FaHandsHelping, FaLightbulb } from "react-icons/fa";

const WeAre = () => {
  return (
    <>
      <h2 className=" p-5 md:px-10 lg:px-36 lg:pt-10 text-3xl md:text-3xl lg:text-4xl font-bold text-center">
        We Are
      </h2>
      <div className="md:flex flex-wrap justify-center gap-10 mb-8">
        {/* Donation Icon */}
        <div className="flex flex-col items-center mt-5 md:mt-0">
          <div className="rounded-full p-4 md:p-6 lg:p-8 bg-red-500 text-white text-7xl">
            <FaDonate />
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2">
            Give Donation
          </h3>
        </div>

        {/* Inspiration Icon */}
        <div className="flex flex-col items-center mt-10 md:mt-0">
          <div className="rounded-full p-4 md:p-6 lg:p-8 bg-yellow-500 text-black text-7xl">
            <FaLightbulb />
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2">
            Give Inspiration
          </h3>
        </div>

        {/* Volunteer Icon */}
        <div className="flex flex-col items-center  mt-10 md:mt-0">
          <div className="rounded-full p-4 md:p-6 lg:p-8 bg-green-500 text-white text-7xl">
            <FaHandsHelping />
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2">
            Become Volunteer
          </h3>
        </div>

        
      </div>
    </>
  );
};

export default WeAre;
