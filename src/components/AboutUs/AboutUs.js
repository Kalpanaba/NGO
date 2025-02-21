import React from "react";

import schoolbanner from "../../Asserts/schoolbanner.jpg";

const AboutUs = () => {
  return (
    <>
      <div className=" w-full flex flex-col items-center">
        <img src={schoolbanner}
          className="w-full shadow-lg object-cover h-96 md:h-[30rem] lg:h-[40rem] bg-cover bg-center mb-8"
        />
      </div>
    </>
  );
};

export default AboutUs;
