import React from "react";

import schoolbanner from "../../Asserts/schoolbanner.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="relative w-full flex flex-col items-center">
        <img
          src={schoolbanner} alt='#'
          className="w-full shadow-lg object-cover h-96 md:h-[30rem] lg:h-[40rem] bg-cover bg-center mb-8"
        />
        <div className="text-center absolute top-40 text-white text-5xl font-mono">
          <h1>About Us</h1>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
